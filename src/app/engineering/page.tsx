import type { Metadata } from "next";
import { CapabilityBlock } from "@/components/sections/CapabilityBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { OnThisPage } from "@/components/sections/OnThisPage";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StepList } from "@/components/sections/StepList";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { photos } from "@/content/photos";
import type { Capability } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Engineering & Applied R&D",
  description:
    "Secure software engineering, security automation, AI and machine learning, computer vision, edge systems and applied security research from Silver Fox.",
  path: "/engineering",
});

const capabilities: Capability[] = [
  {
    id: "secure-software",
    title: "Secure software engineering",
    summary: "Software built around your security, control and deployment requirements.",
    groups: [
      {
        items: [
          "Secure custom applications",
          "Security dashboards and internal tools",
          "Investigation and intelligence platforms",
          "Data platforms",
          "Workflow systems",
          "API and systems integration",
          "On-premise and restricted-network applications",
          "Edge applications",
        ],
      },
    ],
  },
  {
    id: "customer-controlled",
    title: "Customer-controlled deployments",
    summary: "Technology you can run, maintain and extend on your own infrastructure.",
    body: [
      "Some organizations cannot send sensitive data to an outside SaaS platform, or need full control of the systems they depend on. We build software that runs in your environment, on your infrastructure and under your control.",
    ],
    groups: [
      {
        label: "Common settings",
        items: [
          "Government and regulated environments",
          "Critical infrastructure",
          "Research environments",
          "Locally hosted analytics and intelligence systems",
        ],
      },
    ],
  },
  {
    id: "product-engineering",
    title: "Security product engineering",
    summary: "The same engineering behind SCOPE, SIGNAL and RANGE.",
    groups: [
      {
        items: [
          "Exposure management systems",
          "Detection tooling",
          "Security orchestration",
          "Security data platforms",
          "Attack simulation",
          "Asset discovery",
          "Security visualization",
        ],
      },
    ],
  },
  {
    id: "automation",
    title: "Security automation",
    summary: "Automate the repetitive work and keep judgment with people.",
    groups: [
      {
        items: [
          "Alert enrichment and indicator processing",
          "Evidence collection",
          "Ticket routing and case creation",
          "Vulnerability workflows",
          "Configuration validation",
          "Integration between security systems",
          "Reporting",
        ],
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI and machine learning",
    summary: "Used where it improves the security outcome.",
    body: [
      "We apply machine learning where the problem justifies it, and we can design private or locally hosted AI architectures when data cannot leave your environment.",
    ],
    groups: [
      {
        items: [
          "Anomaly detection",
          "Behavioral analytics",
          "Malware classification",
          "Threat prioritization",
          "Document and intelligence analysis",
          "Investigation assistance",
        ],
      },
    ],
  },
  {
    id: "computer-vision",
    title: "Computer vision",
    summary: "Visual intelligence where cyber meets the physical world.",
    groups: [
      {
        items: [
          "Perimeter monitoring",
          "Object detection and tracking",
          "Restricted zone detection",
          "Vehicle analytics",
          "Drone video analysis",
          "Infrastructure inspection",
          "Thermal and multispectral imaging",
        ],
      },
    ],
  },
  {
    id: "edge",
    title: "Edge and embedded systems",
    summary: "Processing close to the sensor or device.",
    groups: [
      {
        items: [
          "Edge inference",
          "Embedded software",
          "Secure device integration",
          "Sensor processing",
          "Offline and low-bandwidth operation",
          "Hardware and software integration",
        ],
      },
    ],
  },
  {
    id: "research",
    title: "Applied research and prototyping",
    summary: "Answer the hard technical questions early.",
    body: [
      "When a problem is not yet well understood, we start with research and a prototype. Every research effort aims at something concrete: a working prototype, a validated approach, a product capability or a clear recommendation.",
    ],
    groups: [
      {
        items: [
          "Vulnerability research",
          "Detection methods",
          "Cyber simulation",
          "AI security",
          "Prototypes that test feasibility, architecture and performance",
        ],
      },
    ],
  },
  {
    id: "evaluation",
    title: "Technology evaluation",
    summary: "Sometimes the right answer is to buy.",
    body: [
      "We also assess whether an existing product meets your requirement, looking at capability, security, integration, data ownership, operating cost and vendor dependency. Our rule of thumb is to buy where a product fits, integrate where it is practical and build only where it is necessary.",
    ],
  },
];

const approach = [
  { title: "Define the problem", body: "Understand the operational requirement before choosing any technology." },
  { title: "Investigate", body: "Work out the constraints, the existing options and the technical unknowns." },
  { title: "Architect", body: "Design the system, its security boundaries and how it will be deployed." },
  { title: "Prototype", body: "Test the riskiest assumptions early and cheaply." },
  { title: "Engineer", body: "Build the capability with the right tools for the job." },
  { title: "Test", body: "Challenge functionality, security and behavior under realistic conditions." },
  { title: "Deploy", body: "Integrate with the target environment and hand over cleanly." },
  { title: "Improve", body: "Use real operating experience to refine the system." },
];

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Engineering & R&D", path: "/engineering" }]}
        eyebrow="Engineering & Applied R&D"
        title="When the right tool does not exist, we build it."
        intro={[
          "Some security problems cannot be solved by configuring an existing product. They need software, automation, data engineering or hardware integration designed around a specific environment.",
          "Our engineering team builds those capabilities. It is part of our cybersecurity practice, and every project starts from a security problem.",
        ]}
        photo={photos.engineeringTeam}
        variant="split"
        actions={
          <ButtonLink href="/contact?topic=engineering" variant="light">
            Discuss a technical challenge
          </ButtonLink>
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <OnThisPage items={capabilities.map((c) => ({ id: c.id, title: c.title }))} />
          </aside>
          <div className="space-y-14">
            {capabilities.map((c, i) => (
              <CapabilityBlock key={c.id} cap={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader tone="dark" eyebrow="Our engineering approach" title="From requirement to working system" />
          <div className="mt-12">
            <StepList steps={approach} tone="dark" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring us a difficult technical problem."
        body="Research when it is needed, engineering when it is possible, and a working system at the end."
        action={{ label: "Discuss a technical challenge", href: "/contact?topic=engineering" }}
      />
    </>
  );
}
