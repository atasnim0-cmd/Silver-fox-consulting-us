import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crosshair, ShieldCheck, Wrench } from "lucide-react";
import { AttackPath } from "@/components/home/AttackPath";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StepList } from "@/components/sections/StepList";
import { ArrowLink, ButtonLink } from "@/components/ui/ButtonLink";
import { frameworks } from "@/content/compliance";
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
  { name: "Austin", photo: photos.austinSkylineDay },
  { name: "Dallas", photo: photos.dallasSkylineDusk },
  { name: "Houston", photo: photos.houstonSkylineNight },
  { name: "San Antonio", photo: photos.sanAntonioRiverwalk },
];

const engagementSteps = [
  {
    title: "A conversation",
    body: "Tell us what you are dealing with. We will ask questions and tell you honestly whether we are the right fit.",
  },
  {
    title: "A written proposal",
    body: "You get a clear scope, timeline, team and price before any work begins.",
  },
  {
    title: "The work",
    body: "Regular check-ins, immediate notice of critical findings and one point of contact throughout.",
  },
  {
    title: "Readout and follow-through",
    body: "We walk your team and leadership through the results and stay available while you fix what we found.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <Image
          src={photos.austinSkylineDusk.src}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="hero-zoom -z-20 object-cover object-[60%_40%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/25" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

        <div className="container-page flex min-h-[38rem] flex-col justify-center pb-10 pt-20 lg:min-h-[44rem] lg:pt-24">
          <div className="hero-rise max-w-3xl">
            <p className="eyebrow eyebrow-dark">Penetration testing, compliance and incident response</p>
            <h1 className="display mt-6 text-[2.75rem] text-white sm:text-6xl lg:text-[4.25rem]">
              Security that holds up when someone tests it.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-silver-200 sm:text-xl">
              Silver Fox is a Texas cybersecurity firm. We test applications and networks the way attackers do, prepare
              companies for CMMC, SOC 2 and HIPAA, and help security teams detect and respond to real attacks.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light">
                Schedule a consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light">
                Explore our services
              </ButtonLink>
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-6 lg:mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-400">
              Readiness and testing for
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {frameworks.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/compliance/${f.slug}`}
                    className="text-[0.95rem] font-semibold text-silver-200 transition-colors hover:text-white"
                  >
                    {f.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <SectionHeader eyebrow="Why Silver Fox" title="Most breaches start with something ordinary." />
            <div className="reveal space-y-5 text-lg leading-relaxed lg:pt-10">
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
          <ul className="mt-16 grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <li key={title} className="reveal bg-white p-8">
                <Icon aria-hidden="true" className="h-6 w-6 text-flare-700" strokeWidth={1.75} />
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
              <li key={s.slug} className="reveal">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/20 hover:shadow-[0_20px_40px_-24px_rgba(10,21,40,0.35)]"
                >
                  <span className="font-serif text-lg text-flare-700">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{s.name}</h3>
                  <p className="mt-3 leading-relaxed">{s.blurb}</p>
                  <ul className="mt-5 space-y-1.5 border-t border-line pt-5 text-[0.9rem] text-muted">
                    {s.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-navy-900">
                    Learn more
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-flare transition-transform duration-200 group-hover:translate-x-1"
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
              title="Get ready for the assessment your customers and contracts require."
              intro="We prepare you for audits and third-party assessments, close the gaps an assessor would find and help keep your evidence current afterward."
            />
            <ArrowLink href="/compliance" className="shrink-0">
              All frameworks
            </ArrowLink>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {frameworks.map((f) => (
              <li key={f.slug} className="bg-white">
                <Link
                  href={`/compliance/${f.slug}`}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-mist"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{f.appliesTo}</span>
                  <span className="mt-3 font-serif text-2xl text-ink">{f.short}</span>
                  <span className="mt-2 text-[0.95rem] leading-relaxed">{f.blurb}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-auto h-4 w-4 translate-y-3 text-flare transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
            <li className="flex flex-col justify-center bg-navy-900 p-6 text-silver-300">
              <p className="text-[0.95rem] leading-relaxed">
                Certifications and attestation reports are issued by accredited third parties. We get you ready and work
                alongside your assessor.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Industries"
              title="Focused on the industries that keep Texas running."
              intro="Energy, healthcare, defense, finance, technology and government each carry their own threats, regulators and constraints. We plan our work around them."
            />
            <ArrowLink href="/industries" className="shrink-0">
              All industries
            </ArrowLink>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const photo = photos[ind.photo];
              return (
                <li key={ind.slug} className="reveal">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(10,21,40,0.35)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold">{ind.name}</h3>
                      <p className="mt-2 leading-relaxed">{ind.blurb}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-navy-900">
                        Learn more
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 text-flare transition-transform duration-200 group-hover:translate-x-1"
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
              <li key={p.slug} className="reveal">
                <Link
                  href={`/platforms/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-white/10 bg-navy-950/60 p-8 transition-colors duration-300 hover:border-white/30"
                >
                  <span
                    aria-hidden="true"
                    className={`h-1 w-10 rounded-full ${
                      p.accent === "flare" ? "bg-flare" : p.accent === "sky" ? "bg-sky" : "bg-amber"
                    }`}
                  />
                  <span className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-steel-400">
                    {p.category}
                  </span>
                  <span className="mt-2 text-3xl font-bold tracking-[0.06em] text-white">{p.name}</span>
                  <span className="mt-4 font-serif text-xl text-silver-100">{p.question}</span>
                  <span className="mt-3 leading-relaxed text-silver-300">{p.blurb}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-white">
                    Explore {p.name}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-flare transition-transform duration-200 group-hover:translate-x-1"
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
            <p className="reveal text-lg leading-relaxed">
              We work with organizations anywhere in Texas, from the Gulf Coast to the Panhandle, and with clients
              across the rest of the United States. Most work can be done remotely, and we come on site when the job
              calls for it.
            </p>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {cities.map((c) => (
              <li key={c.name} className="reveal group relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={c.photo.src}
                  alt={c.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <p className="absolute bottom-5 left-5 font-serif text-2xl text-white">{c.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Working with us"
            title="What to expect when you reach out."
            intro="No long sales cycle and no pressure. A short conversation is usually enough to know whether we can help."
          />
          <div className="mt-14">
            <StepList steps={engagementSteps} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to a security specialist."
        body="Tell us what you are trying to protect, test, fix or investigate. We will help you work out the right place to start."
        action={{ label: "Schedule a consultation", href: "/contact" }}
      />
    </>
  );
}
