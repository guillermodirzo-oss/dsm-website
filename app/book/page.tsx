import type { Metadata } from "next";
import { REVIEW_COUNT, pickReviews } from "@/lib/realReviews";
import {
  DEEP_CLEANING_TIERS,
  formatPrice,
  priceForHome,
  recurringVisitPrice,
  startingPrice,
  type HomeSize,
} from "@/lib/pricing";
import Image from "next/image";
import StickyBookBar from "@/components/StickyBookBar";
import { GOOGLE_PROFILE_URL } from "@/lib/siteConstants";

// No promotions on /book (owner decision, Nov 3 2026: coupons are being
// retired and the holiday offer isn't decided). A "Claim $75 Off" button that
// applied nothing was the top dead click on this page. If an offer comes back,
// put it in the BookingKoala form itself first, then decide what this page says.

// Matches the booking widget's default (1 bed / 1 bath / 1,000-1,499 sq ft),
// the lowest total a customer can see there.
const ENTRY_PRICE = startingPrice(DEEP_CLEANING_TIERS);

const SERVICE_AREA_LINE =
  "Serving Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Westmont, Lockport, Lemont, Homer Glen, Shorewood & nearby suburbs";

const SOCIAL_TITLE = "Book a Cleaning Online | DSM Cleaning Solutions";
const SOCIAL_DESCRIPTION =
  "Book deep, recurring or move-out cleaning online in Romeoville, Plainfield, Naperville, Bolingbrook and the southwest suburbs. 5-star rated. Book in 2 minutes.";

export const metadata: Metadata = {
  title: "Book a Cleaning Online",
  description:
    "Book your house cleaning with DSM Cleaning Solutions online. See real dates and your exact price. Family-owned, insured and bonded.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/book" },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: "https://www.dsmcleaningsolutions.com/book",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Book a house cleaning online with DSM Cleaning Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: ["/hero-image.png"],
  },
};

const PHONE = "(815) 246-2113";
const PHONE_HREF = "tel:+18152462113";
const SMS_HREF = "sms:+18152462113";
const ORANGE = "#E8721C";
const NAVY = "#1B2B5E";

/**
 * Every button on this page goes here: the line right above the BookingKoala
 * form. Landing on the section heading used to leave the form below the
 * bottom of a phone screen, so people tapped again and nothing happened.
 */
const FORM_ANCHOR = "book-now";
const CTA_LABEL = "See My Price & Book →";

/**
 * Typical prices by home size, worked out from BookingKoala's rate formula in
 * lib/pricing.ts so this table can never disagree with the form. `sqft` only
 * picks the bracket.
 */
const PRICE_HOMES: { label: string; sqft: string; home: HomeSize }[] = [
  { label: "2 bed, 1 bath", sqft: "1,000 to 1,499 sq ft", home: { beds: 2, baths: 1, sqft: 1000 } },
  { label: "3 bed, 2 bath", sqft: "1,500 to 1,999 sq ft", home: { beds: 3, baths: 2, sqft: 1500 } },
  { label: "4 bed, 2.5 bath", sqft: "2,000 to 2,499 sq ft", home: { beds: 4, baths: 2.5, sqft: 2000 } },
];
const PRICE_ROWS = PRICE_HOMES.map((h) => ({
  ...h,
  standard: formatPrice(priceForHome("standard", h.home)),
  deep: formatPrice(priceForHome("deep", h.home)),
  moveout: formatPrice(priceForHome("moveout", h.home)),
}));
const BIWEEKLY_3BED = formatPrice(recurringVisitPrice(PRICE_HOMES[1].home, "biweekly"));

const valueStack = [
  { item: "Full Deep Cleaning of Your Entire Home", value: `${formatPrice(ENTRY_PRICE)}+` },
  { item: "Every Baseboard Scrubbed by Hand", value: "Included" },
  { item: "Grout & Tile Detail in Every Bathroom", value: "Included" },
  // Only what the deep cleaning checklist lists for the kitchen. The old line,
  // "Inside and Out", read as if it covered inside the oven and the cabinets.
  { item: "Kitchen Counters, Cabinet Fronts & Inside Microwave", value: "Included" },
  { item: "Window Sills, Door Frames, Vents & Light Switches", value: "Included" },
  { item: "Toilets, Tubs, Sinks & Bathroom Floors Sanitized", value: "Included" },
  { item: "All Cleaning Supplies & Equipment", value: "Included" },
  { item: "Trained, Background-Checked Cleaners", value: "Included" },
  { item: "48-Hour Re-Clean Guarantee", value: "Included" },
];

