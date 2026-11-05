# Launch checklist

Work through this list before pointing the domain at production. Items marked **(blocks deploy)** are enforced by `npm run check:launch`. It runs before every build, and it starts blocking production deploys automatically as soon as silver-fox-consulting.us is added to the Vercel project. Until then, production deploys on the temporary vercel.app address go through, stay out of search engines, and the contact form logs submissions to the Vercel function logs instead of emailing them.

## 1. Company details (blocks deploy)

All of these are in `src/content/site.ts`. Remove each `LAUNCH-PLACEHOLDER` or `LAUNCH-CONFIRM` comment once the value is real.

- [ ] Main phone number (currently a fictional 555 number)
- [ ] Incident line number (currently a fictional 555 number)
- [ ] Confirm the incident line is really staffed 24/7. If not, set `roundTheClock: false` and the site shows business hours instead.
- [ ] Street address, city and ZIP code. The city also appears in the utility bar, the home page and the About page.
- [ ] Business hours
- [ ] LinkedIn URL, if you have one (leave empty to hide)

## 2. Claims to confirm with leadership

These statements are reasonable for a firm like this, but only the company can confirm them. Change or remove anything that is not true today.

| Claim | Where |
| --- | --- |
| Team holds OSCP, CISSP and CREST certifications | `src/app/about/page.tsx` |
| "We come on site when the job calls for it" / "we can be on site" | `src/app/page.tsx`, `src/app/about/page.tsx` |
| Written proposal with scope, timeline, team and price before work starts | `src/app/page.tsx`, `src/app/contact/page.tsx` |
| All six service practices are offered in the U.S. (confirmed) | `src/content/services.ts` |
| MDR service details (coverage, monthly reports, quarterly reviews) | `src/content/services.ts` |
| Every SCOPE, SIGNAL and RANGE capability is available today | `src/content/platforms.ts` |
| Engineering capabilities (computer vision, edge systems and so on) | `src/app/engineering/page.tsx` |
| Silver Fox helps certification bodies with ISO/IEC 17021-1 accreditation readiness | `src/content/compliance-extra.ts` |
| The services described on the 10 newer framework pages (ISO 9001, 27017, 17021-1, 62443; NIST 800-53, 800-171, 800-61, SSDF; SOC 1 and 3) are offered | `src/content/compliance-extra.ts` |
| Home page stat "24/7 incident response line" (shown only while `roundTheClock` is true) | `src/app/page.tsx` |

**Authorizations.** The compliance pages say plainly that Silver Fox prepares clients for assessments and that certifications are issued by third parties. If Silver Fox is (or becomes) a CMMC C3PAO, a PCI QSA company or a CPA firm, those pages can be updated. Until then, do not describe the company as certifying anyone.

**Testimonials and case studies.** Only publish real ones, with the client's written permission. The FTC's 2024 rule on fake reviews and testimonials allows civil penalties for fabricated or misleading testimonials.

## 3. Legal review

- [ ] Have counsel review `/privacy`, `/terms` and `/accessibility`. They were written to match how this site actually works (no ad cookies, Vercel Web Analytics, Cloudflare Turnstile, Resend), but they are not legal advice.
- [ ] Update `legalLastUpdated` in `src/content/site.ts` whenever those pages change.

## 4. Email (needed before the form can work)

- [ ] Mailboxes or aliases exist for `contact@`, `security@` and `privacy@` silver-fox-consulting.us
- [ ] The domain is verified in Resend, and the sending address (for example `website@silver-fox-consulting.us`) works
- [ ] SPF, DKIM and DMARC records are published. See `docs/DEPLOYMENT.md`.

## 5. Environment variables in Vercel (blocks deploy)

Set these for **Production** and **Preview** in Vercel under Project Settings, Environment Variables:

- [ ] `RESEND_API_KEY`
- [ ] `CONTACT_TO_EMAIL`
- [ ] `CONTACT_FROM_EMAIL`
- [ ] `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- [ ] `TURNSTILE_SECRET_KEY`

Add `silver-fox-consulting.us` to the Turnstile widget's allowed hostnames in Cloudflare, plus your Vercel preview domain if you want the widget on previews.

## 6. After the first production deploy

- [ ] Submit a test inquiry through the form and confirm the email arrives with the right reply-to address
- [ ] Click the phone numbers on a real phone
- [ ] Check https://securityheaders.com, the MDN HTTP Observatory and SSL Labs (https://www.ssllabs.com/ssltest/)
- [ ] Run Lighthouse on the home page and one service page (target 95+ for performance, accessibility, best practices and SEO)
- [ ] Verify the domain in Google Search Console and Bing Webmaster Tools, then submit `https://silver-fox-consulting.us/sitemap.xml`
- [ ] Create a Google Business Profile with the real Texas address and phone number, matching the website exactly
- [ ] Turn on Vercel Web Analytics for the project

## 7. Ongoing

- [ ] `public/.well-known/security.txt` expires on October 31, 2027. Renew it before then (the launch check fails within 30 days of expiry).
- [ ] Re-check the facts on the compliance pages once a year. The CMMC rollout dates, PCI DSS version and Texas laws are noted at the top of `src/content/compliance.ts`.
- [ ] Review Dependabot pull requests weekly.
