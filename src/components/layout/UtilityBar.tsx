import Link from "next/link";
import { site } from "@/content/site";

/** Thin bar above the header with the incident line, as US security firms commonly provide. */
export function UtilityBar() {
  return (
    <div className="bg-navy-950 text-[0.8125rem] text-silver-300">
      <div className="container-page flex h-9 items-center justify-between gap-4">
        <p className="hidden sm:block">
          Cybersecurity consulting from {site.address.city}, {site.address.regionName}
        </p>
        <p className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flare opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-flare" />
          </span>
          <Link href="/emergency" className="font-medium text-white hover:underline">
            Experiencing a breach?
          </Link>
          <a href={`tel:${site.incidentLine.tel}`} className="font-semibold text-white hover:underline">
            {site.incidentLine.display}
          </a>
        </p>
      </div>
    </div>
  );
}
