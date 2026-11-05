"use client";

import { useEffect, useState } from "react";

/**
 * Sticky in-page navigation that highlights the section currently in view.
 * Without JavaScript it is still a working list of anchor links.
 */
export function OnThisPage({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">On this page</p>
      <ul className="mt-4 space-y-1 border-l border-line">
        {items.map((i) => {
          const isActive = active === i.id;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-[0.9rem] leading-snug transition-colors ${
                  isActive
                    ? "border-flare font-semibold text-ink"
                    : "border-transparent text-muted hover:border-silver-300 hover:text-ink"
                }`}
              >
                {i.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
