import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { CategoryJumpNav } from "@/components/compliance/CategoryJumpNav";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CATEGORIES, frameworks, frameworksIn } from "@/content/compliance";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Compliance Readiness: ISO, NIST, SOC, CMMC, HIPAA, PCI DSS",
  description:
    "Readiness and gap assessments for ISO/IEC 27001, ISO 9001, ISA/IEC 62443, NIST CSF 2.0, NIST SP 800-53 and 800-171, SOC 1, 2 and 3, CMMC 2.0, HIPAA, PCI DSS and TX-RAMP.",
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
          `Contracts, customers, regulators and insurers each have their own requirements. We cover ${frameworks.length} frameworks across ISO, NIST, SOC and US programs, and we meet them with controls that reduce real risk, so the program keeps working long after the auditor leaves.`,
        ]}
      />

      <CategoryJumpNav
        items={CATEGORIES.map((c) => ({ id: c.id, label: c.short, count: frameworksIn(c.id).length }))}
      />

      {CATEGORIES.map((c, ci) => (
        <section
          key={c.id}
          id={c.id}
          aria-labelledby={`${c.id}-heading`}
          className={`scroll-mt-32 py-16 lg:py-20 ${ci % 2 === 1 ? "bg-mist" : ""}`}
        >
          <div className="container-page">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 id={`${c.id}-heading`} className="display text-[2rem] sm:text-[2.5rem]">
                  {c.label}
                </h2>
                <p className="mt-3 text-lg leading-relaxed">{c.intro}</p>
              </div>
              <p className="tabular shrink-0 whitespace-nowrap text-sm font-semibold text-muted">
                {frameworksIn(c.id).length} {frameworksIn(c.id).length === 1 ? "framework" : "frameworks"}
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {frameworksIn(c.id).map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/compliance/${f.slug}`}
                    className="card-link group flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-[var(--shadow-card)]"
                  >
                    <span className="font-serif text-2xl text-ink" translate="no">
                      {f.short}
                    </span>
                    <span className="mt-1.5 text-sm font-medium text-accent-700">{f.appliesTo}</span>
                    <span className="mt-4 text-[0.975rem] leading-relaxed">{f.blurb}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-navy-900">
                      <span className="link-underline">Read more</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-navy-950 py-16">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-start">
          <Scale aria-hidden="true" className="h-8 w-8 shrink-0 text-accent-400" strokeWidth={1.5} />
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-white">Who issues what</h2>
            <p className="mt-3 text-lg leading-relaxed text-silver-300">
              Certificates, attestation reports and authorizations come from independent third parties: accredited
              certification bodies for ISO standards, licensed CPA firms for SOC reports, C3PAOs for CMMC, Qualified
              Security Assessors for PCI DSS and the Texas Department of Information Resources for TX-RAMP. We prepare
              you for those assessments and work alongside your assessor. For certification bodies themselves, we
              support ISO/IEC 17021-1 accreditation readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            title="Build controls once and map them everywhere."
            intro="Most frameworks ask for the same fundamentals: know your assets, control access, protect data, log activity, respond to incidents and manage vendors. We design the program around those fundamentals and map it to each framework you need, so a new requirement adds paperwork instead of starting over."
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
