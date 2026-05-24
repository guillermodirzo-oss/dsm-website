import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import StickyBar from "./StickyBar";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    absolute:
      "Deep Cleaning Special — $75 Off + Free Oven Clean | DSM Cleaning Solutions",
  },
  description:
    "Does your home actually need a deep clean? Most do. Save $75 + get your oven cleaned free with DSM Cleaning Solutions. Serving Romeoville, Plainfield, Bolingbrook, Crest Hill, Shorewood & Lockport.",
  robots: { index: false, follow: false },
};

// ─── Static data ─────────────────────────────────────────────────────────────
const trustBullets = [
  { icon: "★", text: "5.0 Stars — 38 Google Reviews · 100+ Total" },
  { icon: "🏠", text: "Family-owned & based in Romeoville" },
  { icon: "✅", text: "48-Hour Satisfaction Guarantee" },
  {
    icon: "📍",
    text: "Romeoville · Plainfield · Bolingbrook · Crest Hill · Shorewood · Lockport",
  },
];

const problemCards = [
  {
    icon: "🍳",
    title: "Kitchen Grease Buildup",
    desc: "Cabinet tops, oven interior, refrigerator coils, and hood filters collect grease all year. Regular cleaning skips them every time.",
  },
  {
    icon: "🤧",
    title: "Hidden Allergens",
    desc: "Baseboards, window tracks, ceiling fans, and under furniture collect dust, pet dander, and mold that weekly visits don't reach.",
  },
  {
    icon: "🚿",
    title: "Bathroom Mineral Deposits",
    desc: "Hard water stains behind faucets, around drains, and on shower glass need the right products and technique — not just a wipe-down.",
  },
];

const regularItems: { text: string; included: boolean }[] = [
  { text: "Wipe counters", included: true },
  { text: "Vacuum floors", included: true },
  { text: "Clean bathroom surfaces", included: true },
  { text: "Mop hard floors", included: true },
  { text: "Inside oven (skipped)", included: false },
  { text: "Baseboards hand-scrubbed", included: false },
  { text: "Inside refrigerator", included: false },
  { text: "Window tracks", included: false },
  { text: "Behind appliances", included: false },
  { text: "Light fixtures & fans", included: false },
  { text: "Cabinet interiors", included: false },
];

const deepCleanItems = [
  "Everything in regular cleaning",
  "Inside oven — FREE with this offer",
  "Baseboards hand-scrubbed",
  "Cabinet faces",
  "Grout scrubbing",
  "Light fixtures & ceiling fans",
  "Window sills & ledges",
];

const workPhotos = [
  {
    src: "/Work%20Pictures/shower-deep-clean-romeoville-il.jpg",
    alt: "Deep cleaned glass shower — Romeoville IL",
    caption: "Shower deep clean — Romeoville",
  },
  {
    src: "/Work%20Pictures/double-vanity-bathroom-clean-naperville-il.jpg",
    alt: "Double vanity bathroom after deep cleaning — Naperville IL",
    caption: "Master bath — Naperville",
  },
  {
    src: "/Work%20Pictures/double-sink-bathroom-deep-clean-plainfield-il.jpg",
    alt: "Double sink bathroom after deep cleaning — Plainfield IL",
    caption: "Full bathroom — Plainfield",
  },
  {
    src: "/Work%20Pictures/living-room-hardwood-floors-plainfield-il.jpg",
    alt: "Gleaming hardwood floors after professional cleaning — Plainfield IL",
    caption: "Hardwood floors — Plainfield",
  },
  {
    src: "/Work%20Pictures/master-bedroom-airbnb-cleaning-bolingbrook-il.jpg",
    alt: "Clean master bedroom — Bolingbrook IL",
    caption: "Master bedroom — Bolingbrook",
  },
  {
    src: "/Work%20Pictures/bathtub-shower-deep-clean-plainfield-il.jpg",
    alt: "Full bathroom deep clean with tub and shower — Plainfield IL",
    caption: "Bathroom deep clean — Plainfield",
  },
];

