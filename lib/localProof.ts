/**
 * LOCAL PROOF: one real client story per city page, with an example price.
 *
 * Each story is the owner's own account of a real client in that town, used
 * word for word. Never invent one, never edit one, and never add a name. A
 * city with no entry here simply has no story section.
 *
 * The price under each story is never typed. It is worked out in
 * lib/pricing.ts from the home the story describes (bedrooms, baths and the
 * square footage bracket), with the recurring discount where the client is on
 * a plan, and rounded UP to the whole dollar so it is never lower than what
 * BookingKoala charges.
 *
 * The Joliet, Plainfield and Bolingbrook clients are the same ones on the
 * recurring city pages, so their homes are read from lib/recurringCities.ts
 * and the two pages can never price two different homes.
 */
import { formatPrice, priceForHome, recurringVisitPrice, type HomeSize } from "./pricing";
import { RECURRING_CITIES } from "./recurringCities";

export interface ClientStory {
  city: string;
  /** The owner's account. Word for word, no names. */
  story: string;
  /** The sentence under the story, with its price computed from `home`. */
  priceLine: string;
  /** Where the story points a reader next. */
  links: { label: string; href: string }[];
}

/** A one-time move-in or move-out price for a home, as a whole dollar, rounded up. */
function moveInPrice(home: HomeSize): string {
  return formatPrice(Math.ceil(priceForHome("moveout", home)));
}

/** A per-visit price on a recurring plan. recurringVisitPrice() already rounds up. */
function planPrice(home: HomeSize, frequency: "monthly" | "biweekly"): string {
  return formatPrice(recurringVisitPrice(home, frequency));
}

// `sqft` only picks the bracket: 1000 is the 1,000-1,499 bracket, 2400 the 2,000-2,499 one.
const LOCKPORT_HOME: HomeSize = { beds: 2, baths: 2.5, sqft: 1000 };
const LEMONT_HOME: HomeSize = { beds: 4, baths: 2.5, sqft: 2400 };

/** Keyed by the city hub's slug, the same slug lib/cityData.ts uses. */
export const CLIENT_STORIES: Record<string, ClientStory> = {
  "joliet-il": {
    city: "Joliet",
    story:
      "One of our Joliet clients has a two-story home with 3 bedrooms and 2 baths, between 1,500 and 2,000 square feet. We've cleaned it every month for two years. Her shower is stone and glass, the kind that's hard to keep up with on your own, so it gets extra attention every visit.",
    priceLine: `A home like hers costs ${planPrice(RECURRING_CITIES.joliet.example.home, "monthly")} a visit on a monthly plan.`,
    links: [{ label: "See maid service in Joliet", href: RECURRING_CITIES.joliet.path }],
  },
  "plainfield-il": {
    city: "Plainfield",
    story:
      "In Plainfield, we've cleaned a 3-bedroom, 2.5-bath home between 1,500 and 2,000 square feet every two weeks for over a year. Same team every visit, on the same schedule.",
    priceLine: `A home like this costs ${planPrice(RECURRING_CITIES.plainfield.example.home, "biweekly")} a visit every two weeks.`,
    links: [{ label: "See maid service in Plainfield", href: RECURRING_CITIES.plainfield.path }],
  },
  "bolingbrook-il": {
    city: "Bolingbrook",
    story:
      "In Bolingbrook, we've cleaned a 4-bedroom, 2.5-bath two-story home every two weeks for two years. She's a busy mom, so along with the regular clean, we change the bed sheets at no extra charge. That's one less thing on her list.",
    priceLine: `A home like this costs ${planPrice(RECURRING_CITIES.bolingbrook.example.home, "biweekly")} a visit every two weeks.`,
    links: [{ label: "See maid service in Bolingbrook", href: RECURRING_CITIES.bolingbrook.path }],
  },
  "lockport-il": {
    city: "Lockport",
    story:
      "One of our Lockport clients has a 2-bedroom, 2.5-bath home between 1,000 and 1,500 square feet, and we've cleaned it every month for four months. She leaves out a spray she likes for her wood furniture, so we take the time to use hers on every piece. It's her home, so it gets done her way.",
    priceLine: `A home like hers costs ${planPrice(LOCKPORT_HOME, "monthly")} a visit on a monthly plan.`,
    links: [
      { label: "See recurring cleaning plans", href: "/recurring-cleaning" },
      { label: "See deep cleaning in Lockport", href: "/deep-cleaning-lockport-il" },
      { label: "See move-out cleaning in Lockport", href: "/move-out-cleaning-lockport-il" },
    ],
  },
  "lemont-il": {
    city: "Lemont",
    story:
      "In Lemont, we got a 4-bedroom, 2.5-bath home of about 2,400 square feet ready for move-in day. Inside the fridge, the oven and every cabinet, plus the bathrooms and floors, so she could move in to a clean house.",
    priceLine: `A move-in clean for a home this size is ${moveInPrice(LEMONT_HOME)}.`,
    links: [{ label: "See move-in and move-out cleaning in Lemont", href: "/move-out-cleaning-lemont-il" }],
  },
};

/** The story for a city hub ("joliet-il"), if that city has one. */
export function clientStoryForHub(slug: string): ClientStory | undefined {
  return CLIENT_STORIES[slug];
}
