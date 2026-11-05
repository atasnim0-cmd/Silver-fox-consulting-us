import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Faq } from "@/content/types";
import { faqSchema } from "@/lib/schema";

/** Accessible FAQ using native details/summary, so it works without JavaScript. */
export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  if (faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="bg-mist py-20 lg:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className="display mt-4 text-[2rem] sm:text-[2.5rem]">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-accent-700 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-3xl pb-6 leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
