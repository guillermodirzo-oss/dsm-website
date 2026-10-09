/**
 * Data for the recurring ("maid service") city pages at
 * /recurring-cleaning-{city}-il. The page itself is
 * components/RecurringCityPage.tsx; each route file under app/ is a thin
 * wrapper that picks a city.
 *
 * Everything a page states comes from one of four places, never from a typed
 * number: prices from lib/pricing.ts, the rating and review text from
 * lib/realReviews.ts, local facts from lib/cityData.ts, and the business
 * facts below, which the owner confirmed on 2026-10-07:
 *   - recurring is the standard checklist on a weekly, every-two-weeks or
 *     monthly schedule, and the discount applies from the first recurring clean
 *   - new clients do not need a deep clean first
 *   - the same cleaner comes every visit
 *   - no contracts, and no fee to cancel, skip or reschedule
 *   - the recurring rate is locked for 12 months from the first recurring
 *     clean, as long as the home and the schedule stay the same
 *   - 48-hour satisfaction guarantee
 *   - every two weeks is the most popular schedule
 *   - recurring clients can have bed sheets changed at no extra charge on request
 *
 * Each city's client story is the owner's own account of a real recurring
 * client, used word for word. It is never edited and never carries a name.
 *
 * To add a city: add an entry to RECURRING_CITIES, create its route file,
 * and add the URL to app/sitemap.ts.
 */
import type { Metadata } from "next";
import { cities } from "./cityData";
import {
  FREQUENCY_DISCOUNTS,
  WEEKLY_FROM,
  formatDiscount,
  formatPrice,
  priceBreakdown,
  recurringFromPrice,
  recurringVisitPrice,
  type HomeSize,
} from "./pricing";
import { REVIEW_COUNT, REVIEW_RATING } from "./realReviews";
import { recurringCityTitle } from "./seoTitles";

const SITE = "https://www.dsmcleaningsolutions.com";

export type RecurringCityKey = "naperville" | "plainfield" | "bolingbrook" | "joliet";

export interface RecurringCity {
  key: RecurringCityKey;
  name: string;
  /** This page. */
  path: string;
  /** The city's general hub page. */
  hubPath: string;
  /** The city's deep cleaning page. */
  deepPath: string;
  zips: string[];
  neighborhoods: string[];
  /** A work photo labeled with this city, if public/work-photos has one. */
  photo?: { src: string; alt: string };
  /** Name of a reviewer who is a client in this city, shown under the anchor review. */
  localReviewer?: string;
  /** The owner's account of a real recurring client in this city. Word for word, no names. */
  clientStory: string;
  /**
   * The home the pricing cards are worked out for. `lead` opens the label
   * line; the bedrooms, baths and square footage bracket after it are printed
   * from `home`, the same numbers the prices are computed from. `sqft` only
   * picks the bracket: 1500 means the 1,500-1,999 bracket in lib/pricing.ts.
   * The owner set these brackets on 2026-10-07.
   */
  example: { lead: string; home: HomeSize };
}

/** Zip codes and neighborhoods exactly as lib/cityData.ts lists them for the city hub. */
function hubFacts(hubSlug: string): Pick<RecurringCity, "zips" | "neighborhoods"> {
  const city = cities.find((c) => c.slug === hubSlug);
  if (!city) throw new Error(`No "${hubSlug}" entry in lib/cityData.ts`);
  return { zips: city.zips, neighborhoods: city.neighborhoods };
}

