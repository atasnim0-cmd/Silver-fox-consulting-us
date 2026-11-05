import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getNavigation } from "@/content/navigation";
import { site } from "@/content/site";
import { isProduction } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

// Every page on this site is static marketing content. Fail the build if a
// change ever makes a route render per request.
export const ensureStatic = "navigation";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Silver Fox | Cybersecurity Consulting in Texas",
    template: "%s | Silver Fox",
  },
  description: site.description,
  applicationName: site.brand,
  formatDetection: { telephone: false },
  robots: isProduction ? undefined : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.brand,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${publicSans.variable} ${sourceSerif.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-navy-900 px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header groups={getNavigation()} incident={site.incidentLine} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationSchema()} />
        {/* Vercel Web Analytics only exists on Vercel deployments. Enable it in the Vercel dashboard. */}
        {process.env.VERCEL && (
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        )}
      </body>
    </html>
  );
}
