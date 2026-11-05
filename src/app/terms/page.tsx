import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "The terms that apply when you use the Silver Fox website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" path="/terms" intro="The terms that apply when you use this website.">
      <p>
        These Terms of Use govern your use of silver-fox-consulting.us, which is operated by {site.legalName}. By using
        the site, you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <h2>Information only</h2>
      <p>
        Content on this site is general information about cybersecurity and our services. It is not legal, compliance or
        professional advice for your situation, and reading it or contacting us does not create a client relationship.
        Services are provided only under a signed written agreement.
      </p>

      <h2 id="security-testing">Security testing of this site</h2>
      <p>
        Please do not scan, probe or attack this website or our systems without permission. If you believe you have
        found a security vulnerability, report it to <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>{" "}
        with enough detail for us to reproduce it. We ask that you give us reasonable time to fix the issue before
        disclosing it, avoid accessing or changing data that does not belong to you, and avoid degrading the service for
        others. Our contact details for security reports are also published in our{" "}
        <a href="/.well-known/security.txt">security.txt</a> file.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site in a way that breaks any law or regulation</li>
        <li>Attempt to gain unauthorized access to the site or related systems</li>
        <li>Interfere with the site&apos;s operation, including through automated requests at volume</li>
        <li>Submit false information, malware or content that infringes anyone&apos;s rights</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The site and its content, including text, graphics, logos and the names SCOPE, SIGNAL and RANGE as used for our
        platforms, belong to {site.legalName} or its licensors. You may view and share pages for your own non-commercial
        reference. Any other use requires our written permission.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site may link to websites we do not control. We are not responsible for their content or privacy practices.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available.&quot; To the fullest extent the law allows, we
        disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular
        purpose and non-infringement. We do not promise that the site will always be available or free of errors.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, {site.legalName} will not be liable for any indirect, incidental, special,
        consequential or punitive damages arising from your use of the site.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Texas, without regard to its conflict of law rules. Any
        dispute about these terms or the site will be resolved in the state or federal courts located in Texas.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date at the top of the page shows when they were last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
