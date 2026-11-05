"use client";

/*
 * Spotlight, adapted from Motion Primitives by ibelick (MIT License).
 * https://github.com/ibelick/motion-primitives
 * Changes: brand blue glow, pointer-only (no effect on touch), and transform-based
 * positioning so it never triggers layout.
 */
import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function Spotlight({ className, size = 260 }: { className?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const x = useSpring(0, { bounce: 0, visualDuration: 0.35 });
  const y = useSpring(0, { bounce: 0, visualDuration: 0.35 });
  const tx = useTransform(x, (v) => v - size / 2);
  const ty = useTransform(y, (v) => v - size / 2);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent || !window.matchMedia("(hover: hover)").matches) return;
    const ctrl = new AbortController();
    parent.addEventListener(
      "pointermove",
      (e) => {
        const r = parent.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      },
      { signal: ctrl.signal },
    );
    parent.addEventListener("pointerenter", () => setHovered(true), { signal: ctrl.signal });
    parent.addEventListener("pointerleave", () => setHovered(false), { signal: ctrl.signal });
    return () => ctrl.abort();
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-0 top-0 rounded-full blur-2xl transition-opacity duration-300",
        "bg-[radial-gradient(circle_at_center,rgba(111,151,242,0.32),transparent_70%)]",
        hovered ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{ width: size, height: size, x: tx, y: ty }}
    />
  );
}
