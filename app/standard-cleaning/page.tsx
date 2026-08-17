import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import { REVIEW_COUNT, REVIEW_RATING, pickReviews, reviewAttribution } from "@/lib/realReviews";
import { StickyMobileBar } from "@/components/HomepageScrollWidgets";
import {
  STANDARD_CLEANING_TIERS,
  STANDARD_FREQUENCIES,
  DISCOUNTED_FREQUENCIES,
  recurringPrice,
  formatDiscount,
  formatPrice,
  tierLabel,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "House Cleaning Service Romeoville IL",
  description: "Reliable weekly, bi-weekly & monthly house cleaning in Romeoville, Plainfield & Bolingbrook. Trusted local cleaners. 48-hour guarantee. Book today.",
  keywords: ["house cleaning Romeoville IL", "standard cleaning Romeoville", "home cleaning service Romeoville", "maid service Romeoville IL", "professional house cleaners Romeoville", "residential cleaning Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/standard-cleaning" },
  openGraph: {
    title: "Standard Cleaning Service Plainfield IL | DSM Cleaning Solutions",
    description: "Recurring house cleaning in Plainfield & Romeoville IL from $160. Vetted, insured cleaners. Weekly, bi-weekly, or monthly. 5-star rated. Free quote today.",
    url: "https://www.dsmcleaningsolutions.com/standard-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "DSM Cleaning Solutions, Standard House Cleaning in Plainfield IL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Cleaning Service Plainfield IL | DSM Cleaning Solutions",
    description: "Standard house cleaning in Plainfield & Romeoville, IL, one-time or recurring. Eco-friendly, fully insured. Family-owned.",
    images: ["/hero-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is included in a standard house cleaning?", acceptedAnswer: { "@type": "Answer", text: "Our standard cleaning covers all main living areas: vacuuming, mopping, bathroom cleaning and disinfecting, kitchen surface wipe-down, dusting, and trash removal. We can customize the checklist for your home." } },
    { "@type": "Question", name: "How often should I get a standard house cleaning?", acceptedAnswer: { "@type": "Answer", text: "Most families in Romeoville choose biweekly (every 2 weeks) service. Weekly is great for busy households or homes with pets. Monthly works well if you do light upkeep in between." } },
    { "@type": "Question", name: "How much does standard house cleaning cost in Romeoville?", acceptedAnswer: { "@type": "Answer", text: "Standard cleaning starts at $160 for a 2-bedroom home and varies by size, bathrooms, and frequency. Recurring clients save 10% to 20% off the one-time rate. Contact us for a free personalized estimate." } },
    { "@type": "Question", name: "Do I need to be home during the cleaning?", acceptedAnswer: { "@type": "Answer", text: "No, many clients provide a key or access code. Our fully insured and background-checked team will take excellent care of your home." } },
    { "@type": "Question", name: "Do you bring your own cleaning supplies?", acceptedAnswer: { "@type": "Answer", text: "Yes! We bring all eco-friendly, non-toxic cleaning products and equipment. You don't need to provide anything." } },
  ],
};

const checklist = [
  { room: "Kitchen", items: ["Wipe countertops & backsplash", "Clean stovetop surface", "Wipe exterior of appliances", "Clean sink & faucet", "Wipe cabinet fronts", "Empty trash & replace liner", "Sweep & mop floor"] },
  { room: "Bathrooms", items: ["Scrub & disinfect toilet", "Clean shower & tub", "Wipe sink & vanity", "Clean mirrors", "Wipe counters & fixtures", "Empty trash", "Sweep & mop floor"] },
  { room: "Bedrooms", items: ["Make beds / change linens (optional)", "Dust furniture & surfaces", "Vacuum carpets & rugs", "Wipe window sills", "Empty trash bins", "Tidy visible surfaces"] },
  { room: "Living Areas", items: ["Dust all surfaces & shelves", "Vacuum furniture & cushions", "Vacuum floors", "Mop hard floors", "Wipe light switches & handles", "Tidy & straighten items"] },
];

