/**
 * Company details used across the whole site.
 *
 * If a value is ever a stand-in, mark it with a trailing LAUNCH-PLACEHOLDER
 * comment (or LAUNCH-CONFIRM for an unverified claim). `npm run check:launch`
 * fails production builds on the live domain while any marker remains.
 */

export const site = {
  /** Short name used in running copy. */
  name: "Silver Fox",
  /** Brand name shown in the logo lockup and page titles. */
  brand: "Silver Fox Consulting",
  legalName: "Silver Fox LLC",
  url: "https://silver-fox-consulting.us",
  description:
    "Silver Fox is a Texas cybersecurity firm. We run penetration tests and red team exercises, prepare companies for CMMC, SOC 2 and HIPAA, and help security teams detect and respond to attacks.",

  email: "contact@silver-fox-consulting.us",
  securityEmail: "security@silver-fox-consulting.us",
  privacyEmail: "privacy@silver-fox-consulting.us",

  phone: {
    display: "+1 (484) 657-3168",
    tel: "+14846573168",
  },

  /**
   * Incident line. Currently the main number. Only set `roundTheClock` to true
   * once someone really answers at 3 a.m. on a Sunday; while it is false the
   * site shows business hours instead of "24/7".
   */
  incidentLine: {
    display: "+1 (484) 657-3168",
    tel: "+14846573168",
    roundTheClock: false,
  },

  address: {
    street: "Hall Office Park",
    city: "Frisco",
    region: "TX",
    regionName: "Texas",
    postalCode: "75034",
    country: "US",
  },

  hours: "Monday through Friday, 8 a.m. to 6 p.m. Central",

  /** Profile URLs. Leave empty to hide the icon. */
  social: {
    linkedin: "",
  },

  /** Year the site copyright starts. */
  copyrightStartYear: 2026,

  /** Shown on the Privacy Policy, Terms and Accessibility pages. Update whenever they change. */
  legalLastUpdated: "November 5, 2026",
} as const;

export function incidentAvailability(): string {
  return site.incidentLine.roundTheClock ? "24 hours a day, 7 days a week" : site.hours;
}

export function fullAddress(): string {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}
