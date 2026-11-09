import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, ShieldCheck, Wrench } from "lucide-react";
import { AttackPath } from "@/components/home/AttackPath";
import { HeroNetwork } from "@/components/home/HeroNetwork";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { WordReveal } from "@/components/motion-primitives/word-reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ArrowLink, ButtonLink } from "@/components/ui/ButtonLink";
import { CATEGORIES, frameworks, frameworksIn } from "@/content/compliance";
import { industries } from "@/content/industries";
import { photos } from "@/content/photos";
import { platforms } from "@/content/platforms";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Silver Fox | Cybersecurity Consulting in Texas",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const pillars = [
  {
    icon: Crosshair,
    title: "Offensive insight",
    body: "Our testers think like attackers, so findings reflect what could actually happen to you.",
  },
  {
    icon: ShieldCheck,
    title: "Defensive discipline",
    body: "Monitoring and response built around decisions, with less noise for your team to wade through.",
  },
  {
    icon: Wrench,
    title: "Engineering depth",
    body: "When we find a problem, we can stay and help your team fix it properly.",
  },
];

const cities = [
  { name: "Dallas", photo: photos.dallasNightReunion },
  { name: "Austin", photo: photos.austinSkylineDay },
  { name: "Houston", photo: photos.houstonSkylineNight },
  { name: "San Antonio", photo: photos.sanAntonioRiverwalk },
];

const platformBar = { blue: "bg-accent-500", teal: "bg-teal", slate: "bg-silver-300" } as const;

