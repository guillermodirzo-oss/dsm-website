import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Offer from "@/components/Offer";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import { reviewByName, reviewExcerpt, reviewAttribution } from "@/lib/realReviews";
import {
  MOVE_OUT_TIERS,
  topPrice,
  FREQUENCY_DISCOUNTS,
  formatDiscount,
  formatPrice,
  startingPrice,
  type PriceTier,
} from "@/lib/pricing";
import { offerPrice } from "@/lib/offers";
import { REVIEW_COUNT, REVIEW_RATING } from "@/lib/siteConstants";
import { MOVEOUT_OFFER } from "@/lib/offers";

// Regenerate at most hourly so MOVE75 drops out of the HTML on its own after
// it ends. <Offer> also hides it in the browser at the deadline. See
// components/Offer.tsx.
export const revalidate = 3600;

// Every price on this page comes from MOVE_OUT_TIERS, never a typed number.
const tierFor = (beds: string) => MOVE_OUT_TIERS.find((t) => t.beds === beds)!;
const SMALLEST_TIER = MOVE_OUT_TIERS.reduce((a, b) => (b.price < a.price ? b : a));
const TWO_BED = tierFor("2 bed");
const THREE_BED = tierFor("3 bed");
const FOUR_BED = tierFor("4 bed"); // first 4 bed row: 2,000-2,499 sq ft
const MOVEOUT_FROM = formatPrice(startingPrice(MOVE_OUT_TIERS));

/** "2 bed / 1 bath, 1,000 to 1,499 sq ft" */
const sizeLabel = (t: PriceTier) => `${t.beds} / ${t.baths}, ${t.sqft.replace("-", " to ")} sq ft`;

const PAGE_TITLE = `Move Out Cleaning Romeoville IL | From ${MOVEOUT_FROM} | DSM Cleaning`;
// 151 characters as rendered with today's rating, count and price. No offer
// in here: offers expire, search snippets don't.
const PAGE_DESCRIPTION = `Move-in and move-out cleaning in Romeoville and the southwest suburbs, from ${MOVEOUT_FROM}. Inside the oven, fridge and every cabinet. Rated ${REVIEW_RATING} by ${REVIEW_COUNT} neighbors.`;

export const metadata: Metadata = {
  // absolute: the root layout's title template would otherwise add the brand twice.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/move-out-cleaning" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://www.dsmcleaningsolutions.com/move-out-cleaning",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const audiences = [
  {
    icon: "🏡",
    title: "Selling",
    desc: "Get it ready for the final walk-through or listing photos. Hand over the keys and move on.",
  },
  {
    icon: "🔑",
    title: "Buying",
    desc: "Get it cleaned before your boxes arrive. Move into a house that's actually yours.",
  },
  {
    icon: "📦",
    title: "Renting",
    desc: "Move out with the place clean. It's the easiest way to protect your deposit.",
  },
];

const priceCards = [TWO_BED, THREE_BED, FOUR_BED];

