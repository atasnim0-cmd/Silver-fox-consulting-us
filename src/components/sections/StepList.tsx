import type { Step } from "@/content/types";

/** Numbered process steps as cards. Works for any number of steps. */
export function StepList({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const n = steps.length;
  const cols = n === 5 ? "lg:grid-cols-5" : n % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <ol className={`grid gap-4 sm:grid-cols-2 ${cols}`}>
      {steps.map((s, i) => (
        <li
          key={s.title}
          className={`flex flex-col rounded-lg border p-7 ${
            dark ? "border-white/10 bg-navy-900" : "border-line bg-white"
          }`}
        >
          <span className={`font-serif text-3xl ${dark ? "text-accent-500" : "text-accent-700"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-4 text-lg font-semibold ${dark ? "text-white" : "text-ink"}`}>{s.title}</h3>
          <p className={`mt-2 text-[0.95rem] leading-relaxed ${dark ? "text-silver-300" : "text-body"}`}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
