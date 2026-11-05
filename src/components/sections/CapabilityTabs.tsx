"use client";

import { Children, useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

type Item = { id: string; title: string; summary: string };

/**
 * Tabs for long capability lists (WAI-ARIA tabs pattern with arrow, Home and End keys).
 * Every panel is rendered into the page, so search engines and Ctrl+F see all of it;
 * inactive panels are hidden. The active tab is mirrored in the URL hash so it can be
 * linked to directly. The sliding indicator follows Motion Primitives' AnimatedBackground (MIT).
 */
export function CapabilityTabs({ items, children }: { items: Item[]; children: ReactNode }) {
  const panels = Children.toArray(children);
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();

  // Open the tab named in the URL, if any.
  useEffect(() => {
    const fromHash = () => {
      const i = items.findIndex((it) => `#${it.id}` === window.location.hash);
      if (i >= 0) setActive(i);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  const select = useCallback(
    (i: number, focus = false) => {
      setActive(i);
      history.replaceState(null, "", `#${items[i].id}`);
      if (focus) tabRefs.current[i]?.focus();
    },
    [items],
  );

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = items.length - 1;
    const map: Record<string, number> = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowRight: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[19rem_1fr] lg:gap-14">
      <LayoutGroup id={uid}>
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Capabilities"
          className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:sticky lg:top-28 lg:mx-0 lg:flex-col lg:gap-1 lg:self-start lg:overflow-visible lg:px-0"
        >
          {items.map((it, i) => {
            const selected = i === active;
            return (
              <button
                key={it.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`${uid}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${uid}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKey}
                className={`relative shrink-0 rounded-md border px-4 py-3 text-left transition-colors lg:w-full lg:border-0 ${
                  selected ? "border-transparent" : "border-line hover:bg-mist"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="capability-indicator"
                    className="absolute inset-0 rounded-md bg-navy-900 shadow-[var(--shadow-card)]"
                    transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
                  />
                )}
                <span className="relative flex items-baseline gap-3">
                  <span
                    className={`tabular hidden font-serif text-sm lg:inline ${selected ? "text-accent-300" : "text-accent-700"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[0.95rem] font-semibold lg:whitespace-normal ${
                      selected ? "text-white" : "text-ink"
                    }`}
                  >
                    {it.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="min-w-0">
        {panels.map((panel, i) => (
          <div
            key={items[i]?.id ?? i}
            id={`${uid}-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${i}`}
            tabIndex={0}
            hidden={i !== active}
            className="rounded-lg border border-line bg-white p-6 shadow-[var(--shadow-card)] focus-visible:outline-offset-4 sm:p-9"
          >
            <AnimatePresence mode="wait" initial={false}>
              {i === active && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {panel}
                </motion.div>
              )}
            </AnimatePresence>
            {/* Keep inactive content in the document for search engines and find-in-page. */}
            {i !== active && panel}
          </div>
        ))}
      </div>
    </div>
  );
}
