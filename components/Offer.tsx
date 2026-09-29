import type { ReactNode } from "react";
import OfferGate from "./OfferGate";
import { OFFERS, isOfferActive, type ServiceKey } from "@/lib/pricing";

/**
 * Wrap every piece of offer copy in this: badges, "$415 with MOVE75" lines,
 * FAQ offer lines, "$75 off" text. Pass `fallback` for anything that must be
 * replaced rather than just removed (a headline, a struck price), and write
 * the surrounding sentence so it still reads cleanly without the wrapped
 * part.
 *
 * HOW EXPIRY WORKS WITHOUT A DEPLOY. Three layers, each covering a gap the
 * others leave:
 *  1. Every page that renders an offer exports `revalidate = 3600`, so Vercel
 *     regenerates its HTML at most an hour after a request once the old copy
 *     is an hour old. After an offer ends, the next regeneration renders the
 *     fallback. That's what crawlers and no-JS visitors see.
 *  2. This server check runs at each render, in Central Time (the server
 *     clock is UTC), so a regenerated page is always correct.
 *  3. OfferGate re-checks in the browser, so even a cached page that hasn't
 *     regenerated yet hides the offer at 11:59:59 PM Central for every
 *     visitor with JavaScript, including a tab left open past midnight.
 *
 * Never put an offer in <title>, meta descriptions, Open Graph or JSON-LD:
 * those get cached by search engines for weeks and can't be gated.
 */
export default function Offer({
  service,
  children,
  fallback = null,
}: {
  service: ServiceKey;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const offer = OFFERS[service];
  if (!offer || !isOfferActive(service)) return <>{fallback}</>;
  return (
    <OfferGate expiresAt={offer.expiresAt} fallback={fallback}>
      {children}
    </OfferGate>
  );
}
