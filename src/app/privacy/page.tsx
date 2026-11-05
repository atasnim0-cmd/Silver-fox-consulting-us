import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { fullAddress, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Silver Fox LLC collects, uses and protects information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      intro="How we collect, use and protect information when you visit this website or contact us through it."
    >
      <p>
        This Privacy Policy explains how {site.legalName} (&quot;Silver Fox,&quot; &quot;we,&quot; &quot;us&quot;)
        handles information when you visit silver-fox-consulting.us or contact us through it. It does not cover
        information we process while delivering services to clients, which is governed by our agreements with those
        clients.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <p>When you use our contact form, email or call us, we collect the information you choose to share, such as:</p>
      <ul>
        <li>Your name and organization</li>
        <li>Your work email address and phone number</li>
        <li>The topic and content of your message</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        Our hosting provider processes technical information such as your IP address, browser type, device information,
        the pages you request and the time of each request. This is needed to deliver the site and to protect it from
        abuse.
      </p>
      <p>
        We use Vercel Web Analytics to understand which pages are visited. It does not use cookies and is designed not
        to identify or track individual visitors across websites.
      </p>
      <p>
        Our contact form uses Cloudflare Turnstile to tell people apart from automated spam. Turnstile processes
        information about your browser and device for that purpose.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiry and provide the information you asked for</li>
        <li>To discuss and provide our services</li>
        <li>To operate, secure and improve this website</li>
        <li>To detect and prevent spam, fraud and abuse</li>
        <li>To meet legal obligations</li>
      </ul>
      <p>
        We do not sell personal information, and we do not share it for targeted advertising based on your activity
        across other websites.
      </p>

      <h2>Cookies</h2>
      <p>
        This site does not use advertising or cross-site tracking cookies. Our security services may store small amounts
        of strictly necessary data in your browser to protect the contact form.
      </p>

      <h2>How we share information</h2>
      <p>We share information only as needed with:</p>
      <ul>
        <li>Service providers that host the site, deliver email and protect against abuse, under appropriate terms</li>
        <li>Professional advisers such as lawyers and accountants</li>
        <li>Authorities, when the law requires it or to protect our rights and the safety of others</li>
        <li>A buyer or successor, if our business is sold or reorganized</li>
      </ul>

      <h2>How long we keep information</h2>
      <p>
        We keep inquiry information for as long as we need it to respond and to maintain ordinary business records, then
        delete it, unless the law requires us to keep it longer.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable administrative, technical and physical measures to protect personal information. No method of
        transmission or storage is perfectly secure, so please do not send passwords, keys or confidential incident
        details through the website.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        Depending on where you live, you may have rights under state privacy laws, including the Texas Data Privacy and
        Security Act. These can include the right to confirm whether we process your personal data, to access it, to
        correct it, to delete it, to obtain a copy and to opt out of certain processing.
      </p>
      <p>
        To make a request, email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. We will verify your
        request and respond within the time the law requires. If we decline your request, you may appeal by replying to
        our decision and explaining why. If you are not satisfied with the outcome of your appeal, you may contact the
        Texas Attorney General.
      </p>

      <h2>Children</h2>
      <p>
        This website is intended for businesses and professionals. It is not directed to children under 13, and we do
        not knowingly collect personal information from them.
      </p>

      <h2>Visitors outside the United States</h2>
      <p>
        This website is operated from the United States, and information you submit is processed in the United States.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of the page shows when it was last changed.
      </p>

      <h2>Contact us</h2>
      <p>
        {site.legalName}
        <br />
        {fullAddress()}
        <br />
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </p>
      <p>
        You can also read our <Link href="/terms">Terms of Use</Link> and{" "}
        <Link href="/accessibility">Accessibility Statement</Link>.
      </p>
    </LegalPage>
  );
}
