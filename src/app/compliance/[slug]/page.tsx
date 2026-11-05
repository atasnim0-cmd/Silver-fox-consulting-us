import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Scale } from "lucide-react";
import { CapabilityBlock } from "@/components/sections/CapabilityBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedServices } from "@/components/sections/Related";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StepList } from "@/components/sections/StepList";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { frameworks, getFramework } from "@/content/compliance";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return frameworks.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compliance/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const f = getFramework(slug);
  if (!f) return {};
  return pageMetadata({ title: f.metaTitle, description: f.metaDescription, path: `/compliance/${f.slug}` });
}

export default async function FrameworkPage({ params }: PageProps<"/compliance/[slug]">) {
  const { slug } = await params;
  const f = getFramework(slug);
  if (!f) notFound();
  const path = `/compliance/${f.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Compliance", path: "/compliance" },
          { name: f.short, path },
        ]}
        eyebrow={f.hero.eyebrow}
        title={f.hero.title}
        intro={f.hero.intro}
        actions={
          <>
            <ButtonLink href={`/contact?topic=${f.slug}`} variant="light">
              Start a readiness review
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light">
              Ask a question
            </ButtonLink>
          </>
        }
        aside={
          <dl className="rounded-lg border border-white/15 bg-navy-900/70 p-7 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-400">At a glance</p>
            {f.facts.map((fact) => (
              <div key={fact.label} className="mt-5 border-t border-white/10 pt-4 first-of-type:mt-4">
                <dt className="text-sm text-steel-400">{fact.label}</dt>
                <dd className="mt-1 text-[0.975rem] leading-snug text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeader eyebrow={f.short} title={f.overview.title} />
          <div className="reveal space-y-5 text-lg leading-relaxed lg:pt-10">
            {f.overview.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container-page">
          <p className="eyebrow">How we help</p>
          <div className="mt-8 grid gap-x-16 gap-y-14 lg:grid-cols-2">
            {f.help.map((c, i) => (
              <CapabilityBlock key={c.id} cap={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {f.boundary && (
        <section className="bg-navy-950 py-14">
          <div className="container-page reveal flex flex-col gap-6 md:flex-row md:items-start">
            <Scale aria-hidden="true" className="h-8 w-8 shrink-0 text-flare" strokeWidth={1.5} />
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl text-white">{f.boundary.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-silver-300">{f.boundary.body}</p>
            </div>
          </div>
        </section>
      )}

      {f.timeline && (
        <section className="bg-mist py-20 lg:py-24">
          <div className="container-page">
            <SectionHeader eyebrow="The path" title={`A typical ${f.short} engagement`} />
            <div className="mt-12">
              <StepList steps={f.timeline} />
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <RelatedServices slugs={f.services} title="Services that support this work" />
        </div>
      </section>

      <FaqList faqs={f.faqs} />
      <CtaBand
        title={`Find out where you stand on ${f.short}.`}
        body="A readiness review shows what an assessor would find today and what it will take to close the gaps."
        action={{ label: "Start a readiness review", href: `/contact?topic=${f.slug}` }}
      />
      <JsonLd data={serviceSchema({ name: `${f.name} readiness`, description: f.metaDescription, path })} />
    </>
  );
}
