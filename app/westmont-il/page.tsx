import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "westmont-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Westmont IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Westmont, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
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
