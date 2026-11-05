import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Our commitment to making the Silver Fox website accessible to everyone.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      path="/accessibility"
      intro="We want everyone to be able to use this website, including people who rely on assistive technology."
    >
      <h2>Our goal</h2>
      <p>
        {site.legalName} aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA across this
        website.
      </p>

      <h2>What we have done</h2>
      <ul>
        <li>Used semantic HTML, headings and landmarks so the page structure is clear to screen readers</li>
        <li>Made every feature usable with a keyboard, with a visible focus indicator</li>
        <li>Checked text and interface colors for sufficient contrast</li>
        <li>Added text alternatives for meaningful images</li>
        <li>Labeled form fields and announced form errors clearly</li>
        <li>Respected the reduced motion setting in your operating system</li>
        <li>Provided a link to skip straight to the main content</li>
      </ul>

      <h2>Ongoing work</h2>
      <p>
        Accessibility is ongoing. We review the site as it changes, and we fix issues as we find them. Some third-party
        components, such as the spam check on our contact form, are maintained by other companies, and we work with them
        where problems arise.
      </p>

      <h2>Tell us about a problem</h2>
      <p>
        If you have trouble using any part of this website, please let us know and we will work with you to provide the
        information or service you need. Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>, and include the page address and a short description
        of the problem.
      </p>
    </LegalPage>
  );
}
