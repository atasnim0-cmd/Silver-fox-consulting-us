import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { CATEGORIES, frameworks } from "@/content/compliance";
import { companyLinks, getNavigation, legalLinks } from "@/content/navigation";
import { fullAddress, site } from "@/content/site";

export function Footer() {
  const nav = getNavigation();
  const columns = [
    { title: "Services", links: nav.find((g) => g.id === "services")!.links },
    {
      title: "Compliance",
      links: [
        ...CATEGORIES.map((c) => ({ label: c.label, href: `/compliance#${c.id}` })),
        ...["cmmc", "soc-2", "iso-27001", "hipaa"].map((slug) => {
          const f = frameworks.find((x) => x.slug === slug)!;
          return { label: f.short, href: `/compliance/${f.slug}` };
        }),
      ],
    },
    { title: "Industries", links: nav.find((g) => g.id === "industries")!.links },
    {
      title: "Company",
      links: [
        ...companyLinks,
        ...nav.find((g) => g.id === "platforms")!.links.map((l) => ({ ...l, label: `${l.label} platform` })),
      ],
    },
  ];
  const year = process.env.BUILD_YEAR ?? String(site.copyrightStartYear);

  return (
    <footer className="bg-navy-950 text-silver-300">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_2fr] lg:gap-16 lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
            Penetration testing, compliance readiness, managed detection and incident response for organizations in
            Texas and across the United States.
          </p>
          <ul className="mt-8 space-y-3 text-[0.95rem]">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent-500" />
              <a href={`tel:${site.phone.tel}`} className="text-white hover:underline">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent-500" />
              <a href={`mailto:${site.email}`} className="text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent-500" />
              <span>{fullAddress()}</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-400">{col.title}</h2>
              <ul className="mt-4 space-y-2.5 text-[0.9rem]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-silver-200 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/.well-known/security.txt" className="hover:text-white">
                Report a vulnerability
              </a>
            </li>
            {site.social.linkedin && (
              <li>
                <a href={site.social.linkedin} className="hover:text-white" rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
