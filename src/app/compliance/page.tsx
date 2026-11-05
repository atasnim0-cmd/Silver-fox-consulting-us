import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { frameworks } from "@/content/compliance";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Compliance Readiness: CMMC, SOC 2, HIPAA, PCI DSS, TX-RAMP",
  description:
    "Readiness and gap assessments for CMMC 2.0, NIST SP 800-171, SOC 2, HIPAA, PCI DSS 4.0.1, TX-RAMP, ISO 27001 and NIST CSF 2.0.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Compliance", path: "/compliance" }]}
        eyebrow="Compliance"
        title="Compliance work that also makes you harder to attack."
        intro={[
          "Contracts, customers, regulators and insurers each have their own requirements. We help you meet them with controls that reduce real risk, so the program is still working long after the auditor leaves.",
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <ul className="grid gap-5 md:grid-cols-2">
            {frameworks.map((f) => (
              <li key={f.slug} className="reveal">
                <Link
                  href={`/compliance/${f.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-line p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:shadow-[0_20px_40px_-24px_rgba(10,21,40,0.35)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{f.appliesTo}</span>
                  <span className="mt-3 font-serif text-3xl text-ink">{f.name}</span>
                  <span className="mt-3 leading-relaxed">{f.blurb}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-navy-900">
                    {f.short} readiness
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-flare transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-16">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-start">
          <Scale aria-hidden="true" className="h-8 w-8 shrink-0 text-flare" strokeWidth={1.5} />
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-white">Who issues what</h2>
            <p className="mt-3 text-lg leading-relaxed text-silver-300">
              Certifications and attestation reports come from accredited third parties: C3PAOs for CMMC, licensed CPA
              firms for SOC 2, Qualified Security Assessors for PCI DSS, accredited certification bodies for ISO 27001
              and the Texas Department of Information Resources for TX-RAMP. We prepare you for those assessments and
              work alongside your assessor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="One program, many frameworks"
            title="Build controls once and map them everywhere."
            intro="Most frameworks ask for the same fundamentals: know your assets, control access, protect data, log activity, respond to incidents and manage vendors. We design the program around those fundamentals and map it to each framework you need, so new requirements add paperwork instead of starting over."
          />
        </div>
      </section>

      <CtaBand
        title="Find out where you stand."
        body="A readiness review shows what an assessor would find today and what it will take to close the gaps."
        action={{ label: "Start a readiness review", href: "/contact?topic=compliance" }}
      />
    </>
  );
}
