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
 *
 * 2026-09-27: added the Standard 1 bed / 1 bath / 1,000-1,499 tier ($145),
 * confirmed directly by the owner against BookingKoala. It was missing, so
 * every "starting at" claim for standard cleaning floored at the 2-bed tier
 * ($160) instead of the true minimum. Every other tier in this file was
 * re-checked against BookingKoala's rate formula at the same time and already
 * matched, deep and move-out included.
 */

import { DEEP_OFFER, MOVEOUT_OFFER } from "./siteConstants";
import { offerNow } from "./offerTime";

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
  { beds: "1 bed", baths: "1 bath", sqft: "1,000-1,499", price: 145 },
  { beds: "2 bed", baths: "1 bath", sqft: "1,000-1,499", price: 160 },
  { beds: "3 bed", baths: "2 bath", sqft: "1,500-1,999", price: 240 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,500-2,999", price: 370 },
  { beds: "5 bed", baths: "3 bath", sqft: "3,500-3,999", price: 530 },
];

// 1 bed / 1 bath added 2026-09-28: $395 per the BookingKoala formula
// (move-out base $230 + 1,000-1,499 sq ft tier $165), confirmed by the owner.
export const MOVE_OUT_TIERS: PriceTier[] = [
  { beds: "1 bed", baths: "1 bath", sqft: "1,000-1,499", price: 395 },
  { beds: "2 bed", baths: "1 bath", sqft: "1,000-1,499", price: 410 },
  { beds: "3 bed", baths: "2 bath", sqft: "1,500-1,999", price: 490 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,000-2,499", price: 585 },
  { beds: "4 bed", baths: "2.5 bath", sqft: "2,500-2,999", price: 630 },
  { beds: "5 bed", baths: "3 bath", sqft: "3,500-3,999", price: 810 },
];

export type ServiceKey = "standard" | "deep" | "moveout";

export interface Offer {
  code: string;
  discount: number;
  endDate: string; // last day, inclusive, YYYY-MM-DD, Central Time
  endLabel: string; // "October 31"
  expiresAt: string; // ISO instant: 11:59:59 PM Central on endDate
}

/**
 * Offers keyed by the service they apply to. A service with no key here has
 * no offer, standard cleaning included. Two offers can run concurrently with
 * different codes and end dates, each expiring independently.
 *
 * The code, discount and end date all come from DEEP_OFFER/MOVEOUT_OFFER in
 * lib/siteConstants.ts, so that file is the one place to change either offer.
 */
export const OFFERS: Partial<Record<ServiceKey, Offer>> = {
  deep: {
    code: DEEP_OFFER.code,
    discount: DEEP_OFFER.discount,
    endDate: DEEP_OFFER.endDateISO,
    endLabel: DEEP_OFFER.endDate,
    expiresAt: DEEP_OFFER.expiresAt,
  },
  moveout: {
    code: MOVEOUT_OFFER.code,
    discount: MOVEOUT_OFFER.discount,
    endDate: MOVEOUT_OFFER.endDateISO,
    endLabel: MOVEOUT_OFFER.endDate,
    expiresAt: MOVEOUT_OFFER.expiresAt,
  },
};

/**
 * True while this service's offer is live: until 11:59:59 PM Central on its
 * last day. False if the service has no offer at all, or it has ended.
 *
 * Call this at render time, never at module scope: a warm server keeps
 * module-level values between regenerations, so a module-scope check would
 * go stale. On its own this only updates when a page regenerates, so pages
 * render offers through components/Offer.tsx, which also re-checks in the
 * browser. See that file for how expiry works without a deploy.
 */
export function isOfferActive(service: ServiceKey, now = offerNow()): boolean {
  const offer = OFFERS[service];
  if (!offer) return false;
  return now.getTime() <= new Date(offer.expiresAt).getTime();
}

/**
 * Discounted price when this service has a live offer, else null. Returns
 * null for any service with no entry in OFFERS (standard cleaning, always)
 * and for a service whose offer has expired.
 */
export function discountedPrice(
  price: number,
  service: ServiceKey,
  now = offerNow()
): number | null {
  const offer = OFFERS[service];
  if (!offer) return null;
  if (!isOfferActive(service, now)) return null;
  return price - offer.discount;
}

/**
 * The offer price with no date check, for content already inside an <Offer>
 * gate (the gate decides whether it shows). Never null, so it is safe to
 * format even when the gate is about to render its fallback instead.
 */
export function offerPrice(price: number, service: ServiceKey): number {
  return price - (OFFERS[service]?.discount ?? 0);
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
 * Recurring frequency discounts keyed by id, for direct lookup by /recurring-
 * cleaning. Derived from STANDARD_FREQUENCIES above so it can never disagree
 * with it: weekly 20%, every 2 weeks 15%, monthly 10%.
 */
export const FREQUENCY_DISCOUNTS: Record<"weekly" | "biweekly" | "monthly", number> = {
  weekly: STANDARD_FREQUENCIES.find((f) => f.id === "weekly")!.discount,
  biweekly: STANDARD_FREQUENCIES.find((f) => f.id === "biweekly")!.discount,
  monthly: STANDARD_FREQUENCIES.find((f) => f.id === "monthly")!.discount,
};

/**
 * Discounted price for a standard-clean tier at a recurring frequency. The
 * one function every recurring price on the site must call, so a pricing
 * card and an FAQ answer can never show two different numbers for the same
 * plan. Same rounding rule as recurringPrice() above: exact math, snapped to
 * the nearest cent only to kill binary float noise.
 */
export function recurringDiscountedPrice(
  tier: PriceTier,
  frequency: keyof typeof FREQUENCY_DISCOUNTS
): number {
  return Math.round(tier.price * (1 - FREQUENCY_DISCOUNTS[frequency]) * 100) / 100;
}

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

/** Highest price in a tier list, for the top of a schema price range. */
export function topPrice(tiers: PriceTier[]): number {
  return Math.max(...tiers.map((t) => t.price));
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
