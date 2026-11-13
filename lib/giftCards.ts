/**
 * GIFT CARD AMOUNTS FOR /gift-cards (CEO brief, Nov 10 2026).
 *
 * A gift buyer doesn't know the home's bedrooms, bathrooms or square footage,
 * so the page sells by home size. Each amount is BookingKoala's own rate
 * formula (lib/pricing.ts) for the TOP of that size, rounded up to the next
 * $5, so the card fully covers a clean of that size. Nothing here is typed by
 * hand: change a rate in lib/pricing.ts and these follow.
 *
 * "Top of the size" is a home at the upper edge of the bedrooms and square
 * footage the size row promises, with the bathrooms a home like that usually
 * has. The `top` home below is what each amount is priced on, and the page
 * says it in plain words, so a buyer knows what the card covers.
 *
 * BookingKoala gift cards have a $150 minimum. The build fails if any amount
 * would land under it, instead of quietly printing a card nobody can buy.
 */
import { priceForHome, type HomeSize, type ServiceKey } from "./pricing";

/** BookingKoala's lowest gift card amount. */
export const GIFT_CARD_MIN = 150;

export type GiftService = Extract<ServiceKey, "standard" | "deep">;

export interface GiftSize {
  id: "small" | "medium" | "large";
  label: string;
  /** What counts as this size, as shown in the table. */
  counts: string;
  /** The home each amount is priced on: the top of this size. */
  top: HomeSize;
  /** That home in words: "2 bed, 2 bath, up to 1,499 sq ft". */
  coversLine: string;
}

export const GIFT_SIZES: GiftSize[] = [
  {
    id: "small",
    label: "Small",
    counts: "Up to 2 bedrooms, under 1,500 sq ft",
    top: { beds: 2, baths: 2, sqft: 1499 },
    coversLine: "2 bed, 2 bath, up to 1,499 sq ft",
  },
  {
    id: "medium",
    label: "Medium",
    counts: "3 bedrooms, 1,500 to 2,499 sq ft",
    top: { beds: 3, baths: 2.5, sqft: 2499 },
    coversLine: "3 bed, 2.5 bath, up to 2,499 sq ft",
  },
  {
    id: "large",
    label: "Large",
    counts: "4+ bedrooms or 2,500+ sq ft",
    top: { beds: 4, baths: 3, sqft: 2999 },
    coversLine: "4 bed, 3 bath, up to 2,999 sq ft",
  },
];

/** The size a buyer should pick when they don't know. */
export const DEFAULT_GIFT_SIZE: GiftSize["id"] = "medium";

const roundUpTo5 = (n: number) => Math.ceil(n / 5) * 5;

/** The gift card amount for a size and a type of clean. */
export function giftAmount(size: GiftSize, service: GiftService): number {
  return roundUpTo5(priceForHome(service, size.top));
}

// Every amount must meet BookingKoala's minimum. Runs when this file loads,
// so a rate change that breaks it stops the build.
GIFT_SIZES.forEach((size) => {
  (["standard", "deep"] as GiftService[]).forEach((service) => {
    const amount = giftAmount(size, service);
    if (amount < GIFT_CARD_MIN) {
      throw new Error(
        `lib/giftCards.ts: ${size.label} ${service} comes to $${amount}, under BookingKoala's $${GIFT_CARD_MIN} gift card minimum`
      );
    }
  });
});

/**
 * When the homepage offer area links to /gift-cards (CEO brief): Nov 15 to
 * Dec 24, Central Time. The page itself and its footer and /pricing links
 * stay up all year.
 */
export const GIFT_PROMO_WINDOW = { startDateISO: "2026-11-15", endDateISO: "2026-12-24" };
