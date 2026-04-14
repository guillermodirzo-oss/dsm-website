import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "shorewood-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Shorewood IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Shorewood, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Shorewood IL",
    "cleaning service Shorewood",
    "maid service Shorewood IL",
    "deep cleaning Shorewood",
    "recurring cleaning Shorewood IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/shorewood-il" },
};

export default function ShorewoodPage() {
  return <CityPageTemplate city={city} />;
}
