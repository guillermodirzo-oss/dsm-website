import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { cities } from "@/lib/cityData";

const city = cities.find((c) => c.slug === "lockport-il")!;

export const metadata: Metadata = {
  title: "House Cleaning Lockport IL | DSM Cleaning Solutions",
  description:
    "Professional house cleaning in Lockport, IL. Family-owned, eco-friendly, fully insured. Deep cleaning, move-out cleaning, and recurring maid service. Free estimates.",
  keywords: [
    "house cleaning Lockport IL",
    "cleaning service Lockport",
    "maid service Lockport IL",
    "deep cleaning Lockport",
    "recurring cleaning Lockport IL",
  ],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/lockport-il" },
};

export default function LockportPage() {
  return <CityPageTemplate city={city} />;
}
