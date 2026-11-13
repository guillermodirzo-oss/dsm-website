/**
 * THE ONE PLACE EVERY PROMOTION LIVES.
 *
 * Never type a promo code, a promo amount or a promo price into a page. Pages
 * read the offer from here and wrap whatever they show in <Offer>
 * (components/Offer.tsx), with a fallback that reads naturally once the offer
 * is over. An expired code must never be on screen.
 *
 * TO RENEW AN OFFER: change its `endDateISO` (the last day it runs) and
 * nothing else. The "through November 30" text, the exact expiry moment
 * (11:59:59 PM Central that night) and every placement follow from it.
 * TO END ONE EARLY: set `endDateISO` to yesterday.
 * TO ADD ONE: add an entry to OFFER_LIST. One offer per service at a time.
 *
 * HOW AN OFFER COMES DOWN WITHOUT A DEPLOY. Three layers:
 *  1. Every page that shows an offer exports `revalidate = 3600`, so Vercel
 *     rebuilds its HTML at most an hour after the old copy goes stale. The
 *     rebuilt page has the fallback and no trace of the code. That is what
 *     search engines and visitors without JavaScript get.
 *  2. <Offer> checks the clock on the server at every render, in Central Time
 *     (Vercel's clock is UTC), so a rebuilt page is always right.
 *  3. OfferGate checks again in the browser, so a cached page that has not
 *     been rebuilt yet still swaps to the fallback at the deadline, including
 *     in a tab left open past midnight.
 * A start date in the future works the same way in reverse: the offer shows
 * up at the first rebuild after it starts.
 *
 * Offers never go in <title>, meta descriptions, Open Graph or JSON-LD.
 * Search engines keep those for weeks and nothing can take them back.
 *
 * The discounted prices are worked out from lib/pricing.ts, never typed.
 */
import {
  DEEP_CLEANING_TIERS,
  MOVE_OUT_TIERS,
  formatPrice,
  startingPrice,
  type PriceTier,
  type ServiceKey,
} from "./pricing";
import { endOfDayIn, monthDayLabel, offerNow, startOfDayIn } from "./offerTime";
import { addOnPrice } from "./addOns";

/** What gets written by hand for each offer. Everything else is computed. */
interface OfferTerms {
  /** Unique id, used as a React key. The code itself when there is one. */
  id: string;
  /**
   * The code a customer enters at checkout. Leave it out for an offer that
   * needs no code (a bonus we add ourselves): pages then show no code at all.
   */
  code?: string;
  /** The offer's own name, when it has one: "Holiday Reset + January Lock-In". */
  name?: string;
  /**
   * The short homepage chip, for an offer with no code. Offers with a code
   * get "Move-outs: $75 off · MOVE75" built for them.
   */
  chipText?: string;
  /** The service it applies to. */
  service: ServiceKey;
  /** How the service reads mid-sentence: "deep cleaning". */
  serviceName: string;
  /** The service's own page, where a banner line for this offer links. */
  servicePath: string;
  /** Dollars off. 0 for a bonus-only offer, which shows regular prices. */
  discount: number;
  /** A free extra that comes with it, and what that extra normally costs. */
  bonus?: string;
  bonusValue?: number;
  /** "fall", for copy like "this fall". */
  season?: string;
  /**
   * Share off the first recurring clean for a customer who also picks a
   * recurring start date: 0.25 for 25%. Applied by the owner, no code.
   */
  recurringFirstCleanOff?: number;
  /** "January", the month that recurring start has to fall in. */
  recurringStartMonth?: string;
  /**
   * Fixed number of spots, shown as plain text. Never a live counter: the
   * owner ends the offer early (endDateISO = yesterday) if it fills.
   */
  spots?: number;
  /** First day it runs, Central Time. */
  startDateISO: string;
  /** Last day it runs, Central Time. The one line to change to renew. */
  endDateISO: string;
}

/** What every offer ends up with. */
export interface Offer extends OfferTerms {
  /**
   * "$75 off plus free oven cleaning (a $40 value)", or for a bonus-only
   * offer "free inside fridge and oven cleaning (a $90 value)".
   */
  description: string;
  /** "25%" when there is a recurring first-clean discount, else undefined. */
  recurringOffLabel?: string;
  /** "November 30", for "through November 30". */
  endDate: string;
  /** 12:00:00 AM Central on the first day, as a UTC instant. */
  startsAt: string;
  /** 11:59:59 PM Central on the last day, as a UTC instant. */
  expiresAt: string;
  /** The service's regular lowest price, from lib/pricing.ts. */
  regularFromPrice: number;
  /** That price with the offer applied. */
  fromPrice: number;
  /** "$225" */
  fromPriceLabel: string;
}

const TIERS: Partial<Record<ServiceKey, PriceTier[]>> = {
  deep: DEEP_CLEANING_TIERS,
  moveout: MOVE_OUT_TIERS,
};

