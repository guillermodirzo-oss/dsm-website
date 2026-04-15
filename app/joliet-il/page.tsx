import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "joliet-il")!;

export const metadata: Metadata = {
  title: "Cleaning Service Joliet IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Joliet, IL. Deep cleaning, move-out & recurring maid service. Family-owned, eco-friendly & insured. Free estimates today.",
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
