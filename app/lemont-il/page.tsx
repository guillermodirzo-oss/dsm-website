import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "lemont-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Lemont IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Lemont, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Lemont IL",
    "cleaning service Lemont",
    "maid service Lemont IL",
    "deep cleaning Lemont",
    "recurring cleaning Lemont IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/lemont-il" },
};

export default function LemontPage() {
  return <CityPageTemplate city={city} />;
}
