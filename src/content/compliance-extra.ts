import type { Framework } from "./types";

/*
 * Fact check notes (verify again before launch and once a year after):
 * - ISO/IEC 17021-1:2015. ISMS certification bodies also follow ISO/IEC 27006-1:2024.
 *   US accreditation bodies include ANAB and IAS.
 * - ISO 9001:2015 with Amendment 1:2024 (climate change). A full revision is in progress.
 * - ISO/IEC 27017:2015 is written against the ISO/IEC 27002:2013 control set and adds
 *   seven cloud-specific (CLD) controls.
 * - ISA/IEC 62443: parts 2-1, 2-4, 3-2, 3-3, 4-1, 4-2; security levels SL 1 to SL 4;
 *   ISASecure is a product and process certification scheme.
 * - NIST SP 800-53 Rev. 5: 20 control families; baselines in SP 800-53B; assessment in 800-53A.
 * - NIST SP 800-171 Rev. 3 (May 2024): 97 requirements. Rev. 2: 110. CMMC Level 2 uses Rev. 2.
 * - NIST SP 800-61 Rev. 3 (April 2025): a CSF 2.0 Community Profile; replaces Rev. 2 (2012).
 * - NIST SP 800-218 SSDF v1.1 (February 2022); basis of the CISA Secure Software Development
 *   Attestation Form (finalized March 2024), signed by the CEO or a designee. 800-218A covers AI.
 * - SOC 1 under AICPA SSAE 18 (AT-C 320). SOC 3 is a general-use report on the Trust Services Criteria.
 */

