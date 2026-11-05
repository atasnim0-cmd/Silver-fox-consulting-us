import type { PhotoKey } from "./photos";

export type Link = { label: string; href: string };

export type Faq = { q: string; a: string };

export type Step = { title: string; body: string };

/** A titled block of work inside a service, compliance or platform page. */
export type Capability = {
  id: string;
  title: string;
  summary: string;
  body?: string[];
  groups?: { label?: string; items: string[] }[];
  note?: string;
};

export type Service = {
  slug: string;
  name: string;
  /** One line used on cards and in the menu. */
  blurb: string;
  /** Three short examples shown on cards. */
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string[];
    primaryCta: Link;
    secondaryCta?: Link;
    photo: PhotoKey;
  };
  why: { title: string; body: string[]; list?: string[]; closing?: string };
  capabilities: Capability[];
  approach: Step[];
  deliverables: string[];
  frameworks: string[];
  platforms: string[];
  industries: string[];
  faqs: Faq[];
  cta: { title: string; body: string; action: Link };
};

export type FrameworkCategory = "iso" | "nist" | "soc" | "us";

export type Framework = {
  slug: string;
  name: string;
  category: FrameworkCategory;
  /** Short label for chips and menus, e.g. "SOC 2". */
  short: string;
  blurb: string;
  appliesTo: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; intro: string[] };
  facts: { label: string; value: string }[];
  overview: { title: string; body: string[] };
  help: Capability[];
  /** What we do not do, stated plainly. */
  boundary?: { title: string; body: string };
  timeline?: Step[];
  services: string[];
  faqs: Faq[];
};

export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  photo: PhotoKey;
  hero: { eyebrow: string; title: string; intro: string[] };
  pressures: { title: string; items: { title: string; body: string }[] };
  work: { title: string; items: string[] };
  frameworks: string[];
  services: string[];
  faqs: Faq[];
};

export type Platform = {
  slug: string;
  name: string;
  category: string;
  question: string;
  tagline: string;
  blurb: string;
  accent: "blue" | "teal" | "slate";
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; intro: string[] };
  questions: string[];
  capabilities: Capability[];
  flow: string[];
  useCases: { title: string; body: string }[];
  services: string[];
  faqs: Faq[];
};
