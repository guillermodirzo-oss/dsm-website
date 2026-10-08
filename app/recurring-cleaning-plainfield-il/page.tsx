import type { Metadata } from "next";
import RecurringCityPage from "@/components/RecurringCityPage";
import { recurringCityMetadata } from "@/lib/recurringCities";

// Title, description, copy, prices and schema all come from
// lib/recurringCities.ts and components/RecurringCityPage.tsx.
export const metadata: Metadata = recurringCityMetadata("plainfield");

export default function RecurringCleaningPlainfieldPage() {
  return <RecurringCityPage city="plainfield" />;
}
