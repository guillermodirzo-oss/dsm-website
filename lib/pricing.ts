/**
 * SINGLE SOURCE OF TRUTH FOR EVERY PRICE ON THE SITE.
 *
 * Prices used to be hand-maintained in lib/pricingCopy.tsx, app/pricing/page.tsx
 * and FAQ answers in lib/cityData.ts. Six of twelve spot-checks against
 * BookingKoala were wrong, drifting in both directions. Anything customer-facing
 * must now read from here so the three copies cannot disagree again.
 *
 * The tier figures below were verified against live BookingKoala quotes on
 * 2026-07-29. If BookingKoala changes, change it here and nowhere else.
 */

export interface PriceTier {
  beds: string; // "1 bed"
  baths: string; // "1 bath"
  sqft: string; // "1,000-1,499"
  price: number; // dollars, no formatting
}

export const DEEP_CLEANING_TIERS: PriceTier[] = [
  { beds: "1 bed", baths: "1 bath", sqft: "1,000-1,499", price: 300 },
  { beds: "2 bed", baths: "1 bath", sqft: "1,000-1,499", price: 315 },
  { beds: "3 bed", baths: "2 bath", sqft: "1,500-1,999", price: 440 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,000-2,499", price: 535 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,500-2,999", price: 630 },
  { beds: "5 bed", baths: "3 bath", sqft: "3,500-3,999", price: 830 },
];

export const STANDARD_CLEANING_TIERS: PriceTier[] = [
  { beds: "2 bed", baths: "1 bath", sqft: "1,000-1,499", price: 160 },
  { beds: "3 bed", baths: "2 bath", sqft: "1,500-1,999", price: 240 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,500-2,999", price: 370 },
  { beds: "5 bed", baths: "3 bath", sqft: "3,500-3,999", price: 530 },
];

export const MOVE_OUT_TIERS: PriceTier[] = [
  { beds: "2 bed", baths: "1 bath", sqft: "1,000-1,499", price: 480 },
  { beds: "3 bed", baths: "2 bath", sqft: "1,500-1,999", price: 560 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,500-2,999", price: 700 },
  { beds: "5 bed", baths: "3 bath", sqft: "3,500-3,999", price: 880 },
];

export type ServiceKey = "standard" | "deep" | "moveout";

export const OFFER = {
  code: "SUMMER75",
  discount: 75,
  endDate: "2026-08-31", // inclusive
  appliesTo: "deep" as const, // deep cleaning ONLY
};

/**
 * True while the offer is live. Auto-reverts after endDate with no code change.
 *
 * NOTE ON STATIC PAGES: this is evaluated at render time, and these pages are
 * statically generated, so the flip to false will not appear on the live site
 * until the page is rebuilt or revalidated. app/pricing/page.tsx sets
 * `export const revalidate = 3600` so it re-renders hourly and expires on its
 * own without anyone shipping a change.
 *
 * endDate is inclusive, so the offer runs through the last moment of that day
 * in the server's local time.
 */
export function isOfferActive(now = new Date()): boolean {
  const end = new Date(`${OFFER.endDate}T23:59:59.999`);
  return now.getTime() <= end.getTime();
}

/**
 * Discounted price when the offer applies to this service and is live, else null.
 * Returns null for "standard" and "moveout" regardless of date: SUMMER75 is a
 * deep cleaning offer only.
 */
export function discountedPrice(
  price: number,
  service: ServiceKey,
  now = new Date()
): number | null {
  if (service !== OFFER.appliesTo) return null;
  if (!isOfferActive(now)) return null;
  return price - OFFER.discount;
}

/** Lowest price in a tier list, for "starts at" copy. */
export function startingPrice(tiers: PriceTier[]): number {
  return Math.min(...tiers.map((t) => t.price));
}

/** "$630" */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

/** "2 bed · 1 bath · 1,000-1,499 sq ft" */
export function tierLabel(tier: PriceTier): string {
  return `${tier.beds} · ${tier.baths} · ${tier.sqft} sq ft`;
}
