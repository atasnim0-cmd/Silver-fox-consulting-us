# silver-fox-consulting.us

Marketing website for **Silver Fox LLC**, the U.S. (Texas) cybersecurity business.

- **Framework:** Next.js 16 (App Router, Cache Components), React 19, TypeScript
- **Styling:** Tailwind CSS 4, with design tokens in `src/app/globals.css`
- **Motion:** CSS scroll-driven animations, plus `motion` for the menus and the attack path diagram
- **Forms:** server action, Zod validation, Cloudflare Turnstile and Resend email
- **Hosting:** Vercel, with DNS on Cloudflare (DNS only) and the domain registered at Spaceship

Every page is statically generated. The root layout sets `ensureStatic = "navigation"`, so the build fails if a change ever makes a page render per request.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; the form logs to the console without keys
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build. Runs the copy check and launch check first |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates route types, then runs `tsc` |
| `npm run check:copy` | Fails on em dashes, curly quotes and banned marketing phrases |
| `npm run check:launch` | Fails while placeholders, unconfirmed claims or missing secrets remain |
| `npm run ci` | Everything CI runs, in order |

## Where things live

```
src/
  app/                 Routes (one folder per page), sitemap, robots, icons, OG image
  components/
    layout/            Utility bar, header with mega menu, footer
    sections/          Reusable page sections (hero, FAQ, steps, CTA band, ...)
    home/              Home page attack path animation
    contact/           Contact form and Turnstile widget
  content/             ALL site copy and company details
    site.ts            Phone numbers, address, emails (placeholders marked here)
    services.ts        The six service pages
    compliance.ts      Framework pages (CMMC, SOC 2, HIPAA, PCI DSS, TX-RAMP, ISO 27001, NIST CSF)
    industries.ts      Industry pages
    platforms.ts       SCOPE, SIGNAL and RANGE
  lib/                 SEO helpers, schema.org builders, contact topics
scripts/               check-copy and check-launch
docs/                  Launch checklist, deployment, security notes, photo credits
```

### Editing copy

Almost all text lives in `src/content/*.ts`. Change it there and the pages update. A few page-specific sections (About, Engineering, Contact, Emergency, the legal pages) are written directly in their `page.tsx` files.

### Copy rules

The copy check runs before every build and in CI. It rejects:

- em dashes, en dashes, ellipsis characters and curly quotes
- stock marketing words such as "leverage", "seamless", "robust", "cutting-edge", "holistic" and "comprehensive"

Also write in American English (organization, defense, prioritize), and avoid the "it's not X, it's Y" sentence pattern. The full list is in `scripts/check-copy.mjs`.

## Before launch

Read **[docs/LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md)**. Production deployments are blocked by `scripts/check-launch.mjs` until the placeholders in `src/content/site.ts` are replaced and the required environment variables are set.

Deployment steps for GitHub, Vercel, Spaceship and Cloudflare are in **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)**.
