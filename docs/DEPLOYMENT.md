# Deployment

The pieces fit together like this:

```
Spaceship (registrar)  ->  Cloudflare (DNS only, grey cloud)  ->  Vercel (hosting, SSL, CDN)
GitHub (source)        ->  Vercel (deploys main to production, every PR to a preview URL)
```

## 1. GitHub

1. Create a new **private** repository, for example `silver-fox-us`, with no README or license (this project already has them).
2. From the project folder:

   ```bash
   git remote add origin https://github.com/<your-org>/silver-fox-us.git
   git push -u origin main
   ```

3. Under Settings, Branches, add a protection rule for `main`:
   - Require a pull request before merging
   - Require the **CI** status check to pass
   - Block force pushes

CI (`.github/workflows/ci.yml`) runs the copy check, lint, type check, build and a production dependency audit on every push and pull request. Dependabot opens weekly update PRs.

## 2. Vercel

1. In Vercel, choose **Add New, Project** and import the GitHub repository. Vercel detects Next.js automatically.
2. Set **Node.js version** to 24.x under Project Settings, General.
3. Add the environment variables listed in `docs/LAUNCH_CHECKLIST.md` (section 5).
4. Deploy. Every pull request now gets its own preview URL. Previews are automatically kept out of search engines by `src/app/robots.ts` and the `noindex` metadata in `src/app/layout.tsx`.
5. Under **Domains**, add `silver-fox-consulting.us` and `www.silver-fox-consulting.us`. Set `www` to redirect to the apex domain. Vercel will show the exact DNS records it wants; use those values in the next step.

**Plan:** Vercel's free Hobby plan is for non-commercial use only. A company website needs the **Pro** plan.

## 3. Cloudflare DNS (DNS only)

1. In Cloudflare, add the site `silver-fox-consulting.us` on the Free plan.
2. Cloudflare gives you two nameservers. In **Spaceship**, open the domain, choose custom nameservers and enter Cloudflare's two nameservers. The change can take a few hours.
3. In Cloudflare DNS, create the records Vercel showed you, with the proxy status set to **DNS only** (grey cloud). Typically:

   | Type | Name | Value | Proxy |
   | --- | --- | --- | --- |
   | A | `@` | the IP Vercel shows | DNS only |
   | CNAME | `www` | the target Vercel shows | DNS only |

4. Turn on **DNSSEC** in Cloudflare, then add the DS record it gives you at Spaceship.
5. Optional but recommended: add a CAA record allowing `letsencrypt.org`, which Vercel uses for certificates.

Why DNS only: Vercel already provides the CDN, TLS certificates and DDoS protection. Proxying through Cloudflare as well adds a second cache and can interfere with Vercel's certificate renewals. Turnstile works the same either way.

## 4. Email DNS

Whichever mailbox provider you choose (Google Workspace, Microsoft 365 and so on), it will give you MX and SPF records. Resend will give you its own DKIM and return-path records when you verify the domain. Then add DMARC:

| Type | Name | Value |
| --- | --- | --- |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc@silver-fox-consulting.us` |

Start at `p=none` to collect reports. After two to four weeks of clean reports, move to `p=quarantine`, then `p=reject`. A security firm's own domain should end up at `p=reject`; prospects do check.

## 5. HSTS preload (later)

The site already sends `Strict-Transport-Security` with `includeSubDomains`. Once you are sure every subdomain will always use HTTPS, you can add `preload` to the header in `next.config.ts` and submit the domain at https://hstspreload.org. Preloading is hard to undo, so wait until the setup is settled.