function StackRow({ row, i }: { row: { item: string; value: string }; i: number }) {
  return (
    <div
      className="flex items-center justify-between gap-4 px-5 py-4 text-sm"
      style={{
        backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
        borderTop: i > 0 ? "1px solid rgba(147,175,212,0.12)" : undefined,
      }}
    >
      <span className="flex items-start gap-3 font-medium" style={{ color: "#e2ecf8" }}>
        <span className="flex-shrink-0 mt-0.5">✅</span>
        {row.item}
      </span>
      <span
        className="font-bold text-xs whitespace-nowrap flex-shrink-0 px-2.5 py-1 rounded-lg"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#93afd4" }}
      >
        {row.value}
      </span>
    </div>
  );
}

/** The one button style used everywhere on this page. Every one goes to the form. */
function BookButton({ size = "lg", label = CTA_LABEL }: { size?: "lg" | "xl"; label?: string }) {
  return (
    <a
      href={`#${FORM_ANCHOR}`}
      className={`inline-block text-white font-extrabold rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 ${
        size === "xl" ? "text-xl px-10 py-5 shadow-2xl" : "text-lg px-10 py-4"
      }`}
      style={{ backgroundColor: ORANGE, boxShadow: "0 12px 34px rgba(232,114,28,0.38)" }}
    >
      {label}
    </a>
  );
}