export const RECURRING_CITIES: Record<RecurringCityKey, RecurringCity> = {
  naperville: {
    key: "naperville",
    name: "Naperville",
    path: "/recurring-cleaning-naperville-il",
    hubPath: "/naperville-il",
    deepPath: "/deep-cleaning-naperville-il",
    ...hubFacts("naperville-il"),
    photo: {
      src: "/work-photos/double-vanity-bathroom-clean-naperville-il.jpg",
      alt: "Double vanity bathroom cleaned by DSM in Naperville, IL",
    },
    clientStory:
      "One of our longest-standing Naperville clients has a large space with high ceilings, 4 rooms including a home office, 3.5 baths and two kitchens. We've cleaned it every month for over two years. Every visit means dusting up high and a lot of floor, so we take our time in every room.",
    example: {
      lead: "Here's what a typical 4-bedroom Naperville home costs",
      home: { beds: 4, baths: 2.5, sqft: 2000 },
    },
  },
  plainfield: {
    key: "plainfield",
    name: "Plainfield",
    path: "/recurring-cleaning-plainfield-il",
    hubPath: "/plainfield-il",
    deepPath: "/deep-cleaning-plainfield-il",
    // Plainfield has no lib/cityData.ts entry; its hub is a custom page. These
    // are the zip codes and neighborhoods that page (app/plainfield-il) lists
    // in its "Do you serve all Plainfield neighborhoods?" answer.
    zips: ["60544", "60585"],
    neighborhoods: ["Settlers Ridge", "Lakewood Falls", "Grande Park", "Springbank", "Heritage Meadows", "River Run"],
    photo: {
      src: "/work-photos/living-room-hardwood-floors-plainfield-il.jpg",
      alt: "Living room cleaned by DSM in Plainfield, IL",
    },
    clientStory:
      "In Plainfield, we've cleaned a 3-bedroom, 2.5-bath home between 1,500 and 2,000 square feet every two weeks for over a year. Same cleaner every visit, on the same schedule.",
    example: {
      lead: "Here's what a home like our Plainfield client's costs",
      home: { beds: 3, baths: 2.5, sqft: 1500 },
    },
  },
  bolingbrook: {
    key: "bolingbrook",
    name: "Bolingbrook",
    path: "/recurring-cleaning-bolingbrook-il",
    hubPath: "/bolingbrook-il",
    deepPath: "/deep-cleaning-bolingbrook-il",
    ...hubFacts("bolingbrook-il"),
    photo: {
      src: "/work-photos/bedroom-cleaning-service-bolingbrook-il.jpg",
      alt: "Bedroom cleaned by DSM in Bolingbrook, IL",
    },
    clientStory:
      "In Bolingbrook, we've cleaned a 4-bedroom, 2.5-bath two-story home every two weeks for two years. She's a busy mom, so along with the regular clean, we change the bed sheets at no extra charge. That's one less thing on her list, and that's what recurring service is for.",
    example: {
      lead: "Here's what a home like our Bolingbrook client's costs",
      home: { beds: 4, baths: 2.5, sqft: 2000 },
    },
  },
  joliet: {
    key: "joliet",
    name: "Joliet",
    path: "/recurring-cleaning-joliet-il",
    hubPath: "/joliet-il",
    deepPath: "/deep-cleaning-joliet-il",
    ...hubFacts("joliet-il"),
    // No photo: the only file labeled Joliet in public/work-photos shows a
    // downtown high-rise view, so it is not used here.
    localReviewer: "Jae Mac",
    clientStory:
      "One of our Joliet clients has a two-story home with 3 bedrooms and 2 baths, between 1,500 and 2,000 square feet. We've cleaned it every month for two years. Her shower is stone and glass, the kind that's hard to keep up with on your own, so it gets extra attention every visit. It's the part of the house she's happiest with when we leave.",
    example: {
      lead: "Here's what a home like our Joliet client's costs",
      home: { beds: 3, baths: 2, sqft: 1500 },
    },
  },
};

export const RECURRING_CITY_LIST: RecurringCity[] = Object.values(RECURRING_CITIES);

/** The recurring page for a city hub ("/naperville-il"), if that city has one. */
export function recurringPageForHub(hubPath: string): RecurringCity | undefined {
  return RECURRING_CITY_LIST.find((c) => c.hubPath === hubPath);
}

