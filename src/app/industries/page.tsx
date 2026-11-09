import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { industries } from "@/content/industries";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Cybersecurity for aviation and aerospace, energy and utilities, healthcare, financial services, technology companies and Texas state and local government.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", path: "/industries" }]}
        eyebrow="Industries"
        title="Security shaped by the industry you work in."
        intro={[
          "A hospital, a pipeline operator and a SaaS company face different attackers, answer to different regulators and can tolerate different kinds of disruption. Our work starts from those differences.",
        ]}
        photo={photos.dallasNightReunion}
        variant="background"
      />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          <ul className="grid gap-6 md:grid-cols-2">
            {industries.map((ind) => {
              const photo = photos[ind.photo];
              return (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group grid h-full overflow-hidden rounded-lg border border-line bg-white transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(10,21,40,0.35)] sm:grid-cols-[13rem_1fr]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 640px) 13rem, 100vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-col p-7">
                      <h2 className="text-2xl font-semibold text-ink">{ind.name}</h2>
                      <p className="mt-2 leading-relaxed">{ind.blurb}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-navy-900">
                        Learn more
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 text-accent-500 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Don't see your industry?"
        body="These are the sectors we focus on most, and we work with others too. Tell us about your organization and we will tell you honestly whether we are a good fit."
        action={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
