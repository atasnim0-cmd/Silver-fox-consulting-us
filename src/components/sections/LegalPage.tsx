import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export function LegalPage({
  title,
  path,
  intro,
  children,
}: {
  title: string;
  path: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} eyebrow="Legal" title={title} intro={[intro]} />
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <article className="prose-legal mx-auto max-w-3xl text-[1.0625rem] leading-relaxed">
            <p className="text-sm text-muted">Last updated: {site.legalLastUpdated}</p>
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