const checklist = [
  {
    room: "All Rooms",
    items: [
      "Dust ceiling fans and remove cobwebs",
      "Dust window sills and ledges (inside)",
      "Dust doors and door frames",
      "Dust blinds",
      "Dust baseboards",
      "Wipe mirrors and light switches",
      "Vacuum carpet and hard floors",
      "Mop hard floors",
    ],
    photos: [
      { src: "/work-photos/empty-bedroom-gray-carpet-2-1200.jpg", alt: "Empty bedroom with fresh vacuum lines across the carpet after a DSM Cleaning Solutions move-out clean" },
      { src: "/work-photos/closet-move-out-cleaning.jpg", alt: "Empty walk-in closet with bare shelving and a polished hardwood floor after a DSM Cleaning Solutions move-out clean" },
    ],
  },
  {
    room: "Kitchen",
    items: [
      "Dust reachable vents",
      "Wipe countertops and surfaces",
      "Clean stove and inside the oven",
      "Clean refrigerator inside and out",
      "Clean hood and light switches",
      "Wipe inside cabinets and cabinet faces",
      "Clean baseboards",
      "Clean microwave inside and out",
      "Clean and dry sink and faucet",
      "Scrub tile grout",
      "Vacuum and mop floors",
    ],
    photos: [
      { src: "/work-photos/oven-interior-open-door-clean-1200.jpg", alt: "Oven door open showing a spotless interior and racks after a DSM Cleaning Solutions move-out clean" },
      { src: "/work-photos/fridge-interior-shelves-spotless-1200.jpg", alt: "Empty refrigerator with wiped-clean glass shelves after a DSM Cleaning Solutions move-out clean" },
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Dust reachable vents",
      "Clean and sanitize toilet and toilet area",
      "Remove soap scum and mildew in shower and tub",
      "Scrub tile grout",
      "Clean inside and outside all cabinets and drawers",
      "Sanitize countertops",
      "Sanitize sink and polish fixtures",
      "Wipe mirrors and light switches",
      "Wipe baseboards and doors",
      "Vacuum and mop floors",
    ],
    photos: [
      { src: "/work-photos/toilet-bowl-spotless-closeup-2.jpg", alt: "Close-up of a spotless toilet bowl after a DSM Cleaning Solutions move-out clean" },
    ],
  },
  {
    room: "Laundry Room",
    items: [
      "Remove cobwebs",
      "Wipe outside of washer and dryer",
      "Remove dryer lint",
      "Dust baseboards and doors",
      "Clean and dry sink",
      "Vacuum and mop floor",
    ],
    photos: [
      { src: "/work-photos/laundry-room-move-out-clean-romeoville-il.jpg", alt: "Laundry room with a white front-load washer and dryer and a clean tile floor after a DSM Cleaning Solutions move-out clean in Romeoville" },
    ],
  },
];

// Move-out vs deep, built only from the two real checklists. Deep column
// quotes app/deep-cleaning/page.tsx `checklist`; move-out column quotes the
// `checklist` above. Nothing here is on only one side unless that side's
// checklist actually lists it.
const comparison = [
  // deep: "Clean inside/outside oven" | move-out: "Clean stove and inside the oven"
  { item: "Inside the oven", deep: "Yes", moveOut: "Yes" },
  // deep: "Clean inside microwave" | move-out: "Clean microwave inside and out"
  { item: "Inside the microwave", deep: "Yes", moveOut: "Yes" },
  // deep: "Wipe refrigerator exterior" | move-out: "Clean refrigerator inside and out"
  { item: "Refrigerator", deep: "Outside only", moveOut: "Inside and out" },
  // deep: "Wipe all cabinet fronts" | move-out: "Wipe inside cabinets and cabinet faces"
  { item: "Kitchen cabinets", deep: "Fronts only", moveOut: "Inside and out" },
  // deep: "Wipe cabinets and shelves" | move-out: "Clean inside and outside all cabinets and drawers"
  { item: "Bathroom cabinets and drawers", deep: "Wiped", moveOut: "Inside and out" },
  // deep: "Wipe baseboards and door frames", "Wipe all doors and door frames" |
  // move-out: "Dust baseboards", "Dust doors and door frames", "Wipe baseboards and doors"
  { item: "Baseboards and doors", deep: "Yes", moveOut: "Yes" },
  // deep: "Deep scrub shower/tub with grout cleaning", "Mop floors and clean
  // grout lines" (Bathrooms only) | move-out: "Scrub tile grout" (Kitchen and
  // Bathrooms, confirmed by the owner 2026-09-28)
  { item: "Tile grout", deep: "Bathrooms", moveOut: "Kitchen and bathrooms" },
  // deep: no laundry room section | move-out: "Laundry room" section
  { item: "Laundry room", deep: "Not on the checklist", moveOut: "Yes" },
];