const faqs = [
  { question: "What is included in a standard house cleaning?", answer: "Our standard cleaning covers all main living areas: vacuuming, mopping, bathroom cleaning and disinfecting, kitchen surface wipe-down, dusting, and trash removal. We can customize the checklist for your home." },
  { question: "How often should I get a standard house cleaning?", answer: "Most families choose biweekly service. Weekly is great for busy households or homes with pets. Monthly works well if you do light upkeep in between." },
  { question: "How much does standard house cleaning cost in Romeoville?", answer: "Standard cleaning starts at $160 for a 2-bedroom home and varies by size, bathrooms, and frequency. Recurring clients save 10% to 20% off the one-time rate. Contact us for a free personalized estimate." },
  { question: "Do I need to be home during the cleaning?", answer: "No, many clients provide a key or access code. Our fully insured and background-checked team will take excellent care of your home." },
  { question: "Do you bring your own supplies?", answer: "Yes! We bring all eco-friendly, non-toxic cleaning products and equipment. You don't need to provide anything." },
];

// Worked example for the recurring block. Both the tier and the frequency are
// looked up from the data, so the sentence cannot drift from the rate card.
// Same pattern as app/pricing/page.tsx.
const RECURRING_EXAMPLE_TIER =
  STANDARD_CLEANING_TIERS.find((t) => t.beds === "3 bed") ?? STANDARD_CLEANING_TIERS[0];
const RECURRING_EXAMPLE_FREQUENCY =
  STANDARD_FREQUENCIES.find((f) => f.popular) ?? STANDARD_FREQUENCIES[1];

