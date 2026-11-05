import type { Metadata } from "next";
import { site } from "@/content/site";
import { isLive } from "./env";

/** True only on the live domain. Previews, local builds and the vercel.app production URL stay out of search. */
export const isProduction = isLive;

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Set for the home page so the template suffix is not added twice. */
  absoluteTitle?: boolean;
};

export function pageMetadata({ title, description, path, absoluteTitle }: PageMeta): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.brand,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
