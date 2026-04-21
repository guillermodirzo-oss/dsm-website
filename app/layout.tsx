import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dsmcleaningsolutions.com"),
  title: {
    default: "DSM Cleaning Solutions | House Cleaning Romeoville & Plainfield IL",
    template: "%s | DSM Cleaning Solutions",
  },
  description:
    "Professional house cleaning in Romeoville & Plainfield IL. Family-owned, eco-friendly, fully insured. 5-star rated. Free estimates. Call (815) 246-2113.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dsmcleaningsolutions.com",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "DSM Cleaning Solutions Logo",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions - Professional House Cleaning in Romeoville, IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Plainfield IL | DSM Cleaning Solutions",
    description:
      "Family-owned, eco-friendly house cleaning in Romeoville, IL. Fully insured. Book online or call for a free estimate.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HouseCleaning"],
              "@id": "https://www.dsmcleaningsolutions.com/#business",
              name: "DSM Cleaning Solutions",
              description: "Professional house cleaning services serving Plainfield, Romeoville, Naperville, and Bolingbrook IL. Family owned, fully insured, eco-friendly products.",
              url: "https://www.dsmcleaningsolutions.com",
              telephone: "+18152462113",
              priceRange: "$$",
              image: "https://www.dsmcleaningsolutions.com/Logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Plainfield",
                addressRegion: "IL",
                postalCode: "60544",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.6328,
                longitude: -88.2120,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Romeoville", containedInPlace: { "@type": "State", name: "Illinois" } },
                { "@type": "City", name: "Plainfield", containedInPlace: { "@type": "State", name: "Illinois" } },
                { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
                { "@type": "City", name: "Bolingbrook", containedInPlace: { "@type": "State", name: "Illinois" } },
                { "@type": "City", name: "Joliet", containedInPlace: { "@type": "State", name: "Illinois" } },
                { "@type": "City", name: "Westmont", containedInPlace: { "@type": "State", name: "Illinois" } },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.yelp.com/biz/dsm-cleaning-solutions",
              ],
            }),
          }}
        />
      </head>
      <body>
        <FacebookPixel />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-ZNH3HYZHQN" />
      </body>
    </html>
  );
}
