import { Phone } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";
import type { Link } from "@/content/types";

export function CtaBand({
  title,
  body,
  action,
  showIncident = true,
}: {
  title: string;
  body: string;
  action: Link;
  showIncident?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-silver-200">
      <LogoMark className="pointer-events-none absolute -right-24 -top-20 -z-10 h-[30rem] w-[30rem] text-white/[0.035]" />
      <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-[1.5fr_1fr] lg:py-24">
        <div className="reveal">
          <h2 className="display text-[2rem] text-white sm:text-[2.75rem]">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-silver-300">{body}</p>
        </div>
        <div className="reveal flex flex-col gap-4 lg:items-end">
          <ButtonLink href={action.href} variant="light">
            {action.label}
          </ButtonLink>
          {showIncident && (
            <a
              href={`tel:${site.incidentLine.tel}`}
              className="inline-flex items-center gap-2 text-sm text-silver-300 hover:text-white"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-flare" />
              Active incident? Call {site.incidentLine.display}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
