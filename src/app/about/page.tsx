import type { Metadata } from "next";
import Image from "next/image";
import { Crosshair, ShieldCheck, Wrench } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StepList } from "@/components/sections/StepList";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Silver Fox",
  description:
    "Silver Fox LLC is a Texas cybersecurity services and technology company covering strategy, penetration testing, engineering, managed detection and incident response.",
  path: "/about",
});

const strengths = [
  {
    icon: Crosshair,
    title: "Offensive insight",
    body: "Knowing how attackers think changes how security is designed. Our testing looks past individual vulnerabilities to privilege, lateral movement and realistic impact, and the findings go on to improve architecture, identity controls and monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "Defensive discipline",
    body: "Good defense is knowing what matters. We build and run security operations around meaningful detection, threat context, careful investigation, clear escalation and continuous improvement, with fewer noisy alerts.",
  },
  {
    icon: Wrench,
    title: "Engineering depth",
    body: "Finding the weakness is often the start of the job. We redesign architecture, harden infrastructure, improve identity controls, integrate security tools and, where off-the-shelf products fall short, build what is missing.",
  },
];

const principles = [
  { title: "Evidence over assumption", body: "Confidence should come from what can be demonstrated." },
  { title: "Context over volume", body: "More findings, alerts and data do not automatically make anyone safer." },
  { title: "Paths over silos", body: "Individual weaknesses matter most when they combine." },
  { title: "Engineering over theater", body: "Security work should improve the environment as well as the report." },
  {
    title: "Clarity under pressure",
    body: "Technical depth should make decisions easier, especially during an incident.",
  },
];

const approach = [
  {
    title: "Understand",
    body: "Build an accurate picture of the organization, its technology and the risks that matter.",
  },
  { title: "Challenge", body: "Test assumptions through technical assessment and adversarial thinking." },
  { title: "Engineer", body: "Design and implement controls that reduce meaningful exposure." },
  { title: "Defend", body: "Monitor, detect and investigate activity across the environment." },
  { title: "Respond", body: "Contain incidents, establish the facts and restore control." },
  { title: "Improve", body: "Turn findings, simulations and incident evidence into stronger security." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About Silver Fox"
        title="A Texas cybersecurity firm built to test assumptions."
        intro={[
          `${site.legalName} is a cybersecurity services and technology company headquartered in ${site.address.city}, Texas. We help organizations understand their risk, find their weaknesses, strengthen their systems and respond with confidence when something goes wrong.`,
          "Our work covers the full attack lifecycle, from strategy and compliance to penetration testing, security engineering, managed detection and incident response.",
        ]}
        photo={photos.texasCapitolFlags}
        variant="split"
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeader eyebrow="What we believe" title="Security is a connected problem." />
          <div className="reveal space-y-5 text-lg leading-relaxed lg:pt-10">
            <p>
              Attackers do not see separate departments for cloud, identity, applications, networks and data. They see
              opportunities, and they move between them.
            </p>
            <p>
              A vulnerable application can expose an identity. A compromised identity can open up cloud infrastructure.
              A weak configuration can turn limited access into full control. That is why we keep offensive testing,
              defensive operations and engineering under one roof, so a weakness found in one place improves security
              everywhere else.
            </p>
          </div>
        </div>
        <div className="container-page mt-16 grid gap-5 lg:grid-cols-3">
          {strengths.map(({ icon: Icon, title, body }) => (
            <div key={title} className="reveal rounded-lg border border-line p-8">
              <Icon aria-hidden="true" className="h-6 w-6 text-flare-700" strokeWidth={1.75} />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader tone="dark" eyebrow="How we think" title="Five principles behind every engagement." />
          <dl className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p) => (
              <div key={p.title} className="reveal bg-navy-950 p-7">
                <dt className="font-serif text-xl text-white">{p.title}</dt>
                <dd className="mt-3 leading-relaxed text-silver-300">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={photos.dallasSkylineDusk.src}
              alt={photos.dallasSkylineDusk.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Why Texas" title="Close to the industries we protect." />
            <div className="reveal mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                Texas runs much of the country&apos;s energy production, a large share of its defense manufacturing,
                some of its largest hospital systems and one of its fastest-growing technology sectors. Those industries
                face serious, well-funded attackers.
              </p>
              <p>
                Being based here means we know the state&apos;s regulators, industries and pace of business, and we can
                be on site when it matters. We also work with clients across the rest of the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our approach"
            title="Six steps we follow, whatever the engagement."
            intro="Each step feeds the next, and the last one feeds the first."
          />
          <div className="mt-12">
            <StepList steps={approach} />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            eyebrow="People and credentials"
            title="Every engagement is led by a practitioner."
            intro="The people who scope your engagement are the people who do the work. Our team holds industry certifications including OSCP, CISSP and CREST, and we keep those skills current through research, training and our own platforms."
          />
          <div className="reveal flex flex-col justify-end gap-4 lg:pt-10">
            <ArrowLink href="/services">Explore our services</ArrowLink>
            <ArrowLink href="/platforms">See our platforms</ArrowLink>
            <ArrowLink href="/engineering">Engineering and applied R&amp;D</ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's talk about where you stand."
        body="If you want an honest view of your security and a practical plan to improve it, we would like to hear from you."
        action={{ label: "Talk to Silver Fox", href: "/contact" }}
      />
    </>
  );
}
