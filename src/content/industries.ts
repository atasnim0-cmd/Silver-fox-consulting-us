import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "aviation-aerospace",
    name: "Aviation & Aerospace",
    blurb:
      "Security for airlines, airports, MRO providers, manufacturers and the suppliers behind them, from flight operations to CMMC.",
    metaTitle: "Cybersecurity for Aviation & Aerospace",
    metaDescription:
      "Cybersecurity for airlines, airports, MRO providers, aircraft manufacturers and aerospace suppliers in Texas and across the U.S., including CMMC readiness and export-controlled data protection.",
    photo: "jetEngine",
    hero: {
      eyebrow: "Industries / Aviation & Aerospace",
      title: "Security for the companies that keep aircraft flying.",
      intro: [
        "Texas is one of the busiest aviation and aerospace states in the country. It has major airline hubs in Dallas, Fort Worth and Houston, aircraft and rotorcraft production in North Texas, human spaceflight work in Houston and thousands of maintenance shops and parts suppliers in between.",
        "When a system goes down in this industry, flights stop, aircraft sit in the hangar and contracts slip. We help airlines, airports, MRO providers, manufacturers and suppliers protect operations and engineering data and meet the security requirements their regulators and customers set.",
      ],
    },
    pressures: {
      title: "What aviation and aerospace companies are dealing with",
      items: [
        {
          title: "Operations that cannot stop",
          body: "Crew scheduling, maintenance tracking, baggage, fueling and flight planning all run on connected systems. An outage or ransomware attack on any one of them can ground aircraft within hours.",
        },
        {
          title: "Valuable engineering data",
          body: "Aircraft designs, specifications and maintenance data are a long-standing target for nation-state groups, who often go after smaller suppliers holding the same drawings as the manufacturer.",
        },
        {
          title: "CMMC and export controls",
          body: "Suppliers to defense programs need a CMMC status to win work, and technical data covered by ITAR or the EAR has to be kept away from anyone not authorized to see it.",
        },
        {
          title: "Regulators and reporting",
          body: "TSA sets cybersecurity requirements for certain airport and aircraft operators, and DFARS 252.204-7012 requires defense contractors to report cyber incidents to DoD within 72 hours.",
        },
      ],
    },
    work: {
      title: "How we help aviation and aerospace companies",
      items: [
        "Security assessments for airlines, airports, charter operators and MRO providers",
        "Network segmentation and testing for hangar, manufacturing and OT environments",
        "CMMC Level 1 and Level 2 readiness for aerospace suppliers",
        "Protection of export-controlled technical data under ITAR and the EAR",
        "Incident response plans built around flight operations and reporting rules",
        "Supplier risk reviews for manufacturers managing their own supply chain",
      ],
    },
    frameworks: ["cmmc", "nist-800-171", "iso-9001", "iec-62443", "nist-csf"],
    services: ["strategy-risk-compliance", "penetration-testing", "managed-detection-response", "incident-response"],
    faqs: [
      {
        q: "We run a repair station, not a defense supplier. Is this relevant to us?",
        a: "Yes. Repair stations and MRO providers hold maintenance records, customer aircraft data and often parts traceability systems that operators depend on. We scale the work to your size, starting with the systems that would keep aircraft from returning to service if they went down.",
      },
      {
        q: "We are a small aerospace supplier. Does CMMC really apply to us?",
        a: "If you hold a DoD contract or subcontract and receive Federal Contract Information or Controlled Unclassified Information, it very likely does. Many small suppliers only need Level 1, which is far less work than Level 2. The first step is confirming what information you actually receive.",
      },
      {
        q: "Do you help with AS9100?",
        a: "AS9100 builds on ISO 9001. We help aerospace companies with the ISO 9001 foundation and the information security controls their quality system relies on. Certification itself is issued by an accredited certification body.",
      },
    ],
  },

  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    blurb:
      "Security for oil and gas, power generation, pipelines and utilities, where IT and operational technology meet.",
    metaTitle: "Cybersecurity for Energy, Oil & Gas and Utilities",
    metaDescription:
      "IT and OT security, ICS testing, secure remote access and incident readiness for oil and gas, pipeline, power and utility companies in Texas.",
    photo: "refineryDusk",
    hero: {
      eyebrow: "Industries / Energy & Utilities",
      title: "Security for energy companies where IT meets the plant floor.",
      intro: [
        "Texas produces more oil, natural gas and wind power than any other state and operates its own power grid. The companies behind that output depend on industrial control systems that were never designed to face the internet.",
        "We help producers, midstream operators and utilities secure the connection between business networks and operational technology without putting safety or uptime at risk.",
      ],
    },
    pressures: {
      title: "What energy operators are dealing with",
      items: [
        {
          title: "IT and OT convergence",
          body: "Remote access, cloud analytics and connected sensors have linked plant networks to corporate IT. Many OT incidents start on the IT side.",
        },
        {
          title: "Regulatory requirements",
          body: "Depending on the asset, NERC CIP standards, TSA security directives for pipelines and other federal requirements may apply, on top of customer and insurer expectations.",
        },
        {
          title: "Ransomware",
          body: "Even when control systems are not hit directly, ransomware on business systems can force an operator to shut down operations as a precaution.",
        },
        {
          title: "Safety comes first",
          body: "Testing and changes in OT environments have to be planned around safety and uptime. Methods that are routine in IT can be dangerous on a live plant.",
        },
      ],
    },
    work: {
      title: "How we help energy companies",
      items: [
        "IT and OT network segmentation reviews",
        "Secure remote access for vendors and engineers",
        "OT asset inventory and risk assessment",
        "Carefully scoped OT and ICS penetration testing",
        "OT-aware monitoring and incident response planning",
        "Tabletop exercises that include operations staff",
        "Cyber range exercises built on RANGE",
      ],
    },
    frameworks: ["iec-62443", "nist-csf"],
    services: [
      "cloud-application-infrastructure",
      "penetration-testing",
      "managed-detection-response",
      "incident-response",
    ],
    faqs: [
      {
        q: "Can you test our OT environment without disrupting operations?",
        a: "Yes, with careful planning. OT testing usually relies on passive methods, testing in a lab or digital twin, and active testing only in agreed windows on systems where it is safe. Operations and safety staff are involved in planning from the start.",
      },
    ],
  },

  {
    slug: "healthcare",
    name: "Healthcare",
    blurb:
      "HIPAA risk analysis, ransomware readiness and security operations for hospitals, clinics and health tech companies.",
    metaTitle: "Healthcare Cybersecurity & HIPAA Security Services",
    metaDescription:
      "HIPAA Security Rule risk analysis, ransomware readiness, medical device security and incident response for Texas hospitals, clinics and health tech companies.",
    photo: "hospitalHallway",
    hero: {
      eyebrow: "Industries / Healthcare",
      title: "Keep patient data safe and clinical systems running.",
      intro: [
        "Healthcare is one of the most targeted industries in the country. Texas has some of the largest medical centers in the world, along with thousands of clinics, practices and the technology companies that serve them.",
        "We help healthcare organizations meet HIPAA and Texas requirements, prepare for ransomware and get to the bottom of incidents quickly when they happen.",
      ],
    },
    pressures: {
      title: "What healthcare organizations are dealing with",
      items: [
        {
          title: "Ransomware",
          body: "An attack can divert ambulances, delay procedures and push staff back to paper. How fast you recover matters as much as prevention.",
        },
        {
          title: "OCR enforcement",
          body: "The HHS Office for Civil Rights regularly settles cases where organizations could not show an accurate, current risk analysis.",
        },
        {
          title: "Third-party risk",
          body: "Billing companies, EHR vendors and other business associates hold large amounts of patient data, and a breach at one vendor affects everyone downstream.",
        },
        {
          title: "Connected medical devices",
          body: "Many devices run older operating systems that cannot be patched easily, so they need network controls and monitoring instead.",
        },
      ],
    },
    work: {
      title: "How we help healthcare organizations",
      items: [
        "HIPAA Security Rule risk analysis",
        "Alignment with the Texas Medical Records Privacy Act",
        "Ransomware readiness and backup recovery testing",
        "Medical device network segmentation",
        "Managed detection and response",
        "Incident response and forensic investigation",
        "Security programs for health tech companies",
      ],
    },
    frameworks: ["hipaa", "nist-csf", "soc-2"],
    services: ["strategy-risk-compliance", "managed-detection-response", "incident-response", "identity-data-security"],
    faqs: [
      {
        q: "We are a small practice. Where should we start?",
        a: "With a risk analysis, because it is both a HIPAA requirement and the best way to decide where to spend. For most small practices the biggest wins are MFA on email and remote access, tested backups kept offline and a simple plan for what to do if systems go down.",
      },
    ],
  },

  {
    slug: "financial-services",
    name: "Financial Services",
    blurb:
      "Security testing, compliance and monitoring for banks, credit unions, fintech companies and wealth managers.",
    metaTitle: "Cybersecurity for Banks, Credit Unions & Fintech",
    metaDescription:
      "Penetration testing, examiner-ready security programs, BEC prevention and managed detection for Texas banks, credit unions, fintech and financial firms.",
    photo: "dallasTowersNight",
    hero: {
      eyebrow: "Industries / Financial Services",
      title: "Security programs that stand up to examiners and attackers.",
      intro: [
        "Dallas and the rest of Texas have become one of the country's largest financial centers, home to banks, credit unions, asset managers, insurers and a fast-growing fintech scene.",
        "Financial firms face skilled attackers, wire fraud and close regulatory scrutiny. We help them test their defenses, meet examiner expectations and respond quickly when money or data is at risk.",
      ],
    },
    pressures: {
      title: "What financial firms are dealing with",
      items: [
        {
          title: "Examiner expectations",
          body: "Banking regulators expect a risk-based information security program, independent testing and board oversight, and they ask to see the evidence.",
        },
        {
          title: "GLBA Safeguards Rule",
          body: "Non-bank financial firms covered by the FTC's Safeguards Rule must keep a written security program and report certain breaches affecting 500 or more customers to the FTC within 30 days.",
        },
        {
          title: "Wire fraud and BEC",
          body: "Business email compromise remains one of the costliest types of cybercrime reported to the FBI, and financial firms and their clients are prime targets.",
        },
        {
          title: "Public company disclosure",
          body: "Publicly traded firms must disclose material cybersecurity incidents on Form 8-K within four business days of determining that the incident is material.",
        },
      ],
    },
    work: {
      title: "How we help financial firms",
      items: [
        "Penetration testing and red team exercises",
        "Independent testing for examiner and audit requirements",
        "Business email compromise prevention and response",
        "Identity and privileged access security",
        "Managed detection and response",
        "Board reporting and virtual CISO services",
        "PCI DSS and SOC 2 readiness",
      ],
    },
    frameworks: ["pci-dss", "swift-cscf", "soc-1", "soc-2", "nist-csf"],
    services: [
      "penetration-testing",
      "identity-data-security",
      "managed-detection-response",
      "strategy-risk-compliance",
    ],
    faqs: [
      {
        q: "Can your testing reports be shared with our examiners?",
        a: "Yes. Reports are written so they can be shared with regulators, auditors and the board, with an executive summary up front and the technical detail in appendices.",
      },
    ],
  },

  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    blurb: "SOC 2, application security and cloud security for software companies selling to larger customers.",
    metaTitle: "Cybersecurity for SaaS & Technology Companies",
    metaDescription:
      "SOC 2 and ISO 27001 readiness, application and API penetration testing, cloud security and AI security testing for SaaS and technology companies.",
    photo: "engineeringTeam",
    hero: {
      eyebrow: "Industries / Technology & SaaS",
      title: "Close enterprise deals without stalling on security reviews.",
      intro: [
        "Austin and the rest of Texas are home to a large and growing share of the country's software companies, from early-stage startups to public SaaS providers.",
        "As soon as you sell to larger customers, security becomes part of the sale. We help software companies pass security reviews, earn SOC 2 and ISO 27001 and build products that hold up to real attackers.",
      ],
    },
    pressures: {
      title: "What software companies are dealing with",
      items: [
        {
          title: "Security questionnaires",
          body: "Enterprise buyers send long questionnaires and ask for SOC 2 reports, penetration test summaries and policies before they sign.",
        },
        {
          title: "Cloud misconfiguration",
          body: "Fast-moving teams create cloud resources quickly, and one exposed storage bucket or overly broad IAM role can undo a lot of good work.",
        },
        {
          title: "Software supply chain",
          body: "Dependencies, CI/CD pipelines and developer accounts are popular targets because one compromise can reach every customer.",
        },
        {
          title: "AI features",
          body: "Products with LLM features bring new risks such as prompt injection and data leakage, and customers have started asking about them.",
        },
      ],
    },
    work: {
      title: "How we help software companies",
      items: [
        "SOC 2 and ISO 27001 readiness",
        "Web application and API penetration testing",
        "Cloud security reviews for AWS, Azure and Google Cloud",
        "DevSecOps and CI/CD hardening",
        "AI and LLM application security testing",
        "Help answering customer security questionnaires",
        "Fractional CISO support for growing companies",
      ],
    },
    frameworks: ["soc-2", "soc-3", "iso-27001", "iso-27017", "nist-800-218", "tx-ramp"],
    services: [
      "penetration-testing",
      "cloud-application-infrastructure",
      "strategy-risk-compliance",
      "identity-data-security",
    ],
    faqs: [
      {
        q: "Should we do SOC 2 or ISO 27001 first?",
        a: "If most of your customers are in the United States, SOC 2 usually comes first. If you sell heavily into Europe, ISO 27001 may matter more. Many companies end up with both, and a program designed with both in mind avoids doing the work twice.",
      },
    ],
  },

  {
    slug: "state-local-government",
    name: "State & Local Government",
    blurb:
      "Assessments, incident readiness and TX-RAMP guidance for Texas agencies, cities, counties and school districts.",
    metaTitle: "Cybersecurity for Texas State & Local Government",
    metaDescription:
      "Cybersecurity assessments, ransomware readiness, incident response and TX-RAMP guidance for Texas state agencies, cities, counties and school districts.",
    photo: "texasCapitolDome",
    hero: {
      eyebrow: "Industries / State & Local Government",
      title: "Security for the public services Texans rely on.",
      intro: [
        "Cities, counties, school districts, utilities and state agencies hold sensitive records and run services residents depend on every day. Many of them do it with small IT teams and tight budgets.",
        "In 2019, a coordinated ransomware attack hit 22 Texas local governments at once. We help public sector organizations reduce that kind of risk, meet state requirements and recover quickly if an attack gets through.",
      ],
    },
    pressures: {
      title: "What public sector organizations are dealing with",
      items: [
        {
          title: "Ransomware",
          body: "Public bodies are frequent ransomware targets, and outages can affect 911 dispatch, utility billing, courts and schools.",
        },
        {
          title: "State training requirements",
          body: "Texas law requires state and local government employees who use a computer for at least a quarter of their duties to complete certified cybersecurity training every year.",
        },
        {
          title: "Vendor requirements",
          body: "State agencies must use TX-RAMP certified cloud services, and many local governments apply similar scrutiny to their own vendors.",
        },
        {
          title: "Limited resources",
          body: "Small IT teams cover everything from the help desk to security, so priorities have to be clear and realistic.",
        },
      ],
    },
    work: {
      title: "How we help public sector organizations",
      items: [
        "Assessments aligned to NIST CSF and the Texas Cybersecurity Framework",
        "Ransomware readiness and backup recovery testing",
        "Incident response plans and tabletop exercises",
        "Penetration testing of public-facing services",
        "Managed detection and response for small teams",
        "TX-RAMP guidance for agencies and their vendors",
      ],
    },
    frameworks: ["nist-csf", "nist-800-53", "tx-ramp"],
    services: ["strategy-risk-compliance", "incident-response", "managed-detection-response", "penetration-testing"],
    faqs: [
      {
        q: "Can you work within our procurement process?",
        a: "Yes. Tell us how your procurement works, whether that is a formal RFP, a quote under your purchasing threshold or another route, and we will provide the documentation you need.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
