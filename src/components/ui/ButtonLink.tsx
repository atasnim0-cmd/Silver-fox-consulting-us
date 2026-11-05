import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "light" | "outline" | "outline-light" | "flare";

const styles: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-700",
  light: "bg-white text-navy-950 hover:bg-silver-100",
  flare: "bg-flare text-navy-950 hover:bg-flare-600",
  outline: "border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900/[0.03]",
  "outline-light": "border border-white/35 text-white hover:border-white hover:bg-white/[0.06]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const classes = `group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );
  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Plain text link with an arrow, for "Learn more" style links. */
export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const color = tone === "light" ? "text-white" : "text-navy-900";
  return (
    <Link href={href} className={`group inline-flex items-center gap-1.5 font-semibold ${color} ${className}`}>
      <span className="link-underline">{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 text-flare transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
