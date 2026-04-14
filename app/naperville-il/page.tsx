import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "naperville-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Naperville IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Naperville, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Naperville IL",
    "cleaning service Naperville",
    "maid service Naperville IL",
    "deep cleaning Naperville",
    "recurring cleaning Naperville IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/naperville-il" },
};

export default function NapervillePage() {
  return <CityPageTemplate city={city} />;
}
