import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Book a Cleaning | $75 Off",
  description:
    "Book your house cleaning with DSM Cleaning Solutions. Get $75 off plus free oven cleaning this summer. Family-owned, eco-friendly, and fully insured.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/book" },
  openGraph: {
    title: "Book a Cleaning — $75 Off + Free Oven Cleaning | DSM Cleaning Solutions",
    description:
      "Limited summer offer: $75 off your deep cleaning + free oven cleaning in Romeoville, Plainfield, Bolingbrook & surrounding suburbs. 5-star rated. Book in 2 minutes.",
    url: "https://www.dsmcleaningsolutions.com/book",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions — Book a House Cleaning Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Cleaning — $75 Off + Free Oven Cleaning | DSM Cleaning Solutions",
    description:
      "Limited summer offer: $75 off your deep cleaning + free oven cleaning in Romeoville, Plainfield & surrounding suburbs.",
    images: ["/hero-image.png"],
  },
};

const PHONE = "(815) 246-2113";
const PHONE_HREF = "tel:+18152462113";
const COUPON = "SUMMER75";
const ORANGE = "#E8721C";
const NAVY = "#1B2B5E";

const valueStack = [
  { item: "Full Deep Cleaning of Your Entire Home", value: "$300+" },
  { item: "Every Baseboard Scrubbed by Hand", value: "Included" },
  { item: "Grout & Tile Detail in Every Bathroom", value: "Included" },
  { item: "Kitchen Deep Clean: Inside and Out", value: "Included" },
  { item: "Window Sills, Door Frames, Vents & Light Switches", value: "Included" },
  { item: "Bathrooms Sanitized Top to Bottom", value: "Included" },
  { item: "Eco-Friendly Products (Safe for Kids & Pets)", value: "Included" },
  { item: "Trained, Background-Checked Cleaners", value: "Included" },
  { item: "48-Hour Re-Clean Guarantee", value: "Included" },
  { item: "FREE Oven Deep Clean, Summer Bonus", value: "$40 value" },
  { item: "Summer Discount Code: SUMMER75", value: "− $75 off" },
];

