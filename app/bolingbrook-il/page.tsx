import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "bolingbrook-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Bolingbrook IL",
  description:
    "Local house cleaning in Bolingbrook, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly & insured. Call for a free estimate.",
  keywords: [
    "house cleaning Bolingbrook IL",
    "cleaning service Bolingbrook",
    "maid service Bolingbrook IL",
    "deep cleaning Bolingbrook",
    "recurring cleaning Bolingbrook IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/bolingbrook-il" },
};

export default function BolingbrookPage() {
  return <CityPageTemplate city={city} />;
}
