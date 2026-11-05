import { Fragment } from "react";

/*
 * WordReveal: the "fade-in-blur" per-word entrance from Motion Primitives' TextEffect
 * (ibelick, MIT), rebuilt as server-rendered CSS. The headline is visible the moment
 * the HTML paints, needs no JavaScript and does not delay Largest Contentful Paint.
 * Under prefers-reduced-motion the words simply appear.
 */
export function WordReveal({
  text,
  as: Tag = "h1",
  className,
  delay = 0.05,
  stagger = 0.06,
}: {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word-reveal" style={{ animationDelay: `${(delay + i * stagger).toFixed(2)}s` }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