export default function StandardCleaningPage() {
  const recurringExample = {
    tier: RECURRING_EXAMPLE_TIER,
    frequency: RECURRING_EXAMPLE_FREQUENCY,
    price: recurringPrice(RECURRING_EXAMPLE_TIER.price, RECURRING_EXAMPLE_FREQUENCY),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Standard House Cleaning",
            name: "Standard House Cleaning Service",
            provider: {
              "@type": "LocalBusiness",
              "@id": "https://www.dsmcleaningsolutions.com/#business",
              name: "DSM Cleaning Solutions",
              telephone: "+18152462113",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Romeoville",
                addressRegion: "IL",
                postalCode: "60446",
                addressCountry: "US",
              },
            },
            areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
            description: "Professional standard house cleaning in Romeoville, IL. Recurring or one-time service tailored to your schedule. Eco-friendly, fully insured. Free estimate.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
              { "@type": "ListItem", position: 2, name: "Standard House Cleaning", item: "https://www.dsmcleaningsolutions.com/standard-cleaning" },
            ],
          }),
        }}
      />

      {/* HERO. Full-bleed background photo behind the text, same pattern as
          app/deep-cleaning/page.tsx and app/move-out-cleaning/page.tsx: fill
          plus a dark overlay. This is the only image on the page eager-loaded
          above the fold. Standard cleaning carries no coupon offer, so the
          sequence is H1, subheading, rating, CTAs, no offer block. */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/work-photos/kitchen-island-marble-long.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <nav className="text-sm mb-6 opacity-80 flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Standard House Cleaning</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Never Spend Another Saturday Cleaning.
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-5 opacity-95 max-w-2xl mx-auto">
            House cleaning weekly, every two weeks, monthly, or one time only. Romeoville, Plainfield, Naperville, Bolingbrook and the southwest suburbs.
          </p>

          {/* Rating. Counts come from lib/realReviews.ts, never hardcoded. */}
          <Link href="/reviews" className="inline-flex items-center justify-center gap-2 mb-6 hover:underline">
            <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
            <span className="text-sm opacity-90">{REVIEW_RATING} · {REVIEW_COUNT} Google Reviews</span>
          </Link>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#quote-form"
              style={{ backgroundColor: "#E8721C" }}
              className="text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+18152462113"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
            >
              Call (815) 246-2113
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            {["✅ Fully Insured & Bonded", "🌿 Eco-Friendly Products", "👨‍👩‍👧 Family Owned", "⭐ 5-Star Rated", "✔️ Satisfaction Guaranteed"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* WHAT IS IT. Simplified to a single column: the old sidebar hand-listed
          "Save up to 20%" style percentages that duplicated, and risked
          drifting from, the accurate STANDARD_FREQUENCIES-driven recurring
          block further down the page. */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Most Popular Service</p>
          <h2 className="section-heading">What Is Standard House Cleaning?</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">Standard house cleaning is our most popular service, a consistent clean of your entire home on whatever schedule works for you. Our trained team follows the same checklist every visit, so the result does not depend on who shows up.</p>
          <p className="text-gray-500 mb-6 leading-relaxed">Based right here in the southwest suburbs, not a national franchise. Memo answers his own phone. Call or text him directly.</p>
          <div className="grid grid-cols-2 gap-3 text-sm mb-8">
            {["One-time or recurring", "Customizable checklist", "All supplies included", "Background-checked team", "Eco-friendly products", "Satisfaction guaranteed"].map(item => (
              <div key={item} className="flex items-center gap-2 text-gray-700">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="#quote-form" className="btn-primary">Get a Free Estimate</a>
            <Link href="/book" className="btn-secondary">Book Now</Link>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Every Visit</p>
            <h2 className="section-heading">Standard Cleaning Checklist</h2>
            <p className="section-subheading mx-auto">Here&apos;s exactly what we cover on every standard cleaning visit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {checklist.map(section => (
              <div key={section.room} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-brand-green text-lg mb-4 pb-2 border-b border-orange-100">{section.room}</h3>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING. Full STANDARD_CLEANING_TIERS ladder, same card treatment as
          /deep-cleaning and /move-out-cleaning. Standard cleaning carries no
          coupon offer of its own, so every row is a plain starting price
          with no strike-through. */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Standard Cleaning Pricing
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Example Prices
            </p>
            <div className="space-y-3">
              {STANDARD_CLEANING_TIERS.map((tier) => {
                const label = tierLabel(tier);
                return (
                  <div key={label} className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-600 leading-tight">{label}</span>
                    <span className="text-lg font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
                      Starting at {formatPrice(tier.price)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Recurring frequency discounts, directly beneath the ladder.
                This never expires, unlike a seasonal coupon, and it is the
                highest lifetime-value decision a visitor makes on this page. */}
            <div className="mt-6 pt-5 border-t border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Book Recurring and Save
              </p>
              <div className="space-y-1.5">
                {DISCOUNTED_FREQUENCIES.map((freq) => (
                  <div
                    key={freq.id}
                    className={`flex items-baseline justify-between gap-3 rounded-lg px-2.5 py-1.5 ${
                      freq.popular ? "bg-white" : ""
                    }`}
                  >
                    <span className="text-sm text-gray-600">
                      {freq.label}
                      {freq.popular && (
                        <span className="ml-2 text-[11px] font-semibold" style={{ color: "#E8622A" }}>
                          Most popular
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap flex-shrink-0">
                      {formatDiscount(freq.discount)} off
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                A {recurringExample.tier.beds} / {recurringExample.tier.baths} home is{" "}
                <span className="font-semibold text-gray-800">{formatPrice(recurringExample.tier.price)}</span>{" "}
                one-time, or{" "}
                <span className="font-semibold text-gray-800">{formatPrice(recurringExample.price)}</span>{" "}
                {recurringExample.frequency.label.toLowerCase()}.
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mt-6 text-center">
            Your price depends on bedrooms, bathrooms and square footage. We confirm your exact price before booking anything. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/book" className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block text-center" style={{ backgroundColor: "#E8622A" }}>See Your Exact Price</Link>
            <a href="#quote-form" className="font-bold px-8 py-3 rounded-lg border-2 transition inline-block text-center hover:bg-orange-50" style={{ borderColor: "#E8622A", color: "#E8622A" }}>Get a Free Quote</a>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY. Furnished, lived-in whole rooms, the visual opposite
          of /move-out-cleaning's empty rooms and /deep-cleaning's close-up
          detail shots: this page sells "my house stays like this." */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="section-heading">Standard Cleaning Results</h2>
            <p className="section-subheading mx-auto">Real homes we keep looking like this across Plainfield, Romeoville, and the southwest suburbs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/living-room-fireplace-hardwood-1200.jpg"
                alt="Furnished living room with a stone fireplace and hardwood floor catching light after standard house cleaning"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/kitchen-dark-cabinets-island-1200.jpg"
                alt="Furnished kitchen with a dark island and hardwood floor after standard house cleaning"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/dining-room-table-chairs-1200.jpg"
                alt="Furnished dining room with a set table and bright natural light after standard house cleaning"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/bedroom-furnished-natural-light-1200.jpg"
                alt="Furnished bedroom with natural light after standard house cleaning"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/work-photos/living-kitchen-combo-hardwood-1200.jpg"
                alt="Furnished living and kitchen combo with a glossy hardwood floor catching light after standard house cleaning"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Our Clients Say</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pickReviews(3, 8).map((review) => (
              <ReviewCard
                key={review.name}
                name={reviewAttribution(review)}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">Standard Cleaning FAQs</h2></div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-2xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4 text-sm md:text-base">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-5 pb-5 pt-1"><p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Other Services You Might Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3><p className="text-sm text-gray-500">Start with a thorough deep clean before recurring service.</p></Link>
            <Link href="/recurring-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service</h3><p className="text-sm text-gray-500">Set up a weekly, biweekly, or monthly plan.</p></Link>
            <Link href="/one-time-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">One-Time Cleaning</h3><p className="text-sm text-gray-500">No commitment, book when you need it.</p></Link>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">We Offer Standard Cleaning Across the Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/standard-cleaning-plainfield-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Plainfield, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Plainfield, zip codes 60544 & 60585.</p>
            </Link>
            <Link href="/standard-cleaning-naperville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Naperville, IL</h3>
              <p className="text-sm text-gray-600">Serving 60540, 60563, 60564 & 60565.</p>
            </Link>
            <Link href="/standard-cleaning-romeoville-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Romeoville, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Romeoville (60446), our home base.</p>
            </Link>
            <Link href="/standard-cleaning-bolingbrook-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Bolingbrook, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Bolingbrook, zip codes 60440 & 60490.</p>
            </Link>
            <Link href="/standard-cleaning-joliet-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Joliet, IL</h3>
              <p className="text-sm text-gray-600">Serving all Joliet zip codes: 60431, 60432, 60433, 60435 & 60436.</p>
            </Link>
            <Link href="/standard-cleaning-lockport-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Lockport, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Lockport (60441).</p>
            </Link>
            <Link href="/standard-cleaning-shorewood-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Shorewood, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Shorewood (60404).</p>
            </Link>
            <Link href="/standard-cleaning-lemont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Lemont, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Lemont (60439).</p>
            </Link>
            <Link href="/standard-cleaning-homer-glen-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Homer Glen, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Homer Glen (60491).</p>
            </Link>
            <Link href="/standard-cleaning-westmont-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Westmont, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Westmont (60559).</p>
            </Link>
            <Link href="/standard-cleaning-minooka-il" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning in Minooka, IL</h3>
              <p className="text-sm text-gray-600">Serving all of Minooka (60447).</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT. id="quote-form" so the hero and pricing CTAs scroll here. */}
      <section id="quote-form" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Tell us about your home and we&apos;ll reach out with a personalized quote.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20 p-8">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-1">
                <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
              </div>
              <p className="text-sm text-gray-500">{REVIEW_RATING} average from {REVIEW_COUNT} Google reviews</p>
            </div>
            <LeadForm defaultService="Standard Cleaning" />
          </div>
        </div>
      </section>

      {/* Sticky mobile "Book Now" bar, fades in after 300px scroll. Points at
          this page's own quote form, matching /deep-cleaning and
          /move-out-cleaning. 69% of traffic is mobile. */}
      <StickyMobileBar bookHref="#quote-form" />
    </>
  );
}
