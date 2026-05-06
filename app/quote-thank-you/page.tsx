import type { Metadata } from "next";
import QuoteThankYouClient from "./QuoteThankYouClient";

export const metadata: Metadata = {
  title: "We Got Your Request!",
  description: "Thanks for reaching out. DSM Cleaning Solutions will reply within 1 business day with your free estimate.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/quote-thank-you" },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "We Got Your Request! | DSM Cleaning Solutions",
    description: "Thanks for reaching out. DSM Cleaning Solutions will reply within 1 business day with your free estimate.",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions Ã¢â‚¬â€ Quote Request Received" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

export default function QuoteThankYouPage() {
  return <QuoteThankYouClient />;
}