import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "strategy-risk-compliance",
    name: "Cyber Strategy, Risk & Compliance",
    blurb: "Risk assessments, virtual CISO leadership and compliance readiness that hold up under scrutiny.",
    highlights: [
      "Risk assessments and security roadmaps",
      "Virtual and fractional CISO services",
      "Readiness for CMMC, SOC 2, HIPAA and more",
    ],
    metaTitle: "Cyber Strategy, Risk & Compliance Consulting",
    metaDescription:
      "Cyber risk assessments, virtual CISO services and compliance readiness for CMMC, SOC 2, HIPAA, PCI DSS and NIST from a Texas cybersecurity firm.",
    hero: {
      eyebrow: "Cyber Strategy, Risk & Compliance",
      title: "A security program your board understands and your auditors can verify.",
      intro: [
        "Many security programs grow one policy, one tool and one audit at a time. After a few years, nobody can say with confidence which risks are covered and which ones are still open.",
        "We help leadership teams get a clear read on where they stand, decide what to fix first and build a program that holds up to questions from the board, regulators, customers and cyber insurers.",
      ],
      primaryCta: { label: "Schedule a risk assessment", href: "/contact?topic=strategy" },
      secondaryCta: { label: "Talk to a specialist", href: "/contact" },
      photo: "boardroom",
    },
    why: {
      title: "Passing an audit and being secure are two different things.",
      body: [
        "An audit checks whether controls exist and were followed during the audit period. An attacker checks whether they work on a random Tuesday night. A long vulnerability report has the opposite problem: hundreds of findings and no indication of which ones could actually hurt the business.",
        "Good security decisions start from a few plain questions:",
      ],
      list: [
        "What are we protecting, and what would it cost to lose it?",
        "Which threats are realistic for a company like ours?",
        "Where are the gaps, and how exposed are they?",
        "Which controls reduce real risk, and which ones only produce paperwork?",
        "Where should the next dollar go?",
        "How do we show progress to the board and to customers?",
      ],
      closing: "Our strategy and risk work is built to answer those questions with evidence.",
    },
    capabilities: [
      {
        id: "strategy",
        title: "Strategy and virtual CISO",
        summary: "Senior security leadership, for as long as you need it.",
        body: [
          "Not every company needs a full-time CISO, but most need someone who can set priorities, own the roadmap and explain risk to the board in business terms. Our advisors fill that role as a fractional CISO or work alongside the security leader you already have.",
        ],
        groups: [
          {
            items: [
              "Security strategy and multi-year roadmaps",
              "Virtual and fractional CISO services",
              "Security program design and operating models",
              "Maturity assessments against NIST CSF 2.0",
              "Budget planning and investment prioritization",
              "Board and executive briefings",
              "Governance and policy design",
              "Support with cyber insurance applications and renewals",
            ],
          },
        ],
      },
      {
        id: "risk",
        title: "Cyber risk assessment",
        summary: "Separate the risks that matter from background noise.",
        body: [
          "We assess risk across the business, individual systems, cloud platforms and suppliers. Every finding is rated on the same three factors so leadership can compare them side by side.",
        ],
        groups: [
          {
            label: "How we rate risk",
            items: [
              "Criticality: how much the business depends on the asset or process",
              "Exposure: how reachable it is to an attacker, from inside or outside",
              "Consequence: what happens to operations, revenue and obligations if it fails",
            ],
          },
          {
            label: "Assessment types",
            items: [
              "Enterprise cyber risk assessments",
              "Technology and application risk assessments",
              "Cloud risk assessments",
              "Third-party and supply chain risk reviews",
              "Ransomware readiness assessments",
              "Incident response readiness reviews",
              "Business impact analysis",
              "Risk treatment plans",
            ],
          },
        ],
      },
      {
        id: "compliance",
        title: "Governance, risk and compliance",
        summary: "Meet framework requirements and improve security with the same work.",
        body: [
          "Customers, regulators and contracts increasingly decide which framework you follow. We help you meet those requirements in a way that also makes you harder to attack, so the effort is not repeated from scratch every audit cycle.",
        ],
        groups: [
          {
            label: "Frameworks",
            items: [
              "CMMC 2.0 and NIST SP 800-171",
              "SOC 2",
              "HIPAA Security Rule",
              "PCI DSS 4.0.1",
              "NIST Cybersecurity Framework 2.0",
              "ISO/IEC 27001:2022",
              "TX-RAMP",
              "CIS Critical Security Controls",
            ],
          },
          {
            label: "Services",
            items: [
              "Gap assessments",
              "Policies, standards and procedures",
              "Control framework design and mapping",
              "Readiness assessments before an external audit",
              "Evidence collection and audit preparation",
              "Remediation planning and tracking",
              "Ongoing compliance program management",
            ],
          },
        ],
      },
      {
        id: "audit",
        title: "Security audits and control testing",
        summary: "Check that each control exists, is designed well and works in practice.",
        body: [
          "We test controls against three questions: does it exist, is it designed properly, and does it operate the way the policy says it does. Where it helps, our penetration testers confirm the result by trying to get past the control.",
        ],
        groups: [
          {
            items: [
              "Internal IT and cybersecurity audits",
              "Technical control assessments",
              "Configuration and hardening reviews",
              "Network and cloud security reviews",
              "Security architecture reviews",
              "Internal audit support for SOC 2 and ISO 27001 programs",
              "Pre-assessment checks before CMMC or PCI DSS assessments",
            ],
          },
        ],
        note: "Formal certifications and attestation reports are issued by accredited third parties: C3PAOs for CMMC, licensed CPA firms for SOC 2, Qualified Security Assessors for PCI DSS and accredited certification bodies for ISO 27001. We prepare you for those assessments and work alongside your assessor.",
      },
    ],
    approach: [
      {
        title: "Understand",
        body: "We learn how the business makes money, which systems it depends on and which obligations apply to it.",
      },
      {
        title: "Assess",
        body: "We review controls, interview system owners and test where needed to see how the program performs today.",
      },
      {
        title: "Prioritize",
        body: "Findings are ranked by business risk, so the first fixes are the ones that reduce the most exposure.",
      },
      {
        title: "Plan",
        body: "You get a roadmap with owners, effort estimates, cost ranges and realistic timelines.",
      },
      {
        title: "Verify",
        body: "We check that changes work as intended and report progress in terms the board can follow.",
      },
    ],
    deliverables: [
      "Executive summary written for leadership and the board",
      "Risk register rated for criticality, exposure and consequence",
      "Gap analysis against the frameworks that apply to you",
      "Prioritized roadmap with owners, effort and cost ranges",
      "Policies and procedures, where they are in scope",
      "Readout session with your leadership team",
    ],
    frameworks: ["cmmc", "nist-csf", "nist-800-53", "soc-2", "iso-27001", "iso-9001", "hipaa", "tx-ramp"],
    platforms: ["scope", "range"],
    industries: ["defense-contractors", "financial-services", "healthcare", "state-local-government"],
    faqs: [
      {
        q: "What does a virtual CISO do?",
        a: "A virtual or fractional CISO is a senior security leader who works with you part time. They own the security roadmap, run governance meetings, report to leadership and the board, and coordinate audits and vendors. It suits companies that need that level of judgment but not a full-time executive.",
      },
      {
        q: "How long does a risk assessment take?",
        a: "It depends on the size of the organization and how many business units, locations and systems are in scope. A focused assessment can take a few weeks, while an enterprise-wide one takes longer. We agree on scope and timeline in writing before any work starts.",
      },
      {
        q: "Can you help us answer security questionnaires from customers?",
        a: "Yes. Many clients come to us after a large customer sends a security questionnaire or asks for a SOC 2 report. We help you answer accurately, close the gaps the questionnaire exposes and put a program in place so the next one is easier.",
      },
    ],
    cta: {
      title: "Start with a clear picture of your risk.",
      body: "A short scoping call is usually enough to tell whether an assessment, a roadmap or a compliance readiness project is the right first step.",
      action: { label: "Schedule a consultation", href: "/contact?topic=strategy" },
    },
  },

  {
    slug: "penetration-testing",
    name: "Penetration Testing & Offensive Security",
    blurb: "Penetration testing, red teaming and adversary simulation that show what an attacker could actually reach.",
    highlights: [
      "Web, API and mobile application testing",
      "Internal, external and cloud penetration tests",
      "Red team, purple team and assumed breach exercises",
    ],
    metaTitle: "Penetration Testing & Red Team Services",
    metaDescription:
      "Manual penetration testing, red teaming, purple teaming and AI application security testing from experienced offensive security consultants based in Texas.",
    hero: {
      eyebrow: "Penetration Testing & Offensive Security",
      title: "Find out what an attacker could reach, and how far they would get.",
      intro: [
        "Our testers attack applications, networks, cloud accounts, identities and people the way real adversaries do, within rules you approve in advance.",
        "A list of vulnerabilities is only part of the answer. We show which ones can be exploited, what they lead to and whether your security team would notice.",
      ],
      primaryCta: { label: "Scope a penetration test", href: "/contact?topic=penetration-testing" },
      secondaryCta: { label: "Discuss a red team exercise", href: "/contact?topic=red-team" },
      photo: "analystHeadphones",
    },
    why: {
      title: "Controls that look fine on paper can still fail.",
      body: [
        "The firewall rules have been reviewed. EDR is on every laptop. MFA is turned on. The vulnerability scanner shows mostly green.",
        "None of that proves an attacker can't get in. Breaches usually happen in the gaps between controls: a service account that was exempted from MFA, a flat network segment, an alert that fired into an inbox nobody watches. Testing finds those gaps on your schedule instead of an attacker's.",
      ],
    },
    capabilities: [
      {
        id: "penetration-testing",
        title: "Penetration testing",
        summary: "Manual testing that goes well past an automated scan.",
        body: [
          "Every engagement is led by experienced testers working by hand. Scanners help with coverage, but the findings that matter most, such as broken access control, business logic flaws and chained misconfigurations, are found by people.",
        ],
        groups: [
          {
            label: "Applications",
            items: [
              "Web application penetration testing",
              "API testing for REST and GraphQL",
              "Mobile application testing for iOS and Android",
              "Authentication, session and authorization testing",
              "Business logic testing",
            ],
          },
          {
            label: "Infrastructure",
            items: [
              "External network penetration testing",
              "Internal network penetration testing",
              "Wireless network testing",
              "VPN and remote access testing",
              "Network device and firewall review",
            ],
          },
          {
            label: "Identity",
            items: [
              "Active Directory penetration testing",
              "Microsoft Entra ID testing",
              "Privilege escalation and credential attack paths",
              "Authentication bypass testing",
            ],
          },
          {
            label: "Cloud",
            items: [
              "AWS, Azure and Google Cloud penetration testing",
              "Cloud configuration and permission abuse",
              "Container and Kubernetes testing",
            ],
          },
          {
            label: "Specialized",
            items: [
              "IoT, embedded device and firmware testing",
              "OT and ICS testing, scoped carefully around safety",
              "Social engineering and phishing assessments",
            ],
          },
        ],
        note: "Reports can be structured to support PCI DSS Requirement 11.4, SOC 2 audits, HIPAA risk analysis and CMMC assessments.",
      },
      {
        id: "red-team",
        title: "Red team operations",
        summary: "Test the whole organization against a realistic objective.",
        body: [
          "A red team engagement asks a different question from a penetration test. Instead of finding as many weaknesses as possible, the team tries to reach a specific goal, such as access to payment systems or a sensitive file share, while staying out of sight. It tests people, process and technology together.",
        ],
        groups: [
          {
            label: "Depending on scope, an engagement can include",
            items: [
              "External reconnaissance and open-source intelligence",
              "Phishing and social engineering",
              "Initial access through applications or exposed services",
              "Identity compromise and Active Directory attack paths",
              "Cloud exploitation",
              "Lateral movement and privilege escalation",
              "Persistence and command-and-control simulation",
              "Objective-based scenarios agreed with leadership",
            ],
          },
        ],
      },
      {
        id: "purple-team",
        title: "Purple teaming",
        summary: "Attackers and defenders working side by side to improve detection.",
        body: [
          "Our operators run specific attack techniques while your defenders watch their tools in real time. Together we record what was detected, what was missed, which alerts lacked context and where logs were missing. You leave with concrete changes to detection rules and response playbooks, mapped to MITRE ATT&CK.",
        ],
      },
      {
        id: "assumed-breach",
        title: "Assumed breach testing",
        summary: "Start inside the network and spend the time where it counts.",
        body: [
          "For a determined attacker, getting in is often the easy part. Assumed breach testing begins with a foothold you provide, such as a standard user account, a domain-joined laptop or access to a cloud tenant, and measures how far an attacker could go from there.",
        ],
        groups: [
          {
            label: "We measure",
            items: [
              "Privilege escalation",
              "Lateral movement",
              "Credential access",
              "Access to sensitive data",
              "Persistence",
              "Whether your team detects and contains the activity",
            ],
          },
        ],
      },
      {
        id: "application-security",
        title: "Application and product security",
        summary: "Find weaknesses before your customers or attackers do.",
        groups: [
          {
            items: [
              "Secure code review",
              "Architecture and design review",
              "Threat modeling with STRIDE and attack trees",
              "Dependency and software supply chain review",
              "Binary and firmware analysis",
              "Reverse engineering",
              "Protocol security analysis",
              "Security evaluations for companies that build security-sensitive products",
            ],
          },
        ],
      },
      {
        id: "ai-security",
        title: "AI and LLM application security",
        summary: "New capabilities bring new ways to misuse them.",
        body: [
          "If you have built a chatbot, an AI agent or a retrieval system on a large language model, it needs the same scrutiny as any other application, plus tests for problems specific to AI. We test against the OWASP Top 10 for LLM Applications and keep the focus on one question: what can an attacker make the system do?",
        ],
        groups: [
          {
            items: [
              "Direct and indirect prompt injection",
              "Sensitive data disclosure",
              "Insecure tool and plugin use",
              "Excessive agent permissions",
              "Retrieval and vector store abuse",
              "Model and AI supply chain risk",
            ],
          },
        ],
      },
      {
        id: "control-validation",
        title: "Security control validation",
        summary: "Confirm the tools you paid for detect what they should.",
        groups: [
          {
            items: [
              "Breach and attack simulation",
              "EDR and XDR validation",
              "SIEM detection validation",
              "Email and web filtering validation",
              "Network segmentation testing",
              "Retesting after remediation",
            ],
          },
        ],
      },
    ],
    approach: [
      {
        title: "Scope and rules of engagement",
        body: "We agree on targets, timing, methods and emergency contacts in writing before any testing starts.",
      },
      {
        title: "Reconnaissance",
        body: "We map the target the way an attacker would and identify the most promising routes in.",
      },
      {
        title: "Exploitation",
        body: "Controlled exploitation within the agreed rules, with extra care around production systems.",
      },
      {
        title: "Progression",
        body: "We follow successful access as far as the scope allows, to show realistic business impact.",
      },
      {
        title: "Reporting",
        body: "Findings come with evidence, a plain-language impact statement and clear remediation steps.",
      },
      {
        title: "Retesting",
        body: "Once fixes are in place, we test again to confirm the issues are closed.",
      },
    ],
    deliverables: [
      "Executive summary that explains business impact without jargon",
      "Attack narrative showing how each path was found and followed",
      "Findings rated by severity and exploitability, with evidence",
      "Step-by-step remediation guidance for your engineers",
      "Detection notes showing what your tools saw and what they missed",
      "Retest results confirming which findings are closed",
    ],
    frameworks: ["pci-dss", "soc-2", "cmmc", "hipaa", "iso-27001", "nist-800-218"],
    platforms: ["scope", "range"],
    industries: ["technology-saas", "financial-services", "healthcare", "defense-contractors", "energy-utilities"],
    faqs: [
      {
        q: "What is the difference between a vulnerability scan and a penetration test?",
        a: "A vulnerability scan is automated. It compares software versions and settings against a list of known issues and produces a long report, often with false positives. A penetration test is carried out by people who confirm which issues are real, chain them together and show what an attacker could do with them.",
      },
      {
        q: "How often should we have a penetration test?",
        a: "At least once a year, and again after significant changes such as a new application, a cloud migration or an acquisition. PCI DSS requires annual testing and testing after significant changes, and most SOC 2 auditors and cyber insurers expect at least an annual test.",
      },
      {
        q: "Will testing disrupt our production systems?",
        a: "We plan carefully to avoid it. The rules of engagement define what is in scope, when testing happens and which techniques are off limits. Testers stay in contact with your team throughout and stop right away if anything unexpected happens.",
      },
      {
        q: "What do you need from us before testing starts?",
        a: "Usually a signed authorization, a list of targets, test accounts for authenticated testing and a technical contact for the duration of the test. For cloud environments we also confirm that the provider's testing policy is followed.",
      },
    ],
    cta: {
      title: "Find out whether your controls hold up.",
      body: "Tell us what you want tested. We will recommend the type of test, scope and timing that fit your goals and your budget.",
      action: { label: "Scope a test", href: "/contact?topic=penetration-testing" },
    },
  },

  {
    slug: "cloud-application-infrastructure",
    name: "Cloud, Application & Infrastructure Security",
    blurb: "Secure architecture and hands-on engineering for cloud platforms, applications, networks and endpoints.",
    highlights: [
      "AWS, Azure and Google Cloud security reviews",
      "DevSecOps and CI/CD pipeline hardening",
      "Zero Trust and network segmentation",
    ],
    metaTitle: "Cloud, Application & Infrastructure Security",
    metaDescription:
      "Cloud security architecture, DevSecOps, Kubernetes security, Zero Trust and security engineering for AWS, Azure and Google Cloud environments.",
    hero: {
      eyebrow: "Cloud, Application & Infrastructure Security",
      title: "Security designed into the systems you build and run.",
      intro: [
        "Your perimeter is no longer a single firewall. Applications talk to each other through APIs, employees work from anywhere and infrastructure is created by code and torn down again in minutes.",
        "We help engineering and IT teams design, review and harden that environment, so one mistake does not turn into a company-wide incident.",
      ],
      primaryCta: { label: "Request an architecture review", href: "/contact?topic=cloud" },
      secondaryCta: { label: "Talk to an engineer", href: "/contact?topic=cloud" },
      photo: "networkCables",
    },
    why: {
      title: "Architecture decides how bad a breach gets.",
      body: [
        "Serious incidents rarely come from one technical mistake. They grow because the environment lets them grow:",
      ],
      list: [
        "Networks are flat, so one compromised laptop can reach almost everything",
        "Users and cloud roles have far more access than they need",
        "Secrets sit in code repositories and build logs",
        "APIs trust callers they should verify",
        "Servers and containers run with default settings",
        "Logging is incomplete, so nobody can reconstruct what happened",
      ],
      closing: "Good engineering limits the blast radius. That is what this practice focuses on.",
    },
    capabilities: [
      {
        id: "cloud-security",
        title: "Cloud security",
        summary: "Build security into how you operate in the cloud.",
        groups: [
          {
            label: "Platforms",
            items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Hybrid and multi-cloud environments"],
          },
          {
            label: "Services",
            items: [
              "Cloud security architecture and landing zone design",
              "Configuration and posture reviews against CIS Benchmarks",
              "Identity, role and entitlement reviews",
              "Cloud network security",
              "Logging, monitoring and detection engineering",
              "Serverless and storage security reviews",
              "Hardening and remediation",
            ],
          },
        ],
      },
      {
        id: "kubernetes",
        title: "Containers and Kubernetes",
        summary: "Lock down clusters, images and the pipeline that builds them.",
        groups: [
          {
            items: [
              "Kubernetes architecture and cluster configuration review",
              "Workload isolation and network policies",
              "Container image and registry security",
              "Secrets management",
              "Admission control and policy enforcement",
              "Runtime security",
              "Service-to-service authentication",
            ],
          },
        ],
      },
      {
        id: "application-security",
        title: "Application security",
        summary: "Security that starts at design and follows the code into production.",
        groups: [
          {
            items: [
              "Secure architecture and design review",
              "Threat modeling",
              "Secure SDLC program design",
              "Security requirements and secure coding standards",
              "Code review support",
              "Software composition analysis and dependency management",
              "Secrets detection",
              "API security",
            ],
          },
        ],
      },
      {
        id: "devsecops",
        title: "DevSecOps",
        summary: "Security checks that keep up with your release schedule.",
        body: [
          "Adding a scanner to the pipeline is easy. Getting developers to trust its results, fix what it finds and keep shipping is harder. We design pipelines where security checks are fast, relevant and owned by the teams that write the code.",
        ],
        groups: [
          {
            items: [
              "CI/CD pipeline hardening",
              "Source control and branch protection",
              "Infrastructure as code scanning",
              "Artifact signing and software supply chain controls",
              "Container build pipeline security",
              "Automated security testing and quality gates",
              "Security workflows developers will actually use",
            ],
          },
        ],
      },
      {
        id: "network",
        title: "Network and infrastructure security",
        summary: "Reduce the trust your network grants by default.",
        groups: [
          {
            items: [
              "Enterprise and network security architecture",
              "Segmentation and microsegmentation",
              "Zero Trust architecture",
              "Secure remote access",
              "SASE and SSE design",
              "Firewall architecture and rule review",
              "Email domain security with SPF, DKIM and DMARC",
              "Secure administrative access",
              "System hardening against CIS Benchmarks",
            ],
          },
        ],
      },
      {
        id: "endpoint",
        title: "Endpoint security",
        summary: "Laptops and servers are where most attacks land first.",
        groups: [
          {
            items: [
              "EDR and XDR deployment and tuning",
              "Workstation and server hardening baselines",
              "Device control",
              "Endpoint telemetry design",
              "Local administrator and privilege controls",
              "Configuration management",
            ],
          },
        ],
      },
      {
        id: "architecture-review",
        title: "Security architecture reviews",
        summary: "Review the whole design, including the connections between systems.",
        groups: [
          {
            label: "Reviews cover",
            items: [
              "Trust boundaries",
              "Attack paths",
              "Identity and data flows",
              "Ingress and egress",
              "Administrative pathways",
              "Third-party connections",
              "Logging coverage",
              "Resilience and recovery assumptions",
            ],
          },
        ],
      },
      {
        id: "engineering",
        title: "Security engineering and remediation",
        summary: "Hands-on help fixing what reviews and tests turn up.",
        body: [
          "Finding a problem is half the job. Our engineers can work alongside your team to fix it: redesigning network segments, rolling out hardening baselines, integrating security tools and automating the checks so the same issues do not come back.",
        ],
      },
    ],
    approach: [
      {
        title: "Map",
        body: "We document the architecture, workloads, users, dependencies and trust boundaries as they really are.",
      },
      {
        title: "Analyze",
        body: "We look for weaknesses in design, configuration and control coverage.",
      },
      {
        title: "Prioritize",
        body: "We rank the weaknesses that make the environment easiest to attack and hardest to defend.",
      },
      {
        title: "Engineer",
        body: "We design and, where you want us to, implement stronger controls.",
      },
      {
        title: "Validate",
        body: "We test whether the new design behaves as intended, often with help from our offensive security team.",
      },
    ],
    deliverables: [
      "Architecture review report with diagrams of the key risks",
      "Prioritized remediation plan",
      "Hardened configuration baselines",
      "Infrastructure as code modules and pipeline templates, where in scope",
      "Logging and detection recommendations",
      "Validation test results",
    ],
    frameworks: ["iso-27017", "nist-800-218", "cmmc", "soc-2", "pci-dss", "iso-27001", "iec-62443"],
    platforms: ["scope", "signal"],
    industries: ["technology-saas", "financial-services", "healthcare", "state-local-government"],
    faqs: [
      {
        q: "Do you implement fixes, or only recommend them?",
        a: "Both. Some clients want an independent review and make the changes themselves. Others ask our engineers to do the work. We can also split it, for example by building templates that your team rolls out.",
      },
      {
        q: "Which standards do you use for cloud security reviews?",
        a: "Usually the CIS Benchmarks for the platform, the cloud provider's own security guidance and whichever compliance framework applies to you, such as SOC 2, PCI DSS or NIST SP 800-171.",
      },
      {
        q: "Can you help us adopt Zero Trust?",
        a: "Yes. We start by mapping who and what needs access to which resources, then design the identity, device and network controls to enforce it. Most organizations get there in phases, starting with remote access and privileged accounts.",
      },
    ],
    cta: {
      title: "Get a second set of eyes on your architecture.",
      body: "Whether you are planning a migration, launching a product or cleaning up after years of growth, an architecture review is a practical place to start.",
      action: { label: "Request an architecture review", href: "/contact?topic=cloud" },
    },
  },

  {
    slug: "identity-data-security",
    name: "Identity & Data Security",
    blurb: "Protect identities, privileged access and the sensitive data they can reach.",
    highlights: [
      "Microsoft Entra ID and Active Directory security",
      "Privileged access management",
      "Data discovery, classification and DLP",
    ],
    metaTitle: "Identity & Data Security Services",
    metaDescription:
      "Identity and access management, privileged access management, Active Directory and Entra ID security, identity threat detection and data protection services.",
    hero: {
      eyebrow: "Identity & Data Security",
      title: "Control who can reach what, and protect the data that matters.",
      intro: [
        "Attackers increasingly log in instead of breaking in. A stolen password, a session token or an over-permissioned service account can be enough to reach your most sensitive systems while looking like normal activity.",
        "We help you decide who and what should have access, enforce it, and spot misuse quickly.",
      ],
      primaryCta: { label: "Review your identity risk", href: "/contact?topic=identity" },
      secondaryCta: { label: "Assess privileged access", href: "/contact?topic=identity" },
      photo: "serverAisle",
    },
    why: {
      title: "Identity is now the main attack surface.",
      body: ["An attacker holding valid credentials can:"],
      list: [
        "Get past perimeter controls without setting them off",
        "Sign in to cloud platforms and SaaS applications",
        "Move between systems using legitimate admin tools",
        "Escalate privileges through misconfigured roles",
        "Find and copy sensitive data",
        "Set up persistence that survives a password reset",
        "Look like a normal employee the entire time",
      ],
      closing:
        "Identity security has to cover more than user accounts. It includes administrators, service accounts, workloads, API keys, certificates and the data each of them can reach.",
    },
    capabilities: [
      {
        id: "iam",
        title: "Identity and access management",
        summary: "Make every access decision intentional.",
        groups: [
          {
            items: [
              "IAM strategy and architecture",
              "Identity governance and administration",
              "Joiner, mover and leaver processes",
              "Role design and access models",
              "Access reviews and certification",
              "Single sign-on and federation",
              "Phishing-resistant MFA rollout",
              "Conditional access policy design",
              "Customer and partner identity",
            ],
          },
        ],
      },
      {
        id: "pam",
        title: "Privileged access management",
        summary: "Protect the accounts that can change everything.",
        body: [
          "Domain admins, cloud owners and database administrators can change infrastructure, security tools and data. They are the accounts attackers want most, and they deserve the strongest controls.",
        ],
        groups: [
          {
            items: [
              "PAM architecture and tool selection",
              "Privileged account discovery",
              "Administrative tiering",
              "Credential vaulting and rotation",
              "Just-in-time and just-enough access",
              "Session recording and monitoring",
              "Break-glass procedures",
              "Service account governance",
            ],
          },
        ],
      },
      {
        id: "directory",
        title: "Active Directory and Microsoft Entra ID",
        summary: "Harden the directory the rest of the company depends on.",
        body: [
          "In most companies the directory connects everything. A weak spot there tends to become a weak spot everywhere else.",
        ],
        groups: [
          {
            items: [
              "Active Directory security assessment",
              "Microsoft Entra ID and hybrid identity review",
              "Trust relationships and tenant configuration",
              "Tiering and administrative boundaries",
              "Legacy protocol and authentication cleanup",
              "Group, role and conditional access review",
              "Identity attack path analysis",
              "Directory backup and recovery planning",
            ],
          },
        ],
      },
      {
        id: "machine-identity",
        title: "Machine and workload identity",
        summary: "Most identities in your environment do not belong to people.",
        groups: [
          {
            items: [
              "Non-human identity discovery",
              "Service account security",
              "Workload identity federation",
              "API key and token security",
              "Secrets management",
              "Certificate and PKI management",
              "Key lifecycle and rotation",
            ],
          },
        ],
      },
      {
        id: "itdr",
        title: "Identity threat detection",
        summary: "Catch credential abuse while it is still happening.",
        groups: [
          {
            items: [
              "Suspicious sign-in detection",
              "Privileged activity monitoring",
              "Impossible travel and unusual access analysis",
              "MFA fatigue and token theft detection",
              "Directory change monitoring",
              "Cloud role abuse detection",
              "Identity-focused threat hunting",
            ],
          },
        ],
      },
      {
        id: "data",
        title: "Data discovery and protection",
        summary: "Know where sensitive data lives and who can reach it.",
        groups: [
          {
            label: "Discovery and classification",
            items: [
              "Sensitive data discovery",
              "Classification schemes",
              "Data flow mapping",
              "Data ownership and inventory",
              "Retention and handling requirements",
              "Access mapping",
            ],
          },
          {
            label: "Protection",
            items: [
              "Data loss prevention (DLP)",
              "Data security posture management (DSPM)",
              "Database security",
              "Encryption and key management",
              "Tokenization and masking",
              "Secure data sharing",
              "Monitoring of high-risk data access",
            ],
          },
        ],
      },
    ],
    approach: [
      {
        title: "Discover",
        body: "We find the identities, privileges, credentials, trust relationships and sensitive data in your environment.",
      },
      { title: "Map", body: "We show how access connects people, machines, applications, infrastructure and data." },
      {
        title: "Reduce",
        body: "We help remove unnecessary privilege, stale accounts, weak credentials and excess trust.",
      },
      {
        title: "Protect",
        body: "We put stronger authentication, privileged access controls, secrets management and data protection in place.",
      },
      {
        title: "Detect",
        body: "We set up monitoring for identity abuse and unusual access to sensitive systems and data.",
      },
      { title: "Validate", body: "We test the result against realistic attack paths to confirm it holds." },
    ],
    deliverables: [
      "Identity and privileged access assessment report",
      "Map of identity attack paths to critical systems",
      "Access model and role design, where in scope",
      "Conditional access and MFA policy recommendations",
      "Data inventory and classification scheme",
      "Prioritized remediation plan",
    ],
    frameworks: ["nist-800-171", "cmmc", "hipaa", "soc-2", "pci-dss", "nist-800-53"],
    platforms: ["scope", "signal"],
    industries: ["financial-services", "healthcare", "defense-contractors", "technology-saas"],
    faqs: [
      {
        q: "We already use MFA. Is that enough?",
        a: "It is a strong start, but attackers now regularly get around text message codes and push notifications using phishing kits, MFA fatigue and stolen session tokens. Phishing-resistant methods such as FIDO2 security keys and passkeys, combined with conditional access and sensible session controls, close most of those gaps.",
      },
      {
        q: "What is identity threat detection and response (ITDR)?",
        a: "ITDR means monitoring identity systems such as Microsoft Entra ID and Active Directory for signs of abuse and responding quickly when they appear. It covers activity that endpoint and network tools often miss, such as a real account signing in from an unusual place or a new admin role assigned overnight.",
      },
      {
        q: "Where should we start?",
        a: "Usually with privileged accounts. They carry the most risk and are the smallest group to fix. A privileged access review often turns up stale admin accounts, shared credentials and service accounts with far more access than they need, and most of that can be fixed quickly.",
      },
    ],
    cta: {
      title: "Know who holds access before an attacker uses it.",
      body: "An identity risk review shows where excess privilege, weak authentication and exposed data overlap, and what to fix first.",
      action: { label: "Review your identity risk", href: "/contact?topic=identity" },
    },
  },

  {
    slug: "managed-detection-response",
    name: "Managed Detection & Response",
    blurb:
      "Security monitoring, detection engineering and threat hunting focused on real threats rather than alert volume.",
    highlights: [
      "Managed detection and response (MDR)",
      "SOC design, SIEM and detection engineering",
      "Threat hunting and security automation",
    ],
    metaTitle: "Managed Detection & Response (MDR) and SOC Services",
    metaDescription:
      "Managed detection and response, SOC design, SIEM and detection engineering, threat hunting and security automation for organizations in Texas and across the U.S.",
    hero: {
      eyebrow: "Managed Detection & Response",
      title: "Spot real attacks early and stop them before they spread.",
      intro: [
        "Security teams already collect more data than they can review. The hard part is finding the few events that matter and acting on them quickly.",
        "We combine monitoring, detection engineering, threat hunting and automation so your team sees the activity that matters, understands it fast and acts on it.",
      ],
      primaryCta: { label: "Discuss managed detection", href: "/contact?topic=mdr" },
      secondaryCta: { label: "Assess your SOC", href: "/contact?topic=mdr" },
      photo: "analystNightDesk",
    },
    why: {
      title: "More alerts do not make you safer.",
      body: [
        "Endpoints, identity providers, firewalls, cloud platforms and SaaS applications all generate security events. Without context and a disciplined investigation process, the important ones get buried.",
        "A working security operation answers these questions quickly:",
      ],
      list: [
        "What is happening, and where?",
        "Which activity is actually malicious?",
        "What does the evidence show?",
        "How far has the attacker progressed?",
        "What should we do right now?",
        "Did the containment work?",
      ],
    },
    capabilities: [
      {
        id: "mdr",
        title: "Managed detection and response",
        summary: "Monitoring, investigation and coordinated response, delivered as a service.",
        body: [
          "Our analysts monitor your environment, investigate suspicious activity and work with your team to contain confirmed threats.",
        ],
        groups: [
          {
            label: "Coverage",
            items: [
              "Endpoints and servers",
              "Identity providers",
              "Networks and firewalls",
              "Cloud platforms",
              "SaaS applications",
              "Email",
            ],
          },
          {
            label: "What the service includes",
            items: [
              "Continuous security monitoring",
              "Alert triage and investigation",
              "Endpoint, network, cloud and identity detection",
              "Threat intelligence enrichment",
              "Escalation to your team with clear next steps",
              "Coordinated containment",
              "Handover to incident response when needed",
              "Monthly reporting and service reviews",
            ],
          },
        ],
        note: "Monitoring hours, response times and the containment actions we are authorized to take are set out in your service agreement.",
      },
      {
        id: "soc",
        title: "Security operations center design",
        summary: "Build a new SOC or modernize the one you have.",
        groups: [
          {
            items: [
              "SOC strategy and operating model",
              "SOC design, build and modernization",
              "SIEM architecture and engineering",
              "SOAR design",
              "Use case development",
              "Case management and analyst workflows",
              "Metrics and reporting",
              "Co-managed SOC arrangements",
            ],
          },
        ],
      },
      {
        id: "detection-engineering",
        title: "Detection engineering",
        summary: "Detections written for your environment and the threats you face.",
        groups: [
          {
            items: [
              "Threat-informed detection design",
              "SIEM, EDR, identity and cloud detections",
              "Behavioral analytics",
              "MITRE ATT&CK coverage mapping",
              "Detection testing and tuning",
              "False positive reduction",
              "Detection lifecycle management",
            ],
          },
        ],
      },
      {
        id: "threat-hunting",
        title: "Threat hunting",
        summary: "Look for the activity your rules did not catch.",
        body: [
          "Each hunt starts from a hypothesis, often drawn from current threat intelligence, and searches across endpoint, identity, network and cloud data. A good hunt should leave something behind: a new detection, a better log source or an improved playbook.",
        ],
        groups: [
          {
            label: "Common hunt topics",
            items: [
              "Persistence and privilege escalation",
              "Lateral movement",
              "Suspicious authentication and identity abuse",
              "Command-and-control traffic",
              "Unusual data access",
              "Intelligence-led hunts for active campaigns",
            ],
          },
        ],
      },
      {
        id: "managed-security",
        title: "Managed security services",
        summary: "We run selected security tools so your team can focus elsewhere.",
        groups: [
          {
            items: [
              "Managed SIEM",
              "Managed EDR and XDR",
              "Managed vulnerability management",
              "Managed attack surface monitoring",
              "Managed cloud security posture",
              "Security tool health monitoring",
            ],
          },
        ],
      },
      {
        id: "automation",
        title: "Security automation",
        summary: "Automate the repetitive work and keep people on the decisions.",
        groups: [
          {
            items: [
              "Alert enrichment",
              "Indicator processing",
              "Case creation and ticket routing",
              "Evidence collection",
              "Response playbooks",
              "Containment requests with approval steps",
              "Reporting",
            ],
          },
        ],
      },
    ],
    approach: [
      {
        title: "Observe",
        body: "Collect the right telemetry from endpoints, identity, network, cloud and applications.",
      },
      {
        title: "Detect",
        body: "Flag suspicious behavior using rules, analytics, threat intelligence and knowledge of your environment.",
      },
      {
        title: "Investigate",
        body: "Connect alerts, users, devices and evidence into a clear account of what happened.",
      },
      {
        title: "Contain",
        body: "Take proportionate action, agreed with your team, when malicious activity is confirmed.",
      },
      { title: "Hunt", body: "Look for activity that existing detections may have missed." },
      {
        title: "Improve",
        body: "Feed lessons from incidents, exercises and hunts back into detections and processes.",
      },
    ],
    deliverables: [
      "Onboarding plan and review of log source coverage",
      "Detection coverage map against MITRE ATT&CK",
      "Escalation and response runbooks agreed with your team",
      "Monthly service report with trends and recommendations",
      "Quarterly service review with leadership",
      "Post-incident summaries for confirmed threats",
    ],
    frameworks: ["nist-csf", "nist-800-61", "cmmc", "hipaa", "pci-dss", "soc-2"],
    platforms: ["signal", "scope", "range"],
    industries: ["healthcare", "financial-services", "energy-utilities", "state-local-government"],
    faqs: [
      {
        q: "What is the difference between MDR and an MSSP?",
        a: "A traditional managed security service provider (MSSP) mostly manages security tools and forwards alerts. With MDR, analysts investigate the alerts, decide what is real and help contain threats. In practice the lines blur, so ask any provider exactly what happens after an alert fires.",
      },
      {
        q: "Do we have to replace our existing security tools?",
        a: "Usually not. We work with the EDR, SIEM and cloud tools you already have where they are suitable, and recommend changes only where there are real gaps in coverage.",
      },
      {
        q: "Can you work alongside our internal security team?",
        a: "Yes. Many organizations use a co-managed model, where responsibilities are split between their team and ours by system, by shift or by type of alert. Everything is written down during onboarding so nothing falls between the two teams.",
      },
    ],
    cta: {
      title: "Find out what your security data is telling you.",
      body: "We can review your current monitoring, show where coverage is thin and recommend whether managed detection, a co-managed model or an in-house SOC makes the most sense.",
      action: { label: "Discuss managed detection", href: "/contact?topic=mdr" },
    },
  },

  {
    slug: "incident-response",
    name: "Incident Response & Digital Forensics",
    blurb: "Contain active incidents, find out what happened and recover with evidence you can stand behind.",
    highlights: [
      "Ransomware and business email compromise response",
      "Digital forensics and compromise assessments",
      "Incident response retainers and threat intelligence",
    ],
    metaTitle: "Incident Response & Digital Forensics (DFIR)",
    metaDescription:
      "Emergency incident response, digital forensics, ransomware and business email compromise investigations, compromise assessments and incident response retainers.",
    hero: {
      eyebrow: "Incident Response & Digital Forensics",
      title: "When something goes wrong, get clear answers fast.",
      intro: [
        "A cyber incident brings pressure, incomplete information and decisions that can't wait. Leadership wants to know what happened. So do lawyers, insurers and sometimes regulators.",
        "Our responders help you contain the threat, work out what was affected, preserve evidence properly and get back to normal operations with a plan to keep it from happening again.",
      ],
      primaryCta: { label: "Get help now", href: "/emergency" },
      secondaryCta: { label: "Set up a retainer", href: "/contact?topic=incident-response" },
      photo: "houstonSkylineNight",
    },
    why: {
      title: "During an incident, you need facts quickly.",
      body: ["The first hours of an incident are full of questions nobody can answer yet:"],
      list: [
        "Is the attacker still in the network?",
        "Which systems, accounts and data are affected?",
        "How did they get in?",
        "What did they access or take?",
        "Which evidence needs to be preserved?",
        "What can we shut down safely, and what will that break?",
        "Who has to be notified, and by when?",
      ],
      closing:
        "We bring incident coordination, technical investigation, forensics and threat intelligence together so those questions get answered in the right order.",
    },
    capabilities: [
      {
        id: "incident-response",
        title: "Incident response",
        summary: "Contain the threat and regain control.",
        groups: [
          {
            label: "Incident types",
            items: [
              "Ransomware and extortion",
              "Business email compromise and wire fraud",
              "Data breaches",
              "Cloud account compromise",
              "Identity compromise",
              "Insider threats",
              "Web application compromise",
              "Third-party and supply chain incidents",
              "Destructive attacks",
            ],
          },
          {
            label: "Response support",
            items: [
              "Emergency response and triage",
              "Scoping and containment planning",
              "Evidence preservation",
              "Eradication and recovery guidance",
              "Coordination with legal counsel and cyber insurers",
              "Executive and board briefings",
              "Post-incident review",
            ],
          },
        ],
      },
      {
        id: "forensics",
        title: "Digital forensics",
        summary: "Establish what the evidence actually supports.",
        groups: [
          {
            items: [
              "Endpoint and server forensics",
              "Memory forensics",
              "Network forensics",
              "Cloud and SaaS forensics",
              "Email and Microsoft 365 investigations",
              "Mobile device forensics",
              "Log analysis and timeline reconstruction",
              "Root cause analysis",
              "Evidence handling with documented chain of custody",
            ],
          },
        ],
        note: "Our reports keep confirmed findings, reasonable inferences and open questions clearly apart. That matters when the report is read by lawyers, insurers or regulators.",
      },
      {
        id: "malware-analysis",
        title: "Malware analysis",
        summary: "Understand what a malicious file does and how to find it elsewhere.",
        body: ["Analysis uses static, dynamic and reverse engineering techniques in an isolated lab."],
        groups: [
          {
            label: "We establish",
            items: [
              "Behavior and capabilities",
              "Persistence mechanisms",
              "Command-and-control infrastructure",
              "Embedded configuration",
              "Indicators of compromise",
              "Links to known malware families and campaigns",
            ],
          },
        ],
      },
      {
        id: "compromise-assessment",
        title: "Compromise assessment",
        summary: "Find out whether you have already been breached.",
        body: [
          "Useful before an acquisition, after a suspicious event or when a vendor you rely on has been compromised.",
        ],
        groups: [
          {
            items: [
              "Enterprise-wide threat hunting",
              "Indicator sweeps",
              "Persistence discovery",
              "Review of suspicious identity and cloud activity",
              "Historical log analysis",
              "Scoping of affected systems and accounts",
            ],
          },
        ],
      },
      {
        id: "threat-intelligence",
        title: "Threat intelligence",
        summary: "Intelligence is only useful if it changes a decision.",
        groups: [
          {
            items: [
              "Threat actor and campaign profiling",
              "Analysis of tactics, techniques and procedures",
              "MITRE ATT&CK mapping",
              "Vulnerability intelligence",
              "Dark web monitoring for leaked credentials and data",
              "Intelligence reporting for security teams and executives",
            ],
          },
        ],
      },
      {
        id: "retainers",
        title: "Incident response retainers",
        summary: "Agree on the details before you need them.",
        body: [
          "A retainer sets up the relationship in advance, so nobody is negotiating a contract in the middle of an incident. Retainers can also include readiness work, such as tabletop exercises, that keeps the time useful if no incident occurs.",
        ],
        groups: [
          {
            items: [
              "Agreed contact and escalation routes",
              "Defined response times",
              "Pre-approved access and evidence handling procedures",
              "Background on your environment and key contacts",
              "Tabletop exercises and readiness reviews",
              "Incident response plan development",
            ],
          },
        ],
      },
    ],
    approach: [
      {
        title: "Stabilize",
        body: "Set up communication, agree on immediate priorities and put a clear response structure in place.",
      },
      { title: "Scope", body: "Identify the affected systems, identities, data and business processes." },
      {
        title: "Investigate",
        body: "Collect and analyze evidence to reconstruct what happened and measure the impact.",
      },
      { title: "Contain", body: "Cut off attacker access while weighing the effect on operations and on evidence." },
      { title: "Eradicate", body: "Remove persistence, malicious tools, compromised access and the root cause." },
      { title: "Recover", body: "Restore operations with validation and closer monitoring." },
      {
        title: "Improve",
        body: "Turn what was learned into stronger architecture, identity controls, detections and response plans.",
      },
    ],
    deliverables: [
      "Incident timeline",
      "Scope of affected systems, accounts and data",
      "Forensic report with evidence and chain of custody records",
      "Record of containment and eradication actions",
      "Recovery and hardening recommendations",
      "Executive summary suitable for leadership, counsel and insurers",
    ],
    frameworks: ["nist-800-61", "hipaa", "cmmc", "pci-dss", "nist-csf"],
    platforms: ["signal", "range", "scope"],
    industries: [
      "healthcare",
      "financial-services",
      "energy-utilities",
      "state-local-government",
      "defense-contractors",
    ],
    faqs: [
      {
        q: "Should we call our cyber insurer or an incident response firm first?",
        a: "Check your policy right away. Many policies require you to notify the carrier promptly and to use a response firm from its approved panel, and engaging a firm outside the panel without approval can affect coverage. It is also common to bring in outside legal counsel early so the investigation can be run under attorney-client privilege. If you are unsure, call us and we will help you work through the order.",
      },
      {
        q: "What notification deadlines apply in Texas?",
        a: "Texas law requires businesses to notify affected individuals within 60 days of determining that a breach of sensitive personal information occurred. If 250 or more Texas residents are affected, the Texas Attorney General must be notified within 30 days. Other deadlines may apply under HIPAA, SEC rules, DFARS, your contracts and the laws of other states, so involve legal counsel early.",
      },
      {
        q: "What should we do before you arrive?",
        a: "Do not wipe or rebuild affected systems yet, because that destroys evidence. Where possible, disconnect them from the network instead of powering them off. Preserve logs, move to out-of-band communication if email may be compromised, and write down what you have seen and when. Our emergency page has a short checklist.",
      },
    ],
    cta: {
      title: "If you suspect an incident, call now.",
      body: "The earlier we start, the more evidence survives and the more options you have.",
      action: { label: "Get incident help", href: "/emergency" },
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
