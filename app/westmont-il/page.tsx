import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "westmont-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Westmont IL",
  description:
    "Expert house cleaning in Westmont, IL — deep cleaning, standard & recurring maid service. Family-owned, eco-friendly, fully insured. Get a free estimate.",
  keywords: [
    "house cleaning Westmont IL",
    "cleaning service Westmont",
    "maid service Westmont IL",
    "deep cleaning Westmont",
    "recurring cleaning Westmont IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/westmont-il" },
};

export default function WestmontPage() {
  return <CityPageTemplate city={city} />;
}
