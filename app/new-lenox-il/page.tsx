import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "new-lenox-il")!;

export const metadata: Metadata = {
  title: "House Cleaning New Lenox IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in New Lenox, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning New Lenox IL",
    "cleaning service New Lenox",
    "maid service New Lenox IL",
    "deep cleaning New Lenox",
    "recurring cleaning New Lenox IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/new-lenox-il" },
};

export default function NewLenoxPage() {
  return <CityPageTemplate city={city} />;
}
