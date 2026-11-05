/** Options for the contact form topic field, plus aliases used in ?topic= links. */

export type Topic = { value: string; label: string; group: string };

export const TOPICS: Topic[] = [
  { value: "strategy", label: "Risk assessment, strategy or virtual CISO", group: "Services" },
  { value: "penetration-testing", label: "Penetration testing", group: "Services" },
  { value: "red-team", label: "Red team or purple team exercise", group: "Services" },
  { value: "cloud", label: "Cloud, application or infrastructure security", group: "Services" },
  { value: "identity", label: "Identity and data security", group: "Services" },
  { value: "mdr", label: "Managed detection and response", group: "Services" },
  { value: "incident-response", label: "Incident response retainer or forensics", group: "Services" },
  { value: "cmmc", label: "CMMC and NIST SP 800-171", group: "Compliance" },
  { value: "soc-2", label: "SOC 2", group: "Compliance" },
  { value: "hipaa", label: "HIPAA", group: "Compliance" },
  { value: "pci-dss", label: "PCI DSS", group: "Compliance" },
  { value: "tx-ramp", label: "TX-RAMP", group: "Compliance" },
  { value: "iso-27001", label: "ISO 27001", group: "Compliance" },
  { value: "nist-csf", label: "NIST CSF 2.0", group: "Compliance" },
  { value: "compliance", label: "Another framework or not sure", group: "Compliance" },
  { value: "scope", label: "SCOPE", group: "Platforms" },
  { value: "signal", label: "SIGNAL", group: "Platforms" },
  { value: "range", label: "RANGE", group: "Platforms" },
  { value: "engineering", label: "Engineering and applied R&D", group: "Other" },
  { value: "other", label: "Something else", group: "Other" },
];

export const TOPIC_VALUES = TOPICS.map((t) => t.value) as [string, ...string[]];

/** Maps ?topic= values from links across the site to a form option. */
const ALIASES: Record<string, string> = {
  platforms: "scope",
  "defense-contractors": "cmmc",
  "energy-utilities": "other",
  healthcare: "hipaa",
  "financial-services": "other",
  "technology-saas": "soc-2",
  "state-local-government": "other",
};

export function resolveTopic(raw: string | null | undefined): string {
  if (!raw) return "";
  if (TOPIC_VALUES.includes(raw)) return raw;
  return ALIASES[raw] ?? "";
}

export function topicLabel(value: string): string {
  return TOPICS.find((t) => t.value === value)?.label ?? value;
}
