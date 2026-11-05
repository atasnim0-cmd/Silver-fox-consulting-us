import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Minus } from "lucide-react";
import { CapabilityBlock } from "@/components/sections/CapabilityBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { OnThisPage } from "@/components/sections/OnThisPage";
import { PageHero } from "@/components/sections/PageHero";
import { ChipLinks, RelatedPlatforms } from "@/components/sections/Related";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StepList } from "@/components/sections/StepList";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { photos } from "@/content/photos";
import { getService, services } from "@/content/services";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const index = services.findIndex((x) => x.slug === s.slug);
  const path = `/services/${s.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.name, path },
        ]}
        eyebrow={`Service ${index + 1} of ${services.length}`}
        title={s.hero.title}
        intro={s.hero.intro}
        photo={photos[s.hero.photo]}
        variant="split"
        actions={
          <>
            <ButtonLink href={s.hero.primaryCta.href} variant="light">
              {s.hero.primaryCta.label}
            </ButtonLink>
            {s.hero.secondaryCta && (
              <ButtonLink href={s.hero.secondaryCta.href} variant="outline-light">
                {s.hero.secondaryCta.label}
              </ButtonLink>
            )}
          </>
        }
      />

      {/* Why it matters */}
      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow={s.name} title={s.why.title} />
            <div className="reveal mt-6 space-y-4 text-lg leading-relaxed">
              {s.why.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {s.why.list && (
            <div className="reveal self-end rounded-lg bg-mist p-8">
              <ul className="space-y-3.5">
                {s.why.list.map((item) => (
                  <li key={item} className="flex gap-3 text-ink">
                    <Minus aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-flare-700" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {s.why.closing && <p className="mt-6 border-t border-line pt-6 leading-relaxed">{s.why.closing}</p>}
            </div>
          )}
        </div>
      </section>

      {/* Capabilities */}
      <section className="pb-20 lg:pb-28">
        <div className="container-page grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <OnThisPage items={s.capabilities.map((c) => ({ id: c.id, title: c.title }))} />
          </aside>
          <div className="space-y-14">
            {s.capabilities.map((c, i) => (
              <CapabilityBlock key={c.id} cap={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader tone="dark" eyebrow="Our approach" title="How we work" />
          <div className="mt-12">
            <StepList steps={s.approach} tone="dark" />
          </div>
        </div>
      </section>

      {/* Deliverables and related */}
      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">Deliverables</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.5rem]">What you receive</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 rounded-md border border-line p-4 text-ink">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-flare-700" strokeWidth={2.25} />
                  <span className="leading-snug">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal space-y-8 lg:pt-14">
            <ChipLinks kind="compliance" slugs={s.frameworks} label="Supports these frameworks" />
            <ChipLinks kind="industries" slugs={s.industries} label="Common in these industries" />
            <RelatedPlatforms slugs={s.platforms} />
          </div>
        </div>
      </section>

      <FaqList faqs={s.faqs} />
      <CtaBand title={s.cta.title} body={s.cta.body} action={s.cta.action} />
      <JsonLd data={serviceSchema({ name: s.name, description: s.metaDescription, path })} />
    </>
  );
}
