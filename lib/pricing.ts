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

/**
 * The starting price of each service, formatted for copy ("$145"). Any
 * unqualified "from" or "starting at" claim on the site should read one of
 * these, so it can never drift from the tiers above.
 */
export const STANDARD_FROM = formatPrice(startingPrice(STANDARD_CLEANING_TIERS));
export const DEEP_FROM = formatPrice(startingPrice(DEEP_CLEANING_TIERS));
export const MOVE_OUT_FROM = formatPrice(startingPrice(MOVE_OUT_TIERS));

/**
 * Lowest per-visit price on a recurring plan, as a whole dollar. Rounded UP,
 * so a "from" price is never lower than what BookingKoala charges: every two
 * weeks on the smallest home is $123.25, which shows as "from $124".
 */
export function recurringFromPrice(frequency: keyof typeof FREQUENCY_DISCOUNTS): number {
  const smallest = STANDARD_CLEANING_TIERS.reduce((a, b) => (b.price < a.price ? b : a));
  return Math.ceil(recurringDiscountedPrice(smallest, frequency));
}

/** "$116", "$124", "$131": recurring "from" prices, formatted for copy. */
export const WEEKLY_FROM = formatPrice(recurringFromPrice("weekly"));
export const BIWEEKLY_FROM = formatPrice(recurringFromPrice("biweekly"));
export const MONTHLY_FROM = formatPrice(recurringFromPrice("monthly"));

/**
 * Price for a bedroom count in a tier list, for size-specific copy. Where a
 * bedroom count has more than one tier (two 4 bed square-footage bands),
 * "low" is the smaller home and "high" the larger. Throws on a bedroom count
 * with no tier, so a page can never quietly print a made-up number.
 */
export function priceForBeds(tiers: PriceTier[], beds: number, which: "low" | "high" = "low"): number {
  const prices = tiers.filter((t) => t.beds === `${beds} bed`).map((t) => t.price);
  if (prices.length === 0) throw new Error(`No ${beds} bed tier in lib/pricing.ts`);
  return which === "low" ? Math.min(...prices) : Math.max(...prices);
}

/** "2 bed · 1 bath · 1,000-1,499 sq ft" */
export function tierLabel(tier: PriceTier): string {
  return `${tier.beds} · ${tier.baths} · ${tier.sqft} sq ft`;
}

/**
 * BOOKINGKOALA'S RATE FORMULA
 *
 *   total = service base + bedroom add-on + bathroom add-on + square footage tier
 *
 * These are the rates the owner read out of BookingKoala on 2026-09-26. The
 * tier lists at the top of this file are this formula worked out for the home
 * sizes the rate cards show, and the check under priceForHome() fails the
 * build if a listed tier and the formula ever disagree.
 *
 * Use priceForHome() for a home size that has no listed tier, such as the
 * example homes on the recurring city pages. If BookingKoala changes a rate,
 * change it here and in the tier lists together.
 */
const SERVICE_BASE: Record<ServiceKey, number> = { standard: 0, deep: 200, moveout: 230 };

/** Keyed by bedroom count. A studio prices as 1 bedroom. */
const BEDROOM_ADDON: Record<number, number> = { 0: 0, 1: 0, 2: 15, 3: 30, 4: 45, 5: 60, 6: 75 };

/** Keyed by bathroom count. Half baths have their own rate. */
const BATHROOM_ADDON: Record<number, number> = {
  1: 0,
  1.5: 0,
  2: 25,
  2.5: 35,
  3: 50,
  3.5: 60,
  4: 75,
  4.5: 85,
  5: 100,
};

const SQFT_TIERS: ({ min: number; max: number; label: string } & Record<ServiceKey, number>)[] = [
  { min: 1000, max: 1499, label: "1,000-1,499", standard: 145, deep: 100, moveout: 165 },
  { min: 1500, max: 1999, label: "1,500-1,999", standard: 185, deep: 185, moveout: 205 },
  { min: 2000, max: 2499, label: "2,000-2,499", standard: 255, deep: 255, moveout: 275 },
  { min: 2500, max: 2999, label: "2,500-2,999", standard: 290, deep: 350, moveout: 320 },
  { min: 3000, max: 3499, label: "3,000-3,499", standard: 340, deep: 400, moveout: 380 },
  { min: 3500, max: 3999, label: "3,500-3,999", standard: 420, deep: 520, moveout: 470 },
  { min: 4000, max: 4499, label: "4,000-4,499", standard: 520, deep: 620, moveout: 570 },
  { min: 4500, max: 4999, label: "4,500-4,999", standard: 600, deep: 750, moveout: 670 },
];

export interface HomeSize {
  beds: number;
  baths: number; // 2.5 for two and a half
  sqft: number; // any value inside the square footage tier
}

/** Each part of a price, so a page or a report can show the working. */
export interface PriceBreakdown {
  base: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  sqftTier: string; // "2,000-2,499"
  total: number;
}

/**
 * The BookingKoala price for a home, with its parts. Throws on a size the
 * formula has no rate for, so a page can never quietly print a made-up number.
 */
export function priceBreakdown(service: ServiceKey, home: HomeSize): PriceBreakdown {
  const bedrooms = BEDROOM_ADDON[home.beds];
  const bathrooms = BATHROOM_ADDON[home.baths];
  const tier = SQFT_TIERS.find((t) => home.sqft >= t.min && home.sqft <= t.max);
  if (bedrooms === undefined) throw new Error(`No bedroom rate for ${home.beds} bedrooms in lib/pricing.ts`);
  if (bathrooms === undefined) throw new Error(`No bathroom rate for ${home.baths} bathrooms in lib/pricing.ts`);
  if (!tier) throw new Error(`No square footage tier for ${home.sqft} sq ft in lib/pricing.ts`);
  const base = SERVICE_BASE[service];
  return {
    base,
    bedrooms,
    bathrooms,
    sqft: tier[service],
    sqftTier: tier.label,
    total: base + bedrooms + bathrooms + tier[service],
  };
}

/** The BookingKoala price for a home of any size the formula covers. */
export function priceForHome(service: ServiceKey, home: HomeSize): number {
  return priceBreakdown(service, home).total;
}

// Every listed tier must equal the formula. Runs once when this file loads,
// so a mismatch stops the build instead of reaching a page.
(
  [
    ["standard", STANDARD_CLEANING_TIERS],
    ["deep", DEEP_CLEANING_TIERS],
    ["moveout", MOVE_OUT_TIERS],
  ] as [ServiceKey, PriceTier[]][]
).forEach(([service, tiers]) => {
  tiers.forEach((tier) => {
    const home: HomeSize = {
      beds: parseFloat(tier.beds),
      baths: parseFloat(tier.baths),
      sqft: parseInt(tier.sqft.replace(/,/g, ""), 10),
    };
    const computed = priceForHome(service, home);
    if (computed !== tier.price) {
      throw new Error(
        `lib/pricing.ts: ${service} tier "${tierLabel(tier)}" is listed at ${tier.price} but the rate formula gives ${computed}`
      );
    }
  });
});

/**
 * Per-visit price for a home on a recurring plan, as a whole dollar. Rounded
 * UP, the same rule as recurringFromPrice(), so a shown price is never lower
 * than what BookingKoala charges: $335 every two weeks is $284.75, shown as $285.
 */
export function recurringVisitPrice(home: HomeSize, frequency: keyof typeof FREQUENCY_DISCOUNTS): number {
  const standard = priceForHome("standard", home);
  return Math.ceil(Math.round(standard * (1 - FREQUENCY_DISCOUNTS[frequency]) * 100) / 100);
}
