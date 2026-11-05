import type { MetadataRoute } from "next";
import { frameworks } from "@/content/compliance";
import { industries } from "@/content/industries";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
    { path: "/compliance", priority: 0.8 },
    ...frameworks.map((f) => ({ path: `/compliance/${f.slug}`, priority: 0.8 })),
    { path: "/industries", priority: 0.7 },
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.7 })),
    { path: "/platforms", priority: 0.6 },
    ...platforms.map((p) => ({ path: `/platforms/${p.slug}`, priority: 0.6 })),
    { path: "/about", priority: 0.6 },
    { path: "/engineering", priority: 0.5 },
    { path: "/contact", priority: 0.7 },
    { path: "/emergency", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    { path: "/accessibility", priority: 0.2 },
  ];
  return pages.map((p) => ({
    url: absoluteUrl(p.path),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
