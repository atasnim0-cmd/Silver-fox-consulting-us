import type { Platform } from "./types";

/*
 * Product copy is deliberately careful about what each platform can do today.
 * Before launch, confirm every capability below with the product owners and
 * remove anything that is still on the roadmap. Do not add claims about
 * air-gapped, on-premise or 24/7 operation unless they are in production.
 */

export const platforms: Platform[] = [
  {
    slug: "scope",
    name: "SCOPE",
    category: "External attack surface management",
    question: "Where are we exposed?",
    tagline: "See your organization the way an attacker does.",
    blurb: "Continuous discovery and monitoring of your internet-facing assets, exposures and attack paths.",
    accent: "flare",
    metaTitle: "SCOPE External Attack Surface Management",
    metaDescription:
      "SCOPE discovers internet-facing assets, finds exploitable exposures and leaked credentials, and prioritizes what to fix first.",
    hero: {
      title: "Know what attackers can see.",
      intro: [
        "Your attack surface changes every week. A new cloud service goes live, a forgotten subdomain stays online, a test environment becomes reachable, a certificate expires or a supplier exposes a service you depend on.",
        "Attackers scan for those changes constantly. SCOPE lets your team do the same. It discovers internet-facing assets, finds the exposures that matter and shows what needs attention first.",
      ],
    },
    questions: [
      "Which of our assets can be reached from the internet?",
      "Which services are exposed that should not be?",
      "Which weaknesses can actually be exploited?",
      "Are any of our credentials exposed?",
      "Which exposures combine into a real attack path?",
      "What changed since last week?",
    ],
    capabilities: [
      {
        id: "discovery",
        title: "Discovery",
        summary: "Build the external asset picture, including the parts nobody wrote down.",
        groups: [
          {
            label: "Assets",
            items: [
              "Domains and subdomains",
              "IP ranges and internet-facing hosts",
              "Web applications and APIs",
              "Cloud resources",
              "Remote access services",
              "Email and DNS infrastructure",
              "Certificates",
              "Third-party hosted assets",
            ],
          },
          {
            label: "Shadow IT",
            items: [
              "Forgotten applications",
              "Old development and staging systems",
              "Abandoned domains",
              "Unmanaged cloud resources",
            ],
          },
        ],
      },
      {
        id: "exposure",
        title: "Exposure detection",
        summary: "Find the weaknesses visible from outside.",
        groups: [
          {
            items: [
              "Exposed administrative interfaces",
              "Vulnerable internet-facing software",
              "Vulnerabilities known to be exploited in the wild",
              "Weak TLS and certificate problems",
              "DNS and email security issues",
              "Publicly accessible storage and services",
              "Exposed remote access",
            ],
          },
        ],
      },
      {
        id: "credentials",
        title: "Credential exposure",
        summary: "Sometimes the attack surface is an identity.",
        groups: [
          {
            items: ["Leaked credentials", "Exposed login portals", "Externally reachable identity infrastructure"],
          },
        ],
      },
      {
        id: "prioritization",
        title: "Prioritization and attack paths",
        summary: "Severity alone does not tell you what to fix first.",
        body: [
          "SCOPE weighs each finding by how reachable the asset is, whether the weakness is being exploited in the wild, how important the asset is and how it connects to other exposures. The goal is a short, defensible list of what to fix first.",
        ],
      },
      {
        id: "monitoring",
        title: "Continuous monitoring",
        summary: "Track what changed instead of rebuilding the picture every quarter.",
        groups: [
          {
            items: [
              "New assets and services",
              "Newly opened ports",
              "Certificate and DNS changes",
              "Newly disclosed and newly exploited vulnerabilities",
              "Remediation progress and retesting",
            ],
          },
        ],
      },
    ],
    flow: ["Discover", "Map", "Prioritize", "Remediate", "Verify"],
    useCases: [
      { title: "Attack surface monitoring", body: "Keep an accurate external inventory as infrastructure changes." },
      {
        title: "Penetration test preparation",
        body: "Point manual testers at the areas that deserve the closest look.",
      },
      { title: "Mergers and acquisitions", body: "Get an outside-in view of an acquisition target before closing." },
      { title: "Third-party exposure", body: "Watch the externally visible risk of key suppliers." },
      {
        title: "Executive reporting",
        body: "Turn technical findings into a clear picture of external risk for leadership.",
      },
    ],
    services: [
      "penetration-testing",
      "strategy-risk-compliance",
      "cloud-application-infrastructure",
      "managed-detection-response",
    ],
    faqs: [
      {
        q: "How is SCOPE different from a vulnerability scanner?",
        a: "A scanner checks the assets you tell it about. SCOPE starts by finding assets you may not know you have, then looks at how exposures connect and which ones are worth fixing first. Our penetration testers use the results to decide where to dig deeper.",
      },
      {
        q: "How do we get started?",
        a: "Contact us for a scoping call. We will talk through your environment, the integrations you need and the delivery options that fit.",
      },
    ],
  },

  {
    slug: "signal",
    name: "SIGNAL",
    category: "Security operations and threat intelligence",
    question: "What is happening?",
    tagline: "Turn security data into decisions.",
    blurb:
      "Brings endpoint, identity, network, cloud and threat intelligence data together so analysts can investigate faster.",
    accent: "sky",
    metaTitle: "SIGNAL Security Operations Platform",
    metaDescription:
      "SIGNAL correlates endpoint, identity, network and cloud telemetry with threat intelligence so analysts can investigate and respond faster.",
    hero: {
      title: "Read the signal in your security data.",
      intro: [
        "A single attack can touch an identity provider, a laptop, a SaaS application, a cloud account and a file server. The evidence often ends up spread across six different tools.",
        "SIGNAL brings that evidence together. It correlates events around users, devices and workloads, adds threat intelligence and context, and gives analysts one place to investigate and respond.",
      ],
    },
    questions: [
      "Are these events related?",
      "Which user, device or workload is affected?",
      "Is this behavior malicious?",
      "How far has the activity progressed?",
      "Does threat intelligence change the picture?",
      "What should the analyst do next?",
    ],
    capabilities: [
      {
        id: "collection",
        title: "Collection and enrichment",
        summary: "Bring the right telemetry together and give it context.",
        body: ["SIGNAL is designed to work with the security tools you already run."],
        groups: [
          {
            label: "Sources",
            items: [
              "EDR and XDR",
              "Identity providers and Active Directory",
              "Firewalls, DNS, proxy and VPN",
              "AWS, Azure, Google Cloud and SaaS platforms",
              "Application and authentication logs",
              "Threat intelligence feeds",
            ],
          },
          {
            label: "Enrichment",
            items: [
              "Asset and identity context",
              "Vulnerability data",
              "Threat intelligence",
              "MITRE ATT&CK technique mapping",
              "Historical behavior",
            ],
          },
        ],
      },
      {
        id: "detection",
        title: "Detection",
        summary: "Look for behavior as well as known signatures.",
        groups: [
          {
            items: [
              "Rule-based detection",
              "Behavioral detection",
              "Correlation of low-confidence events",
              "Threat intelligence matching",
              "Anomaly detection",
              "Custom detections for your environment",
            ],
          },
        ],
      },
      {
        id: "investigation",
        title: "Investigation",
        summary: "Follow the user, device or workload instead of chasing individual alerts.",
        groups: [
          {
            items: [
              "Entity-centric investigation",
              "Attack chain and timeline reconstruction",
              "Shared investigation workspace",
              "Analyst notes and evidence tracking",
              "AI-assisted summaries of alerts and incidents",
            ],
          },
        ],
        note: "AI features summarize and explain. Analysts make the decisions.",
      },
      {
        id: "response",
        title: "Response",
        summary: "Context should lead to action.",
        groups: [
          {
            items: [
              "Case creation and escalation",
              "Endpoint isolation",
              "Account disablement and credential resets",
              "Indicator blocking",
              "Ticketing integration",
              "Response playbooks with approval steps",
            ],
          },
        ],
      },
      {
        id: "coverage",
        title: "Detection coverage",
        summary: "See which attacker techniques you can detect and which you cannot.",
        groups: [
          {
            items: [
              "MITRE ATT&CK coverage views",
              "Telemetry gaps",
              "Detection confidence",
              "Validation results from purple team and RANGE exercises",
            ],
          },
        ],
      },
    ],
    flow: ["Collect", "Enrich", "Detect", "Investigate", "Respond"],
    useCases: [
      { title: "SOC modernization", body: "Bring scattered evidence into one connected workflow." },
      { title: "Managed detection and response", body: "Support for our analysts delivering MDR." },
      { title: "Threat hunting", body: "Search across endpoint, identity, network and cloud data." },
      { title: "Incident investigation", body: "Build timelines and relationships between users, systems and events." },
      { title: "Detection engineering", body: "Develop and validate behavior-based detections." },
    ],
    services: ["managed-detection-response", "incident-response", "identity-data-security"],
    faqs: [
      {
        q: "Do we need to replace our SIEM?",
        a: "Not necessarily. SIGNAL is designed to integrate with existing security tools. We look at what you run today and recommend the simplest setup that closes your gaps.",
      },
    ],
  },

  {
    slug: "range",
    name: "RANGE",
    category: "Cyber range and digital twin",
    question: "Can we withstand it?",
    tagline: "Test your defenses before a real attacker does.",
    blurb:
      "Controlled environments for attack simulation, SOC training, purple teaming and incident response exercises.",
    accent: "amber",
    metaTitle: "RANGE Cyber Range & Digital Twin",
    metaDescription:
      "RANGE provides controlled cyber range environments for attack simulation, SOC training, purple teaming and incident response exercises.",
    hero: {
      title: "Prove your defenses somewhere failure is safe.",
      intro: [
        "Policies, diagrams and tabletop discussions show what should happen during an attack. They cannot show what actually happens when an analyst sees an unfamiliar alert at 2 a.m.",
        "RANGE builds controlled environments that mirror the parts of your network that matter, so you can run real attack techniques, train your team and test response plans without touching production.",
      ],
    },
    questions: [
      "Did the control stop the technique?",
      "Did the SOC see it?",
      "Did the analysts understand what they were seeing?",
      "Did the response process work under pressure?",
      "What should change before a real incident?",
    ],
    capabilities: [
      {
        id: "environments",
        title: "Ranges and digital twins",
        summary: "Reproduce the parts of your environment that matter.",
        body: [
          "A digital twin does not need every production detail. It reproduces the systems, relationships and behaviors required to answer a defined question.",
        ],
        groups: [
          {
            items: [
              "Enterprise network environments",
              "Cloud and identity labs",
              "Application security labs",
              "SOC and DFIR training environments",
              "Malware analysis labs",
              "IT and OT environments, including industrial control system scenarios",
            ],
          },
        ],
      },
      {
        id: "simulation",
        title: "Attack simulation",
        summary: "Run realistic techniques safely.",
        groups: [
          {
            items: [
              "Initial access and credential attacks",
              "Privilege escalation and lateral movement",
              "Persistence and command and control",
              "Cloud compromise",
              "Ransomware behavior",
              "Insider scenarios",
              "OT and ICS scenarios",
            ],
          },
        ],
        note: "All simulation runs inside defined isolation, safety and authorization controls.",
      },
      {
        id: "exercises",
        title: "Team exercises",
        summary: "Practice the full loop from attack to recovery.",
        groups: [
          {
            items: [
              "Red team rehearsals",
              "Blue team and SOC training",
              "Purple team validation",
              "Incident response and DFIR exercises",
              "Capture the flag events for skills development",
            ],
          },
        ],
      },
      {
        id: "measurement",
        title: "Measurement",
        summary: "Every exercise should leave evidence behind.",
        groups: [
          {
            items: [
              "Detection coverage",
              "Time to detect and time to investigate",
              "Escalation quality",
              "Containment decisions",
              "Missed telemetry",
              "Control effectiveness",
              "Improvement tracking",
            ],
          },
        ],
      },
    ],
    flow: ["Build", "Simulate", "Exercise", "Measure", "Improve"],
    useCases: [
      { title: "SOC training", body: "Build practical analyst skills on realistic scenarios." },
      { title: "Purple team exercises", body: "Test techniques and improve detections together." },
      {
        title: "Incident response readiness",
        body: "Rehearse the technical and business response before an incident.",
      },
      { title: "OT and ICS exercises", body: "Practice cyber scenarios without affecting live operations." },
      { title: "Technology evaluation", body: "Test security tools and architecture changes before production." },
    ],
    services: ["penetration-testing", "managed-detection-response", "incident-response"],
    faqs: [
      {
        q: "Do you need a copy of our production environment?",
        a: "No. We reproduce the components and relationships needed for the scenario, which is usually a small part of the real environment. Sensitive production data is not required.",
      },
    ],
  },
];

export function getPlatform(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}
