import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "You're All Booked! | DSM Cleaning Solutions",
  description: "Your booking is confirmed. DSM Cleaning Solutions will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
