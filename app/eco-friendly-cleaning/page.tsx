import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReviewCard from "@/components/ReviewCard";
import { pickReviews, reviewAttribution } from "@/lib/realReviews";
import { OG_IMAGE_ALT } from "@/lib/workPhotos";
import { addOn } from "@/lib/addOns";
import { formatPrice } from "@/lib/pricing";

// Eco-friendly products are an add-on, not standard (owner, October 2026).
// Regular cleans use DSM's standard products. This page and /pricing are the
// only places that show the add-on's price, and both read it from
// lib/addOns.ts. Keep the title, the H1 and the URL.
const ECO = addOn("ecoProducts");
const ONE_TIME_PRICE = formatPrice(ECO.price);
const RECURRING_PRICE = formatPrice(ECO.recurringPrice ?? ECO.price);

export const metadata: Metadata = {
  title: "Eco-Friendly Cleaning Romeoville IL",
  description: "Add eco-friendly, non-toxic products to any standard, deep or move-in/move-out clean in Romeoville, IL. Choose the add-on when you book. Insured & bonded.",
  keywords: ["eco-friendly cleaning Romeoville IL", "green cleaning service Romeoville", "non-toxic house cleaning Romeoville", "natural cleaning service Romeoville IL", "safe cleaning products Romeoville", "organic cleaning Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning" },
  openGraph: {
    title: "Eco-Friendly Cleaning Romeoville IL | DSM Cleaning Solutions",
    description: "Add eco-friendly, non-toxic products to any standard, deep or move-in/move-out clean in Romeoville, IL. Choose the add-on when you book. Insured & bonded.",
    url: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning",
    siteName: "DSM Cleaning Solutions",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco-Friendly Cleaning Romeoville IL | DSM Cleaning Solutions",
    description: "Add eco-friendly, non-toxic products to any standard, deep or move-in/move-out clean in Romeoville, IL. Choose the add-on when you book.",
    images: ["/hero-image.png"],
  },
};

// One array feeds the visible FAQ and the FAQPage schema.
const faqs = [
  { question: "What is the eco-friendly add-on?", answer: "It's an option for any standard, deep or move-in/move-out clean. When you add it, we use eco-friendly, non-toxic products for the whole clean. Without it, we clean with our standard products." },
  { question: "Do you use eco-friendly cleaning products?", answer: "Yes, as an option. If you'd like eco-friendly, non-toxic products for your clean, just add them when you book. You'll see the price before you confirm." },
  { question: "How much does eco-friendly cleaning cost in Romeoville?", answer: `${ONE_TIME_PRICE} per clean for a one-time standard, deep or move-in/move-out clean, and ${RECURRING_PRICE} per visit on a recurring plan (weekly, every two weeks or monthly). Recurring clients get the lower per-visit price.` },
  { question: "Can I add eco-friendly products to any service?", answer: "Yes. You can add them to any standard, deep or move-in/move-out clean, whether it's a one-time visit or a recurring plan." },
  { question: "How do I add eco-friendly products to my cleaning?", answer: "Book online and choose the Eco-Friendly Green Products add-on in the booking form. You'll see the price before you confirm." },
];