export const extraFrameworks: Framework[] = [
  {
    slug: "iso-17021",
    category: "iso",
    name: "ISO/IEC 17021-1",
    short: "ISO/IEC 17021-1",
    blurb: "Accreditation readiness for certification bodies that audit and certify management systems.",
    appliesTo: "Certification bodies",
    metaTitle: "ISO/IEC 17021-1 Accreditation Readiness for Certification Bodies",
    metaDescription:
      "Gap assessments, impartiality, competence management and accreditation readiness for certification bodies working toward or maintaining ISO/IEC 17021-1 accreditation.",
    hero: {
      eyebrow: "Compliance / ISO/IEC 17021-1",
      title: "Accreditation readiness for certification bodies.",
      intro: [
        "ISO/IEC 17021-1 sets the requirements for organizations that audit and certify management systems such as ISO 9001 and ISO/IEC 27001. Accreditation bodies assess certification bodies against it before those bodies can issue accredited certificates.",
        "We help new and established certification bodies build the processes, records and impartiality safeguards the standard requires, prepare for accreditation assessments and witness audits, and stay ready for surveillance.",
      ],
    },
    facts: [
      { label: "Applies to", value: "Organizations that audit and certify other organizations' management systems" },
      { label: "Current version", value: "ISO/IEC 17021-1:2015" },
      { label: "In the United States", value: "Accreditation is granted by accreditation bodies such as ANAB and IAS" },
      { label: "For ISMS schemes", value: "ISO/IEC 27006-1 adds requirements for bodies certifying ISO/IEC 27001" },
    ],
    overview: {
      title: "What accreditation looks for",
      body: [
        "Accreditation bodies want evidence that a certification body is impartial, competent and consistent. That means a documented management system, a working process for identifying and managing threats to impartiality, defined competence criteria for auditors and reviewers, and audit programs that follow the rules on audit time, sampling and certification decisions.",
        "Bodies that certify information security management systems also have to meet ISO/IEC 27006-1, which adds requirements specific to ISO/IEC 27001 audits, including auditor competence in information security.",
      ],
    },
    help: [
      {
        id: "gap-assessment",
        title: "Gap assessment",
        summary: "See how far you are from an accreditation-ready system.",
        groups: [
          {
            items: [
              "Assessment against every clause of ISO/IEC 17021-1",
              "ISO/IEC 27006-1 review for ISMS certification schemes",
              "Review of procedures, records, contracts and certification documents",
              "Prioritized remediation plan",
            ],
          },
        ],
      },
      {
        id: "impartiality",
        title: "Impartiality and governance",
        summary: "The area accreditation assessors examine most closely.",
        groups: [
          {
            items: [
              "Impartiality risk assessment",
              "Mechanism for safeguarding impartiality",
              "Conflict of interest rules, including limits on consulting",
              "Legal status, liability and financial arrangements",
            ],
          },
        ],
      },
      {
        id: "competence",
        title: "Competence and the audit process",
        summary: "Consistent audits, carried out by people who are qualified to do them.",
        groups: [
          {
            items: [
              "Competence criteria for auditors, technical experts and reviewers",
              "Auditor evaluation and ongoing monitoring",
              "Audit time calculation and multi-site sampling",
              "Audit programs, reports and certification decisions",
              "Complaints and appeals handling",
            ],
          },
        ],
      },
      {
        id: "readiness",
        title: "Accreditation readiness",
        summary: "Prepared for the office assessment and the witness audits.",
        groups: [
          {
            items: [
              "Internal audits of the certification body",
              "Management review support",
              "Preparation for office assessments and witness audits",
              "Corrective action support after findings",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who grants accreditation",
      body: "Accreditation decisions are made by the accreditation body, such as ANAB in the United States. We help certification bodies prepare for assessment and keep their systems in good shape; the decision itself belongs to the accreditation body.",
    },
    services: ["strategy-risk-compliance"],
    faqs: [
      {
        q: "Does ISO/IEC 17021-1 apply to my company?",
        a: "Only if your organization audits and certifies other organizations' management systems. Companies that want to be certified to ISO 9001 or ISO/IEC 27001 do not need ISO/IEC 17021-1 themselves. Their certification body does.",
      },
      {
        q: "How long does accreditation take?",
        a: "It depends on how much of the management system already exists and on the accreditation body's schedule, including witness audits that require real client audits to observe. Most certification bodies should plan for several months at least.",
      },
    ],
  },

  {
    slug: "iso-9001",
    category: "iso",
    name: "ISO 9001:2015",
    short: "ISO 9001",
    blurb: "Quality management systems that hold up at certification and help the business run better.",
    appliesTo: "Organizations that need a certified quality system",
    metaTitle: "ISO 9001 Consulting & Certification Readiness",
    metaDescription:
      "ISO 9001 quality management system design, internal audits, certification readiness and integrated ISO 9001 and ISO/IEC 27001 management systems.",
    hero: {
      eyebrow: "Compliance / ISO 9001",
      title: "A quality management system that helps you run the business.",
      intro: [
        "ISO 9001 is the most widely used management system standard in the world. Customers in manufacturing, government contracting, aerospace and many other sectors ask suppliers for certification as evidence of consistent, controlled processes.",
        "We help you build a quality management system around how your organization actually works, run internal audits and prepare for certification. If you also need ISO/IEC 27001, both can run through one integrated management system.",
      ],
    },
    facts: [
      { label: "Current version", value: "ISO 9001:2015, with Amendment 1:2024" },
      { label: "Certified by", value: "An accredited certification body" },
      { label: "Structure", value: "Shares the ISO harmonized structure with ISO/IEC 27001" },
      { label: "Cycle", value: "Three-year certificate with annual surveillance audits" },
    ],
    overview: {
      title: "One management system, two certificates",
      body: [
        "ISO 9001 and ISO/IEC 27001 use the same high-level structure: context, leadership, planning, support, operation, performance evaluation and improvement. An integrated system avoids duplicate documents, duplicate meetings and duplicate audits.",
        "The 2024 amendment added a requirement to consider whether climate change is a relevant issue for the organization and its interested parties. It is a small change, but auditors check for it.",
      ],
    },
    help: [
      {
        id: "qms-design",
        title: "Quality management system design",
        summary: "Documents and processes people actually use.",
        groups: [
          {
            items: [
              "Context, scope and quality policy",
              "Process mapping and interactions",
              "Risks and opportunities",
              "Customer and supplier requirements",
              "Documented information kept to what is useful",
            ],
          },
        ],
      },
      {
        id: "integration",
        title: "Integrated management systems",
        summary: "Quality and information security, run as one system.",
        groups: [
          {
            items: [
              "Combined ISO 9001 and ISO/IEC 27001 structure",
              "Shared document control, internal audit and management review",
              "Joint certification audit planning",
            ],
          },
        ],
      },
      {
        id: "internal-audit",
        title: "Internal audits",
        summary: "The checks the standard requires you to run yourself.",
        groups: [
          {
            items: [
              "Internal audit program design",
              "Independent internal audits",
              "Corrective action tracking",
              "Management review support",
            ],
          },
        ],
      },
      {
        id: "certification",
        title: "Certification support",
        summary: "Stage 1, Stage 2 and the surveillance audits after.",
        groups: [
          {
            items: [
              "Readiness assessment before Stage 1",
              "Help choosing a certification body",
              "Support during the audit",
              "Surveillance audit preparation",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who issues the certificate",
      body: "ISO 9001 certificates are issued by certification bodies accredited for the standard. We help you build and audit the system; the certification decision belongs to the certification body you choose.",
    },
    services: ["strategy-risk-compliance"],
    faqs: [
      {
        q: "Is a new version of ISO 9001 coming?",
        a: "A revision of ISO 9001 is in progress. When it is published, certified organizations will get a transition period to move to it. We can help you plan the transition so it happens alongside your normal audit cycle.",
      },
      {
        q: "Do we need ISO 9001 if we already have ISO/IEC 27001?",
        a: "They answer different questions. ISO/IEC 27001 covers information security, while ISO 9001 covers the quality of your products and services. Customers ask for whichever matters to them, and many ask for both.",
      },
    ],
  },

  {
    slug: "iso-27017",
    category: "iso",
    name: "ISO/IEC 27017:2015",
    short: "ISO/IEC 27017",
    blurb: "Cloud-specific security controls for providers and customers, built on ISO/IEC 27001.",
    appliesTo: "Cloud service providers and customers",
    metaTitle: "ISO/IEC 27017 Cloud Security Controls",
    metaDescription:
      "ISO/IEC 27017 cloud security control mapping, shared responsibility documentation and certification readiness for cloud service providers.",
    hero: {
      eyebrow: "Compliance / ISO/IEC 27017",
      title: "Cloud security controls, recognized internationally.",
      intro: [
        "ISO/IEC 27017 gives guidance on information security controls for cloud services. It extends the controls in ISO/IEC 27002 with cloud-specific guidance and adds controls covering how security responsibilities are shared between cloud providers and their customers.",
        "Cloud providers usually add it to the scope of an ISO/IEC 27001 certification so customers can see that cloud risks are handled explicitly. We help you map the controls, close gaps and prepare for the audit.",
      ],
    },
    facts: [
      { label: "Current version", value: "ISO/IEC 27017:2015" },
      { label: "Builds on", value: "ISO/IEC 27001 and ISO/IEC 27002" },
      {
        label: "Adds",
        value: "Seven cloud controls, such as shared roles, virtual machine hardening and removal of customer assets",
      },
      { label: "Certification", value: "Usually assessed with ISO/IEC 27001 by an accredited certification body" },
    ],
    overview: {
      title: "Why cloud providers add it",
      body: [
        "Customers often ask how a provider separates tenants, hardens virtual machines, removes customer data at the end of a contract and monitors administrator activity. ISO/IEC 27017 gives structured answers to those questions, and certification gives customers independent assurance.",
        "One detail needs care: ISO/IEC 27017 is written against the 2013 control set of ISO/IEC 27002. Mapping its guidance onto the 2022 Annex A controls takes judgment, and that is where many programs need help.",
      ],
    },
    help: [
      {
        id: "mapping",
        title: "Control mapping",
        summary: "Line the cloud guidance up with your current Annex A controls.",
        groups: [
          {
            items: [
              "Mapping of ISO/IEC 27017 guidance to ISO/IEC 27001:2022 Annex A",
              "Statement of Applicability updates",
              "Gap assessment against the seven cloud-specific controls",
            ],
          },
        ],
      },
      {
        id: "shared-responsibility",
        title: "Shared responsibility",
        summary: "Make it clear who does what.",
        groups: [
          {
            items: [
              "Shared responsibility documentation for customers",
              "Customer-facing security information",
              "Contract and offboarding procedures for customer assets",
            ],
          },
        ],
      },
      {
        id: "technical-controls",
        title: "Technical controls",
        summary: "The controls auditors test in practice.",
        groups: [
          {
            items: [
              "Tenant isolation and segregation of virtual environments",
              "Virtual machine and container hardening",
              "Administrator access and activity logging",
              "Monitoring of cloud services",
              "Alignment of virtual and physical network security",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who issues the certificate",
      body: "Certification against ISO/IEC 27017 is granted by accredited certification bodies, usually as part of an ISO/IEC 27001 audit. We prepare you for it and work alongside your certification body.",
    },
    services: ["cloud-application-infrastructure", "strategy-risk-compliance"],
    faqs: [
      {
        q: "Do we need ISO/IEC 27001 first?",
        a: "In practice, yes. Certification bodies assess ISO/IEC 27017 as an extension of an ISO/IEC 27001 management system, so the management system has to exist first.",
      },
      {
        q: "What about ISO/IEC 27018?",
        a: "ISO/IEC 27018 covers the protection of personal data in public clouds. Many providers pursue it alongside ISO/IEC 27017, and we can scope both together.",
      },
    ],
  },

  {
    slug: "iec-62443",
    category: "iso",
    name: "ISA/IEC 62443 series",
    short: "ISA/IEC 62443",
    blurb: "Security for industrial automation and control systems, from the plant floor to product design.",
    appliesTo: "Industrial asset owners, integrators and product suppliers",
    metaTitle: "ISA/IEC 62443 Industrial Cybersecurity",
    metaDescription:
      "ISA/IEC 62443 risk assessments, zones and conduits, security levels, secure product development and certification readiness for industrial control systems.",
    hero: {
      eyebrow: "Compliance / ISA/IEC 62443",
      title: "Industrial control system security, built on ISA/IEC 62443.",
      intro: [
        "ISA/IEC 62443 is the international series of standards for securing industrial automation and control systems. It is used across oil and gas, power, water, chemicals and manufacturing, and it is increasingly written into supplier contracts.",
        "The series covers everyone involved: the asset owners who run plants, the integrators and service providers who build and maintain them, and the companies that make control products. We help each of them apply the parts that matter.",
      ],
    },
    facts: [
      { label: "Developed by", value: "The ISA99 committee, published as international standards by the IEC" },
      { label: "Core idea", value: "Zones, conduits and target security levels" },
      { label: "Security levels", value: "SL 1 to SL 4, based on the attacker a system must withstand" },
      { label: "Product certification", value: "Available through schemes such as ISASecure" },
    ],
    overview: {
      title: "Zones, conduits and security levels",
      body: [
        "The series is built around zones and conduits. Assets with similar security needs are grouped into zones, the connections between them are treated as conduits, and each zone gets a target security level based on the threats it has to withstand. That makes it practical to protect a plant without hardening every device to the same degree.",
        "Testing and changes in live plants have to be planned around safety and uptime. We work with operations and engineering staff from the start, and we use labs and digital twins where active testing would be risky.",
      ],
    },
    help: [
      {
        id: "asset-owners",
        title: "Asset owners",
        summary: "A security program for operating sites.",
        groups: [
          {
            items: [
              "62443-2-1 security program requirements",
              "62443-3-2 risk assessment, zones and conduits",
              "Target security level selection",
              "Remote and vendor access controls",
              "Patch and backup management for OT",
            ],
          },
        ],
      },
      {
        id: "integrators",
        title: "Integrators and service providers",
        summary: "Security built into how plants are delivered and maintained.",
        groups: [
          {
            items: [
              "62443-2-4 requirements for service providers",
              "Secure integration and commissioning",
              "Hardening baselines and documentation",
              "Security handover to asset owners",
            ],
          },
        ],
      },
      {
        id: "systems",
        title: "System security requirements",
        summary: "Measure a control system against its target security level.",
        groups: [
          {
            items: [
              "62443-3-3 system requirements by security level",
              "Gap assessment of control system architecture",
              "Segmentation and conduit design",
              "Monitoring and detection for OT networks",
            ],
          },
        ],
      },
      {
        id: "products",
        title: "Product suppliers",
        summary: "Secure development and component requirements.",
        groups: [
          {
            items: [
              "62443-4-1 secure product development lifecycle",
              "62443-4-2 component security requirements",
              "Threat modeling and security testing of products",
              "Preparation for product and process certification",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who issues the certification",
      body: "Product and process certifications under ISA/IEC 62443 are issued by accredited certification bodies, for example through the ISASecure scheme. We help you prepare; the certification decision belongs to them.",
    },
    services: [
      "cloud-application-infrastructure",
      "penetration-testing",
      "managed-detection-response",
      "strategy-risk-compliance",
    ],
    faqs: [
      {
        q: "How does ISA/IEC 62443 relate to NIST SP 800-82?",
        a: "They cover similar ground. NIST SP 800-82 is US guidance for operational technology security and refers to ISA/IEC 62443 throughout. Many US organizations use both: 800-82 for overall guidance and 62443 for its structure of zones, conduits and security levels.",
      },
      {
        q: "Is ISA/IEC 62443 mandatory?",
        a: "Not by law in most US sectors, but customers, insurers and supplier contracts increasingly require it, especially for product suppliers and integrators.",
      },
    ],
  },

  {
    slug: "nist-800-53",
    category: "nist",
    name: "NIST SP 800-53 Rev. 5",
    short: "NIST SP 800-53",
    blurb: "The federal security and privacy control catalog behind FISMA, FedRAMP and many state programs.",
    appliesTo: "Federal systems, contractors and cloud providers",
    metaTitle: "NIST SP 800-53 Rev. 5 Consulting",
    metaDescription:
      "NIST SP 800-53 Rev. 5 baseline selection, control tailoring, implementation, System Security Plans and assessment readiness for agencies, contractors and cloud providers.",
    hero: {
      eyebrow: "Compliance / NIST SP 800-53",
      title: "The control catalog behind federal security programs.",
      intro: [
        "NIST SP 800-53 is the catalog of security and privacy controls for federal information systems. It is the foundation for FISMA compliance and FedRAMP authorizations, and programs such as TX-RAMP draw on it. Many private organizations also use it as their master control set, because almost every other framework maps to it.",
        "We help agencies, contractors and cloud providers select the right baseline, adjust it to their systems, implement the controls and produce documentation that assessors accept.",
      ],
    },
    facts: [
      { label: "Current version", value: "Revision 5, with controls in 20 families" },
      { label: "Baselines", value: "Low, moderate and high, defined in NIST SP 800-53B" },
      { label: "Used by", value: "FISMA, FedRAMP and many state programs, including TX-RAMP" },
      { label: "Assessment procedures", value: "NIST SP 800-53A" },
    ],
    overview: {
      title: "Baselines and tailoring",
      body: [
        "Few systems need every control. NIST SP 800-53B defines low, moderate and high baselines based on the impact of a breach. Organizations then tailor the baseline to the system: removing what does not apply, adding what the risk calls for and recording why.",
        "Revision 5 also made the controls outcome-based and usable by any organization, and it added families for supply chain risk management and for the processing and transparency of personally identifiable information.",
      ],
    },
    help: [
      {
        id: "categorization",
        title: "Categorization and baselines",
        summary: "Start from the right impact level.",
        groups: [
          {
            items: [
              "System categorization",
              "Baseline selection from NIST SP 800-53B",
              "Tailoring decisions and rationale",
              "Inheritance from cloud and shared service providers",
            ],
          },
        ],
      },
      {
        id: "implementation",
        title: "Control implementation",
        summary: "Turn control statements into working safeguards.",
        groups: [
          {
            items: [
              "Access control, audit logging and configuration management",
              "Identification and authentication",
              "Incident response and contingency planning",
              "Supply chain risk management",
            ],
          },
        ],
      },
      {
        id: "documentation",
        title: "Documentation",
        summary: "Paperwork assessors can follow.",
        groups: [
          {
            items: [
              "System Security Plans",
              "Policies and procedures for each control family",
              "Plans of Action and Milestones",
              "Control implementation statements",
            ],
          },
        ],
      },
      {
        id: "assessment",
        title: "Assessment readiness",
        summary: "Be ready before the assessor arrives.",
        groups: [
          {
            items: [
              "Readiness assessment using NIST SP 800-53A procedures",
              "Evidence collection and organization",
              "Continuous monitoring programs",
            ],
          },
        ],
      },
    ],
    services: ["strategy-risk-compliance", "cloud-application-infrastructure", "identity-data-security"],
    faqs: [
      {
        q: "Is NIST SP 800-53 the same as NIST SP 800-171?",
        a: "No. SP 800-53 is the full catalog for federal systems. SP 800-171 is a smaller set of requirements, derived from 800-53, for protecting Controlled Unclassified Information on nonfederal systems such as a contractor's network.",
      },
      {
        q: "Can a private company use NIST SP 800-53?",
        a: "Yes. It is free, detailed and maps to most other frameworks, which makes it a solid master control set even when no regulation requires it.",
      },
    ],
  },

  {
    slug: "nist-800-171",
    category: "nist",
    name: "NIST SP 800-171",
    short: "NIST SP 800-171",
    blurb: "Protecting Controlled Unclassified Information on contractor and other nonfederal systems.",
    appliesTo: "Organizations that handle CUI",
    metaTitle: "NIST SP 800-171 Compliance (Rev. 2 and Rev. 3)",
    metaDescription:
      "NIST SP 800-171 scoping, gap assessments, System Security Plans and remediation for contractors, universities and other organizations that handle CUI.",
    hero: {
      eyebrow: "Compliance / NIST SP 800-171",
      title: "Protect Controlled Unclassified Information the way federal agencies expect.",
      intro: [
        "NIST SP 800-171 sets the security requirements for protecting Controlled Unclassified Information (CUI) on systems outside the federal government. It applies to contractors, universities, research organizations and other nonfederal entities that receive CUI from federal agencies, civilian agencies as well as the Department of Defense.",
        "Defense contractors usually meet it through CMMC. For everyone else, we help you scope the systems that hold CUI, close gaps and document compliance in a System Security Plan.",
      ],
    },
    facts: [
      { label: "Current version", value: "Revision 3, published May 2024, with 97 security requirements" },
      { label: "Previous version", value: "Revision 2, with 110 requirements, still used for CMMC Level 2" },
      { label: "Assessment procedures", value: "NIST SP 800-171A" },
      { label: "Applies to", value: "Nonfederal systems that process, store or transmit CUI" },
    ],
    overview: {
      title: "Revision 2 or Revision 3?",
      body: [
        "Revision 3 reorganized the requirements, withdrew some, combined others and added organization-defined parameters that let agencies set specific values. The count dropped from 110 to 97, but the work did not get smaller.",
        "Which revision applies depends on your contract. The Department of Defense continues to assess CMMC Level 2 against Revision 2, while other agencies may reference Revision 3. We help you read the clause in your agreement and build a program that can move from one to the other without starting over.",
      ],
    },
    help: [
      {
        id: "scoping",
        title: "Scoping",
        summary: "Find where CUI lives and keep the boundary tight.",
        groups: [
          {
            items: [
              "CUI identification and data flow mapping",
              "System boundary definition",
              "Enclave options to reduce scope",
              "Review of cloud services that handle CUI",
            ],
          },
        ],
      },
      {
        id: "gap-assessment",
        title: "Gap assessment",
        summary: "Measure where you stand against the revision that applies to you.",
        groups: [
          {
            items: [
              "Assessment using NIST SP 800-171A procedures",
              "Revision 2 to Revision 3 mapping",
              "Prioritized remediation roadmap",
            ],
          },
        ],
      },
      {
        id: "documentation",
        title: "SSP and POA&M",
        summary: "The two documents every assessment starts with.",
        groups: [
          {
            items: ["System Security Plan development", "Plan of Action and Milestones", "Policies and procedures"],
          },
        ],
      },
      {
        id: "remediation",
        title: "Remediation",
        summary: "Practical fixes that fit your budget.",
        groups: [
          {
            items: [
              "Multi-factor authentication and access control",
              "Logging, monitoring and incident reporting",
              "Encryption of CUI at rest and in transit",
              "Configuration and vulnerability management",
            ],
          },
        ],
      },
    ],
    services: ["strategy-risk-compliance", "identity-data-security", "cloud-application-infrastructure"],
    faqs: [
      {
        q: "We are a defense contractor. Which page should we read?",
        a: "Start with our CMMC page. CMMC Level 2 is built on NIST SP 800-171 Revision 2 and adds the assessment and affirmation requirements the Department of Defense uses.",
      },
      {
        q: "Do universities need to comply?",
        a: "Often, yes. Research agreements that involve CUI commonly require NIST SP 800-171, and the requirements apply to the specific systems and labs that handle that information.",
      },
    ],
  },

  {
    slug: "nist-800-61",
    category: "nist",
    name: "NIST SP 800-61 Rev. 3",
    short: "NIST SP 800-61",
    blurb: "Incident response planning aligned with NIST CSF 2.0.",
    appliesTo: "Any organization building incident response capability",
    metaTitle: "NIST SP 800-61 Rev. 3 Incident Response Planning",
    metaDescription:
      "Incident response plans, playbooks, readiness assessments and tabletop exercises aligned with NIST SP 800-61 Revision 3 and CSF 2.0.",
    hero: {
      eyebrow: "Compliance / NIST SP 800-61",
      title: "Incident response planning built on NIST SP 800-61.",
      intro: [
        "NIST SP 800-61 is the US government's guidance on cyber incident response. Revision 3, published in April 2025, replaced the 2012 edition and organized incident response around the six functions of the NIST Cybersecurity Framework 2.0.",
        "The change reflects how incidents actually play out. Preparation, detection, response and recovery all depend on governance, asset knowledge and protective controls that were in place long before the first alert. We help you build an incident response program on that model.",
      ],
    },
    facts: [
      { label: "Current version", value: "Revision 3, April 2025" },
      { label: "Structure", value: "A CSF 2.0 Community Profile" },
      { label: "Replaces", value: "Revision 2 from 2012 and its four-phase lifecycle" },
      { label: "Related", value: "The Respond and Recover functions of NIST CSF 2.0" },
    ],
    overview: {
      title: "From a lifecycle to a profile",
      body: [
        "Revision 2 described a four-phase lifecycle: preparation; detection and analysis; containment, eradication and recovery; and post-incident activity. Many incident response plans in use today are still built on it.",
        "Revision 3 maps incident response recommendations to CSF 2.0 outcomes instead. Plans written against Revision 2 still work, but updating them gives leadership a clearer link between incident response and the rest of the security program.",
      ],
    },
    help: [
      {
        id: "plan",
        title: "Plans and playbooks",
        summary: "Clear instructions for the worst day of the year.",
        groups: [
          {
            items: [
              "Incident response plan aligned with Revision 3",
              "Playbooks for ransomware, business email compromise and data breaches",
              "Roles, escalation and decision authority",
              "Communication and notification procedures",
            ],
          },
        ],
      },
      {
        id: "readiness",
        title: "Readiness assessment",
        summary: "Find the gaps before an incident does.",
        groups: [
          {
            items: [
              "Assessment against CSF 2.0 outcomes",
              "Logging and evidence availability review",
              "Backup and recovery capability review",
            ],
          },
        ],
      },
      {
        id: "exercises",
        title: "Exercises",
        summary: "Practice under realistic pressure.",
        groups: [
          {
            items: [
              "Tabletop exercises for executives and technical teams",
              "Technical simulations in RANGE",
              "After-action reports and improvement tracking",
            ],
          },
        ],
      },
    ],
    services: ["incident-response", "managed-detection-response", "strategy-risk-compliance"],
    faqs: [
      {
        q: "Do we need to rewrite our incident response plan?",
        a: "Not necessarily. A plan built on Revision 2 can be updated in place by mapping its procedures to CSF 2.0 outcomes and filling the gaps, usually in governance, communication and recovery.",
      },
      {
        q: "How often should we test the plan?",
        a: "At least once a year through a tabletop exercise, and after major changes to your environment, team or threat picture. Regulators, insurers and customers increasingly ask for evidence of testing.",
      },
    ],
  },

  {
    slug: "nist-800-218",
    category: "nist",
    name: "NIST SP 800-218 (SSDF)",
    short: "NIST SSDF",
    blurb: "Secure software development practices and the federal attestation that depends on them.",
    appliesTo: "Software producers, especially those selling to government",
    metaTitle: "NIST SSDF (SP 800-218) and CISA Attestation Readiness",
    metaDescription:
      "Secure Software Development Framework assessments, pipeline security, vulnerability response and CISA Secure Software Development Attestation readiness.",
    hero: {
      eyebrow: "Compliance / NIST SSDF",
      title: "Secure software development you can attest to.",
      intro: [
        "The Secure Software Development Framework, published as NIST SP 800-218, describes practices that reduce vulnerabilities in software and limit the damage when they slip through. Federal agencies require software producers to attest that they follow key SSDF practices before the agency uses their software.",
        "We help engineering teams assess their development lifecycle against the SSDF, close gaps in a way that fits how they ship code and prepare the evidence behind a CISA Secure Software Development Attestation.",
      ],
    },
    facts: [
      { label: "Current version", value: "SSDF version 1.1, NIST SP 800-218 (February 2022)" },
      {
        label: "Practice groups",
        value:
          "Prepare the Organization, Protect the Software, Produce Well-Secured Software, Respond to Vulnerabilities",
      },
      { label: "Federal use", value: "Basis of the CISA Secure Software Development Attestation Form" },
      { label: "AI", value: "NIST SP 800-218A adds practices for AI model development" },
    ],
    overview: {
      title: "Four groups of practices",
      body: [
        "The SSDF organizes its practices into four groups: preparing the organization, protecting the software and its build environment, producing well-secured software and responding to vulnerabilities. It describes outcomes rather than specific tools, so it fits any language, stack or delivery model.",
        "The attestation is signed by a company official, so it carries real accountability. We make sure the practices are in place and the evidence exists before anyone signs.",
      ],
    },
    help: [
      {
        id: "assessment",
        title: "SSDF assessment",
        summary: "Measure your lifecycle against the practices.",
        groups: [
          {
            items: [
              "Practice-by-practice assessment",
              "Evidence review across teams and repositories",
              "Prioritized improvement roadmap",
            ],
          },
        ],
      },
      {
        id: "build-integrity",
        title: "Build and pipeline integrity",
        summary: "Protect the software and the systems that build it.",
        groups: [
          {
            items: [
              "Source control and branch protection",
              "CI/CD pipeline hardening",
              "Artifact signing and provenance",
              "Software bill of materials (SBOM)",
            ],
          },
        ],
      },
      {
        id: "secure-development",
        title: "Secure development and testing",
        summary: "Find flaws before release.",
        groups: [
          {
            items: [
              "Threat modeling",
              "Secure coding standards and training",
              "Code review and automated testing",
              "Dependency and third-party component management",
            ],
          },
        ],
      },
      {
        id: "vulnerability-response",
        title: "Vulnerability response and attestation",
        summary: "Handle reports well and sign with confidence.",
        groups: [
          {
            items: [
              "Vulnerability disclosure program",
              "Triage, remediation and customer notification",
              "Root cause analysis",
              "Attestation readiness review",
            ],
          },
        ],
      },
    ],
    services: ["cloud-application-infrastructure", "penetration-testing", "strategy-risk-compliance"],
    faqs: [
      {
        q: "Who signs the CISA attestation?",
        a: "The software producer's chief executive officer or a designee who can bind the company. That is why the evidence behind it matters.",
      },
      {
        q: "Does the SSDF require specific tools?",
        a: "No. It describes practices and outcomes. You can meet it with the tools you already use, as long as the practices are applied consistently and you can show evidence.",
      },
    ],
  },

  {
    slug: "soc-1",
    category: "soc",
    name: "SOC 1",
    short: "SOC 1",
    blurb: "Readiness for service organizations whose controls affect their customers' financial statements.",
    appliesTo: "Service organizations that touch financial reporting",
    metaTitle: "SOC 1 Readiness Consulting",
    metaDescription:
      "SOC 1 Type 1 and Type 2 readiness, control objectives, IT general controls and audit support for service organizations.",
    hero: {
      eyebrow: "Compliance / SOC 1",
      title: "SOC 1 readiness for services that touch your customers' books.",
      intro: [
        "A SOC 1 report covers controls at a service organization that are relevant to its customers' internal control over financial reporting. Payroll processors, claims administrators, loan servicers, data centers and financial software providers are typical examples.",
        "Customers and their auditors rely on SOC 1 reports during financial statement audits. We help you define control objectives, close gaps and prepare for the CPA firm's examination.",
      ],
    },
    facts: [
      { label: "Issued by", value: "A licensed CPA firm" },
      { label: "Standard", value: "AICPA SSAE 18 (AT-C 320)" },
      { label: "Focus", value: "Controls relevant to customers' internal control over financial reporting" },
      { label: "Report types", value: "Type 1 covers design on one date. Type 2 covers operation over a period." },
      { label: "Audience", value: "Customers and their financial statement auditors" },
    ],
    overview: {
      title: "SOC 1 or SOC 2?",
      body: [
        "SOC 1 is about financial reporting. SOC 2 is about security, availability, processing integrity, confidentiality and privacy. If your customers' auditors ask for your report during their financial audit, you likely need SOC 1. If your customers' security teams ask during vendor reviews, you likely need SOC 2.",
        "Many service organizations need both. Controls such as access management and change management appear in each, so one program can support both reports.",
      ],
    },
    help: [
      {
        id: "readiness",
        title: "Readiness assessment",
        summary: "Define what the report will cover.",
        groups: [
          {
            items: [
              "Control objective definition",
              "Process walkthroughs and control identification",
              "Gap assessment",
              "Complementary user entity controls",
            ],
          },
        ],
      },
      {
        id: "itgc",
        title: "IT general controls",
        summary: "The technical controls behind reliable processing.",
        groups: [
          {
            items: [
              "User access provisioning and reviews",
              "Change management",
              "Job scheduling and processing monitoring",
              "Backup and recovery",
            ],
          },
        ],
      },
      {
        id: "audit-support",
        title: "Audit support",
        summary: "A smoother examination.",
        groups: [
          {
            items: [
              "Evidence preparation",
              "Help choosing a CPA firm",
              "Support during fieldwork",
              "Remediation of exceptions",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who issues the report",
      body: "Only licensed CPA firms can issue a SOC 1 report. We prepare you for the examination and work alongside the firm you choose.",
    },
    services: ["strategy-risk-compliance", "identity-data-security"],
    faqs: [
      {
        q: "Who defines the control objectives in a SOC 1?",
        a: "Management does, based on the services provided and what matters to customers' financial reporting. The CPA firm then tests whether the supporting controls are designed and, for Type 2, operating effectively.",
      },
      {
        q: "Do IT controls belong in a SOC 1?",
        a: "Usually. IT general controls such as user access, change management and backup support the processing customers rely on, so they almost always appear in scope.",
      },
    ],
  },

  {
    slug: "soc-3",
    category: "soc",
    name: "SOC 3",
    short: "SOC 3",
    blurb: "A general-use version of SOC 2 assurance you can share publicly.",
    appliesTo: "Service organizations that want a public assurance report",
    metaTitle: "SOC 3 Readiness Consulting",
    metaDescription:
      "SOC 3 general-use reports based on the AICPA Trust Services Criteria, prepared alongside a SOC 2 Type 2 examination.",
    hero: {
      eyebrow: "Compliance / SOC 3",
      title: "Show security assurance publicly with a SOC 3 report.",
      intro: [
        "A SOC 3 report covers the same Trust Services Criteria as SOC 2 but leaves out the detailed description of tests and results. Because it is a general-use report, you can post it on your website or hand it to prospects without a nondisclosure agreement.",
        "Most organizations produce a SOC 3 alongside a SOC 2 Type 2 examination. We help you get the underlying program ready and coordinate with the CPA firm on both reports.",
      ],
    },
    facts: [
      { label: "Issued by", value: "A licensed CPA firm" },
      { label: "Based on", value: "AICPA Trust Services Criteria, like SOC 2" },
      { label: "Distribution", value: "General use, so it can be shared publicly" },
      { label: "Typical path", value: "Issued alongside a SOC 2 Type 2 report" },
    ],
    overview: {
      title: "Where SOC 3 helps",
      body: [
        "SOC 2 reports are restricted-use documents, usually shared under a nondisclosure agreement with customers who need the detail. A SOC 3 gives sales and marketing teams something they can share freely, which shortens early conversations with prospects.",
        "Customers who want to review controls and testing in depth will still ask for the SOC 2. The SOC 3 opens the door, and the SOC 2 is the evidence behind it.",
      ],
    },
    help: [
      {
        id: "readiness",
        title: "Readiness",
        summary: "The same groundwork as SOC 2.",
        groups: [
          {
            items: [
              "Scope and Trust Services Criteria selection",
              "Gap assessment and remediation",
              "Evidence collection plans",
            ],
          },
        ],
      },
      {
        id: "reporting",
        title: "Reporting",
        summary: "Two reports from one examination.",
        groups: [
          {
            items: [
              "Coordination of SOC 2 and SOC 3 reporting with the CPA firm",
              "Review of the system description for public use",
              "Plans for publishing and refreshing the report",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who issues the report",
      body: "Only licensed CPA firms can issue a SOC 3 report. We prepare you for the examination and work alongside the firm you choose.",
    },
    services: ["strategy-risk-compliance", "cloud-application-infrastructure"],
    faqs: [
      {
        q: "Can we get a SOC 3 without a SOC 2?",
        a: "A CPA firm can examine against the Trust Services Criteria and issue only a SOC 3, but most organizations do both, because enterprise customers still ask for the detailed SOC 2.",
      },
      {
        q: "How long does a SOC 3 take?",
        a: "The same as a SOC 2, since the examination work is the same. The difference is the report you receive at the end.",
      },
    ],
  },
  {
    slug: "swift-cscf",
    category: "us",
    name: "Swift Customer Security Controls Framework",
    short: "Swift CSCF",
    blurb: "Readiness and independent assessment for the annual Swift Customer Security Programme attestation.",
    appliesTo: "Banks and institutions connected to Swift",
    metaTitle: "Swift CSCF Readiness & Independent Assessment",
    metaDescription:
      "Swift Customer Security Controls Framework scoping, gap assessments, remediation and independent assessments for banks, credit unions, broker-dealers and corporates.",
    hero: {
      eyebrow: "Compliance / Swift CSCF",
      title: "Get your annual Swift attestation right, with evidence behind it.",
      intro: [
        "Every organization connected to the Swift network must attest each year to its compliance with the Customer Security Controls Framework (CSCF), the set of security controls at the center of the Swift Customer Security Programme (CSP). The attestation is submitted through the KYC Security Attestation application, and counterparties can ask to see it.",
        "Attestations must be supported by an independent assessment. We help banks, credit unions, broker-dealers and corporates scope their Swift environment, close gaps against the current CSCF version and complete an independent assessment that holds up to scrutiny.",
      ],
    },
    facts: [
      { label: "Set by", value: "Swift, for every user of its network" },
      { label: "Cycle", value: "Annual attestation by December 31, against a CSCF version updated every year" },
      { label: "Submission", value: "The KYC Security Attestation (KYC-SA) application" },
      { label: "Evidence", value: "An independent internal or external assessment" },
      { label: "Scope", value: "Set by your architecture type, A1 to A4 or B" },
    ],
    overview: {
      title: "Your architecture type decides your scope",
      body: [
        "The controls that apply depend on how you connect to Swift. The framework defines architecture types, from organizations that run their own messaging and communication interfaces to those that rely entirely on a service provider. Getting the architecture type right comes first, because it decides which mandatory and advisory controls you have to meet.",
        "Swift updates the framework every year and sometimes promotes advisory controls to mandatory. A program that passed last year can fall short this year without anything changing on your side.",
      ],
    },
    help: [
      {
        id: "scoping",
        title: "Scoping and architecture",
        summary: "Start from the right architecture type and a clear boundary.",
        groups: [
          {
            items: [
              "Architecture type determination",
              "Secure zone design and review",
              "Inventory of Swift components, operators and connections",
              "Service provider and service bureau dependencies",
            ],
          },
        ],
      },
      {
        id: "gap-assessment",
        title: "Gap assessment",
        summary: "Measure where you stand against this year's version.",
        groups: [
          {
            items: [
              "Assessment against the current CSCF version",
              "Review of mandatory and advisory controls",
              "Review of changes introduced in the new version",
              "Prioritized remediation plan",
            ],
          },
        ],
      },
      {
        id: "remediation",
        title: "Remediation",
        summary: "Close the gaps before the attestation deadline.",
        groups: [
          {
            items: [
              "Secure zone segmentation",
              "Multi-factor authentication for operators",
              "Privileged account control and session security",
              "Logging, monitoring and transaction anomaly detection",
              "Vulnerability scanning and patching",
              "Backup and incident response planning",
            ],
          },
        ],
      },
      {
        id: "independent-assessment",
        title: "Independent assessment",
        summary: "The evidence your attestation depends on.",
        groups: [
          {
            items: [
              "Independent external assessment against the CSCF",
              "Testing of control design and operation",
              "Assessment report to support your KYC-SA attestation",
              "Support for internal audit teams performing internal assessments",
            ],
          },
        ],
      },
    ],
    boundary: {
      title: "Who submits the attestation",
      body: "Your organization submits and signs its own attestation in the KYC-SA application. We prepare you and can perform the independent assessment. When we do, we keep that assessment separate from any remediation work we carried out for you.",
    },
    timeline: [
      { title: "Scope", body: "Confirm the architecture type and the secure zone boundary." },
      { title: "Assess", body: "Compare current controls against this year's CSCF version." },
      { title: "Remediate", body: "Close mandatory gaps first, then advisory ones." },
      { title: "Independent assessment", body: "Test the controls and document the evidence." },
      { title: "Attest", body: "Submit the attestation in KYC-SA before December 31." },
    ],
    services: [
      "strategy-risk-compliance",
      "penetration-testing",
      "identity-data-security",
      "managed-detection-response",
    ],
    faqs: [
      {
        q: "Who has to comply with the Swift CSCF?",
        a: "Every organization that uses the Swift network, including banks, credit unions, broker-dealers, market infrastructures and corporates that connect directly or through a service bureau. The controls that apply depend on your architecture type.",
      },
      {
        q: "Can our internal audit team do the independent assessment?",
        a: "Yes, as long as the team is independent of the people who operate and secure the Swift environment, typically a second or third line function. Many organizations use an external assessor instead, or alternate between the two.",
      },
      {
        q: "What happens if we do not attest or are not compliant?",
        a: "Counterparties review attestation status as part of their own risk assessments, and Swift may report organizations that fail to attest to their supervisors. Weak attestation results can also make correspondent banking relationships harder to keep.",
      },
    ],
  },
];
