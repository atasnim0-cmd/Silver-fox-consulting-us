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

/**
 * Mark plus wordmark, linked to the home page.
 * Dark blue on light grounds; white on dark grounds, where dark blue would disappear.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      translate="no"
      className="group -m-1 inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md p-1"
      aria-label="Silver Fox Consulting, home"
    >
      <LogoMark
        className={`h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-[1.04] ${
          light ? "text-white" : "text-accent-800"
        }`}
      />
      <span
        className={`text-[0.95rem] font-bold uppercase tracking-[0.08em] ${light ? "text-white" : "text-navy-900"}`}
      >
        Silver Fox{" "}
        <span className={`font-semibold lg:hidden xl:inline ${light ? "text-silver-300" : "text-steel-500"}`}>
          Consulting
        </span>
      </span>
    </Link>
  );
}
