import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  const base = tone === "light" ? "text-silver-300" : "text-muted";
  const current = tone === "light" ? "text-white" : "text-ink";
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${base}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={current}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="link-underline hover:text-white">
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
