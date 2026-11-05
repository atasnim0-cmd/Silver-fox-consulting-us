import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight, HelpCircle } from "lucide-react";
import { CapabilityBlock } from "@/components/sections/CapabilityBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { CapabilityTabs } from "@/components/sections/CapabilityTabs";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedServices } from "@/components/sections/Related";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ScrollProgress } from "@/components/motion-primitives/scroll-progress";
import { getPlatform, platforms } from "@/content/platforms";
import { pageMetadata } from "@/lib/seo";

const accentBg = { blue: "bg-accent-500", teal: "bg-teal", slate: "bg-silver-300" } as const;
const accentText = { blue: "text-accent-400", teal: "text-teal", slate: "text-silver-200" } as const;

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/platforms/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getPlatform(slug);
  if (!p) return {};
  return pageMetadata({ title: p.metaTitle, description: p.metaDescription, path: `/platforms/${p.slug}` });
}

export default async function PlatformPage({ params }: PageProps<"/platforms/[slug]">) {
  const { slug } = await params;
  const p = getPlatform(slug);
  if (!p) notFound();
  const path = `/platforms/${p.slug}`;

  return (
    <>
      <ScrollProgress />
      <PageHero
        crumbs={[
          { name: "Platforms", path: "/platforms" },
          { name: p.name, path },
        ]}
        eyebrow={`${p.name} / ${p.category}`}
        title={p.hero.title}
        intro={p.hero.intro}
        actions={
          <>
            <ButtonLink href={`/contact?topic=${p.slug}`} variant="light">
              Discuss {p.name}
            </ButtonLink>
            <ButtonLink href="/platforms" variant="outline-light">
              All platforms
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-lg border border-white/15 bg-navy-900/70 p-8">
            <span aria-hidden="true" className={`block h-1 w-12 rounded-full ${accentBg[p.accent]}`} />
            <p className="mt-6 text-5xl font-bold tracking-[0.06em] text-white">{p.name}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-steel-400">{p.category}</p>
            <p className={`mt-8 font-serif text-2xl ${accentText[p.accent]}`}>{p.question}</p>
            <p className="mt-2 text-silver-300">{p.tagline}</p>
          </div>
        }
      />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="The questions" title={`What ${p.name} helps you answer`} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.questions.map((q) => (
              <li key={q} className="flex gap-3 rounded-lg bg-mist p-6 text-lg leading-snug text-ink">
                <HelpCircle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent-700" strokeWidth={1.75} />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="bg-mist py-20 lg:py-24">
        <div className="container-page">
          <h2 id="capabilities-heading" className="display text-[2rem] sm:text-[2.5rem]">
            What {p.name} does
          </h2>
          <div className="mt-10">
            <CapabilityTabs items={p.capabilities.map((c) => ({ id: c.id, title: c.title, summary: c.summary }))}>
              {p.capabilities.map((c) => (
                <CapabilityBlock key={c.id} cap={c} variant="panel" />
              ))}
            </CapabilityTabs>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20">
        <div className="container-page">
          <SectionHeader tone="dark" eyebrow={p.name} title="How it fits together" />
          <ol className="mt-10 flex flex-wrap items-center gap-3">
            {p.flow.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-md border border-white/15 bg-navy-900 px-5 py-3 font-semibold text-white">
                  <span className={`mr-2 ${accentText[p.accent]}`}>{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </span>
                {i < p.flow.length - 1 && <ChevronRight aria-hidden="true" className="h-5 w-5 text-steel-400" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Use cases" title={`Where teams use ${p.name}`} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.useCases.map((u) => (
              <li key={u.title} className="rounded-lg border border-line bg-white p-7">
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-2 leading-relaxed">{u.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-20">
            <RelatedServices slugs={p.services} title={`Services that use ${p.name}`} />
          </div>
        </div>
      </section>

      <FaqList faqs={p.faqs} />
      <CtaBand
        title={`See what ${p.name} would show in your environment.`}
        body="We will walk you through the platform, the integrations you would need and how it fits with our services."
        action={{ label: `Discuss ${p.name}`, href: `/contact?topic=${p.slug}` }}
      />
    </>
  );
}
