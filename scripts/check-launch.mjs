#!/usr/bin/env node
/**
 * Pre-launch gate.
 *
 * Runs before every build. It only enforces on Vercel production deployments served
 * on the live domain (silver-fox-consulting.us). Local builds, previews and production
 * builds on the temporary vercel.app address keep working while placeholders are
 * still in place. Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the custom domain once
 * it is added, which switches enforcement on automatically. Run it manually with:
 *
 *   npm run check:launch
 *
 * It fails when:
 *   - src/content/site.ts still contains LAUNCH-PLACEHOLDER or LAUNCH-CONFIRM markers
 *   - fictional 555-01xx phone numbers or the example street address remain
 *   - (warning only) contact form keys are missing; the contact page then shows
 *     direct email and phone details instead of the form
 *   - public/.well-known/security.txt has expired or expires within 30 days
 */
import { readFileSync } from "node:fs";

const force = process.argv.includes("--force");
const LIVE_DOMAIN = "silver-fox-consulting.us";
const onLiveDomain = (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "").replace(/^www\./, "") === LIVE_DOMAIN;
const enforce = force || (process.env.VERCEL_ENV === "production" && onLiveDomain);

if (!enforce) {
  console.log(
    "Launch check skipped (not a production build on the live domain). Run `npm run check:launch` to check manually.",
  );
  process.exit(0);
}

const problems = [];

const siteTs = readFileSync("src/content/site.ts", "utf8");
siteTs.split(/\r?\n/).forEach((line, i) => {
  // Only inline markers on value lines count, not the explanation in the file header.
  if (/\/\/\s*LAUNCH-PLACEHOLDER/.test(line)) problems.push(`site.ts:${i + 1} placeholder value: ${line.trim()}`);
  if (/\/\/\s*LAUNCH-CONFIRM/.test(line)) problems.push(`site.ts:${i + 1} needs confirmation: ${line.trim()}`);
  if (/555-01\d\d|55501\d\d/.test(line)) problems.push(`site.ts:${i + 1} fictional 555 phone number`);
  if (/Example Ave/i.test(line)) problems.push(`site.ts:${i + 1} example street address`);
});

const requiredEnv = [
  "RESEND_API_KEY",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
  "TURNSTILE_SECRET_KEY",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.warn(
    `Warning: contact form keys missing (${missingEnv.join(", ")}). The contact page will show direct contact details until they are set.`,
  );
}

const sec = readFileSync("public/.well-known/security.txt", "utf8");
const expires = sec.match(/^Expires:\s*(.+)$/m)?.[1];
if (!expires) {
  problems.push("security.txt has no Expires field");
} else {
  const days = (new Date(expires).getTime() - Date.now()) / 86_400_000;
  if (Number.isNaN(days) || days < 30) problems.push(`security.txt Expires (${expires}) is past or within 30 days`);
}

if (problems.length > 0) {
  console.error("Launch check failed. Fix these before deploying to production:\n");
  for (const p of problems) console.error(`  - ${p}`);
  console.error("\nSee docs/LAUNCH_CHECKLIST.md.");
  process.exit(1);
}
console.log("Launch check passed.");
