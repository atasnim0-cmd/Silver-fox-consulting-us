# Security notes

This is a security company's website, so prospects will scan it. Here is what is in place and why.

## Response headers

Set for every route in `next.config.ts`:

| Header | Value |
| --- | --- |
| Content-Security-Policy | See below |
| Strict-Transport-Security | `max-age=63072000; includeSubDomains` |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `DENY` (plus `frame-ancestors 'none'` in the CSP) |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Cross-Origin-Opener-Policy | `same-origin` |
| Permissions-Policy | camera, microphone, geolocation, payment, USB and Topics disabled |

The `X-Powered-By` header is removed.

## Content Security Policy

The policy allows only our own origin, plus Cloudflare Turnstile (`challenges.cloudflare.com`) for the form and Vercel's analytics script.

`script-src` includes `'unsafe-inline'`. That is a deliberate trade-off:

- Pages are statically generated and served from Vercel's CDN, which makes them fast and keeps the site up even if server functions have problems.
- Next.js needs a small inline script on every page to hydrate. The only way to avoid `'unsafe-inline'` is a per-request nonce, which forces every page to be rendered on the server for each visit (no CDN caching).
- The site has no user accounts, no user-generated content and no third-party tags, so the practical XSS risk is low.

**Upgrade path:** if a scanner grade matters more than static delivery, switch to a nonce-based CSP using `src/proxy.ts`, following `node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md`, and remove `ensureStatic` from the root layout.

## Contact form

- Validated on the server with Zod. Nothing from the browser is trusted.
- A hidden honeypot field catches simple bots, which get a fake success response.
- Cloudflare Turnstile is verified on the server against Cloudflare's API. In production the form refuses to send if Turnstile is not configured.
- Messages are sent as plain text email through Resend, so no HTML is ever built from user input.
- Visitors are told not to send passwords, keys or incident details through the form.
- For extra protection, add a Vercel Firewall rate-limit rule for `POST /contact`.

## Secrets

Secrets live only in Vercel environment variables. `.env*` files are ignored by git, except `.env.example`, which holds no real values.

## Dependencies

- Versions are pinned exactly in `package.json`, and `package-lock.json` is committed.
- CI fails on high-severity advisories in production dependencies (`npm audit --omit=dev --audit-level=high`).
- Dependabot opens weekly update PRs. Review them; do not auto-merge.

## Vulnerability reports

`/.well-known/security.txt` (RFC 9116) points researchers to `security@silver-fox-consulting.us` and to the testing policy in the Terms of Use. Make sure that mailbox exists and is read.
