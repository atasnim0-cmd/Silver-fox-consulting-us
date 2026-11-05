"use client";

/*
 * AnimatedNumber, adapted from Motion Primitives by ibelick (MIT License).
 * https://github.com/ibelick/motion-primitives
 * Changes: counts up from zero the first time it scrolls into view, renders the
 * final value on the server so the number is never missing, and respects reduced motion.
 */
import { motion, useInView, useReducedMotion, useSpring, useTransform, type SpringOptions } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function AnimatedNumber({
  value,
  className,
  springOptions = { bounce: 0, visualDuration: 1.4 },
}: {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("en-US"));

  // Reset to zero after hydration, then count up when visible.
  useEffect(() => {
    if (reduce) return;
    spring.jump(0);
  }, [spring, reduce]);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <motion.span ref={ref} className={cn("tabular", className)}>
      {display}
    </motion.span>
  );
}
