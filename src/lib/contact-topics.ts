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
  { value: "iso-27001", label: "ISO/IEC 27001", group: "Compliance: ISO and IEC" },
  { value: "iso-27017", label: "ISO/IEC 27017", group: "Compliance: ISO and IEC" },
  { value: "iso-9001", label: "ISO 9001", group: "Compliance: ISO and IEC" },
  { value: "iso-17021", label: "ISO/IEC 17021-1 (certification bodies)", group: "Compliance: ISO and IEC" },
  { value: "iec-62443", label: "ISA/IEC 62443", group: "Compliance: ISO and IEC" },
  { value: "nist-csf", label: "NIST CSF 2.0", group: "Compliance: NIST" },
  { value: "nist-800-53", label: "NIST SP 800-53", group: "Compliance: NIST" },
  { value: "nist-800-171", label: "NIST SP 800-171", group: "Compliance: NIST" },
  { value: "nist-800-61", label: "NIST SP 800-61 incident response", group: "Compliance: NIST" },
  { value: "nist-800-218", label: "NIST SSDF (SP 800-218)", group: "Compliance: NIST" },
  { value: "soc-1", label: "SOC 1", group: "Compliance: SOC" },
  { value: "soc-2", label: "SOC 2", group: "Compliance: SOC" },
  { value: "soc-3", label: "SOC 3", group: "Compliance: SOC" },
  { value: "cmmc", label: "CMMC 2.0", group: "Compliance: US and industry" },
  { value: "hipaa", label: "HIPAA", group: "Compliance: US and industry" },
  { value: "pci-dss", label: "PCI DSS", group: "Compliance: US and industry" },
  { value: "tx-ramp", label: "TX-RAMP", group: "Compliance: US and industry" },
  { value: "compliance", label: "Another framework or not sure", group: "Compliance: US and industry" },
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
  "energy-utilities": "iec-62443",
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
