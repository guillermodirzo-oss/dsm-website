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
    default: "House Cleaning Romeoville IL | DSM Cleaning Solutions",
    template: "%s | DSM Cleaning Solutions",
  },
  description:
    "Family-owned house cleaning in Romeoville, IL. Eco-friendly, insured and trusted. Book online or call for a free estimate. Serving Plainfield, Naperville, Bolingbrook and surrounding suburbs.",
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
    title: "House Cleaning Romeoville IL | DSM Cleaning Solutions",
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
