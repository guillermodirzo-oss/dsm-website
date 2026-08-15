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
  { beds: "2 bed", baths: "1 bath", sqft: "1,000-1,499", price: 410 },
  { beds: "3 bed", baths: "2 bath", sqft: "1,500-1,999", price: 490 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,500-2,999", price: 630 },
  { beds: "5 bed", baths: "3 bath", sqft: "3,500-3,999", price: 810 },
];

export type ServiceKey = "standard" | "deep" | "moveout";

export interface Offer {
  code: string;
  discount: number;
  endDate: string; // inclusive, YYYY-MM-DD
}

/**
 * Offers keyed by the service they apply to. A service with no key here has
 * no offer, standard cleaning included. Two offers can run concurrently with
 * different codes and end dates, each expiring independently.
 */
export const OFFERS: Partial<Record<ServiceKey, Offer>> = {
  deep: { code: "SUMMER75", discount: 75, endDate: "2026-08-31" },
  moveout: { code: "MOVE75", discount: 75, endDate: "2026-09-30" },
};

/**
 * True while this service's offer is live. False if the service has no offer
 * at all, or its endDate has passed. Auto-reverts with no code change.
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
export function isOfferActive(service: ServiceKey, now = new Date()): boolean {
  const offer = OFFERS[service];
  if (!offer) return false;
  const end = new Date(`${offer.endDate}T23:59:59.999`);
  return now.getTime() <= end.getTime();
}

/**
 * Discounted price when this service has a live offer, else null. Returns
 * null for any service with no entry in OFFERS (standard cleaning, always)
 * and for a service whose offer has expired.
 */
export function discountedPrice(
  price: number,
  service: ServiceKey,
  now = new Date()
): number | null {
  const offer = OFFERS[service];
  if (!offer) return null;
  if (!isOfferActive(service, now)) return null;
  return price - offer.discount;
}

/**
 * Recurring frequency discounts.
 *
 * STANDARD CLEANING ONLY. Deep cleaning and move-out are one-time services by
 * nature and take no frequency discount, so nothing else may use these.
 * Verified against BookingKoala.
 *
 * Biweekly is flagged popular because it is the most-booked residential
 * frequency: 10 biweekly against 9 weekly and 4 monthly in the July data.
 */
export interface Frequency {
  id: "onetime" | "monthly" | "biweekly" | "weekly";
  label: string; // "Every 2 weeks"
  discount: number; // 0.15
  popular?: boolean;
}

export const STANDARD_FREQUENCIES: Frequency[] = [
  { id: "onetime", label: "One-time", discount: 0 },
  { id: "monthly", label: "Monthly", discount: 0.1 },
  { id: "biweekly", label: "Every 2 weeks", discount: 0.15, popular: true },
  { id: "weekly", label: "Weekly", discount: 0.2 },
];

/** The frequencies that actually carry a discount, for rendering the save block. */
export const DISCOUNTED_FREQUENCIES = STANDARD_FREQUENCIES.filter((f) => f.discount > 0);

/**
 * Price for a tier at a given frequency.
 *
 * Deliberately does NOT round to whole dollars: the multiplication is taken
 * exactly and only snapped to the nearest cent to kill binary float noise.
 * Rounding to dollars would be an invented rule.
 *
 * Two combinations land on a half dollar, both at the 15% biweekly rate:
 * $370 becomes $314.50 and $530 becomes $450.50. Neither is currently rendered
 * anywhere, since the card shows percentages plus one worked example on the
 * $240 tier, which is exact. Before any UI surfaces a per-tier recurring price,
 * confirm against BookingKoala whether it shows the half dollar or rounds, and
 * change this one line if it rounds.
 */
export function recurringPrice(basePrice: number, frequency: Frequency): number {
  return Math.round(basePrice * (1 - frequency.discount) * 100) / 100;
}

/** Lowest price in a tier list, for "starts at" copy. */
export function startingPrice(tiers: PriceTier[]): number {
  return Math.min(...tiers.map((t) => t.price));
}

/** "10%" from 0.10, so the percentage is never written by hand in a page. */
export function formatDiscount(discount: number): string {
  return `${Math.round(discount * 100)}%`;
}

/**
 * "$630", and "$314.50" when a value carries cents. Whole dollars never show
 * a decimal, so every existing caller renders exactly as before.
 */
export function formatPrice(price: number): string {
  const hasCents = Math.round(price * 100) % 100 !== 0;
  return `$${price.toLocaleString("en-US", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

/** "2 bed · 1 bath · 1,000-1,499 sq ft" */
export function tierLabel(tier: PriceTier): string {
  return `${tier.beds} · ${tier.baths} · ${tier.sqft} sq ft`;
}
