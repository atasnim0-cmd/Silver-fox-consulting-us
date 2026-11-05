import Link from "next/link";

/** The Silver Fox mark. Geometry matches the existing brand asset exactly. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="currentColor" aria-hidden="true" className={className}>
      <g transform="translate(32 22)">
        <path d="M0 56 68 0 56 42 0 108Z" />
        <path d="M32 76 72 44 96 116Z" />
      </g>
    </svg>
  );
}

/** Mark plus wordmark, linked to the home page. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-white" : "text-navy-900";
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Silver Fox Consulting, home">
      <LogoMark className="h-8 w-8 shrink-0 text-flare transition-transform duration-300 group-hover:scale-105" />
      <span className={`text-[0.95rem] font-bold uppercase tracking-[0.08em] ${text}`}>
        Silver Fox <span className="font-semibold text-steel-400">Consulting</span>
      </span>
    </Link>
  );
}
