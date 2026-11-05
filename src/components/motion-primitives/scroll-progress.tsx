"use client";

/*
 * ScrollProgress, adapted from Motion Primitives by ibelick (MIT License).
 * https://github.com/ibelick/motion-primitives
 * A thin reading-progress bar for long pages. Purely decorative.
 */
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-accent-500"
      style={{ scaleX }}
    />
  );
}
