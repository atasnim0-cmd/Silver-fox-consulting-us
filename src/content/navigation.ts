import { services } from "./services";
import { frameworks } from "./compliance";
import { industries } from "./industries";
import { platforms } from "./platforms";

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { id: string; label: string; href: string; links: NavLink[] };

/**
 * Slim navigation model built on the server and passed to the client header,
 * so the full page content never ships in the client bundle.
 */
export function getNavigation(): NavGroup[] {
  return [
    {
      id: "services",
      label: "Services",
      href: "/services",
      links: services.map((s) => ({ label: s.name, href: `/services/${s.slug}`, description: s.blurb })),
    },
    {
      id: "compliance",
      label: "Compliance",
      href: "/compliance",
      links: frameworks.map((f) => ({ label: f.short, href: `/compliance/${f.slug}`, description: f.appliesTo })),
    },
    {
      id: "industries",
      label: "Industries",
      href: "/industries",
      links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}`, description: i.blurb })),
    },
    {
      id: "platforms",
      label: "Platforms",
      href: "/platforms",
      links: platforms.map((p) => ({ label: p.name, href: `/platforms/${p.slug}`, description: p.tagline })),
    },
  ];
}

export const companyLinks: NavLink[] = [
  { label: "About Silver Fox", href: "/about" },
  { label: "Engineering & R&D", href: "/engineering" },
  { label: "Contact", href: "/contact" },
  { label: "Incident hotline", href: "/emergency" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
