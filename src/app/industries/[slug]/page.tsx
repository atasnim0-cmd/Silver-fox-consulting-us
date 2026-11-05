import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { ChipLinks, RelatedServices } from "@/components/sections/Related";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";
import { getIndustry, industries } from "@/content/industries";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMetadata({ title: ind.metaTitle, description: ind.metaDescription, path: `/industries/${ind.slug}` });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const path = `/industries/${ind.slug}`;

  return (
    <>
      <ScrollProgress />
      <PageHero
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: ind.name, path },
        ]}
        eyebrow={ind.hero.eyebrow}
        title={ind.hero.title}
        intro={ind.hero.intro}
        photo={photos[ind.photo]}
        variant="background"
        actions={
          <>
            <ButtonLink href={`/contact?topic=${ind.slug}`} variant="light">
              Talk to a specialist
            </ButtonLink>
            <ButtonLink href="/services" variant="outline-light">
              See our services
            </ButtonLink>
          </>
        }
      />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow={ind.name} title={ind.pressures.title} />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {ind.pressures.items.map((p, i) => (
              <li key={p.title} className="rounded-lg border border-line p-7">
                <span className="font-serif text-lg text-accent-700">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeader tone="dark" eyebrow="Our work" title={ind.work.title} />
            <div className="mt-10">
              <ChipLinks kind="compliance" slugs={ind.frameworks} label="Relevant frameworks" tone="dark" />
            </div>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:pt-12">
            {ind.work.items.map((w) => (
              <li key={w} className="flex gap-3 text-silver-100">
                <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent-500" strokeWidth={2.5} />
                <span className="leading-snug">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <RelatedServices slugs={ind.services} title="Services we bring" />
        </div>
      </section>

      <FaqList faqs={ind.faqs} />
      <CtaBand
        tone="light"
        title={`Talk to someone who knows ${ind.name.toLowerCase()}.`}
        body="Tell us about your environment and your obligations. We will suggest a practical first step."
        action={{ label: "Talk to a specialist", href: `/contact?topic=${ind.slug}` }}
      />
    </>
  );
}
