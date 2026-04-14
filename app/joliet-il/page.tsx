import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "joliet-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Joliet IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Joliet, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Joliet IL",
    "cleaning service Joliet",
    "maid service Joliet IL",
    "deep cleaning Joliet",
    "recurring cleaning Joliet IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/joliet-il" },
};

export default function JolietPage() {
  return <CityPageTemplate city={city} />;
}
