/**
 * Company details used across the whole site.
 *
 * Every value marked LAUNCH-PLACEHOLDER is a stand-in. `npm run check:launch`
 * fails the production build on Vercel until all of them are replaced.
 * Phone numbers use the 555-01xx range, which is reserved for fiction and can
 * never ring a real person.
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
    display: "(512) 555-0147", // LAUNCH-PLACEHOLDER
    tel: "+15125550147", // LAUNCH-PLACEHOLDER
  },

  /**
   * Incident line. Only describe it as round-the-clock if someone really
   * answers at 3 a.m. on a Sunday. Set `roundTheClock` to false otherwise and
   * the site will show business hours instead.
   */
  incidentLine: {
    display: "(512) 555-0199", // LAUNCH-PLACEHOLDER
    tel: "+15125550199", // LAUNCH-PLACEHOLDER
    roundTheClock: true, // LAUNCH-CONFIRM: is this line staffed 24/7?
  },

  address: {
    street: "1201 Example Ave, Suite 300", // LAUNCH-PLACEHOLDER
    city: "Austin", // LAUNCH-PLACEHOLDER
    region: "TX",
    regionName: "Texas",
    postalCode: "78701", // LAUNCH-PLACEHOLDER
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
