import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const siteUrl = "https://nowchurch.org";
const description =
  "Now Church offers grounded faith and authentic community for the here and now, plus free ministry AV and media tools, volunteer guides, and service planning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Now Church | Church for the Here and Now",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Now Church | Church for the Here and Now",
    description: "Grounded faith, authentic community, and free ministry AV and media tools.",
    type: "website",
    url: "/",
    siteName: "Now Church",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Now Church — church for the here and now" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Now Church | Church for the Here and Now",
    description: "Grounded faith, authentic community, and free ministry AV and media tools.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "Now Church", url: `${siteUrl}/`, description },
    { "@type": "Church", name: "Now Church", url: `${siteUrl}/`, description, image: `${siteUrl}/og-image.jpg` },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
