"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Turnstile } from "@/components/contact/Turnstile";
import { TOPICS, resolveTopic } from "@/lib/contact-topics";

const initial: ContactState = { status: "idle" };

const groups = Array.from(new Set(TOPICS.map((t) => t.group)));

const inputBase =
  "mt-2 block w-full rounded-md border bg-white px-3.5 py-3 text-base text-ink shadow-sm transition-colors placeholder:text-steel-500 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500/25";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : null}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-accent-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const topicRef = useRef<HTMLSelectElement>(null);
  const sourceRef = useRef<HTMLInputElement>(null);

  // Pre-select the topic from ?topic= links without making the page dynamic.
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("topic");
    if (sourceRef.current && raw) sourceRef.current.value = raw.slice(0, 100);
    const resolved = resolveTopic(raw);
    if (topicRef.current && resolved && !topicRef.current.value) topicRef.current.value = resolved;
  }, []);

  // Move focus to the first invalid field so keyboard and screen reader users land on the problem.
  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const order = ["name", "company", "email", "phone", "topic", "message", "consent"];
    const first = order.find((k) => state.errors?.[k]);
    if (first) {
      const el =
        first === "consent"
          ? document.querySelector<HTMLInputElement>('input[name="consent"]')
          : document.getElementById(first);
      el?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-lg border border-line bg-white p-8 sm:p-10">
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-accent-700" strokeWidth={1.5} />
        <h2 className="display mt-5 text-3xl">Thanks. Your message is on its way.</h2>
        <p className="mt-4 text-lg leading-relaxed">
          A member of our team will review it and get back to you to set up a conversation. If something is urgent,
          please call us instead.
        </p>
        <Link href="/" className="mt-8 inline-block font-semibold text-navy-900 underline underline-offset-4">
          Back to the home page
        </Link>
      </div>
    );
  }

  const e = state.errors ?? {};
  const v = state.values ?? {};
  const describedBy = (k: string) => (e[k] ? `${k}-error` : undefined);
  const border = (k: string) => (e[k] ? "border-accent-700" : "border-silver-200");

  return (
    // Keyed by attempt: React only applies a <select>'s defaultValue on mount, so the form
    // is remounted after each submission to restore every submitted value reliably.
    <form
      key={state.attempt ?? 0}
      action={action}
      noValidate
      className="rounded-lg border border-line bg-mist p-6 sm:p-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Send us a message</p>

      {state.status === "error" && state.message && (
        <p
          aria-live="polite"
          className="mt-5 rounded-md border-l-2 border-accent-700 bg-white px-4 py-3 text-[0.95rem] text-ink"
        >
          {state.message}
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={e.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={v.name}
            aria-invalid={Boolean(e.name)}
            aria-describedby={describedBy("name")}
            className={`${inputBase} ${border("name")}`}
          />
        </Field>
        <Field id="company" label="Organization" error={e.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            defaultValue={v.company}
            aria-invalid={Boolean(e.company)}
            aria-describedby={describedBy("company")}
            className={`${inputBase} ${border("company")}`}
          />
        </Field>
        <Field id="email" label="Work email" error={e.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            inputMode="email"
            required
            defaultValue={v.email}
            aria-invalid={Boolean(e.email)}
            aria-describedby={describedBy("email")}
            className={`${inputBase} ${border("email")}`}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={e.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v.phone}
            aria-invalid={Boolean(e.phone)}
            aria-describedby={describedBy("phone")}
            className={`${inputBase} ${border("phone")}`}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="topic" label="What can we help with?" error={e.topic}>
          <select
            id="topic"
            name="topic"
            ref={topicRef}
            required
            defaultValue={v.topic ?? ""}
            aria-invalid={Boolean(e.topic)}
            aria-describedby={describedBy("topic")}
            className={`${inputBase} ${border("topic")}`}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {groups.map((g) => (
              <optgroup key={g} label={g}>
                {TOPICS.filter((t) => t.group === g).map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Tell us briefly what you need" error={e.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            defaultValue={v.message}
            aria-invalid={Boolean(e.message)}
            aria-describedby={describedBy("message") ?? "message-hint"}
            className={`${inputBase} ${border("message")} resize-y`}
          />
        </Field>
        <p id="message-hint" className="mt-2 text-sm text-muted">
          Please do not include passwords, keys, malware samples or confidential incident details.
        </p>
      </div>

      {/* Honeypot. Hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={sourceRef} type="hidden" name="source" defaultValue={v.source} />

      <div className="mt-6">
        <label className="flex items-start gap-3 text-[0.95rem]">
          <input
            type="checkbox"
            name="consent"
            required
            defaultChecked={v.consent === "on"}
            aria-invalid={Boolean(e.consent)}
            aria-describedby={describedBy("consent")}
            className="mt-1 h-4 w-4 shrink-0 rounded border-silver-300 accent-navy-900"
          />
          <span>
            I have read the{" "}
            <Link href="/privacy" className="font-medium text-navy-900 underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and agree that Silver Fox may use this information to respond to my inquiry.
          </span>
        </label>
        {e.consent && (
          <p id="consent-error" className="mt-1.5 text-sm font-medium text-accent-700">
            {e.consent}
          </p>
        )}
      </div>

      <div className="mt-6">
        {/* Remounts with the form after each attempt, which issues a fresh single-use token. */}
        <Turnstile />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />}
        Send message
      </button>
    </form>
  );
}
