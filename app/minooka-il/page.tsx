import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "minooka-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Minooka IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Minooka, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Minooka IL",
    "cleaning service Minooka",
    "maid service Minooka IL",
    "deep cleaning Minooka",
    "recurring cleaning Minooka IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/minooka-il" },
};

export default function MinookaPage() {
  return <CityPageTemplate city={city} />;
}
