/**
 * CANONICAL SOURCE OF TRUTH FOR CUSTOMER REVIEWS.
 *
 * Holds 17 reviews, all verbatim from the DSM Cleaning Solutions Google
 * Business Profile.
 *
 * Sourcing: 15 were transcribed from screenshots of the live review feed, kept
 * in evidence/reviews/ as evidence. That folder is outside public/ on purpose:
 * the screenshots show the business's Google dashboard, so they are kept in
 * the repo but never served. Each entry added after 2026-09-27 names its
 * screenshot in a comment. The remaining two, Michelle Gillespie and
 * Jan Forster, came from prior page content rather than those screenshots
 * (recovered verbatim from commit cd18bcf, app/deep-clean-offer/page.tsx) and
 * were confirmed genuine separately. A third from that same block, Rachel
 * LaPapa, remains excluded pending confirmation.
 *
 * REVIEW_COUNT is the live Google total and is unrelated to how many review
 * texts are stored here. Adding text for a review does not change the count.
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
 *     The only cities shown anywhere are the ones the owner confirmed for his
 *     own clients, kept in OWNER_CONFIRMED_CITIES below.
 *  4. Never show the same review twice on one page, and never show more
 *     reviews than exist here. Show fewer instead.
 *  5. Three different people are named Julie. Full display names keep them
 *     distinct; do not collapse them to "Julie G."
 *  6. A page may show an excerpt instead of the full text, but only through
 *     reviewExcerpt() below: verbatim spans of the stored text, in their
 *     original order, with every cut marked by an ellipsis. Never reword,
 *     reorder or tidy anything inside a span. The stored text stays complete.
 */

export interface RealReview {
  name: string; // exactly as it appears on Google
  city: string; // real city of the reviewer, or "" if unknown
  text: string; // verbatim
  rating: 5;
}

export const REAL_REVIEWS: RealReview[] = [
  // Michelle's and Jan's reviews lead the array on purpose. pickReviews() draws
  // from index 0 upward, so these surface on the most pages. Michelle names
  // Guillermo and Rocio directly, which is the strongest social proof on the
  // site; Jan's is specific and human.
  {
    name: "Michelle Gillespie",
    city: "",
    text: "Guillermo and Rocio did a wonderful job. I was at work while they cleaned but my kids were home and said they were courteous, efficient, friendly, and went above and beyond. I highly recommend them.",
    rating: 5,
  },
  {
    name: "Jan Forster",
    city: "",
    text: "Very happy with my cleaning! My house has been neglected due to a few surgeries and I was thrilled to have a sparkling house again! Will definitely use them again! Very friendly as well!",
    rating: 5,
  },
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
  // New entries go at the end on purpose. pickReviews() wraps by array length,
  // and no move-out or deep city page's offset reaches past index 12, so
  // appending here cannot change which reviews those pages show. General
  // city pages (CityPageTemplate, offset = slug length) do reach these.
  {
    // Source: evidence/reviews/Screenshot (1471).png. Service: Standard cleaning.
    name: "Donna Slas",
    city: "",
    text: "Guillermo and Rocio did an amazing job! Thorough due to an exceptional attention to detail. Website is designed for easy access to all services. Communication is fantastic - I couldn't be more pleased!!!",
    rating: 5,
  },
  {
    // Source: evidence/reviews/Screenshot (1474).png. Service: Moving-related cleaning.
    name: "Melissa Wright",
    city: "",
    text: "We used DSM to clean for us when we moved out of our 1900 sq. ft. house in Romeoville. The communication was great between me and the team, and the end results were amazing. We aren't in the area any longer so we left a lock box with a key on the door and the DSM team just let themselves in and took care of everything we needed. After the cleaning was done, they sent me pictures of the rooms so I could see the work was done. And since the pictures, we've been to the house in person and can verify that the house was spotless. I would highly recommend this team and will definitely use them in the future when needed.",
    rating: 5,
  },
  {
    // Source: evidence/reviews/Screenshot (1476).png. Move-out clean, Dec 6 2023.
    // "He send" and the missing space in "great.From" are the reviewer's own
    // and are reproduced as written.
    name: "Vinzenz Unger",
    city: "",
    text: "I contracted DSM for a move out clean prior to listing the house. From start to finish this was a great experience. In part, I think this is because Guillermo, the business owner, also was part of the team to do the cleaning - giving him direct involvement with the actual service. Guillermo was very attentive and responsive when I first placed my inquiry. He send timely reminders before the scheduled date to make sure it all still works, showed up on time and got to work right away after a walk through. The job took 6.5hrs to complete. Walking into the house afterwards, it looked and smelled great.From sparkling shower windows, to removal of water residue from a tile floor, floorboards to drawers and appliances - this was well done. No question, I'd hire DSM again, and I definitely would use them for regular maintenance cleaning if this was still needed. Thank you!",
    rating: 5,
  },
  {
    // Source: evidence/reviews/Screenshot (1475).png. Services: Standard
    // cleaning, Moving-related cleaning. Google shows the first name only.
    name: "Alina",
    city: "",
    text: "Perfect cleaning service! I first found DSM Cleaning Services when I needed a move-in cleaning for my house, and they did such an amazing job that I decided to stay with this company for regular cleanings. The team is always reliable, does great work, and the prices are really fair. Highly recommend!",
    rating: 5,
  },
];

