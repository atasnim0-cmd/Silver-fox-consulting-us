import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { frameworks } from "@/content/compliance";
import { industries } from "@/content/industries";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";

function pick<T extends { slug: string }>(all: T[], slugs: string[]): T[] {
  return slugs.map((s) => all.find((x) => x.slug === s)).filter((x): x is T => Boolean(x));
}

/** Cards linking to related services. */
export function RelatedServices({ slugs, title = "Related services" }: { slugs: string[]; title?: string }) {
  const items = pick(services, slugs);
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="display text-[1.75rem] sm:text-[2rem]">{title}</h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="group flex h-full items-start justify-between gap-6 rounded-lg border border-line bg-white p-6 transition-all duration-300 hover:border-navy-900/25 hover:shadow-[0_16px_32px_-20px_rgba(10,21,40,0.35)]"
            >
              <span>
                <span className="block text-lg font-semibold text-ink">{s.name}</span>
                <span className="mt-1.5 block text-[0.95rem] leading-relaxed">{s.blurb}</span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-flare transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Pill links to compliance frameworks or industries. */
export function ChipLinks({
  kind,
  slugs,
  label,
  tone = "light",
}: {
  kind: "compliance" | "industries";
  slugs: string[];
  label: string;
  tone?: "light" | "dark";
}) {
  const items =
    kind === "compliance"
      ? pick(frameworks, slugs).map((f) => ({ slug: f.slug, name: f.short }))
      : pick(industries, slugs).map((i) => ({ slug: i.slug, name: i.name }));
  if (items.length === 0) return null;
  const dark = tone === "dark";
  return (
    <div>
      <h3 className={`text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-steel-400" : "text-muted"}`}>
        {label}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i.slug}>
            <Link
              href={`/${kind}/${i.slug}`}
              className={`inline-block rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                dark
                  ? "border-white/20 text-silver-200 hover:border-white/50 hover:text-white"
                  : "border-line bg-white text-ink hover:border-navy-900/40"
              }`}
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Compact cards for related platforms. */
export function RelatedPlatforms({ slugs }: { slugs: string[] }) {
  const items = pick(platforms, slugs);
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Related platforms</h3>
      <ul className="mt-3 grid gap-3">
        {items.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/platforms/${p.slug}`}
              className="group flex items-center justify-between gap-4 rounded-md border border-line bg-white px-4 py-3 transition-colors hover:border-navy-900/30"
            >
              <span>
                <span className="font-bold tracking-[0.06em] text-ink">{p.name}</span>
                <span className="ml-2 text-sm text-muted">{p.tagline}</span>
              </span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-flare" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
