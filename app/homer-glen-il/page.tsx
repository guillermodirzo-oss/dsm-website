import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "homer-glen-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Homer Glen IL",
  description:
    "Professional house cleaning in Homer Glen, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & insured. Free estimates.",
  keywords: [
    "house cleaning Homer Glen IL",
    "cleaning service Homer Glen",
    "maid service Homer Glen IL",
    "deep cleaning Homer Glen",
    "recurring cleaning Homer Glen IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/homer-glen-il" },
};

export default function HomerGlenPage() {
  return <CityPageTemplate city={city} />;
}
