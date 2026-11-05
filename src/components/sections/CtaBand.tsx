import { Phone } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";
import type { Link } from "@/content/types";

/**
 * Closing call to action. "dark" is the default navy band; "light" is a bordered
 * card on a pale ground, used on reference pages so endings do not all look alike.
 */
export function CtaBand({
  title,
  body,
  action,
  showIncident = true,
  tone = "dark",
}: {
  title: string;
  body: string;
  action: Link;
  showIncident?: boolean;
  tone?: "dark" | "light";
}) {
  if (tone === "light") {
    return (
      <section className="bg-mist py-16 lg:py-20">
        <div className="container-page">
          <div className="relative isolate grid items-center gap-8 overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-[var(--shadow-card)] sm:p-12 lg:grid-cols-[1.5fr_1fr]">
            <LogoMark className="pointer-events-none absolute -right-16 -top-16 -z-10 h-72 w-72 text-accent-50" />
            <div>
              <h2 className="display text-[2rem] sm:text-[2.5rem]">{title}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed">{body}</p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <ButtonLink href={action.href} variant="primary">
                {action.label}
              </ButtonLink>
              {showIncident && (
                <a
                  href={`tel:${site.incidentLine.tel}`}
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-navy-900"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-accent-600" />
                  Active incident? Call <span className="tabular">{site.incidentLine.display}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-silver-200">
      <LogoMark className="pointer-events-none absolute -right-24 -top-20 -z-10 h-[30rem] w-[30rem] text-white/[0.035]" />
      <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-[1.5fr_1fr] lg:py-24">
        <div>
          <h2 className="display text-[2rem] text-white sm:text-[2.75rem]">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-silver-300">{body}</p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <ButtonLink href={action.href} variant="light">
            {action.label}
          </ButtonLink>
          {showIncident && (
            <a
              href={`tel:${site.incidentLine.tel}`}
              className="inline-flex items-center gap-2 text-sm text-silver-300 hover:text-white"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-accent-400" />
              Active incident? Call <span className="tabular">{site.incidentLine.display}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
