"use client";

import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "motion/react";

/**
 * Sticky jump bar for the compliance hub. The highlight slides to the category in
 * view (pattern adapted from Motion Primitives' AnimatedBackground, MIT). Plain
 * anchor links, so it works without JavaScript and every category is deep-linkable.
 */
export function CategoryJumpNav({ items }: { items: { id: string; label: string; count: number }[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Compliance categories"
      className="sticky top-[72px] z-30 border-b border-line bg-white/95 backdrop-blur-md"
    >
      <div className="container-page">
        <LayoutGroup>
          <ul className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto py-2.5">
            {items.map((i) => {
              const isActive = active === i.id;
              return (
                <li key={i.id} className="shrink-0">
                  <a
                    href={`#${i.id}`}
                    onClick={() => setActive(i.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[0.95rem] font-medium transition-colors ${
                      isActive ? "text-white" : "text-body hover:text-navy-900"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="category-pill"
                        className="absolute inset-0 rounded-full bg-navy-900"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                      />
                    )}
                    <span className="relative">{i.label}</span>
                    <span
                      className={`tabular relative rounded-full px-1.5 text-xs ${isActive ? "bg-white/15" : "bg-mist text-muted"}`}
                    >
                      {i.count}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>
      </div>
    </nav>
  );
}