// Text is identical between the visible FAQ and the FAQPage schema. Offer
// lines are rendered outside `a`, never inside it, so the schema never
// carries an offer that will expire.
const faqs = [
  {
    q: "How much does move-out cleaning cost?",
    a: `A ${sizeLabel(TWO_BED)} home is ${formatPrice(TWO_BED.price)}. A ${sizeLabel(THREE_BED)} home is ${formatPrice(THREE_BED.price)}, and a ${sizeLabel(FOUR_BED)} home is ${formatPrice(FOUR_BED.price)}. Smaller homes start at ${MOVEOUT_FROM}. Your exact price depends on bedrooms, bathrooms and square footage, and you'll see it before you book.`,
  },
  {
    q: "What's included in a move-out clean?",
    a: "Every room gets the full checklist above. That means inside the oven, inside the fridge, inside every cabinet and drawer, baseboards and doors, the bathrooms, the laundry room, and every floor vacuumed and mopped.",
  },
  {
    q: "What's the difference between move-out and deep cleaning?",
    a: "Move-out cleaning is built for an empty house. It covers inside the fridge and inside every cabinet and drawer, which a deep clean doesn't. Deep cleaning is built for a home you're living in, so it vacuums under and behind furniture. Both clean inside the oven and microwave, both scrub tile grout, and both do baseboards and doors.",
  },
  {
    q: "Do I need to be home?",
    a: "No. Leave a lockbox or a door code and we'll let ourselves in. When we're done, we text you photos of every room so you can see the work before you get back.",
  },
  {
    q: "Do you clean for buyers moving in too?",
    a: "Yes. A move-in clean uses the same checklist as a move-out clean. Book it after closing and before your boxes arrive, and you move into a house that's actually clean.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Romeoville and clean homes across the southwest and west suburbs: Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Shorewood, New Lenox, Lemont, Homer Glen, Westmont, Hinsdale, Oak Brook, Downers Grove, Burr Ridge, and Minooka. Not sure if we come to you? Give us a call at (815) 246-2113.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Move-In and Move-Out Cleaning",
  serviceType: "Move-in and move-out cleaning",
  areaServed: [
    { "@type": "City", name: "Romeoville", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Plainfield", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Bolingbrook", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
  ],
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Move-in and move-out cleaning for homes in Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Inside the oven, the fridge and every cabinet and drawer.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: String(SMALLEST_TIER.price),
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: String(SMALLEST_TIER.price),
      maxPrice: String(topPrice(MOVE_OUT_TIERS)),
      priceCurrency: "USD",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Move-In / Move-Out Cleaning", item: "https://www.dsmcleaningsolutions.com/move-out-cleaning" },
  ],
};

const cities = [
  ["Romeoville", "romeoville"],
  ["Plainfield", "plainfield"],
  ["Bolingbrook", "bolingbrook"],
  ["Naperville", "naperville"],
  ["Joliet", "joliet"],
  ["Lockport", "lockport"],
  ["Lemont", "lemont"],
  ["Westmont", "westmont"],
  ["Shorewood", "shorewood"],
  ["Homer Glen", "homer-glen"],
  ["New Lenox", "new-lenox"],
  ["Minooka", "minooka"],
  ["Hinsdale", "hinsdale"],
  ["Oak Brook", "oak-brook"],
  ["Downers Grove", "downers-grove"],
  ["Burr Ridge", "burr-ridge"],
];

// Review excerpts go through reviewExcerpt(), which fails the build if a span
// isn't word-for-word in the stored review. Each review appears once on this
// page (realReviews rule 4).
const vinzenz = reviewByName("Vinzenz Unger");
const VINZENZ_EXCERPT = reviewExcerpt(vinzenz, [
  "I contracted DSM for a move out clean prior to listing the house. From start to finish this was a great experience.",
  "Walking into the house afterwards, it looked and smelled great.",
  "floorboards to drawers and appliances - this was well done.",
]);
const melissa = reviewByName("Melissa Wright");
const MELISSA_EXCERPT = reviewExcerpt(melissa, [
  "We aren't in the area any longer so we left a lock box with a key on the door and the DSM team just let themselves in and took care of everything we needed. After the cleaning was done, they sent me pictures of the rooms so I could see the work was done.",
]);
const alina = reviewByName("Alina");
const ALINA_EXCERPT = reviewExcerpt(alina, [
  "I first found DSM Cleaning Services when I needed a move-in cleaning for my house, and they did such an amazing job that I decided to stay with this company for regular cleanings.",
]);
// Melissa and Alina are already quoted above, so the reviews block shows the
// one other move-related review on file rather than repeating them.
const moreMoveReviews = [reviewByName("Thomas Cheng")];

export default function MoveOutCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO. Same full-bleed photo and overlay as /deep-cleaning and
          /recurring-cleaning. H1, rating, subhead, lockbox line, offer, CTAs:
          checked to clear the fold at 390px. The price anchor sits under the
          CTAs. */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/work-photos/empty-living-room-hardwood-archway.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-white">
          <nav className="text-sm mb-5 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Move-In / Move-Out Cleaning</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Romeoville Move-Out Cleaning, Done Before Closing Day
          </h1>

          {/* Rating, directly under the H1. Counts from lib/realReviews.ts. */}
          <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mb-4 hover:underline">
            <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
            <span className="text-sm opacity-90">{REVIEW_RATING} · {REVIEW_COUNT} Google Reviews</span>
          </Link>

          <p className="text-base md:text-xl font-semibold mb-3 opacity-95 max-w-2xl mx-auto">
            Selling or buying? We clean inside the oven, the fridge and every cabinet, so the walk-through goes smooth and the next owner walks into a clean house.
          </p>
          <p className="text-sm md:text-base mb-5 opacity-85 max-w-xl mx-auto">
            You don&apos;t even need to be there. Leave a lockbox and we&apos;ll text you photos when we&apos;re done.
          </p>

          <Offer service="moveout">
            <div className="mb-5">
              <a
                href="#quote-form"
                className="inline-block rounded-full px-5 py-2.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 transition-all duration-200"
                style={{ backgroundColor: "#E8622A" }}
              >
                ${MOVEOUT_OFFER.discount} off your move-out or move-in clean.
              </a>
              <p className="mt-2 text-sm text-white/70">
                Use code <span className="font-bold text-white">{MOVEOUT_OFFER.code}</span> through {MOVEOUT_OFFER.endDate}.
              </p>
            </div>
          </Offer>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/book"
              style={{ backgroundColor: "#E8721C" }}
              className="text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Book Online
            </Link>
            <a
              href="#quote-form"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
            >
              Get a Free Quote
            </a>
          </div>

          <p className="text-sm md:text-base mt-5 opacity-80">
            Most 3 bedroom homes are {formatPrice(THREE_BED.price)}
            <Offer service="moveout">
              , or {formatPrice(offerPrice(THREE_BED.price, "moveout"))} with {MOVEOUT_OFFER.code} through {MOVEOUT_OFFER.endDate}
            </Offer>
            .
          </p>
        </div>
      </section>

      {/* 2. TRUST BAR. Same claims as /recurring-cleaning, all already made
          elsewhere on the site. */}
      <section className="bg-white border-b py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
          <span>✅ Family Owned Since 2020</span>
          <span>✅ 500+ Local Clients</span>
          <span>✅ Fully Insured &amp; Bonded</span>
          <span>✅ {REVIEW_RATING} Stars</span>
          <span>✅ 48-Hour Satisfaction Guarantee</span>
        </div>
      </section>

      {/* 3. ANCHOR REVIEW. Word-for-word excerpt, cuts marked. */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">{VINZENZ_EXCERPT}</p>
          <p className="font-semibold text-gray-700">{reviewAttribution(vinzenz)}</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* 4. WHO WE CLEAN FOR */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">Who We Clean For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center">
                <span className="text-4xl block mb-3">{a.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING. Three cards from MOVE_OUT_TIERS, each with the MOVE75
          price underneath while the offer is live. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Move-Out Cleaning Prices</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Flat rate by home size. Same checklist for move-in and move-out.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {priceCards.map((tier) => {
              return (
                <div key={`${tier.beds}-${tier.sqft}`} className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{tier.beds} / {tier.baths}</h3>
                  <p className="text-xs text-gray-500 mb-4">{tier.sqft.replace("-", " to ")} sq ft</p>
                  <p className="text-3xl font-bold text-gray-900 mb-5">{formatPrice(tier.price)}</p>
                  <Offer service="moveout">
                    <p className="text-sm font-semibold -mt-4 mb-5" style={{ color: "#E8622A" }}>
                      {formatPrice(offerPrice(tier.price, "moveout"))} with {MOVEOUT_OFFER.code}
                      <span className="block text-xs font-medium text-gray-500">through {MOVEOUT_OFFER.endDate}</span>
                    </p>
                  </Offer>
                  <Link
                    href="/book"
                    className="block w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
                    style={{ backgroundColor: "#E8721C" }}
                  >
                    Book This Size
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="text-gray-600 leading-relaxed text-sm text-center max-w-2xl mx-auto">
            Smaller homes start at {MOVEOUT_FROM}. Your exact price depends on bedrooms, bathrooms and square footage, and you&apos;ll see it before you book.
          </p>
        </div>
      </section>

      {/* 6. WHAT WE CLEAN. One <details> per room, same tap-to-open pattern
          as the FAQ. First room open so the section shows content without a
          tap. */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">What We Clean</h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Every room in the house, built for an empty home. Tap a room to see the full list.
          </p>
          <div className="space-y-4">
            {checklist.map((section, i) => (
              <details key={section.room} open={i === 0} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="px-5 py-4 font-bold text-gray-800 cursor-pointer hover:bg-gray-100 list-none flex justify-between items-center rounded-xl">
                  {section.room}
                  <span className="text-gray-400 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                    <ul className="space-y-1.5">
                      {section.items.map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`grid ${section.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
                      {section.photos.map((p) => (
                        <div key={p.src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                          <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MOVE-OUT VS DEEP CLEAN. Built from the two real checklists; see
          `comparison` above for the source line behind every cell. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Move-Out vs Deep Clean</h2>
          <p className="text-center text-gray-600 text-sm mb-8 max-w-xl mx-auto">
            Move-out is built for an empty house, so it adds inside the fridge and inside every cabinet and drawer.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold"></th>
                  <th className="text-center px-4 py-3 font-semibold">Deep Clean</th>
                  <th className="text-center px-4 py-3 font-semibold" style={{ backgroundColor: "#E8622A" }}>Move-Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((row) => (
                  <tr key={row.item}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.deep}</td>
                    <td className="px-4 py-3 text-center font-semibold text-gray-900">{row.moveOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-5">
            <Link href="/deep-cleaning" className="text-brand-green font-semibold text-sm hover:underline">
              Still living there? See what&apos;s in a deep clean →
            </Link>
          </p>
        </div>
      </section>

      {/* 8. MID-PAGE CTA */}
      <section className="py-14 px-4" style={{ backgroundColor: "#E8622A" }}>
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Closing soon? Get it off your list today.</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book" className="bg-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition" style={{ color: "#E8622A" }}>
              Book Online
            </Link>
            <a href="#quote-form" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* 9. YOU DON'T NEED TO BE THERE */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">You Don&apos;t Need to Be There</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ol className="space-y-5">
              {[
                "Leave a lockbox or code.",
                "We clean every room on the checklist.",
                "You get photos before we leave.",
              ].map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center"
                    style={{ backgroundColor: "#E8622A" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-gray-800 font-semibold">{step}</span>
                </li>
              ))}
            </ol>
            <figure className="rounded-2xl p-6" style={{ backgroundColor: "#FFF4EE" }}>
              <blockquote className="text-gray-800 leading-relaxed italic">&ldquo;{MELISSA_EXCERPT}&rdquo;</blockquote>
              <figcaption className="mt-3 font-semibold text-gray-700">
                {reviewAttribution(melissa)} <span style={{ color: "#FFA869" }}>★★★★★</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 10. MOVING IN? KEEP IT THAT WAY */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Moving In? Keep It That Way.</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A lot of our clients found us for a move-in clean and stayed for regular cleanings.
          </p>
          <figure className="bg-white rounded-2xl p-6 shadow-sm mb-6 text-left">
            <blockquote className="text-gray-800 leading-relaxed italic">&ldquo;{ALINA_EXCERPT}&rdquo;</blockquote>
            <figcaption className="mt-3 font-semibold text-gray-700">
              {reviewAttribution(alina)} <span style={{ color: "#FFA869" }}>★★★★★</span>
            </figcaption>
          </figure>
          <Link
            href="/recurring-cleaning"
            className="inline-block font-bold px-6 py-3 rounded-lg border-2 transition hover:bg-orange-50"
            style={{ borderColor: "#E8622A", color: "#E8622A" }}
          >
            Recurring cleaning: save up to {formatDiscount(FREQUENCY_DISCOUNTS.weekly)} on every visit
          </Link>
        </div>
      </section>

      {/* 11. REVIEWS BLOCK */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">More From Clients Who Moved</h2>
          <div className="space-y-6 mb-8">
            {moreMoveReviews.map((review) => (
              <div key={review.name} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex mb-3"><span style={{ color: "#FFA869" }}>★★★★★</span></div>
                <p className="text-gray-700 leading-relaxed mb-3 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-600">{reviewAttribution(review)}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://g.co/kgs/KFkN2MX" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline text-sm">
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQ. `faq.a` is byte-identical to the FAQPage schema. The offer
          line and the service-areas link sit outside it. */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="bg-white border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  <p>{faq.a}</p>
                  {i === 0 && (
                    <Offer service="moveout">
                      <p className="mt-2 font-semibold" style={{ color: "#E8622A" }}>
                        Right now, code {MOVEOUT_OFFER.code} takes ${MOVEOUT_OFFER.discount} off through {MOVEOUT_OFFER.endDate}.
                      </p>
                    </Offer>
                  )}
                  {faq.q === "What areas do you serve?" && (
                    <p className="mt-2">
                      <Link href="/service-areas" className="text-brand-green font-semibold hover:underline">See all service areas →</Link>
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Helpful guides:{" "}
            <Link href="/blog/move-out-cleaning-vs-deep-cleaning" className="text-brand-green font-semibold hover:underline">move-out cleaning vs. deep cleaning</Link>,{" "}
            <Link href="/blog/how-much-does-move-out-cleaning-cost-bolingbrook-il" className="text-brand-green font-semibold hover:underline">what move-out cleaning costs in Bolingbrook</Link>, and{" "}
            <Link href="/cleaning-checklist" className="text-brand-green font-semibold hover:underline">our full cleaning checklist</Link>.
          </p>
        </div>
      </section>

      {/* 13. FINAL CTA + FORM, service preselected to the exact SERVICE_OPTIONS label. */}
      <section id="quote-form" style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }} className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Get a Free Move-Out Cleaning Quote</h2>
          <p className="opacity-90">
            Selling, buying or renting, tell us about the house and we&apos;ll get back to you fast.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1"><span style={{ color: "#E8622A" }} className="text-2xl">★★★★★</span></div>
            <p className="text-sm text-gray-500">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</p>
          </div>
          <LeadForm defaultService="Move-In / Move-Out Cleaning" />
        </div>
      </section>

      {/* 14. NEARBY CITIES: the 16 move-out city pages. */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Move-Out Cleaning by City</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map(([name, slug]) => (
              <Link
                key={slug}
                href={`/move-out-cleaning-${slug}-il`}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition"
              >
                {name} IL
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyMobileBar bookHref="#quote-form" />
    </>
  );
}
