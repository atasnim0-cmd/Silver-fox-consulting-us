import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  children,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  children?: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <Tag className={`display mt-4 text-[2rem] sm:text-[2.5rem] ${dark ? "text-white" : "text-ink"}`}>{title}</Tag>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-silver-300" : "text-body"}`}>{intro}</p>}
      {children}
    </div>
  );
}
