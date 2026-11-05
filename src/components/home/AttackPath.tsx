"use client";

import Link from "next/link";
import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";

const steps = [
  {
    stage: "Initial access",
    text: "A reused password works on an internet-facing VPN portal that nobody remembered to put behind MFA.",
    stop: "Penetration testing and SCOPE",
    href: "/services/penetration-testing",
  },
  {
    stage: "Credential theft",
    text: "From the first laptop, the attacker collects cached credentials, including a help desk account.",
    stop: "Identity and privileged access",
    href: "/services/identity-data-security",
  },
  {
    stage: "Lateral movement",
    text: "A flat network lets them reach file servers and, eventually, a domain controller.",
    stop: "Architecture and segmentation",
    href: "/services/cloud-application-infrastructure",
  },
  {
    stage: "Detection window",
    text: "New admin accounts and unusual sign-ins raise alerts. Someone has to notice them in time.",
    stop: "Managed detection and response",
    href: "/services/managed-detection-response",
  },
  {
    stage: "Impact",
    text: "Data is copied out and ransomware is staged to run late on a Friday night.",
    stop: "Incident response and forensics",
    href: "/services/incident-response",
  },
];

/** Animated walk-through of a typical intrusion and where each practice breaks the chain. */
export function AttackPath() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="relative">
          <div className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-white/15 lg:block" aria-hidden="true">
            <m.div
              className="h-full origin-left bg-flare"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute bottom-10 left-5 top-5 w-px bg-white/15 lg:hidden" aria-hidden="true">
            <m.div
              className="h-full w-full origin-top bg-flare"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <m.li
                key={s.stage}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.15 + i * 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-start pl-16 lg:items-center lg:pl-0 lg:text-center"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-flare bg-navy-950 text-sm font-semibold text-white lg:relative lg:mx-auto">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white lg:mt-6">{s.stage}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-silver-300 lg:mb-4">{s.text}</p>
                <Link
                  href={s.href}
                  className="mt-4 inline-block rounded-full lg:mt-auto border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-silver-200 transition-colors hover:border-flare hover:text-white"
                >
                  {s.stop}
                </Link>
              </m.li>
            ))}
          </ol>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
