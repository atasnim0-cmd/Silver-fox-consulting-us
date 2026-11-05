import { Check, Info } from "lucide-react";
import type { Capability } from "@/content/types";

/** One titled block of capabilities with an optional intro, grouped lists and a note. */
export function CapabilityBlock({ cap, index }: { cap: Capability; index?: number }) {
  return (
    <section id={cap.id} aria-labelledby={`${cap.id}-title`} className="reveal scroll-mt-28 border-t border-line pt-10">
      <div className="flex items-baseline gap-4">
        {typeof index === "number" && (
          <span className="font-serif text-lg text-flare-700">{String(index + 1).padStart(2, "0")}</span>
        )}
        <div>
          <h2 id={`${cap.id}-title`} className="display text-[1.75rem] sm:text-[2rem]">
            {cap.title}
          </h2>
          <p className="mt-2 text-lg font-medium text-navy-700">{cap.summary}</p>
        </div>
      </div>

      {cap.body?.map((p) => (
        <p key={p} className="mt-5 max-w-3xl leading-relaxed">
          {p}
        </p>
      ))}

      {cap.groups?.map((g, gi) => (
        <div key={g.label ?? gi} className="mt-7">
          {g.label && <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{g.label}</h3>}
          <ul className={`mt-3 grid gap-x-8 gap-y-2.5 ${g.items.length > 4 ? "sm:grid-cols-2" : ""}`}>
            {g.items.map((item) => (
              <li key={item} className="flex gap-3 text-[0.975rem] leading-snug text-ink">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-flare-700" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {cap.note && (
        <p className="mt-7 flex max-w-3xl gap-3 rounded-md border-l-2 border-flare bg-mist px-4 py-3 text-[0.95rem] leading-relaxed">
          <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-flare-700" />
          <span>{cap.note}</span>
        </p>
      )}
    </section>
  );
}
