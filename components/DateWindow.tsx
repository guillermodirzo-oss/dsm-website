import type { ReactNode } from "react";
import OfferGate from "./OfferGate";
import { endOfDayIn, offerNow, startOfDayIn } from "@/lib/offerTime";

/**
 * Shows its children only between two dates (Central Time, both days
 * included), the same way <Offer> handles promotions: checked on the server
 * at every render, and again in the browser so it comes down at midnight on
 * the last day even on a cached page. Pages using it need `revalidate`, so
 * the start date shows up at the first rebuild after it begins.
 */
export default function DateWindow({
  startDateISO,
  endDateISO,
  children,
  fallback = null,
}: {
  startDateISO: string;
  endDateISO: string;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const now = offerNow().getTime();
  const starts = startOfDayIn(startDateISO).getTime();
  const ends = endOfDayIn(endDateISO);
  if (now < starts || now > ends.getTime()) return <>{fallback}</>;
  return (
    <OfferGate expiresAt={ends.toISOString()} fallback={fallback}>
      {children}
    </OfferGate>
  );
}
