import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "naperville-il")!;

export const metadata: Metadata = {
  title: "Cleaning Service Naperville IL | DSM Cleaning Solutions",
  description:
    "Family-owned house cleaning in Naperville, IL. Deep cleaning, move-out & recurring maid service near you. Eco-friendly & insured. Call for a free estimate.",
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