export default function EcoFriendlyCleaningPage() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Eco-Friendly Green Products Add-On",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.dsmcleaningsolutions.com/#business",
      name: "DSM Cleaning Solutions",
      telephone: "+18152462113",
      address: {
        "@type": "PostalAddress",
        streetAddress: "402 Tallman Ave",
        addressLocality: "Romeoville",
        addressRegion: "IL",
        postalCode: "60446",
        addressCountry: "US",
      },
    },
    areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
    description: "An add-on for any standard, deep or move-in/move-out house cleaning in Romeoville, IL: eco-friendly, non-toxic products for the whole clean.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Eco-Friendly Cleaning", item: "https://www.dsmcleaningsolutions.com/eco-friendly-cleaning" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 25%, rgba(255,255,255,0.55), rgba(255,255,255,0) 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.35), rgba(255,255,255,0) 50%), linear-gradient(135deg, rgba(255,255,255,0.18), rgba(0,0,0,0.12))", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Eco-Friendly Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Eco-Friendly Green Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">An add-on for any standard, deep or move-in/move-out clean. Choose it when you book, and we use eco-friendly, non-toxic products for the whole clean.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-white btn-lg text-base font-bold">Get a Free Estimate</Link>
              <Link href="/book" className="btn-outline-white btn-lg text-base">Book Now Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            {["🔍 Background-Checked Team", "✅ 48-Hour Guarantee", "⭐ 5-Star Rated", "🛡️ Insured & Bonded", "👨‍👩‍👧 Family Owned"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* HOW THE ADD-ON WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Your Choice</p>
              <h2 className="section-heading">How the Eco-Friendly Add-On Works</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Our regular cleans use our standard products. If you&apos;d rather we use eco-friendly, non-toxic products, add the Eco-Friendly Green Products add-on when you book. We then use eco-friendly, non-toxic products for the whole clean.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">It works with any standard, deep or move-in/move-out clean, as a one-time visit or on a recurring plan.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🌿", title: "The Whole Clean", desc: "Eco-friendly, non-toxic products in every room we clean." },
                  { icon: "🧹", title: "Any Service", desc: "Standard, deep or move-in/move-out cleaning." },
                  { icon: "🔁", title: "Lower Price on Recurring Plans", desc: `${RECURRING_PRICE} per visit on recurring plans: weekly, every two weeks or monthly.` },
                  { icon: "🗓️", title: "Add It When You Book", desc: "Pick it in the booking form. You'll see the price before you confirm." },
                ].map(item => (
                  <div key={item.title} className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/book" className="btn-primary">Book Now</Link>
                <Link href="/contact" className="btn-secondary">Get a Free Estimate</Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="font-bold text-xl mb-5">Eco-Friendly Add-On Price</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "One-time standard, deep or move-in/move-out clean", price: `${ONE_TIME_PRICE} per clean` },
                    { label: "Recurring plan (weekly, every two weeks or monthly)", price: `${RECURRING_PRICE} per visit` },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between gap-4 border-b border-gray-800 pb-2">
                      <span className="text-gray-300">{row.label}</span>
                      <span className="font-bold text-white whitespace-nowrap">{row.price}</span>
                    </div>
                  ))}
                  <p className="text-gray-400 pt-1">Recurring clients get the lower per-visit price.</p>
                </div>
                <h3 className="font-bold text-xl mt-8 mb-4">How to Add It</h3>
                <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
                  <li>Open the <Link href="/book" className="text-orange-400 font-semibold hover:underline">booking form</Link>.</li>
                  <li>Pick your service, your home size and a date.</li>
                  <li>Under add-ons, choose Eco-Friendly Green Products.</li>
                  <li>Check your price, then confirm.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Families Are Saying</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pickReviews(3, 1).map((review) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">Eco-Friendly Cleaning FAQs</h2></div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-2xl group">
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

      {/* WHICH SERVICE. The eco add-on works with any of the 3 core services,
          so this points to whichever one actually fits. */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Which Service Fits Your Home?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/move-out-cleaning" className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Moving Out?</h3>
              <p className="text-sm text-gray-500">Our move-out cleaning is built to get your deposit back. Add eco-friendly products when you book.</p>
            </Link>
            <Link href="/recurring-cleaning" className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Want It Kept Clean Every Week or Two?</h3>
              <p className="text-sm text-gray-500">Set up a weekly, biweekly, or monthly recurring plan. Recurring clients get the lower eco add-on price.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Need a One-Time Deep Reset?</h3>
              <p className="text-sm text-gray-500">One detailed visit and no contract to sign. Add eco-friendly products if you like.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Cleaning Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Eco-friendly products are an add-on for any clean. Serving Romeoville, Plainfield &amp; surrounding suburbs.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
