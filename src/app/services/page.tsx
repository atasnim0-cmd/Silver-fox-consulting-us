import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cybersecurity Services",
  description:
    "Penetration testing, compliance readiness, cloud and identity security, managed detection and response, and incident response from a Texas cybersecurity firm.",
  path: "/services",
});

const loop = [
  "Strategy sets the priorities",
  "Architecture limits how far an attacker can go",
  "Testing shows whether the controls hold",
  "Monitoring catches what gets through",
  "Response produces hard evidence",
  "Evidence sharpens the strategy",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        title="Cybersecurity services that cover the whole attack."
        intro={[
          "Attackers do not treat strategy, applications, cloud, identity and operations as separate problems, so we don't either.",
          "Our six practices connect board-level risk decisions with hands-on testing, engineering, monitoring and incident response.",
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-4 py-9 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="font-serif text-2xl text-accent-700">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-2xl font-semibold text-ink group-hover:text-navy-700">{s.name}</span>
                    <span className="mt-2 block max-w-2xl leading-relaxed">{s.blurb}</span>
                    <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                      {s.highlights.map((h) => (
                        <span key={h}>{h}</span>
                      ))}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-navy-900">
                    Explore
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 text-accent-500 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            eyebrow="A connected approach"
            title="Each practice makes the others better."
            intro="Findings move between teams instead of sitting in separate reports. That is how a penetration test ends up improving detection, and how an incident ends up improving architecture."
          />
          <ol className="space-y-3">
            {loop.map((step, i) => (
              <li key={step} className="flex items-center gap-4 rounded-md bg-white px-5 py-4 text-ink">
                <span className="font-serif text-lg text-accent-700">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        body="Describe the problem instead of picking a service. A specialist will help you find the right entry point."
        action={{ label: "Talk to a specialist", href: "/contact" }}
      />
    </>
  );
}