const reviews = pickReviews(4, 0);

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "Nope. Many of our clients leave a key or code and come home to a spotless house. Our cleaners are background-checked, and we're insured and bonded. Your home is safe.",
  },
  {
    q: "Is the price in the form my real price?",
    a: "Yes. The form works out your price from your home's bedrooms, bathrooms and square footage, plus any extras you pick. You see the total before you confirm, there's no deposit, and you pay on cleaning day.",
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "Contact us within 48 hours and we will come back and re-clean any missed areas at absolutely no cost. No hassle, no arguments, no excuses.",
  },
  {
    q: "What if I need to change my day?",
    a: "No fee to cancel, skip or reschedule. Just let us know as early as you can so we can adjust the schedule.",
  },
  {
    q: "Are your products safe for my kids and pets?",
    a: "Yes, as an option. If you'd like eco-friendly, non-toxic products for your clean, just add them when you book. You'll see the price before you confirm.",
  },
  {
    q: "Do you serve my area?",
    a: "We cover Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Westmont, Lockport, Lemont, Homer Glen, New Lenox, Shorewood, Minooka and the surrounding southwest suburbs. Enter your ZIP in the form below and you'll see real available dates instantly. If we don't cover you, it'll tell you right away.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* ════════════ SECTION 1: HERO ════════════ */}
      <section id="book-hero" className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Book Your Cleaning{" "}<br />
            <span style={{ color: ORANGE }}>With a Local Family Team</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold mb-3" style={{ color: NAVY }}>
            See your exact price in about 60 seconds. No deposit, free to reschedule.
          </p>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Family-owned · Insured &amp; bonded · Background-checked team · {SERVICE_AREA_LINE}
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm font-semibold text-gray-600 mb-10">
            <span>⭐ 5.0 Stars · {REVIEW_COUNT} Reviews</span>
            <span>✅ 48-Hour Guarantee</span>
            <span>🔒 Insured &amp; Bonded</span>
            <span>👨‍👩‍👧 Family Owned</span>
          </div>

          <div className="mb-4">
            <BookButton size="xl" />
          </div>
          <p className="text-gray-400 text-sm">No deposit · Pay on cleaning day · 48-hour guarantee</p>
        </div>
      </section>

      {/* ════════════ PHOTO STRIP: below hero ════════════ */}
      <section className="bg-white pb-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <figure>
            <div className="relative h-52 rounded-lg overflow-hidden">
              <Image
                src="/work-photos/oven-interior-deep-cleaning.jpg"
                alt="Oven interior cleaned to bare enamel by DSM Cleaning Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-500">Oven interior (add-on)</figcaption>
          </figure>
          <figure>
            <div className="relative h-52 rounded-lg overflow-hidden">
              <Image
                src="/work-photos/marble-bathroom-deep-cleaning.jpg"
                alt="Master bath with marble tile, tub and vanity cleaned during a DSM deep clean"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-500">Master bath</figcaption>
          </figure>
          <figure>
            <div className="relative h-52 rounded-lg overflow-hidden">
              <Image
                src="/work-photos/hero-kitchen-home.jpg"
                alt="Kitchen with clean quartz island, stainless appliances and backsplash after a DSM deep clean"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-500">Kitchen</figcaption>
          </figure>
        </div>
      </section>

      {/* ════════════ SECTION 2: WHAT A DEEP CLEAN INCLUDES ════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: "#93afd4" }}>
              What&apos;s Included
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Here&apos;s Everything You Get
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#c7d9ef" }}>
              Everything included with every deep clean.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(147,175,212,0.2)" }}>
            {valueStack.map((row, i) => (
              <StackRow key={row.item} row={row} i={i} />
            ))}
            <div className="px-5 py-5 flex items-center justify-between border-t" style={{ borderColor: "rgba(232,114,28,0.3)", backgroundColor: "rgba(232,114,28,0.08)" }}>
              <p className="font-extrabold text-white text-lg">Deep Cleaning</p>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#93afd4" }}>Starting at</p>
                <p className="font-extrabold text-2xl" style={{ color: ORANGE }}>{formatPrice(ENTRY_PRICE)}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <BookButton />
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 3: HOW IT WORKS ════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: ORANGE }}>Simple Process</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              From Booking to Spotless in 3 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Book Below in 2 Minutes",
                desc: "Fill out the quick form and pick your date. That's it. No phone tag, no waiting.",
              },
              {
                step: "2",
                title: "We Show Up & Get to Work",
                desc: "Our vetted, insured team shows up on time and cleans every room, every surface.",
              },
              {
                step: "3",
                title: "Walk Into a Home You Love",
                desc: "Come home to a spotless house. If anything isn't right, we come back within 48 hours at no charge.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl mb-4 flex-shrink-0"
                  style={{ backgroundColor: ORANGE }}
                >
                  {s.step}
                </div>
                <p className="font-bold text-gray-900 mb-2">{s.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 4: GUARANTEE ════════════ */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            style={{ backgroundColor: ORANGE, boxShadow: "0 10px 30px rgba(232,114,28,0.35)" }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight">
            Our Promise: Zero Risk to You
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            If we miss anything, contact us within{" "}
            <span className="text-white font-bold">48 hours</span> and we&apos;ll come back and make it right.{" "}
            <span className="font-bold" style={{ color: ORANGE }}>No charge.</span>
          </p>
          <p className="text-gray-500 text-base mb-10">
            No hassle. No arguments. No excuses. We fix it free.
          </p>
          <BookButton label="Book Risk-Free →" />
        </div>
      </section>

      {/* ════════════ SECTION 5: REVIEWS ════════════ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: ORANGE }}>Real Reviews</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Your Neighbors Already Love Us
            </h2>
            <p className="text-gray-500 text-sm">{REVIEW_COUNT} five-star reviews · {SERVICE_AREA_LINE}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-3">
                <div className="text-yellow-400 text-base tracking-wide">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Work photo near reviews: a person in frame, 4:3 so nothing crops. */}
          <div className="relative mx-auto max-w-md aspect-[4/3] rounded-2xl overflow-hidden mb-8">
            <Image
              src="/work-photos/team-member-vacuuming.jpg"
              alt="DSM team member with a backpack vacuum cleaning floors during a deep clean"
              fill
              className="object-cover"
              sizes="(max-width: 448px) 100vw, 448px"
              loading="lazy"
            />
          </div>

          <div className="text-center">
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline"
              style={{ color: ORANGE }}
            >
              Read all {REVIEW_COUNT} reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 6: FAQ ════════════ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: ORANGE }}>Got Questions?</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Everything You&apos;re Wondering, Answered
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 7: PRICES + BOOKING FORM ════════════ */}
      <section id="booking-form" className="py-16 px-4" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-4xl mx-auto">

          {/* Form header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              See Your Price and Pick Your Day
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span style={{ color: ORANGE, fontSize: "1.1rem", letterSpacing: "0.05em" }}>★★★★★</span>
              <span className="font-bold text-gray-900">5.0 · {REVIEW_COUNT} Google Reviews</span>
            </div>
          </div>

          {/* Typical prices, so the total in the form isn't a surprise */}
          <div className="max-w-2xl mx-auto mb-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-center font-bold text-gray-900">Typical prices by home size</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-xs uppercase tracking-wide">
                  <th scope="col" className="text-left font-semibold px-4 py-2">Home</th>
                  <th scope="col" className="text-right font-semibold px-2 py-2">Standard</th>
                  <th scope="col" className="text-right font-semibold px-2 py-2">Deep</th>
                  <th scope="col" className="text-right font-semibold px-4 py-2 whitespace-nowrap">Move-out</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((r) => (
                  <tr key={r.label} className="border-t border-gray-100">
                    <th scope="row" className="text-left font-semibold text-gray-900 px-4 py-3">
                      {r.label}
                      <span className="block text-xs font-normal text-gray-500">{r.sqft}</span>
                    </th>
                    <td className="text-right px-2 py-3 text-gray-800">{r.standard}</td>
                    <td className="text-right px-2 py-3 text-gray-800">{r.deep}</td>
                    <td className="text-right px-4 py-3 text-gray-800">{r.moveout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-3 text-xs text-gray-500 border-t border-gray-100 text-center">
              Same rates as the form below. Extras like inside the oven are added only if you pick them. On a recurring plan, a 3 bed, 2 bath home is {BIWEEKLY_3BED} every two weeks.
            </p>
          </div>

          {/* Every button on the page lands here, so the form's first field is on screen. */}
          <div id={FORM_ANCHOR} className="scroll-mt-20 text-center mb-3 space-y-1 text-sm">
            <p className="text-gray-700">
              Enter your ZIP code first. The calendar won&apos;t show dates until you do.
            </p>
            <p className="text-gray-600">
              Prefer to text?{" "}
              <a href={SMS_HREF} className="font-bold underline underline-offset-2" style={{ color: ORANGE }}>
                {PHONE}
              </a>
            </p>
          </div>

          {/* BookingKoala embed, with a skeleton shown while the iframe loads */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white relative">
            {/* Loading skeleton, visible until the iframe paints */}
            <div
              id="bk-skeleton"
              className="absolute inset-0 bg-white z-10 pointer-events-none"
              style={{ minHeight: "1800px" }}
            >
              <div className="p-6 space-y-4 animate-pulse">
                <div className="h-6 bg-gray-100 rounded-full w-1/2 mx-auto" />
                <div className="h-4 bg-gray-100 rounded-full w-3/4 mx-auto" />
                <div className="h-4 bg-gray-100 rounded-full w-2/3 mx-auto" />
                <div className="h-10 bg-gray-100 rounded-xl w-full mt-4" />
                <div className="h-10 bg-gray-100 rounded-xl w-full" />
                <div className="h-10 bg-gray-100 rounded-xl w-full" />
                <div className="h-10 bg-gray-100 rounded-xl w-3/4" />
                <div className="h-12 bg-orange-100 rounded-xl w-full mt-6" />
                <p className="text-center text-sm text-gray-400 pt-2">Loading booking form…</p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe
                  src="https://dsmcleaningsolutions.bookingkoala.com/booknow?embed=true"
                  style="border:none;height:1800px;display:block"
                  width="100%"
                  scrolling="auto"
                  loading="lazy"
                  onload="var s=document.getElementById('bk-skeleton');if(s)s.style.display='none';"
                ></iframe>`,
              }}
            />
          </div>

          {/* Below-form trust row */}
          <div className="flex flex-wrap justify-center gap-4 mt-7 text-sm text-gray-500 font-medium">
            <span>🔒 Your info is secure. No spam.</span>
            <span>✅ 48-Hour Guarantee</span>
            <span>🔍 Background-Checked Team</span>
            <span>🛡️ Insured &amp; Bonded</span>
            <span>👨‍👩‍👧 Family Owned</span>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">{SERVICE_AREA_LINE}</p>

          {/* Phone CTA */}
          <div className="text-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-3 font-medium">Prefer to talk to a real person?</p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
            >
              📞 {PHONE}
            </a>
            <p className="text-gray-400 text-sm mt-2">Mon to Sun · 7am to 9pm</p>
          </div>
        </div>
      </section>

      {/* ════════════ STICKY MOBILE BAR ════════════
          Shows once the hero is scrolled past and hides while the form is on
          screen, so it can never be a button that does nothing. */}
      <StickyBookBar
        bookHref={`#${FORM_ANCHOR}`}
        bookLabel="See My Price & Book"
        heroId="book-hero"
        hideWhenVisible={["#booking-form iframe", "footer"]}
      />
    </>
  );
}
