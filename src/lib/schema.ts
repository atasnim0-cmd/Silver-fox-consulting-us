import { site } from "@/content/site";
import type { Faq } from "@/content/types";
import { absoluteUrl } from "./seo";

/** schema.org structured data builders. Rendered with <JsonLd />. */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: site.brand,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/brand/silver-fox-mark.png"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    email: site.email,
    telephone: site.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "Penetration testing",
      "Red teaming",
      "CMMC",
      "SOC 2",
      "HIPAA security",
      "PCI DSS",
      "Incident response",
      "Managed detection and response",
    ],
    ...(site.social.linkedin ? { sameAs: [site.social.linkedin] } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
