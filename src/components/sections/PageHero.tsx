import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import type { Photo } from "@/content/photos";

type Props = {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string[];
  actions?: ReactNode;
  /** Photo shown beside the copy (split) or behind it (background). */
  photo?: Photo;
  variant?: "split" | "background" | "plain";
  /** Optional content for the right column when there is no split photo. */
  aside?: ReactNode;
};

export function PageHero({ crumbs, eyebrow, title, intro = [], actions, photo, variant = "plain", aside }: Props) {
  const isBackground = variant === "background" && photo;
  const isSplit = variant === "split" && photo;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-silver-200">
      {isBackground && (
        <>
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="hero-zoom -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        </>
      )}
      {!isBackground && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_85%_-10%,rgba(42,65,112,0.55),transparent_60%)]"
        />
      )}

      <div className="container-page pb-16 pt-10 lg:pb-24 lg:pt-12">
        <Breadcrumbs items={crumbs} />
        <div
          className={`mt-10 grid items-center gap-12 ${isSplit || aside ? "lg:grid-cols-[1.15fr_1fr] lg:gap-16" : ""}`}
        >
          <div className="hero-rise max-w-3xl">
            {eyebrow && <p className="eyebrow eyebrow-dark">{eyebrow}</p>}
            <h1 className="display mt-5 text-[2.5rem] text-white sm:text-5xl lg:text-[3.5rem]">{title}</h1>
            {intro.length > 0 && (
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-silver-200">
                {intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
            {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          </div>

          {isSplit && (
            <div className="relative hidden lg:block">
              <div
                className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-flare"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  placeholder="blur"
                  className="hero-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>
            </div>
          )}
          {!isSplit && aside && <div className="hero-rise">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