export default function HomePage() {
  const stats: { label: string; value?: number; text?: string }[] = [
    { label: "Security practices", value: services.length },
    { label: "Compliance frameworks", value: frameworks.length },
    { label: "In-house platforms", value: platforms.length },
    site.incidentLine.roundTheClock
      ? { label: "Incident response line", text: "24/7" }
      : { label: "Headquarters", text: site.address.city },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <Image
          src={photos.dallasSkylineDusk.src}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="-z-20 object-cover object-[55%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/45" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-navy-950 to-transparent" />

        <div className="container-page grid items-center gap-12 pb-12 pt-14 sm:pt-20 lg:min-h-[40rem] lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pt-16">
          <div className="max-w-3xl">
            <p className="hero-rise">
              <span className="eyebrow eyebrow-dark">Penetration testing, compliance and incident response</span>
            </p>
            <WordReveal
              text="Security that holds up when someone tests it."
              className="display mt-6 text-[2.6rem] text-white sm:text-6xl lg:text-[4.1rem]"
            />
            <div className="hero-rise">
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-silver-200 sm:text-xl">
                Silver Fox is a Texas cybersecurity firm. We test applications and networks the way attackers do,
                prepare companies for CMMC, SOC 2 and ISO 27001, and help security teams detect and respond to real
                attacks.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="light">
                  Schedule a consultation
                </ButtonLink>
                <ButtonLink href="/services" variant="outline-light">
                  Explore our services
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="hero-rise hidden lg:block">
            <HeroNetwork />
          </div>
        </div>

        <div className="container-page pb-14">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-silver-300">{s.label}</dt>
                <dd className="font-serif text-4xl text-white sm:text-[2.75rem]">
                  {typeof s.value === "number" ? <AnimatedNumber value={s.value} /> : s.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <SectionHeader eyebrow="Why Silver Fox" title="Most breaches start with something ordinary." />
            <div className="space-y-5 text-lg leading-relaxed lg:pt-10">
              <p>
                A contractor&apos;s VPN account without MFA. A storage bucket left open after a migration. An old test
                server that still answers on the internet.
              </p>
              <p>
                Attackers chain small problems like these into big ones. We look at your environment the same way, help
                you close the paths that lead somewhere important, and give you the evidence to show customers, auditors
                and your board that you did.
              </p>
            </div>
          </div>
          <ul className="mt-16 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-lg border border-line bg-white p-8 shadow-[var(--shadow-card)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent-50 text-accent-700">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="What we do"
              title="Six practices that work as one team."
              intro="Each practice stands on its own, and each one makes the others better. Penetration test findings shape detection rules. Incidents feed the risk register. Compliance work fixes real gaps."
            />
            <ArrowLink href="/services" className="shrink-0">
              All services
            </ArrowLink>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-link group flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-[var(--shadow-card)]"
                >
                  <span className="tabular font-serif text-lg text-accent-700">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{s.name}</h3>
                  <p className="mt-3 leading-relaxed">{s.blurb}</p>
                  <ul className="mt-5 space-y-1.5 border-t border-line pt-5 text-[0.9rem] text-muted">
                    {s.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-navy-900">
                    <span className="link-underline">Learn more</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Attack path */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            tone="dark"
            eyebrow="How attacks unfold"
            title="Every intrusion is a chain. Each link is a chance to stop it."
            intro="Here is a pattern that shows up again and again in real incidents, with the practice that breaks the chain at each step."
          />
          <div className="mt-16">
            <AttackPath />
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Compliance readiness"
              title={`${frameworks.length} frameworks, one program behind them.`}
              intro="We prepare you for audits and third-party assessments, close the gaps an assessor would find and keep your evidence current afterward."
            />
            <ArrowLink href="/compliance" className="shrink-0">
              All frameworks
            </ArrowLink>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <li
                key={c.id}
                className="flex flex-col rounded-lg border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-serif text-2xl">{c.short}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{c.intro}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {frameworksIn(c.id).map((f) => (
                    <li key={f.slug}>
                      <Link
                        href={`/compliance/${f.slug}`}
                        translate="no"
                        className="press inline-flex min-h-8 items-center whitespace-nowrap rounded-full border border-line px-3 text-sm font-medium text-ink hover:border-accent-500 hover:bg-accent-50 hover:text-accent-800"
                      >
                        {f.short}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/compliance#${c.id}`}
                  className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.95rem] font-semibold text-navy-900"
                >
                  <span className="link-underline">More on {c.short}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-accent-600 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-muted">
            Certifications and attestation reports are issued by accredited third parties. We get you ready and work
            alongside your assessor.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Industries"
              title="Focused on the industries that keep Texas running."
              intro="Energy, healthcare, aviation, finance, technology and government each carry their own threats, regulators and constraints. We plan our work around them."
            />
            <ArrowLink href="/industries" className="shrink-0">
              All industries
            </ArrowLink>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const photo = photos[ind.photo];
              return (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="card-link group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold">{ind.name}</h3>
                      <p className="mt-2 leading-relaxed">{ind.blurb}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-navy-900">
                        <span className="link-underline">Learn more</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 text-accent-600 transition-transform duration-200 group-hover:translate-x-1"
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

      {/* Platforms */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            tone="dark"
            eyebrow="Platforms"
            title="Technology built from our own fieldwork."
            intro="Three platforms that support our services, each designed around one question security teams ask every day."
          />
          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {platforms.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/platforms/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-navy-950/60 p-8 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/25"
                >
                  <Spotlight />
                  <span aria-hidden="true" className={`relative h-1 w-10 rounded-full ${platformBar[p.accent]}`} />
                  <span className="relative mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-silver-300">
                    {p.category}
                  </span>
                  <span className="relative mt-2 text-3xl font-bold tracking-[0.06em] text-white" translate="no">
                    {p.name}
                  </span>
                  <span className="relative mt-4 font-serif text-xl text-silver-100">{p.question}</span>
                  <span className="relative mt-3 leading-relaxed text-silver-300">{p.blurb}</span>
                  <span className="relative mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-white">
                    <span className="link-underline">Explore {p.name}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-accent-400 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Texas */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20">
            <SectionHeader
              eyebrow="Based in Texas"
              title={`Headquartered in ${site.address.city}. Working across Texas and the U.S.`}
            />
            <p className="text-lg leading-relaxed">
              We work with organizations anywhere in Texas, from the Gulf Coast to the Panhandle, and with clients
              across the rest of the United States. Most work can be done remotely, and we come on site when the job
              calls for it.
            </p>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {cities.map((c) => (
              <li key={c.name} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={c.photo.src}
                  alt={c.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <p className="absolute bottom-5 left-5 font-serif text-2xl text-white">{c.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Talk to a security specialist."
        body="Tell us what you are trying to protect, test, fix or investigate. A short conversation is usually enough to know whether we can help, and where to start."
        action={{ label: "Schedule a consultation", href: "/contact" }}
      />
    </>
  );
}
