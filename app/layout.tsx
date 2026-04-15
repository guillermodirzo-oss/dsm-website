import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dsmcleaningsolutions.com"),
  title: {
    default: "House Cleaning Plainfield IL | DSM Cleaning Solutions",
    template: "%s | DSM Cleaning Solutions",
  },
  description:
    "Family-owned house cleaning in Plainfield & Romeoville, IL. Eco-friendly, fully insured & 5-star rated. Book online or call for a free estimate.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dsmcleaningsolutions.com",
    siteName: "DSM Cleaning Solutions",
    images: [
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.dsmcleaningsolutions.com/#business",
              name: "DSM Cleaning Solutions",
              description: "Family-owned, eco-friendly professional house cleaning service serving Romeoville, Plainfield, and the southwest Chicago suburbs. Fully insured and bonded.",
              url: "https://www.dsmcleaningsolutions.com",
              telephone: "+18152462113",
              priceRange: "$$",
              image: "https://www.dsmcleaningsolutions.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Plainfield",
                addressRegion: "IL",
                postalCode: "60585",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.6133,
                longitude: -88.2062,
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
              },
            }),
          }}
        />
      </head>
      <body>
        <FacebookPixel />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