function defineOffer<T extends OfferTerms>(terms: T): T & Offer {
  const tiers = TIERS[terms.service];
  if (!tiers) throw new Error(`lib/offers.ts: no price tiers for an offer on "${terms.service}"`);
  if (terms.startDateISO > terms.endDateISO) {
    throw new Error(`lib/offers.ts: ${terms.id} ends (${terms.endDateISO}) before it starts (${terms.startDateISO})`);
  }
  const regularFromPrice = startingPrice(tiers);
  const fromPrice = regularFromPrice - terms.discount;
  if (terms.discount === 0 && !(terms.bonus && terms.bonusValue)) {
    throw new Error(`lib/offers.ts: ${terms.id} has no discount and no bonus, so it offers nothing`);
  }
  const bonusPart = terms.bonus && terms.bonusValue ? `${terms.bonus} (a ${formatPrice(terms.bonusValue)} value)` : "";
  const description =
    terms.discount === 0
      ? `free ${bonusPart}`
      : bonusPart
        ? `${formatPrice(terms.discount)} off plus ${bonusPart}`
        : `${formatPrice(terms.discount)} off`;
  return {
    ...terms,
    description,
    recurringOffLabel: terms.recurringFirstCleanOff ? `${Math.round(terms.recurringFirstCleanOff * 100)}%` : undefined,
    endDate: monthDayLabel(terms.endDateISO),
    startsAt: startOfDayIn(terms.startDateISO).toISOString(),
    expiresAt: endOfDayIn(terms.endDateISO).toISOString(),
    regularFromPrice,
    fromPrice,
    fromPriceLabel: formatPrice(fromPrice),
  };
}

/**
 * HOLIDAY RESET + JANUARY LOCK-IN: deep cleaning (CEO brief, Nov 10 2026).
 * Replaced FALL75. No code and no dollars off: the deep clean is at the
 * regular price with inside fridge and inside oven added free, and a
 * customer who picks a January start for recurring cleaning gets 25% off
 * their first recurring clean (the owner applies it, no code). 10 spots, as
 * fixed text. Ends Dec 18 so the last cleans land before Christmas.
 * Inside fridge is NOT part of a normal deep clean (exterior only): it may
 * only be promised inside <Offer service="deep">.
 */
export const DEEP_OFFER = defineOffer({
  id: "HOLIDAY-RESET",
  name: "Holiday Reset + January Lock-In",
  service: "deep",
  serviceName: "deep cleaning",
  servicePath: "/deep-cleaning",
  discount: 0,
  bonus: "inside fridge and oven cleaning",
  // The inside fridge and inside oven add-on prices, from lib/addOns.ts.
  bonusValue: addOnPrice("insideFridge") + addOnPrice("insideOven"),
  season: "holiday",
  recurringFirstCleanOff: 0.25,
  recurringStartMonth: "January",
  spots: 10,
  chipText: "Holiday deep clean: fridge + oven free · only 10 spots",
  startDateISO: "2026-11-12",
  endDateISO: "2026-12-18",
});

/** MOVE75: move-in and move-out cleaning. Start date is the day the code went live on the site. */
export const MOVEOUT_OFFER = defineOffer({
  id: "MOVE75",
  code: "MOVE75",
  service: "moveout",
  serviceName: "move-in and move-out cleaning",
  servicePath: "/move-out-cleaning",
  discount: 75,
  startDateISO: "2026-08-14",
  endDateISO: "2026-12-31",
});

/** Every offer, in the order banners list them. */
export const OFFER_LIST: Offer[] = [DEEP_OFFER, MOVEOUT_OFFER];

/**
 * Offers keyed by the service they apply to. A service with no key here has
 * no offer, standard cleaning included.
 */
export const OFFERS: Partial<Record<ServiceKey, Offer>> = Object.fromEntries(
  OFFER_LIST.map((offer) => [offer.service, offer])
);

/** True from the offer's first moment to its last, Central Time. */
export function isOfferLive(offer: Offer, now = offerNow()): boolean {
  const t = now.getTime();
  return t >= new Date(offer.startsAt).getTime() && t <= new Date(offer.expiresAt).getTime();
}

/**
 * True while this service's offer is running. False if the service has no
 * offer, it has not started, or it has ended.
 *
 * Call this at render time, never at module scope: a warm server keeps
 * module-level values between regenerations, so a module-scope check would
 * go stale. Pages should not call it directly at all; they render offers
 * through <Offer>, which also re-checks in the browser.
 */
export function isOfferActive(service: ServiceKey, now = offerNow()): boolean {
  const offer = OFFERS[service];
  return offer ? isOfferLive(offer, now) : false;
}

/** The offers running right now, in banner order. */
export function activeOffers(now = offerNow()): Offer[] {
  return OFFER_LIST.filter((offer) => isOfferLive(offer, now));
}

/**
 * Discounted price when this service has a live offer, else null. Null for a
 * service with no offer (standard cleaning, always) and for one whose offer
 * has not started or has ended.
 */
export function discountedPrice(price: number, service: ServiceKey, now = offerNow()): number | null {
  const offer = OFFERS[service];
  if (!offer || !isOfferLive(offer, now)) return null;
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
