import type { Metadata } from "next";
import QuoteThankYouClient from "./QuoteThankYouClient";

export const metadata: Metadata = {
  title: "We Got Your Request! | DSM Cleaning Solutions",
  description: "Thanks for reaching out. DSM Cleaning Solutions will reply within 1 business day with your free estimate.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuoteThankYouPage() {
  return <QuoteThankYouClient />;
}
