import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "lemont-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Lemont IL",
  description:
    "Trusted house cleaning in Lemont, IL — deep cleaning, standard & recurring maid service. Eco-friendly, insured. Family-owned. Free estimate.",
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
