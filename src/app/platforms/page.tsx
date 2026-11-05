import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { platforms } from "@/content/platforms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Platforms: SCOPE, SIGNAL and RANGE",
  description:
    "SCOPE for external attack surface management, SIGNAL for security operations and threat intelligence, and RANGE for cyber range exercises and control validation.",
  path: "/platforms",
});

const accentBg = { blue: "bg-accent-500", teal: "bg-teal", slate: "bg-silver-300" } as const;

const chain = ["Exposure", "Security context", "Detection", "Validation", "Improvement"];

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Platforms", path: "/platforms" }]}
        eyebrow="Platforms"
        title="Technology built around problems we see in the field."
        intro={[
          "We do more than advise and operate. Our engineers build software around the problems our consultants keep running into. The portfolio is deliberately small: three platforms, each answering one question.",
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <ul className="grid gap-6 lg:grid-cols-3">
            {platforms.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/platforms/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-line p-8 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-[0_20px_40px_-24px_rgba(10,21,40,0.35)]"
                >
                  <span aria-hidden="true" className={`h-1 w-10 rounded-full ${accentBg[p.accent]}`} />
                  <span className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {p.category}
                  </span>
                  <h2 className="mt-2 text-4xl font-bold tracking-[0.06em] text-ink">{p.name}</h2>
                  <p className="mt-4 font-serif text-2xl text-navy-700">{p.question}</p>
                  <p className="mt-3 leading-relaxed">{p.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-navy-900">
                    Explore {p.name}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-accent-500 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            tone="dark"
            eyebrow="How they connect"
            title="SCOPE looks outward, SIGNAL looks inward, and RANGE tests both."
            intro="Exposure found by SCOPE gives SIGNAL investigations more context. Attacks run in RANGE show whether SIGNAL detects them. Together they close the loop between finding a weakness and proving it is fixed."
          />
          <ol className="mt-12 flex flex-wrap items-center gap-3">
            {chain.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-md border border-white/15 bg-navy-900 px-5 py-3 font-semibold text-white">
                  {step}
                </span>
                {i < chain.length - 1 && <ChevronRight aria-hidden="true" className="h-5 w-5 text-steel-400" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="See the platforms in action."
        body="We will show you how each platform works with your environment and with our services."
        action={{ label: "Request a walkthrough", href: "/contact?topic=platforms" }}
      />
    </>
  );
}
