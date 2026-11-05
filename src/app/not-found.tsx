import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  const links = [
    { label: "Services", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <section className="bg-navy-950 py-28 text-silver-200 lg:py-36">
      <div className="container-page max-w-3xl">
        <p className="eyebrow eyebrow-dark">Error 404</p>
        <h1 className="display mt-5 text-5xl text-white sm:text-6xl">We couldn&apos;t find that page.</h1>
        <p className="mt-6 text-lg leading-relaxed text-silver-300">
          The link may be out of date, or the page may have moved. Try one of these instead.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="font-semibold text-white underline-offset-4 hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/" variant="light">
            Back to the home page
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
