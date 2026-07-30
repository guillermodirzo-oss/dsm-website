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

/**
 * Add-on and square-footage tables shown on /pricing.
 *
 * These were carried over verbatim from the previous hardcoded arrays in
 * app/pricing/page.tsx. Unlike the tiers above they have NOT been verified
 * against BookingKoala, so treat them as unconfirmed until someone checks them.
 * They live here so no price digit is declared in a page file.
 */
export const BEDROOM_ADDONS = [
  { label: "0-1 bedrooms", price: "Included" },
  { label: "2 bedrooms", price: "+$15" },
  { label: "3 bedrooms", price: "+$30" },
  { label: "4 bedrooms", price: "+$45" },
  { label: "5 bedrooms", price: "+$60" },
  { label: "6 bedrooms", price: "+$75" },
];

export const BATHROOM_ADDONS = [
  { label: "1 bathroom", price: "Included" },
  { label: "1.5 bathrooms", price: "Included" },
  { label: "2 bathrooms", price: "+$25" },
  { label: "2.5 bathrooms", price: "+$35" },
  { label: "3 bathrooms", price: "+$50" },
  { label: "3.5 bathrooms", price: "+$60" },
  { label: "4 bathrooms", price: "+$75" },
  { label: "4.5 bathrooms", price: "+$85" },
  { label: "5 bathrooms", price: "+$100" },
];

export const SQFT_ROWS = [
  { range: "1,000-1,499 sq ft", standard: "$145", deep: "$100", moveout: "$165" },
  { range: "1,500-1,999 sq ft", standard: "$185", deep: "$185", moveout: "$205" },
  { range: "2,000-2,499 sq ft", standard: "$255", deep: "$255", moveout: "$275" },
  { range: "2,500-2,999 sq ft", standard: "$290", deep: "$350", moveout: "$320" },
  { range: "3,000-3,499 sq ft", standard: "$340", deep: "$400", moveout: "$380" },
  { range: "3,500-3,999 sq ft", standard: "$420", deep: "$520", moveout: "$470" },
  { range: "4,000-4,499 sq ft", standard: "$520", deep: "$620", moveout: "$570" },
  { range: "4,500-4,999 sq ft", standard: "$600", deep: "$750", moveout: "$670" },
];
