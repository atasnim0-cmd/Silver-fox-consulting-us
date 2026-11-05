# Silver Fox Consulting (US)

Source code for [silver-fox-consulting.us](https://silver-fox-consulting.us), the website of Silver Fox LLC, a cybersecurity consulting firm based in Texas.

The site covers six service practices, 17 compliance frameworks, six industries and three in-house platforms, along with a contact form, an incident response page and the usual legal pages. Every page is statically generated and served from Vercel's edge network.

## Contents

- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Editing content](#editing-content)
- [Quality gates](#quality-gates)
- [Design and accessibility](#design-and-accessibility)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Cache Components, fully static output) |
| Language | TypeScript 5 |
| UI | React 19, Tailwind CSS 4 |
| Motion | Motion for React, anime.js 4, and components adapted from Motion Primitives |
| Forms | Server Actions with Zod validation, Cloudflare Turnstile, Resend for email |
| Hosting | Vercel, with DNS on Cloudflare and the domain registered at Spaceship |
| CI | GitHub Actions and Dependabot |

## Requirements

- Node.js 20.9 or later (CI and Vercel use Node 24)
- npm 10 or later

## Getting started

```bash
git clone https://github.com/atasnim0-cmd/Silver-fox-consulting-us.git
cd Silver-fox-consulting-us
npm ci
npm run dev
```

The site runs at http://localhost:3000. The contact form works locally without any keys: submissions are printed to the terminal instead of being emailed.

To test the full form flow, copy the example environment file and fill in the values described below:

```bash
cp .env.example .env.local
```

## Environment variables

Set these in Vercel under Project Settings, Environment Variables, for both Production and Preview. Locally they live in `.env.local`, which git ignores.

| Variable | Required in production | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | API key used to send contact form email through Resend |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives contact form messages. Separate several addresses with commas. |
| `CONTACT_FROM_EMAIL` | Yes | Sender address on a domain verified in Resend |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes | Cloudflare Turnstile site key, used by the browser |
| `TURNSTILE_SECRET_KEY` | Yes | Cloudflare Turnstile secret key, used by the server |

Cloudflare publishes always-pass Turnstile test keys for local development. They are listed in `.env.example`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build. Runs the copy check and launch check first. |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Generate route types and run the TypeScript compiler |
| `npm run format` | Format the codebase with Prettier |
| `npm run check:copy` | Check site copy and documentation against the writing rules |
| `npm run check:launch` | Check that no placeholder content or missing secret would reach production |
| `npm run ci` | Run the same checks as CI, in the same order |

## Project structure

```
.
|-- .github/              CI workflow and Dependabot configuration
|-- docs/                 Deployment, launch, security and photo credit notes
|-- public/               Static files, including /.well-known/security.txt
|-- scripts/              Copy check and launch check
`-- src/
    |-- app/              Routes, metadata, sitemap, robots, icons and the share image
    |-- assets/photos/    Photography served through next/image
    |-- components/
    |   |-- brand/        Logo
    |   |-- compliance/   Compliance hub navigation
    |   |-- contact/      Contact form and Turnstile widget
    |   |-- home/         Home page hero diagram and attack path
    |   |-- layout/       Header and footer
    |   |-- motion-primitives/   Adapted animation components
    |   |-- sections/     Reusable page sections
    |   |-- seo/          Structured data
    |   `-- ui/           Buttons, links and breadcrumbs
    |-- content/          All site copy and company details
    `-- lib/              SEO helpers, schema.org builders and form topics
```

## Editing content

Almost all copy lives in `src/content`. Editing those files updates every page that uses them.

| File | What it controls |
| --- | --- |
| `site.ts` | Company name, phone numbers, address, email addresses and business hours |
| `services.ts` | The six service pages |
| `compliance.ts` and `compliance-extra.ts` | The 17 compliance framework pages and their categories |
| `industries.ts` | The six industry pages |
| `platforms.ts` | The SCOPE, SIGNAL and RANGE pages |
| `photos.ts` | Photo imports and alt text |

The About, Engineering, Contact, Emergency and legal pages keep their copy in their own `page.tsx` files under `src/app`.

To add a compliance framework, add an entry to `compliance-extra.ts` and add its slug to the `ORDER` list in `compliance.ts`. The page, navigation, sitemap and contact form topics pick it up from there.

## Quality gates

Three checks run before every build and in CI. A failure stops the build.

**Copy check** (`scripts/check-copy.mjs`). Site copy and documentation must not contain em dashes, en dashes, ellipsis characters, curly quotes or any of the stock marketing phrases listed in the script. Copy is written in American English.

**Launch check** (`scripts/check-launch.mjs`). On production builds served on silver-fox-consulting.us, the build fails while `src/content/site.ts` still holds placeholder values or unconfirmed claims, while any required environment variable is missing, or when `security.txt` is within 30 days of expiring. Preview deployments and production builds on the temporary vercel.app address are not affected.

**Static rendering.** The root layout sets `ensureStatic = "navigation"`, so the build fails if a change would make any page render on each request.

CI also runs ESLint, the TypeScript compiler and `npm audit` against production dependencies.

## Design and accessibility

The interface follows the Vercel Web Interface Guidelines and targets WCAG 2.1 AA.

- The palette is navy, white and a single blue accent scale defined in `src/app/globals.css`. The logo mark is dark blue on light backgrounds and white on dark backgrounds.
- Content is never hidden while waiting for JavaScript or for the visitor to scroll. The hero headline animates in CSS from first paint.
- Motion is limited to hover and press feedback, the hero diagram, counters, tab indicators and a reading progress bar. The hero diagram has a pause control and stops when off screen. All motion respects `prefers-reduced-motion`.
- Only `transform`, `opacity`, `box-shadow` and `border-color` are animated.
- Form inputs use 16px text to prevent zoom on iOS, and touch targets are at least 44px on phones.

At the time of writing, audited pages score 100 for accessibility in Lighthouse with no axe violations, and 92 or higher for mobile performance.

## Security

Every response carries a Content Security Policy, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, a strict referrer policy and a restrictive permissions policy, all configured in `next.config.ts`. The contact form validates input on the server, verifies Turnstile tokens and uses a honeypot field.

See [docs/SECURITY.md](docs/SECURITY.md) for the reasoning behind the policy. To report a vulnerability, email security@silver-fox-consulting.us. The address is also published in `/.well-known/security.txt`.

## Deployment

Pushes to `main` deploy to production through the Vercel GitHub integration. Every pull request receives its own preview URL. Search engines are blocked everywhere except the live domain, including the vercel.app production address.

- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) covers GitHub, Vercel, Cloudflare DNS, Spaceship and email DNS records.
- [docs/LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md) lists everything that must be confirmed before the first production release.
- [docs/PHOTO_CREDITS.md](docs/PHOTO_CREDITS.md) records the source of every photograph.

## Contributing

1. Create a branch from `main`.
2. Make your change and run `npm run ci` locally.
3. Open a pull request. CI must pass and the Vercel preview should be reviewed before merging.

Commit messages use the imperative mood, for example "Add SOC 3 page" rather than "Added SOC 3 page".

## License

Copyright 2026 Silver Fox LLC. All rights reserved. This repository is proprietary and is not licensed for reuse.

Third-party components keep their own licenses. Code adapted from [Motion Primitives](https://github.com/ibelick/motion-primitives) is used under the MIT License, credited in each file. Photographs are used under the [Unsplash License](https://unsplash.com/license).
