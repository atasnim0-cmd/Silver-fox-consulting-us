import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { incidentAvailability, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Incident Response Hotline",
  description:
    "Experiencing a cyber incident? Call the Silver Fox incident response line and follow these first steps to contain the damage and preserve evidence.",
  path: "/emergency",
});

const firstSteps = [
  {
    title: "Do not wipe, reimage or rebuild affected systems.",
    body: "It destroys the evidence needed to understand what happened and whether the attacker is still inside.",
  },
  {
    title: "Disconnect affected machines from the network, but leave them powered on where you can.",
    body: "Memory holds evidence that is lost at shutdown. If ransomware is actively encrypting files, cutting power may be the lesser harm, so use your judgment.",
  },
  {
    title: "Preserve logs now.",
    body: "Firewall, VPN, identity provider, email and EDR logs often roll over within days. Export them or extend retention right away.",
  },
  {
    title: "Move to out-of-band communication.",
    body: "If email or chat may be compromised, coordinate by phone or through a separate system the attacker cannot see.",
  },
  {
    title: "Call your cyber insurer and legal counsel.",
    body: "Many policies require prompt notice and a response firm from an approved panel. Counsel can help keep the investigation privileged.",
  },
  {
    title: "Do not contact the attacker or pay a ransom yet.",
    body: "Any decision about communication or payment needs legal advice, sanctions screening and expert input.",
  },
  {
    title: "Write down what you know.",
    body: "Note what was seen, when, by whom and what has been done since. Accurate times matter later.",
  },
];

const callChecklist = [
  "Your name, role and organization",
  "A callback number that does not depend on affected systems",
  "What you are seeing and when it started",
  "Which systems, accounts or locations seem affected",
  "Whether you have cyber insurance, and the carrier's name",
];

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Incident hotline", path: "/emergency" }]}
        eyebrow="Incident response hotline"
        title="Dealing with an active cyber incident?"
        intro={[
          "Call our incident line now. The sooner we start, the more evidence survives and the more options you have.",
        ]}
        aside={
          <div className="rounded-lg border border-accent-500/60 bg-navy-900 p-8">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-silver-300">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
              </span>
              Incident line
            </p>
            <a
              href={`tel:${site.incidentLine.tel}`}
              className="mt-4 flex items-center gap-3 text-4xl font-semibold text-white hover:underline sm:text-5xl"
            >
              <Phone aria-hidden="true" className="h-8 w-8 text-accent-500" />
              {site.incidentLine.display}
            </a>
            <p className="mt-4 text-silver-300">Available {incidentAvailability()}.</p>
          </div>
        }
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeader
            eyebrow="While you wait"
            title="First steps that protect your options."
            intro="These are general guidelines. Every incident is different, so follow the advice of your responders once they are engaged."
          />
          <ol className="space-y-4">
            {firstSteps.map((s, i) => (
              <li key={s.title} className="flex gap-5 rounded-lg border border-line p-6">
                <span className="font-serif text-2xl text-accent-700">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="On the call" title="What we will ask you." />
            <ul className="mt-8 space-y-3">
              {callChecklist.map((c) => (
                <li key={c} className="flex gap-3 text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 lg:pt-10">
            <div className="rounded-lg border border-line bg-white p-7">
              <h3 className="text-lg font-semibold">If anyone&apos;s safety is at risk</h3>
              <p className="mt-2 leading-relaxed">
                Call 911 first. You can also report cybercrime to the FBI through the Internet Crime Complaint Center at
                ic3.gov or by contacting your local FBI field office.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-white p-7">
              <h3 className="text-lg font-semibold">Prepare before the next one</h3>
              <p className="mt-2 leading-relaxed">
                An incident response retainer means the contract, contacts and access are agreed before anything goes
                wrong.
              </p>
              <ArrowLink href="/services/incident-response#retainers" className="mt-4">
                Learn about retainers
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