const reviews = [
  {
    name: "Jan Forster",
    text: "Very happy with my cleaning! My house has been neglected due to a few surgeries and I was thrilled to have a sparkling house again! Will definitely use them again! Very friendly as well!",
  },
  {
    name: "Michelle Gillespie",
    text: "Guillermo and Rocio did a wonderful job. I was at work while they cleaned but my kids were home and said they were courteous, efficient, friendly, and went above and beyond. I highly recommend them.",
  },
  {
    name: "Rachel LaPapa",
    text: "DSM Cleaning Solutions did an incredible job deep cleaning my new home before moving in. Their attention to detail was exceptional.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function DeepCleanOfferPage() {
  return (
    <>
      {/* ── Minimal header — logo text only, no link ── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3.5 flex items-center justify-center">
        <span className="font-bold text-gray-900 text-lg tracking-tight">
          DSM Cleaning Solutions
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — Hero (above the fold)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-gray-900 to-slate-800 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left column — headline + trust bullets */}
            <div className="text-white">
              {/* Pill tag */}
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                ⚡ Limited Spots — June 2026
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Does Your Home Actually Need a Deep Clean?
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Most homes do — especially after winter. Here&apos;s how to
                know, and how to{" "}
                <a
                  href="#quote-form-top"
                  className="text-amber-400 font-semibold hover:text-amber-300 underline underline-offset-2"
                >
                  save $75 when you book
                </a>
                .
              </p>

              {/* Trust bullets — desktop only (shown in left col) */}
              <ul className="hidden lg:flex flex-col gap-3">
                {trustBullets.map((b) => (
                  <li
                    key={b.text}
                    className="flex items-start gap-2.5 text-sm text-gray-300"
                  >
                    <span className="flex-shrink-0 mt-0.5">{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — form card */}
            <div
              id="quote-form-top"
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8"
            >
              <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Claim Your{" "}
                  <a
                    href="#quote-form-top"
                    className="text-orange-600 hover:underline"
                  >
                    $75 Discount
                  </a>
                </h2>
                <p className="text-sm text-gray-500">
                  $75 OFF + Free Oven Clean — Limited spots available
                </p>
              </div>
              <LeadForm />
            </div>
          </div>

          {/* Trust bullets — mobile only (below form card) */}
          <ul className="flex lg:hidden flex-col gap-3 mt-8">
            {trustBullets.map((b) => (
              <li
                key={b.text}
                className="flex items-start gap-2.5 text-sm text-gray-300"
              >
                <span className="flex-shrink-0 mt-0.5">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — Reveal The Problem
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Regular Cleaning Misses More Than You Think
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              If your home hasn&apos;t had a deep clean in 6+ months — or ever
              — here&apos;s what&apos;s building up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {problemCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Sound familiar? That&apos;s what a deep clean fixes. And right
              now, you can get one for{" "}
              <strong>$75 less + a free oven clean</strong>.
            </p>
            <a
              href="#quote-form-bottom"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-3.5 px-8 text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E8721C",
                boxShadow: "0 4px 15px rgba(232,114,28,0.35)",
              }}
            >
              Claim Your{" "}
              <span className="mx-1 underline underline-offset-2">$75 Off</span>{" "}
              →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — Deep Clean vs Regular Clean Comparison
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What&apos;s Actually Included in a Deep Clean
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Regular Cleaning */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-base">
                  Regular Cleaning
                </h3>
              </div>
              <ul className="px-6 py-5 space-y-3">
                {regularItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm">
                    <span
                      className={`flex-shrink-0 font-bold text-sm mt-0.5 ${
                        item.included ? "text-gray-400" : "text-red-400"
                      }`}
                    >
                      {item.included ? "✓" : "✗"}
                    </span>
                    <span
                      className={
                        item.included ? "text-gray-600" : "text-gray-400"
                      }
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DSM Deep Clean */}
            <div className="bg-white rounded-2xl border-2 border-brand-green overflow-hidden">
              <div className="bg-brand-green px-6 py-4">
                <h3 className="font-bold text-white text-base">
                  DSM Deep Clean ⭐
                </h3>
              </div>
              <ul className="px-6 py-5 space-y-3">
                {deepCleanItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 font-bold text-green-600 text-sm mt-0.5">
                      ✓
                    </span>
                    <span
                      className={`font-medium ${
                        item.includes("FREE")
                          ? "text-orange-600 font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#quote-form-bottom"
              className="text-orange-600 font-semibold hover:underline text-sm"
            >
              Ready? Claim your{" "}
              <span className="underline underline-offset-2">$75 off</span> →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — Social Proof
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What Homeowners in Your Area Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 text-sm">
                    {r.name}
                  </span>
                  <span className="text-xs text-gray-400 bg-white border border-gray-200 rounded-full px-2.5 py-0.5 flex-shrink-0">
                    Google Review
                  </span>
                </div>
                <div className="text-amber-400 tracking-widest text-sm">
                  ★★★★★
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400">
            5.0 stars · 38 Google Reviews · 100+ reviews across Google, Yelp,
            and other platforms
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — Real Work Photos
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Real Results from Real Homes in Your Area
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every photo below is from an actual DSM Cleaning Solutions job —
              no stock photos, no filters.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {workPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-3 py-3">
                  <p className="text-white text-xs font-semibold">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#quote-form-bottom"
              className="inline-flex items-center justify-center font-bold text-white rounded-full py-3.5 px-8 text-base transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E8721C",
                boxShadow: "0 4px 15px rgba(232,114,28,0.35)",
              }}
            >
              Get This Level of Clean — Claim Your{" "}
              <span className="mx-1 underline underline-offset-2">$75 Off</span>{" "}
              →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — Scarcity + Second Form
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Limit Deep Clean Bookings to Keep Quality High
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We personally handle every job and can only take on a limited
              number of deep cleans per week across Romeoville, Plainfield,
              Bolingbrook, Crest Hill, Shorewood, and Lockport. Spots for June
              are going fast.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div
              id="quote-form-bottom"
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Lock In Your{" "}
                <a
                  href="#quote-form-bottom"
                  className="text-orange-600 hover:underline"
                >
                  $75 Discount
                </a>{" "}
                Before Spots Fill Up
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                $75 OFF + Free Oven Cleaning · 48-Hour Guarantee · Family-Owned
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — Guarantee
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-5">🛡️</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our 48-Hour Satisfaction Promise
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            If we miss anything during your deep clean, call us within 48 hours
            and we&apos;ll come back and make it right — completely free. No
            questions asked. That&apos;s the DSM guarantee.
          </p>
          <p className="text-sm text-gray-400">
            Proudly serving Romeoville, Plainfield, Bolingbrook, Crest Hill,
            Shorewood, and Lockport, IL
          </p>
        </div>
      </section>

      {/* ── Simple footer — no nav links ── */}
      <div className="bg-gray-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <span className="font-semibold text-white">
            DSM Cleaning Solutions
          </span>
          <span className="text-center">
            © 2026 DSM Cleaning Solutions · Romeoville, IL · Family-Owned
          </span>
          <a
            href="tel:+18152462113"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            (815) 246-2113
          </a>
        </div>
      </div>

      {/* Sticky mobile CTA bar */}
      <StickyBar />
    </>
  );
}