/** "A, B, and C" */
export function listWithAnd(items: string[]): string {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

/** "60544 & 60585" or "60540, 60563, 60564 & 60565" */
export function zipList(zips: string[]): string {
  if (zips.length <= 1) return zips.join("");
  return `${zips.slice(0, -1).join(", ")} & ${zips[zips.length - 1]}`;
}

const WEEKLY_OFF = formatDiscount(FREQUENCY_DISCOUNTS.weekly);
const BIWEEKLY_OFF = formatDiscount(FREQUENCY_DISCOUNTS.biweekly);
const MONTHLY_OFF = formatDiscount(FREQUENCY_DISCOUNTS.monthly);

/** "Save up to 20%": the largest recurring discount, for the hero line. */
export const MAX_RECURRING_DISCOUNT = WEEKLY_OFF;

/**
 * "Here's what a home like our Joliet client's costs: 3 bedrooms, 2 baths, 1,500 to 1,999 sq ft."
 * The square footage is the bracket lib/pricing.ts prices the home in, so the
 * label and the prices under it can never describe two different homes.
 */
export function exampleHomeLabel(city: RecurringCity): string {
  const { beds, baths } = city.example.home;
  const bracket = priceBreakdown("standard", city.example.home).sqftTier.replace("-", " to ");
  return `${city.example.lead}: ${beds} bedrooms, ${baths} baths, ${bracket} sq ft.`;
}

/**
 * The three pricing cards for a city: per-visit prices for its example home,
 * computed in lib/pricing.ts and rounded up to the whole dollar.
 */
export function examplePlans(city: RecurringCity) {
  const price = (frequency: keyof typeof FREQUENCY_DISCOUNTS) =>
    formatPrice(recurringVisitPrice(city.example.home, frequency));
  return [
    { name: "Weekly", off: WEEKLY_OFF, price: price("weekly"), popular: false },
    { name: "Every two weeks", off: BIWEEKLY_OFF, price: price("biweekly"), popular: true },
    { name: "Monthly", off: MONTHLY_OFF, price: price("monthly"), popular: false },
  ];
}

/**
 * The one source for the FAQ on every recurring city page. The visible FAQ
 * and the FAQPage schema both read this array, so they match word for word.
 * The price lock answer is also used on /recurring-cleaning.
 */
export const PRICE_LOCK_FAQ = {
  q: "How does the 12-month price lock work?",
  a: "Your recurring rate stays the same for 12 months from your first recurring clean, as long as your home and your schedule stay the same.",
};

export const RECURRING_FAQS: { q: string; a: string }[] = [
  {
    q: "Do I have to sign a contract?",
    a: "No. There's no contract and no commitment. You stay because you like the service.",
  },
  {
    q: "Can I skip or reschedule a visit?",
    a: "Yes, anytime. Just let us know as early as you can. We never charge a fee to skip, cancel or reschedule.",
  },
  {
    q: "Will I get the same cleaner every time?",
    a: "Yes. The same cleaner comes every visit, so they get to know your home and how you like it done.",
  },
  {
    q: "Do I need a deep clean before starting recurring service?",
    a: "No. You can start with a regular recurring visit. Some clients add a one-time deep clean later, but it's optional.",
  },
  PRICE_LOCK_FAQ,
  {
    q: "Which schedule should I pick?",
    a: "Biweekly is what most of our clients pick. Weekly works best for busy households with kids or pets, and monthly is good for keeping a tidy home on track.",
  },
  {
    q: "When does my discount start?",
    a: `On your very first recurring clean. Weekly saves ${WEEKLY_OFF}, every two weeks saves ${BIWEEKLY_OFF}, and monthly saves ${MONTHLY_OFF} off the standard price.`,
  },
  {
    q: "Do you change bed sheets?",
    a: "Yes, at no extra charge. Just ask and we'll take care of it on your visits.",
  },
];

/** Meta description, 155 characters or fewer for every city in RECURRING_CITIES. */
export function recurringCityDescription(city: RecurringCity): string {
  return `Maid service in ${city.name} with the same cleaner every visit. No contracts, 12-month price lock, weekly from ${WEEKLY_FROM}. ${REVIEW_RATING} stars from ${REVIEW_COUNT} Google reviews.`;
}

export function recurringCityMetadata(key: RecurringCityKey): Metadata {
  const city = RECURRING_CITIES[key];
  const title = recurringCityTitle(city.name);
  const description = recurringCityDescription(city);
  const url = SITE + city.path;
  return {
    // absolute: the full title tag, with no brand suffix added.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image", title, images: ["/hero-image.png"] },
  };
}

/** Service, BreadcrumbList and FAQPage JSON-LD for a recurring city page. */
export function recurringCitySchemas(city: RecurringCity) {
  const url = SITE + city.path;
  const serviceName = `Maid Service in ${city.name}, IL`;
  return {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Recurring House Cleaning",
      name: serviceName,
      url,
      provider: { "@id": `${SITE}/#business` },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: "Illinois" },
      },
      description: `Weekly, every two weeks or monthly maid service in ${city.name}, IL with the same cleaner every visit. No contracts, and the recurring rate is locked for 12 months.`,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: String(recurringFromPrice("weekly")),
        // The weekly price of the example home shown in this page's pricing cards.
        highPrice: String(recurringVisitPrice(city.example.home, "weekly")),
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Recurring Cleaning", item: `${SITE}/recurring-cleaning` },
        { "@type": "ListItem", position: 3, name: serviceName, item: url },
      ],
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: RECURRING_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };
}
