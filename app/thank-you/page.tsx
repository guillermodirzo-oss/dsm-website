import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "You're All Booked!",
  description: "Your booking is confirmed. DSM Cleaning Solutions will be in touch shortly.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/thank-you" },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "You're All Booked! | DSM Cleaning Solutions",
    description: "Your booking is confirmed. DSM Cleaning Solutions will be in touch shortly.",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "DSM Cleaning Solutions - Booking Confirmed" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero-image.png"],
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}