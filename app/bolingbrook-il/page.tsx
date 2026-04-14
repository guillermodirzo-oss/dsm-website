import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "bolingbrook-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Bolingbrook IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Bolingbrook, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
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