const reviews = [
  {
    name: "Julie Gaubatz",
    text: "I'm so glad DSM Cleaning Services was recommended to us by our realtor! They are fantastic, and their website makes arranging cleanings so easy. I highly recommend them -- I will be using them many more times!",
  },
  {
    name: "Bill Aros",
    text: "We are very happy with DSM Cleaning Solutions. They do an excellent job and would hire them again",
  },
  {
    name: "Julie G",
    text: "This service is consistently perfect! And, I love the website interface -- it makes everything easy and customizable.",
  },
  {
    name: "Jae Mac",
    text: "I highly recommend, customer since 2024 🍊🍊🍊",
  },
];

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "Nope. Many of our clients leave a key or code and come home to a spotless house. Our cleaners are background-checked and fully insured. Your home is safe.",
  },
  {
    q: "How do I apply the $75 discount?",
    a: `Use coupon code ${COUPON} at checkout in the booking form below. The discount will be applied to your first deep cleaning automatically.`,
  },
  {
    q: "Is the free oven cleaning really free?",
    a: "Yes, completely free through July. Our oven deep clean is normally a $40 add-on. Book before July 31 and it's included at no charge.",
  },
  {
    q: "What if I'm not happy with the clean?",
    a: "Contact us within 48 hours and we will come back and re-clean any missed areas at absolutely no cost. No hassle, no arguments, no excuses.",
  },
  {
    q: "How fast can you get me scheduled?",
    a: "We often have same-week availability in Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood, and Crest Hill. Book below and you'll see real available dates instantly.",
  },
  {
    q: "Are your products safe for my kids and pets?",
    a: "Always. We exclusively use eco-friendly, non-toxic products on every clean. Safe for the whole family.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* ════════════ STICKY TOP BAR ════════════ */}
      <div className="sticky top-0 z-50 text-white py-2.5 px-4 text-center text-sm font-semibold" style={{ backgroundColor: ORANGE }}>
        🔥 $75 Off + Free Oven Cleaning ($40 value) through July · Use Code&nbsp;
        <span className="bg-white font-black px-2 py-0.5 rounded tracking-widest" style={{ color: ORANGE }}>
          {COUPON}
        </span>
        &nbsp;·&nbsp;
        <a href={PHONE_HREF} className="underline underline-offset-2 hover:no-underline">
          {PHONE}
        </a>
      </div>

      {/* ════════════ SECTION 1 — HERO ════════════ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Urgency badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 border text-sm font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(232,114,28,0.08)", borderColor: "rgba(232,114,28,0.4)", color: ORANGE }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: ORANGE }} />
            Limited Time · Spots Filling Fast
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Get Your Home<br />
            <span style={{ color: ORANGE }}>Deep Cleaned for $75 Off</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold mb-3" style={{ color: NAVY }}>
            Plus free oven cleaning this summer. A $40 value, on us.
          </p>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Family-owned · Fully insured · Eco-friendly products · Serving Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood &amp; Crest Hill
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm font-semibold text-gray-600 mb-10">
            <span>⭐ 5.0 Stars · 42 Reviews</span>
            <span>✅ 48-Hour Guarantee</span>
            <span>🔒 Insured &amp; Bonded</span>
            <span>🌿 Eco-Friendly</span>
          </div>

          {/* Primary CTA */}
          <a
            href="#booking-form"
            className="inline-block text-white font-extrabold text-xl px-10 py-5 rounded-full shadow-2xl hover:opacity-90 active:scale-95 transition-all duration-200 mb-4"
            style={{ backgroundColor: ORANGE, boxShadow: "0 15px 40px rgba(232,114,28,0.35)" }}
          >
            Claim My $75 Off and Book Now →
          </a>
          <p className="text-gray-400 text-sm">No credit card required to get started · Instant confirmation</p>
        </div>
      </section>

      {/* ════════════ PHOTO STRIP — below hero, before offer ════════════ */}
      <section className="bg-white pb-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative h-52 rounded-lg overflow-hidden">
            <Image
              src="/Work%20Pictures/double-vanity-bathroom-clean-naperville-il.jpg"
              alt="Double vanity bathroom after professional deep cleaning in Naperville IL"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
          <div className="relative h-52 rounded-lg overflow-hidden">
            <Image
              src="/Work%20Pictures/bathtub-shower-deep-clean-plainfield-il.jpg"
              alt="Bathtub and shower scrubbed clean by DSM Cleaning Solutions in Plainfield IL"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
          <div className="relative h-52 rounded-lg overflow-hidden">
            <Image
              src="/Work%20Pictures/living-room-hardwood-floors-plainfield-il.jpg"
              alt="Living room with hardwood floors cleaned and polished in Plainfield IL"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 2 — OFFER / VALUE STACK ════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: "#93afd4" }}>Summer Offer</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Here&apos;s Everything You Get
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#c7d9ef" }}>
              Everything included with your first clean this summer.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(147,175,212,0.2)" }}>
            {valueStack.map((row, i) => {
              const isBonus = row.item.includes("FREE Oven") || row.item.includes("SUMMER75");
              return (
                <div
                  key={row.item}
                  className="flex items-center justify-between gap-4 px-5 py-4 text-sm"
                  style={{
                    backgroundColor: isBonus
                      ? "rgba(232,114,28,0.12)"
                      : i % 2 === 0
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.08)",
                    borderTop: i > 0 ? "1px solid rgba(147,175,212,0.12)" : undefined,
                  }}
                >
                  <span className="flex items-start gap-3 font-medium" style={{ color: isBonus ? "#fbb97c" : "#e2ecf8" }}>
                    <span className="flex-shrink-0 mt-0.5">{isBonus ? "🎁" : "✅"}</span>
                    {row.item}
                  </span>
                  <span
                    className="font-bold text-xs whitespace-nowrap flex-shrink-0 px-2.5 py-1 rounded-lg"
                    style={{
                      backgroundColor: isBonus ? "rgba(232,114,28,0.2)" : "rgba(255,255,255,0.08)",
                      color: isBonus ? "#fbb97c" : "#93afd4",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              );
            })}

            {/* Total */}
            <div className="px-5 py-5 flex items-center justify-between border-t" style={{ borderColor: "rgba(232,114,28,0.3)", backgroundColor: "rgba(232,114,28,0.08)" }}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#93afd4" }}>Your Total Value</p>
                <p className="font-extrabold text-white text-lg">$115+ in savings this summer</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#93afd4" }}>You Pay From</p>
                <p className="font-extrabold text-2xl" style={{ color: ORANGE }}>$225</p>
              </div>
            </div>
          </div>

          {/* Coupon */}
          <div className="mt-6 flex items-center justify-between rounded-xl px-5 py-4 border" style={{ backgroundColor: "rgba(232,114,28,0.1)", borderColor: "rgba(232,114,28,0.3)" }}>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#93afd4" }}>Your Coupon Code</p>
              <p className="font-black text-2xl tracking-widest" style={{ color: ORANGE }}>{COUPON}</p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg border" style={{ backgroundColor: "rgba(232,114,28,0.15)", borderColor: "rgba(232,114,28,0.35)", color: "#fbb97c" }}>
              Apply at checkout below
            </span>
          </div>

          <div className="text-center mt-8">
            <a
              href="#booking-form"
              className="inline-block text-white font-extrabold text-lg px-10 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200"
              style={{ backgroundColor: ORANGE, boxShadow: "0 10px 30px rgba(232,114,28,0.4)" }}
            >
              Lock In My Spot Now →
            </a>
            <p className="text-xs mt-3" style={{ color: "#93afd4" }}>Offer expires July 31. Spots are limited.</p>
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 3 — HOW IT WORKS ════════════ */}
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
                desc: "Fill out the quick form, pick your date, apply code SUMMER75. That's it. No phone tag, no waiting.",
              },
              {
                step: "2",
                title: "We Show Up & Get to Work",
                desc: "Our vetted, insured team shows up on time and cleans every room, every surface. Your oven is included free.",
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

      {/* ════════════ SECTION 4 — GUARANTEE ════════════ */}
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
          <a
            href="#booking-form"
            className="inline-block text-white font-extrabold text-lg px-10 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200"
            style={{ backgroundColor: ORANGE, boxShadow: "0 10px 30px rgba(232,114,28,0.4)" }}
          >
            Book Risk-Free Now →
          </a>
        </div>
      </section>

      {/* ════════════ SECTION 5 — REVIEWS ════════════ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: ORANGE }}>Real Reviews</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Your Neighbors Already Love Us
            </h2>
            <p className="text-gray-500 text-sm">42 five-star reviews · Romeoville, Plainfield, Bolingbrook &amp; surrounding areas</p>
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

          {/* Work photo near reviews */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/Work%20Pictures/bedroom-cleaning-service-bolingbrook-il.jpg"
              alt="Bedroom cleaned and organized by DSM Cleaning Solutions in Bolingbrook IL"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              loading="lazy"
            />
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=DSM+Cleaning+Solutions+Romeoville+IL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline"
              style={{ color: ORANGE }}
            >
              Read all 42 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 6 — FAQ / OBJECTION CRUSHER ════════════ */}
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

      {/* ════════════ SECTION 7 — BOOKING FORM ════════════ */}
      <section id="booking-form" className="py-16 px-4" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-4xl mx-auto">

          {/* Pre-form urgency banner */}
          <div
            className="rounded-2xl p-5 mb-8 text-center border"
            style={{ backgroundColor: "rgba(232,114,28,0.07)", borderColor: "rgba(232,114,28,0.3)" }}
          >
            <p className="font-extrabold text-lg text-gray-900 mb-1">
              You&apos;re $75 away from a spotless home.
            </p>
            <p className="text-gray-600 text-sm">
              Apply code{" "}
              <span className="font-black tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: ORANGE, color: "#fff" }}>
                {COUPON}
              </span>{" "}
              at checkout · Free oven cleaning added automatically · Offer expires July 31
            </p>
          </div>

          {/* Form header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Book Your Cleaning. Takes Less Than 2 Minutes.
            </h2>
            <p className="text-gray-500 text-sm">
              Serving Romeoville, Plainfield, Bolingbrook, Lockport, Shorewood &amp; Crest Hill ·{" "}
              <a href={PHONE_HREF} className="font-semibold hover:underline" style={{ color: ORANGE }}>
                {PHONE}
              </a>
            </p>
          </div>

          {/* Star rating social proof above the embed */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-sm">
            <span style={{ color: ORANGE, fontSize: "1.1rem", letterSpacing: "0.05em" }}>★★★★★</span>
            <span className="font-bold text-gray-900">5.0 · 42 Google Reviews</span>
            <span className="text-gray-500">· Trusted by homeowners across the southwest suburbs</span>
          </div>

          {/* BookingKoala embed — skeleton shown while iframe loads */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white relative">
            {/* Loading skeleton — visible until iframe paints */}
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
            <span>🌿 Eco-Friendly Products</span>
            <span>🛡️ Fully Insured &amp; Bonded</span>
            <span>👨‍👩‍👧 Family Owned</span>
          </div>

          {/* Phone CTA */}
          <div className="text-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-3 font-medium">Prefer to talk to a real person?</p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
            >
              📞 {PHONE}
            </a>
            <p className="text-gray-400 text-sm mt-2">Mon–Sun · 8am–6pm</p>
          </div>
        </div>
      </section>

      {/* ════════════ STICKY MOBILE BAR ════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 flex items-stretch gap-3" style={{ minHeight: "60px" }}>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm flex-shrink-0 py-3"
          style={{ minHeight: "44px" }}
        >
          📞 {PHONE}
        </a>
        <a
          href="#booking-form"
          className="flex-1 text-white font-bold text-sm py-3 px-4 rounded-full text-center my-auto hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg"
          style={{ backgroundColor: ORANGE, minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          Claim $75 Off →
        </a>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </>
  );
}
