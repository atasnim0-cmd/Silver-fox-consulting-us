import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactFormReady } from "@/lib/form-config";
import { PageHero } from "@/components/sections/PageHero";
import { fullAddress, incidentAvailability, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to a Silver Fox cybersecurity specialist about penetration testing, compliance readiness, managed detection or incident response.",
  path: "/contact",
});

const nextSteps = [
  "A specialist reads your message and replies to set up a short call.",
  "On the call we ask questions, share what we would recommend and tell you honestly if someone else is a better fit.",
  "If it makes sense to work together, you receive a written proposal with scope, timeline and price.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title="Start a conversation."
        intro={[
          "Security needs rarely fit neatly into a dropdown. Tell us what you are trying to protect, test, investigate or build, and a specialist will help you find the right starting point.",
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Reach us directly</h2>
              <ul className="mt-5 space-y-4 text-lg">
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-1.5 h-5 w-5 shrink-0 text-accent-700" />
                  <a href={`tel:${site.phone.tel}`} className="font-semibold text-ink hover:underline">
                    {site.phone.display}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-1.5 h-5 w-5 shrink-0 text-accent-700" />
                  <a href={`mailto:${site.email}`} className="font-semibold text-ink hover:underline">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1.5 h-5 w-5 shrink-0 text-accent-700" />
                  <span>{fullAddress()}</span>
                </li>
                <li className="flex gap-3">
                  <Clock aria-hidden="true" className="mt-1.5 h-5 w-5 shrink-0 text-accent-700" />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-accent-500 bg-navy-950 p-7 text-silver-300">
              <h2 className="font-serif text-2xl text-white">Dealing with an active incident?</h2>
              <p className="mt-3 leading-relaxed">
                Please don&apos;t use the form. Call our incident line, available {incidentAvailability()}.
              </p>
              <a
                href={`tel:${site.incidentLine.tel}`}
                className="mt-5 inline-flex items-center gap-2 text-2xl font-semibold text-white hover:underline"
              >
                <Phone aria-hidden="true" className="h-5 w-5 text-accent-500" />
                {site.incidentLine.display}
              </a>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="font-serif text-lg text-accent-700">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {contactFormReady ? (
            <ContactForm />
          ) : (
            <div className="self-start rounded-lg border border-line bg-mist p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Get in touch</p>
              <h2 className="display mt-4 text-3xl">Email or call us directly.</h2>
              <p className="mt-4 text-lg leading-relaxed">
                Tell us what you are trying to protect, test, investigate or build, and a specialist will get back to
                you to set up a short call.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${site.email}`}
                  className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy-900 px-5 font-semibold text-white hover:bg-accent-800"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Email us
                </a>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-5 font-semibold text-navy-900"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-accent-700" />
                  Call us
                </a>
              </div>
              <p className="mt-6 text-sm text-muted">
                Please do not send passwords, keys or confidential incident details by email.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
