import type { Framework } from "./types";

/*
 * Fact check notes (verify again before launch and once a year after):
 * - CMMC: program rule 32 CFR Part 170 effective Dec 16, 2024. DFARS rule effective
 *   Nov 10, 2025, which started Phase 1. Phases run to Nov 10, 2028. Level 2 uses
 *   NIST SP 800-171 Rev. 2. Conditional Level 2 requires at least 88 of 110 points
 *   and POA&M closeout within 180 days.
 * - PCI DSS v4.0.1 published June 2024; future-dated v4.0 requirements mandatory
 *   from March 31, 2025.
 * - NIST CSF 2.0 published Feb 26, 2024.
 * - ISO/IEC 27001:2022 Annex A has 93 controls in 4 themes.
 * - Texas breach notification: Bus. & Com. Code 521.053.
 */

export const frameworks: Framework[] = [
  {
    slug: "cmmc",
    name: "CMMC 2.0 & NIST SP 800-171",
    short: "CMMC 2.0",
    blurb:
      "Readiness for defense contractors that handle Federal Contract Information or Controlled Unclassified Information.",
    appliesTo: "Defense contractors and subcontractors",
    metaTitle: "CMMC 2.0 & NIST SP 800-171 Readiness",
    metaDescription:
      "CMMC Level 1 and Level 2 readiness, NIST SP 800-171 gap assessments, SSP and POA&M support, and C3PAO assessment preparation for defense contractors.",
    hero: {
      eyebrow: "Compliance / CMMC",
      title: "Get ready for CMMC before it shows up in your next contract.",
      intro: [
        "CMMC is now part of Department of Defense contracting. Since November 10, 2025, contracts can require a CMMC level as a condition of award, and the requirements phase in through November 2028.",
        "We help prime contractors and subcontractors in Texas and across the defense industrial base work out which level applies, close the gaps against NIST SP 800-171 and prepare for a self-assessment or a C3PAO certification assessment.",
      ],
    },
    facts: [
      { label: "Applies to", value: "DoD contractors and subcontractors that handle FCI or CUI" },
      { label: "Level 1", value: "15 basic safeguarding requirements, annual self-assessment" },
      {
        label: "Level 2",
        value: "110 requirements from NIST SP 800-171 Rev. 2, assessed by the contractor or a C3PAO every three years",
      },
      { label: "Level 3", value: "Level 2 plus 24 requirements from NIST SP 800-172, assessed by DCMA DIBCAC" },
      { label: "Rollout", value: "Four phases, November 10, 2025 to November 10, 2028" },
    ],
    overview: {
      title: "What CMMC changes",
      body: [
        "CMMC adds few new security requirements. Most of them have been in DFARS clause 252.204-7012 and NIST SP 800-171 for years. What changes is verification. Instead of relying on a contractor's self-reported score in the Supplier Performance Risk System (SPRS), DoD now requires an assessment plus an annual affirmation by a senior official, and for many contracts the assessment comes from an authorized third party.",
        "Accuracy matters. Affirmations are made to the federal government, and the Department of Justice has used the False Claims Act to pursue contractors that misrepresented their cybersecurity compliance.",
        "One detail trips people up: CMMC Level 2 is assessed against Revision 2 of NIST SP 800-171, even though Revision 3 was published in May 2024.",
      ],
    },
    help: [
      {
        id: "scoping",
        title: "Scoping and the CUI boundary",
        summary: "Decide exactly which systems, people and facilities are in scope.",
        body: [
          "The size of your assessment depends on where CUI flows. We map that flow, help you decide whether an enclave makes sense and categorize assets the way the CMMC scoping guidance requires.",
        ],
        groups: [
          {
            items: [
              "CUI data flow mapping",
              "Asset inventory and categorization",
              "Enclave design options",
              "Review of external service providers and cloud services, including FedRAMP Moderate equivalency",
            ],
          },
        ],
      },
      {
        id: "gap-assessment",
        title: "Gap assessment",
        summary: "Measure where you stand against all 110 requirements.",
        groups: [
          {
            items: [
              "Assessment against NIST SP 800-171 Rev. 2 and the 320 assessment objectives in SP 800-171A",
              "SPRS score calculation",
              "System Security Plan (SSP) review",
              "Plan of Action and Milestones (POA&M) review",
              "Prioritized remediation roadmap",
            ],
          },
        ],
      },
      {
        id: "remediation",
        title: "Remediation",
        summary: "Close the gaps with practical fixes that fit your budget.",
        groups: [
          {
            items: [
              "Policy and procedure development",
              "Technical control implementation",
              "Microsoft 365 GCC High and enclave planning",
              "Multi-factor authentication, logging and encryption",
              "Incident response and DFARS 252.204-7012 reporting procedures",
            ],
          },
        ],
      },
      {
        id: "readiness",
        title: "Mock assessment and readiness",
        summary: "Rehearse the real assessment before it counts.",
        groups: [
          {
            items: [
              "Mock assessment following the CMMC assessment process",
              "Evidence organized by assessment objective",
              "Interview preparation for staff",
              "Support during the C3PAO assessment",
              "POA&M closeout within the 180-day window",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who certifies you",
      body: "Level 2 certification assessments are performed by C3PAOs authorized by the Cyber AB, and conflict-of-interest rules keep the firm that prepares you from also certifying you. We focus on readiness and work alongside the C3PAO you choose.",
    },
    timeline: [
      { title: "Scope", body: "Map CUI and define the assessment boundary." },
      { title: "Assess", body: "Score every requirement and update the SSP and POA&M." },
      { title: "Remediate", body: "Close gaps in priority order and collect evidence as you go." },
      { title: "Rehearse", body: "Run a mock assessment and prepare staff for interviews." },
      { title: "Certify", body: "Complete the self-assessment or C3PAO assessment and the annual affirmation." },
    ],
    services: [
      "strategy-risk-compliance",
      "cloud-application-infrastructure",
      "identity-data-security",
      "penetration-testing",
    ],
    faqs: [
      {
        q: "Which CMMC level do we need?",
        a: "It depends on the information you handle. If you only handle Federal Contract Information, Level 1 usually applies. If you handle Controlled Unclassified Information, expect Level 2. Level 3 is reserved for a smaller set of higher-risk programs. Your contract and the DFARS clauses in it have the final word, and we can help you read them.",
      },
      {
        q: "Can we use a POA&M for open items?",
        a: "In limited cases. At Level 2 you can receive conditional status with some requirements on a Plan of Action and Milestones if you score at least 88 of 110 points, but certain high-value requirements cannot be deferred, and every open item has to be closed within 180 days.",
      },
      {
        q: "Does Revision 3 of NIST SP 800-171 apply to CMMC?",
        a: "Not yet. DoD has continued to assess CMMC Level 2 against Revision 2. Revision 3 is still worth reading, because it shows where the requirements are heading.",
      },
    ],
  },

  {
    slug: "soc-2",
    name: "SOC 2",
    short: "SOC 2",
    blurb: "Readiness for SaaS and service companies whose customers ask for a SOC 2 report.",
    appliesTo: "SaaS and service organizations",
    metaTitle: "SOC 2 Readiness Consulting",
    metaDescription:
      "SOC 2 Type 1 and Type 2 readiness, gap assessments, control implementation and audit support for SaaS and service companies.",
    hero: {
      eyebrow: "Compliance / SOC 2",
      title: "Be ready when your biggest customer asks for a SOC 2 report.",
      intro: [
        "For many B2B software and service companies, a SOC 2 report is now expected in enterprise deals. Procurement teams ask for it before they sign, and a missing report can stall a sale for months.",
        "We help you prepare efficiently: choosing the right scope, putting controls in place that fit how your team already works and collecting evidence that stands up to the auditor.",
      ],
    },
    facts: [
      { label: "Issued by", value: "A licensed CPA firm" },
      { label: "Based on", value: "AICPA Trust Services Criteria" },
      { label: "Always included", value: "Security (the Common Criteria)" },
      { label: "Optional", value: "Availability, Processing Integrity, Confidentiality and Privacy" },
      {
        label: "Report types",
        value: "Type 1 covers design on one date. Type 2 covers operation over a period, often 3 to 12 months.",
      },
    ],
    overview: {
      title: "Type 1 or Type 2?",
      body: [
        "A Type 1 report looks at whether your controls are designed properly on a single date. A Type 2 report tests whether they actually operated over a review period. Most enterprise customers want Type 2, but a Type 1 can be a useful first step while the Type 2 period runs.",
        "Scope matters as much as type. Including every system and every optional criterion makes the audit longer and more expensive, and it does not always help the sale. We help you scope it to what your customers are actually asking for.",
      ],
    },
    help: [
      {
        id: "readiness",
        title: "Readiness assessment",
        summary: "Know what the auditor will look for before they arrive.",
        groups: [
          {
            items: [
              "Scope and Trust Services Criteria selection",
              "Gap assessment against the criteria",
              "Control design that fits your stack and team size",
              "Review of vendors and subservice organizations",
            ],
          },
        ],
      },
      {
        id: "implementation",
        title: "Control implementation",
        summary: "Controls that work with your existing tools and habits.",
        groups: [
          {
            items: [
              "Security policies people will actually read",
              "Access reviews, onboarding and offboarding",
              "Change management inside your Git and CI/CD workflow",
              "Logging, monitoring and incident response",
              "Vendor management",
              "Annual risk assessment",
            ],
          },
        ],
      },
      {
        id: "audit-support",
        title: "Evidence and audit support",
        summary: "A smoother audit with fewer surprises.",
        groups: [
          {
            items: [
              "Evidence collection plans",
              "Compliance automation platform setup and tuning",
              "Help choosing an audit firm",
              "Support during fieldwork",
              "Annual penetration test",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who issues the report",
      body: "Only licensed CPA firms can issue a SOC 2 report. We do the readiness work and the security work behind it, and we coordinate with the audit firm you choose.",
    },
    timeline: [
      { title: "Scope", body: "Choose systems and criteria based on what customers need." },
      { title: "Gap assessment", body: "Compare current controls against the criteria." },
      { title: "Remediate", body: "Implement missing controls and start collecting evidence." },
      { title: "Type 1", body: "Optional point-in-time report to show early progress." },
      { title: "Type 2", body: "Controls operate through the review period, then the auditor reports." },
    ],
    services: [
      "strategy-risk-compliance",
      "penetration-testing",
      "cloud-application-infrastructure",
      "identity-data-security",
    ],
    faqs: [
      {
        q: "How long does it take to get a SOC 2 report?",
        a: "It depends on where you start. Readiness work can take anywhere from a few weeks to several months. A Type 2 audit then needs a review period, commonly three to twelve months, before the auditor can issue the report.",
      },
      {
        q: "Do we need a compliance automation platform?",
        a: "Not necessarily. These platforms can save time on evidence collection, especially for small teams, but they do not implement controls for you. We can help you decide whether one is worth it and set it up properly if you choose one.",
      },
      {
        q: "Is a penetration test required for SOC 2?",
        a: "The Trust Services Criteria do not name penetration testing as a requirement, but most auditors expect some form of control testing, and many customers ask for a recent penetration test report alongside your SOC 2 report.",
      },
    ],
  },

  {
    slug: "hipaa",
    name: "HIPAA Security",
    short: "HIPAA",
    blurb:
      "Security Rule risk analysis and remediation for healthcare providers, health plans and their business associates.",
    appliesTo: "Covered entities and business associates",
    metaTitle: "HIPAA Security Risk Analysis & Compliance",
    metaDescription:
      "HIPAA Security Rule risk analysis, safeguard implementation, ransomware readiness and business associate security for healthcare organizations in Texas.",
    hero: {
      eyebrow: "Compliance / HIPAA",
      title: "Protect patient data and meet the HIPAA Security Rule.",
      intro: [
        "Healthcare organizations are a leading target for ransomware, and an attack can take clinical systems offline as well as expose patient records. The HIPAA Security Rule requires covered entities and their business associates to protect electronic protected health information (ePHI) and to understand the risks to it.",
        "We help hospitals, clinics, health tech companies and their vendors run a proper risk analysis, fix what it finds and document the program in a way that holds up if the Office for Civil Rights comes asking.",
      ],
    },
    facts: [
      { label: "Regulator", value: "HHS Office for Civil Rights (OCR)" },
      { label: "Applies to", value: "Covered entities and business associates that handle ePHI" },
      { label: "Core requirement", value: "An accurate and thorough risk analysis, followed by risk management" },
      { label: "Safeguards", value: "Administrative, physical and technical" },
      { label: "Texas", value: "The Texas Medical Records Privacy Act adds state requirements" },
    ],
    overview: {
      title: "Risk analysis is where most programs fall short",
      body: [
        "When OCR investigates a breach, one of the first documents it asks for is the risk analysis. A missing, outdated or superficial risk analysis is one of the most common problems cited in OCR enforcement actions.",
        "Texas adds its own layer. The Texas Medical Records Privacy Act, often called HB 300, applies to a wider group of organizations than HIPAA and has its own training and disclosure rules. We help you account for both.",
      ],
    },
    help: [
      {
        id: "risk-analysis",
        title: "Security Rule risk analysis",
        summary: "The document regulators ask for first.",
        groups: [
          {
            items: [
              "Inventory of systems that create, receive, store or transmit ePHI",
              "Threat and vulnerability identification",
              "Likelihood and impact ratings",
              "Documentation aligned with HHS guidance",
              "Risk management plan",
            ],
          },
        ],
      },
      {
        id: "safeguards",
        title: "Safeguard implementation",
        summary: "Put the administrative, physical and technical controls in place.",
        groups: [
          {
            items: [
              "Access controls and MFA",
              "Audit logging and review",
              "Encryption at rest and in transit",
              "Backup, disaster recovery and emergency mode operations",
              "Device and media controls",
              "Workforce security training",
            ],
          },
        ],
      },
      {
        id: "business-associates",
        title: "Business associates",
        summary: "Security for vendors and the vendors you rely on.",
        groups: [
          {
            items: [
              "Business associate inventory",
              "Vendor security reviews",
              "Support with business associate agreement reviews",
              "Security programs for health tech companies selling to providers",
            ],
          },
        ],
      },
      {
        id: "ransomware",
        title: "Ransomware readiness",
        summary: "Keep patient care going if systems go down.",
        groups: [
          {
            items: [
              "Backup isolation and recovery testing",
              "Clinical downtime procedures",
              "Tabletop exercises with clinical and IT leadership",
              "Incident response and breach notification planning",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Legal questions go to counsel",
      body: "We handle the security side of HIPAA compliance. Questions about breach notification obligations, business associate agreements and the Privacy Rule belong with your legal counsel, and we work closely with counsel during incidents.",
    },
    services: ["strategy-risk-compliance", "managed-detection-response", "incident-response", "identity-data-security"],
    faqs: [
      {
        q: "How often should we update our HIPAA risk analysis?",
        a: "The Security Rule does not set a fixed schedule, but it expects the risk analysis to stay current. In practice that means reviewing it at least once a year and whenever something significant changes, such as a new EHR, a move to the cloud or an acquisition.",
      },
      {
        q: "Is there an official HIPAA certification?",
        a: "No. HHS does not certify organizations as HIPAA compliant. Some vendors sell certificates, but they carry no regulatory weight. What matters is a documented risk analysis, a working security program and evidence that you follow it.",
      },
      {
        q: "Does HIPAA apply to our health tech startup?",
        a: "If you create, receive, maintain or transmit protected health information on behalf of a covered entity, you are likely a business associate and the Security Rule applies to you directly. Your customers will usually ask you to sign a business associate agreement.",
      },
    ],
  },

  {
    slug: "pci-dss",
    name: "PCI DSS 4.0.1",
    short: "PCI DSS",
    blurb: "Scope reduction, gap assessments and required testing for organizations that handle payment card data.",
    appliesTo: "Merchants and service providers that handle card data",
    metaTitle: "PCI DSS 4.0.1 Readiness & Penetration Testing",
    metaDescription:
      "PCI DSS 4.0.1 scoping, segmentation, gap assessments, payment page script controls and Requirement 11.4 penetration testing for merchants and service providers.",
    hero: {
      eyebrow: "Compliance / PCI DSS",
      title: "Meet PCI DSS 4.0.1 without letting scope get out of hand.",
      intro: [
        "Any organization that stores, processes or transmits payment card data has to comply with the Payment Card Industry Data Security Standard. Version 4.0.1 is current, and the requirements that were future-dated in version 4.0 became mandatory on March 31, 2025.",
        "We help merchants and service providers shrink their cardholder data environment, close gaps against the standard and complete the testing it requires.",
      ],
    },
    facts: [
      { label: "Set by", value: "PCI Security Standards Council" },
      { label: "Current version", value: "PCI DSS v4.0.1" },
      {
        label: "Validation",
        value: "Self-Assessment Questionnaire or Report on Compliance, depending on volume and card brand rules",
      },
      {
        label: "Testing",
        value: "Annual penetration testing and quarterly external scans by an Approved Scanning Vendor",
      },
    ],
    overview: {
      title: "Scope is the biggest lever",
      body: [
        "The fewer systems that touch card data, the fewer controls you have to apply and prove. Tokenization, hosted payment pages and proper network segmentation can shrink the cardholder data environment considerably.",
        "Version 4.0 also added requirements that catch many organizations off guard, such as managing and monitoring the scripts that run on payment pages (Requirements 6.4.3 and 11.6.1) and documenting targeted risk analyses to justify how often certain controls run.",
      ],
    },
    help: [
      {
        id: "scoping",
        title: "Scoping and segmentation",
        summary: "Keep the cardholder data environment as small as possible.",
        groups: [
          {
            items: [
              "Cardholder data flow mapping",
              "Scope reduction strategy",
              "Segmentation design and segmentation testing",
              "Tokenization and third-party payment review",
            ],
          },
        ],
      },
      {
        id: "gap-assessment",
        title: "Gap assessment and remediation",
        summary: "Find and close gaps against version 4.0.1.",
        groups: [
          {
            items: [
              "Gap assessment against PCI DSS 4.0.1",
              "Targeted risk analyses",
              "Payment page script management",
              "Policy and procedure updates",
              "Remediation support",
            ],
          },
        ],
      },
      {
        id: "testing",
        title: "Required testing",
        summary: "The technical testing the standard calls for.",
        groups: [
          {
            items: [
              "Internal and external penetration testing (Requirement 11.4)",
              "Segmentation testing",
              "Application penetration testing",
              "Wireless testing",
              "Retesting after remediation",
            ],
          },
        ],
      },
      {
        id: "validation",
        title: "Validation support",
        summary: "Get the paperwork right the first time.",
        groups: [
          {
            items: [
              "Help choosing and completing the right SAQ",
              "Preparation for a QSA assessment",
              "Evidence preparation",
              "Responsibility matrices for service providers",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who completes the Report on Compliance",
      body: "A Report on Compliance is completed by a Qualified Security Assessor (QSA) company. Our role is readiness and the technical testing the standard requires, working alongside the QSA you select.",
    },
    services: ["penetration-testing", "cloud-application-infrastructure", "strategy-risk-compliance"],
    faqs: [
      {
        q: "Which Self-Assessment Questionnaire do we need?",
        a: "It depends on how you accept payments. A merchant that sends every card transaction to a fully outsourced payment page completes a much shorter SAQ than one that handles card data on its own servers. Your acquiring bank decides whether you can self-assess at all, so confirm with them.",
      },
      {
        q: "How often do we need a penetration test for PCI DSS?",
        a: "At least once every 12 months and after any significant change, for both internal and external testing. Service providers that rely on segmentation also have to test it every six months.",
      },
    ],
  },

  {
    slug: "tx-ramp",
    name: "TX-RAMP",
    short: "TX-RAMP",
    blurb: "Preparation for cloud vendors that want to sell to Texas state agencies.",
    appliesTo: "Cloud vendors selling to Texas state agencies",
    metaTitle: "TX-RAMP Certification Readiness",
    metaDescription:
      "TX-RAMP level determination, gap assessments and submission preparation for cloud and SaaS vendors selling to Texas state agencies.",
    hero: {
      eyebrow: "Compliance / TX-RAMP",
      title: "Sell cloud services to Texas state agencies with TX-RAMP.",
      intro: [
        "The Texas Risk and Authorization Management Program, or TX-RAMP, sets security requirements for cloud computing services used by Texas state agencies. The program is run by the Texas Department of Information Resources (DIR), and agencies generally cannot contract for covered cloud services that lack the required certification.",
        "We help SaaS and cloud vendors work out which level applies, close gaps against the control baseline and prepare a complete, well-documented submission.",
      ],
    },
    facts: [
      { label: "Administered by", value: "Texas Department of Information Resources (DIR)" },
      { label: "Applies to", value: "Cloud computing services used by Texas state agencies" },
      { label: "Levels", value: "Level 1 for lower-risk data, Level 2 for confidential or regulated data" },
      { label: "Control basis", value: "Derived from NIST SP 800-53" },
      { label: "Reuse", value: "An existing FedRAMP authorization may support a TX-RAMP certification" },
    ],
    overview: {
      title: "Why it matters for Texas vendors",
      body: [
        "State agencies buy a large share of their software as cloud services, and TX-RAMP certification is a condition of many of those contracts. Vendors that plan for it early avoid watching a deal wait on a pending review.",
        "The work overlaps heavily with SOC 2, ISO 27001 and FedRAMP. If you already have one of those, much of your documentation can be reused.",
      ],
    },
    help: [
      {
        id: "level",
        title: "Level determination",
        summary: "Start with the right target.",
        groups: [
          {
            items: [
              "Data classification review",
              "Level 1 or Level 2 determination",
              "Scope definition for the cloud offering",
            ],
          },
        ],
      },
      {
        id: "gap-assessment",
        title: "Gap assessment",
        summary: "Measure against the control baseline and reuse what you have.",
        groups: [
          {
            items: [
              "Assessment against the TX-RAMP control baseline",
              "Mapping from existing SOC 2, ISO 27001 or FedRAMP work",
              "Remediation roadmap",
            ],
          },
        ],
      },
      {
        id: "submission",
        title: "Documentation and submission",
        summary: "A complete package with fewer back-and-forth questions.",
        groups: [
          {
            items: [
              "System security documentation",
              "Policies and procedures",
              "Security questionnaire preparation",
              "Review of the package before it goes to DIR",
            ],
          },
        ],
      },
      {
        id: "monitoring",
        title: "Continuous monitoring",
        summary: "Keep the certification in good standing.",
        groups: [
          {
            items: [
              "Vulnerability management",
              "Annual reviews",
              "Change notification processes",
              "Incident reporting procedures",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Certification decisions belong to DIR",
      body: "DIR reviews submissions and grants TX-RAMP certification. We help you prepare an accurate, complete package, but no consultant can guarantee the outcome.",
    },
    services: ["strategy-risk-compliance", "cloud-application-infrastructure", "penetration-testing"],
    faqs: [
      {
        q: "Can we reuse our SOC 2 or FedRAMP work?",
        a: "Often, yes. Many TX-RAMP controls map directly to SOC 2, ISO 27001 and FedRAMP requirements. We map what you already have so you only build what is missing.",
      },
      {
        q: "Does TX-RAMP apply to cities and counties?",
        a: "TX-RAMP is a requirement for state agencies. Local governments are not bound by it in the same way, although some use it as a reference point in their own vendor reviews. Check the requirements in each solicitation.",
      },
    ],
  },

  {
    slug: "iso-27001",
    name: "ISO/IEC 27001:2022",
    short: "ISO 27001",
    blurb: "Build an information security management system that passes certification and keeps working afterward.",
    appliesTo: "Organizations with international customers or partners",
    metaTitle: "ISO 27001 Consulting & Certification Readiness",
    metaDescription:
      "ISO/IEC 27001:2022 ISMS design, Annex A control implementation, internal audits and certification readiness for U.S. companies selling internationally.",
    hero: {
      eyebrow: "Compliance / ISO 27001",
      title: "An ISO 27001 program that keeps working after the audit.",
      intro: [
        "ISO/IEC 27001 is the international standard for information security management systems. U.S. companies usually pursue it when they sell into Europe and other international markets, where it is expected in much the same way SOC 2 is expected at home.",
        "We help you design and run an information security management system (ISMS) that fits your organization, prepare for the certification audit and keep the system healthy between surveillance audits.",
      ],
    },
    facts: [
      { label: "Current version", value: "ISO/IEC 27001:2022" },
      { label: "Certified by", value: "An accredited certification body" },
      { label: "Annex A", value: "93 controls in four themes: organizational, people, physical and technological" },
      { label: "Cycle", value: "Three-year certificate with annual surveillance audits" },
    ],
    overview: {
      title: "SOC 2 and ISO 27001 together",
      body: [
        "Many companies need both: SOC 2 for U.S. customers and ISO 27001 for international ones. The two overlap heavily, so controls, evidence and policies can be shared if the program is designed with both in mind from the start.",
        "The 2022 revision reorganized Annex A and added controls for areas such as threat intelligence, cloud services, data masking and secure coding.",
      ],
    },
    help: [
      {
        id: "isms",
        title: "ISMS design",
        summary: "The management system the standard is built around.",
        groups: [
          {
            items: [
              "Context, scope and interested parties",
              "Information security policy and objectives",
              "Risk assessment and treatment methodology",
              "Statement of Applicability",
              "Roles and responsibilities",
            ],
          },
        ],
      },
      {
        id: "controls",
        title: "Control implementation",
        summary: "Annex A controls that fit how you operate.",
        groups: [
          {
            items: [
              "Annex A control implementation",
              "Supplier and cloud security",
              "Secure development",
              "Incident management",
              "Business continuity",
            ],
          },
        ],
      },
      {
        id: "internal-audit",
        title: "Internal audit and management review",
        summary: "The checks the standard requires you to run yourself.",
        groups: [
          {
            items: [
              "Internal audit program",
              "Independent internal audits",
              "Management review support",
              "Corrective action tracking",
            ],
          },
        ],
      },
      {
        id: "certification",
        title: "Certification support",
        summary: "Stage 1, Stage 2 and every surveillance audit after.",
        groups: [
          {
            items: [
              "Stage 1 and Stage 2 audit preparation",
              "Help choosing a certification body",
              "Support during the audit",
              "Surveillance audit preparation",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Certification comes from an accredited body",
      body: "ISO 27001 certificates are issued by certification bodies accredited for the standard. We help you build the ISMS and can run your internal audits, and we work with the certification body you choose.",
    },
    services: ["strategy-risk-compliance", "cloud-application-infrastructure", "identity-data-security"],
    faqs: [
      {
        q: "How long does ISO 27001 certification take?",
        a: "For a mid-sized organization starting from scratch, reaching the Stage 2 audit often takes six to twelve months. Companies with an existing SOC 2 program can usually move faster because much of the groundwork is already in place.",
      },
      {
        q: "Can you perform our internal audit?",
        a: "Yes. ISO 27001 requires internal audits to be objective and impartial. We can run them for you, as long as we are not auditing work we designed ourselves in the same cycle.",
      },
    ],
  },

  {
    slug: "nist-csf",
    name: "NIST Cybersecurity Framework 2.0",
    short: "NIST CSF 2.0",
    blurb: "A practical way to measure and improve your security program in any industry.",
    appliesTo: "Any organization",
    metaTitle: "NIST Cybersecurity Framework 2.0 Assessments",
    metaDescription:
      "NIST CSF 2.0 maturity assessments, current and target profiles, governance and security roadmaps that boards, insurers and regulators recognize.",
    hero: {
      eyebrow: "Compliance / NIST CSF 2.0",
      title: "Measure your program against the framework everyone recognizes.",
      intro: [
        "The NIST Cybersecurity Framework is voluntary, but it has become the common language of cybersecurity in the United States. Boards, regulators, cyber insurers and customers often ask how an organization measures up against it.",
        "Version 2.0, released in February 2024, added a sixth function, Govern, and broadened the framework to organizations of every size and sector. We use it to give leadership a clear, defensible picture of where the program stands and where it should go next.",
      ],
    },
    facts: [
      { label: "Published by", value: "National Institute of Standards and Technology" },
      { label: "Current version", value: "CSF 2.0, February 2024" },
      { label: "Functions", value: "Govern, Identify, Protect, Detect, Respond and Recover" },
      { label: "Status", value: "Voluntary, and widely referenced by regulators and insurers" },
    ],
    overview: {
      title: "Current profile, target profile, roadmap",
      body: [
        "The framework works best as a planning tool. We document your current profile, agree on a target profile that fits your risk and budget, and turn the difference into a roadmap leadership can fund and track.",
        "Because CSF 2.0 maps to most other frameworks, the same assessment helps with HIPAA, PCI DSS, CMMC and ISO 27001 work. Texas state agencies will also recognize it as the basis of the Texas Cybersecurity Framework.",
      ],
    },
    help: [
      {
        id: "assessment",
        title: "Maturity assessment",
        summary: "An honest baseline across all six functions.",
        groups: [
          { items: ["Current profile across all six functions", "Tier assessment", "Benchmarking for leadership"] },
        ],
      },
      {
        id: "roadmap",
        title: "Target profile and roadmap",
        summary: "Decide where you want to be and how to get there.",
        groups: [
          {
            items: [
              "Target profile based on risk and obligations",
              "Gap analysis",
              "Prioritized roadmap with cost ranges",
            ],
          },
        ],
      },
      {
        id: "governance",
        title: "Governance",
        summary: "The new Govern function, put into practice.",
        groups: [
          {
            items: [
              "Cybersecurity risk management strategy",
              "Roles, responsibilities and authorities",
              "Policy framework",
              "Supply chain risk management",
              "Board reporting",
            ],
          },
        ],
      },
      {
        id: "tracking",
        title: "Progress tracking",
        summary: "Show improvement over time.",
        groups: [
          {
            items: ["Annual reassessment", "Metrics for leadership", "Updates as the business changes"],
          },
        ],
      },
    ],
    services: ["strategy-risk-compliance", "managed-detection-response", "incident-response"],
    faqs: [
      {
        q: "Is the NIST CSF required?",
        a: "For most private companies it is voluntary. Some public sector bodies, regulators and contracts reference it, and many cyber insurers and boards use it as a yardstick, which makes it a sensible default even when nobody requires it.",
      },
      {
        q: "What changed in CSF 2.0?",
        a: "The biggest change is the new Govern function, which covers strategy, roles, policy and supply chain risk. Version 2.0 also made the framework explicitly applicable to organizations of all sizes and added implementation examples and quick-start guides.",
      },
    ],
  },
];

export function getFramework(slug: string): Framework | undefined {
  return frameworks.find((f) => f.slug === slug);
}