/** Live Google review count, verified 2026-07-28. */
export const REVIEW_COUNT = 46;

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
 * Cities the owner confirmed for his own clients on 2026-10-07. They are kept
 * here instead of in `city` above on purpose: setting `city` would change the
 * attribution on every existing page that already shows these reviews. Pages
 * that should show the city call reviewAttributionWithCity(); everything else
 * keeps calling reviewAttribution() and renders exactly as before.
 */
export const OWNER_CONFIRMED_CITIES: Record<string, string> = {
  "Thomas Cheng": "Shorewood",
  "Donna Slas": "Romeoville",
  "Jae Mac": "Joliet",
};

/** "Name, City IL" using an owner-confirmed city when there is one, else the name alone. */
export function reviewAttributionWithCity(review: RealReview): string {
  const city = review.city || OWNER_CONFIRMED_CITIES[review.name];
  return city ? `${review.name}, ${city} IL` : review.name;
}

/** A review looked up by its exact Google display name. Throws if missing. */
export function reviewByName(name: string): RealReview {
  const review = REAL_REVIEWS.find((r) => r.name === name);
  if (!review) throw new Error(`No review from "${name}" in lib/realReviews.ts`);
  return review;
}

/**
 * Word-for-word excerpt of a review (rule 6). Each span must appear verbatim in
 * the stored text, in order, or this throws and the build fails, so an excerpt
 * can shorten a review but never reword it. Every cut is marked: spans are
 * joined with an ellipsis, and one is added at the start or end when the
 * excerpt doesn't begin or finish where the review does.
 */
export function reviewExcerpt(review: RealReview, spans: string[]): string {
  let cursor = 0;
  let first = -1;
  let lastEnd = 0;
  for (const span of spans) {
    const at = review.text.indexOf(span, cursor);
    if (at === -1) {
      throw new Error(`reviewExcerpt: "${span}" is not verbatim, in order, in ${review.name}'s review`);
    }
    if (first === -1) first = at;
    cursor = at + span.length;
    lastEnd = cursor;
  }
  const lead = first > 0 ? "… " : "";
  const tail = lastEnd < review.text.length ? " …" : "";
  return lead + spans.join(" … ") + tail;
}

/**
 * First `count` reviews, never repeating and never exceeding what exists.
 * Pass an offset to vary which reviews a given page leads with.
 */
export function pickReviews(count: number, offset = 0): RealReview[] {
  const n = Math.min(count, REAL_REVIEWS.length);
  return Array.from({ length: n }, (_, i) => REAL_REVIEWS[(offset + i) % REAL_REVIEWS.length]);
}
