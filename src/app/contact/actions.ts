"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { TOPIC_VALUES, topicLabel } from "@/lib/contact-topics";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<string, string>>;
  /** Echo of submitted values so the form keeps them after a validation error. */
  values?: Record<string, string>;
  /** Increments on every submission so the client can issue a fresh spam-check token. */
  attempt?: number;
};

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "That name is too long."),
  company: z.string().trim().min(1, "Please enter your organization.").max(150, "That name is too long."),
  email: z.email("Please enter a valid work email.").max(200),
  phone: z
    .string()
    .trim()
    .max(40, "That phone number is too long.")
    .regex(/^[0-9+().\-\s]*$/, "Please use digits and standard phone characters only.")
    .optional()
    .or(z.literal("")),
  topic: z.enum(TOPIC_VALUES, { error: "Please choose a topic." }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail.")
    .max(5000, "Please keep the message under 5,000 characters."),
  consent: z.literal("on", { error: "Please confirm you have read the Privacy Policy." }),
  source: z.string().max(100).optional(),
});

const isProd = process.env.VERCEL_ENV === "production";

async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return !isProd; // Allowed only outside production.
  if (!token) return false;
  const h = await headers();
  const ip = h.get("x-real-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function submitContact(prev: ContactState, formData: FormData): Promise<ContactState> {
  const result = await handleSubmission(formData);
  return { ...result, attempt: (prev.attempt ?? 0) + 1 };
}

async function handleSubmission(formData: FormData): Promise<ContactState> {
  const raw = Object.fromEntries(
    ["name", "company", "email", "phone", "topic", "message", "consent", "source"].map((k) => [
      k,
      String(formData.get(k) ?? ""),
    ]),
  );

  // Honeypot: real people never fill this hidden field. Pretend success so bots learn nothing.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success" };
  }

  const parsed = schema.safeParse({ ...raw, consent: raw.consent || undefined, source: raw.source || undefined });
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      errors[key] ??= issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", errors, values: raw };
  }

  const human = await verifyTurnstile(formData.get("cf-turnstile-response") as string | null);
  if (!human) {
    return {
      status: "error",
      message: "We could not verify the form. Please complete the check and try again.",
      values: raw,
    };
  }

  const d = parsed.data;
  const subject = `Website inquiry: ${topicLabel(d.topic)} from ${d.company}`;
  const text = [
    `Name: ${d.name}`,
    `Organization: ${d.company}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "Not provided"}`,
    `Topic: ${topicLabel(d.topic)}`,
    d.source ? `Arrived from link topic: ${d.source}` : null,
    "",
    d.message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (isProd) {
      console.error("Contact form is not configured: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL missing.");
      return {
        status: "error",
        message: "Sorry, the form is temporarily unavailable. Please email or call us instead.",
        values: raw,
      };
    }
    console.info(`[contact form, not sent: email not configured]\n${subject}\n${text}`);
    return { status: "success" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: d.email,
      subject,
      text,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Contact form delivery failed:", err instanceof Error ? err.message : "unknown error");
    return {
      status: "error",
      message: "Sorry, something went wrong sending your message. Please email or call us instead.",
      values: raw,
    };
  }

  return { status: "success" };
}
