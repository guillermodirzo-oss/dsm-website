/**
 * CANONICAL SOURCE OF TRUTH FOR CUSTOMER REVIEWS.
 *
 * Every review below was transcribed verbatim from the DSM Cleaning Solutions
 * Google Business Profile. Screenshots of the source feed are kept in
 * public/Reviews/ as evidence.
 *
 * RULES — read before editing:
 *  1. Never add a review that is not on the live Google profile. Fabricated
 *     testimonials violate the FTC Rule on the Use of Consumer Reviews and
 *     Testimonials and Google's spam policy on deceptive content.
 *  2. Text is verbatim. Do not fix spelling, grammar or punctuation. Two
 *     reviews contain the reviewer's own typos ("recommenr", "GSM"); they stay.
 *     The only edit applied anywhere is replacing a double hyphen with a comma,
 *     because double hyphens are banned by the site style guide.
 *  3. Google does not publish reviewer cities, so `city` is "" for everyone.
 *     Never guess a city. Rendering shows the name alone when city is empty.
 *  4. Never show the same review twice on one page, and never show more
 *     reviews than exist here. Show fewer instead.
 *  5. Three different people are named Julie. Full display names keep them
 *     distinct; do not collapse them to "Julie G."
 */

export interface RealReview {
  name: string; // exactly as it appears on Google
  city: string; // real city of the reviewer, or "" if unknown
  text: string; // verbatim
  rating: 5;
}

export const REAL_REVIEWS: RealReview[] = [
  {
    name: "Thomas Cheng",
    city: "",
    text: "DSM Cleaning Solution is a great company to utilize for your cleaning needs. I came across them when I needed cleaning services during my moving transition from old to new home. I continue to use their services on a monthly basis. Very easy to communicate and work with. Highly recommended.",
    rating: 5,
  },
  {
    name: "Julie Gilligan",
    city: "",
    text: "Thank you so much for a great job done on my entire house. It is spotless. I recommend hitting this company to do your house. You will be very happy. It was a deep clean for a 4 bedroom, 2.5 bathroom house with den, living room, dining room and kitchen. It smells great. Thank you again.",
    rating: 5,
  },
  {
    name: "John Molchin",
    city: "",
    text: "Excellent! Great customer service, very patient, super job cleaning our house!",
    rating: 5,
  },
  {
    name: "Jae Mac",
    city: "",
    text: "I highly recommend, customer since 2024 👏 👏 👏",
    rating: 5,
  },
  {
    name: "Pati Mangano",
    city: "",
    text: "As always everything was great.",
    rating: 5,
  },
  {
    name: "Courtney Horne",
    city: "",
    text: "We had them over to do a deep cleaning. We had been neglecting some of the cleaning since having a baby and they spent hours here cleaning the house top to bottom. It looks and feels great in here. We really appreciate it and plan to use them again in the future for periodic cleaning.",
    rating: 5,
  },
  {
    // Original text read "...website interface -- it makes everything..."
    // Double hyphen replaced with a comma per the style guide. Nothing else changed.
    name: "Julie G",
    city: "",
    text: "This service is consistently perfect! And, I love the website interface, it makes everything easy and customizable.",
    rating: 5,
  },
  {
    // "recommenr" is the reviewer's own typo and is reproduced as written.
    name: "Diana C",
    city: "",
    text: "Very friendly and responsive, and their work is fantastic! Would recommenr",
    rating: 5,
  },
  {
    // "GSM" is the reviewer's own typo for DSM and is reproduced as written.
    name: "Claire Farnsworth",
    city: "",
    text: "Very pleased with the work GSM Cleaning Solutions provided. They replied to my estimate request the same day and got me booked for a deep clean within the week. The cleaning was excellent, my home is so clean top to bottom. And they were so kind and efficient. Will absolutely reach out again for future cleanings!",
    rating: 5,
  },
  {
    name: "Bill Aros",
    city: "",
    text: "We are very happy with DSM Cleaning Solutions. They do an excellent job and would hire them again",
    rating: 5,
  },
  {
    // Original text read "...I highly recommend them -- I will be using..."
    // Double hyphen replaced with a comma per the style guide. Nothing else changed.
    name: "Julie Gaubatz",
    city: "",
    text: "I'm so glad DSM Cleaning Services was recommended to us by our realtor! They are fantastic, and their website makes arranging cleanings so easy. I highly recommend them, I will be using them many more times!",
    rating: 5,
  },
];

/** Live Google review count, verified 2026-07-28. */
export const REVIEW_COUNT = 45;

/** Live Google rating, verified 2026-07-28. */
export const REVIEW_RATING = "5.0";

/**
 * Attribution line: "Name, City IL" when the city is known, otherwise just the
 * name. Google does not publish reviewer cities, so today this always returns
 * the name alone. The city branch exists for when a city is genuinely known.
 */
export function reviewAttribution(review: RealReview): string {
  return review.city ? `${review.name}, ${review.city} IL` : review.name;
}

/**
 * First `count` reviews, never repeating and never exceeding what exists.
 * Pass an offset to vary which reviews a given page leads with.
 */
export function pickReviews(count: number, offset = 0): RealReview[] {
  const n = Math.min(count, REAL_REVIEWS.length);
  return Array.from({ length: n }, (_, i) => REAL_REVIEWS[(offset + i) % REAL_REVIEWS.length]);
}
