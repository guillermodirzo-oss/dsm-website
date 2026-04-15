import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Airbnb Cleaning Plainfield IL | DSM Cleaning Solutions",
  description: "5-star Airbnb & vacation rental cleaning in Plainfield, IL. Fast turnovers, linen resets & restocking. Reliable & insured. Get a free turnover quote.",
  keywords: ["Airbnb cleaning Romeoville IL", "short term rental cleaning Romeoville", "vacation rental cleaning Romeoville", "VRBO cleaning Romeoville IL", "rental turnover cleaning Romeoville", "Airbnb cleaner Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/airbnb-cleaning" },
};

const faqs = [
  { question: "Do you work with Airbnb hosts in Romeoville?", answer: "Yes — we specialize in Airbnb and short-term rental turnovers throughout Romeoville, Plainfield, Bolingbrook, and the surrounding suburbs. We understand the unique demands of vacation rental hosting." },
  { question: "How quickly can you turn over a rental between guests?", answer: "We offer same-day turnovers and work around your check-out/check-in schedule. Most short-term rental turnovers are completed within 2–4 hours depending on size." },
  { question: "Do you restock supplies and reset the property?", answer: "Yes. We can restock toiletries, replace paper products, reset linens and towels, and stage the property exactly as you want it for the next guest." },
  { question: "Can you handle emergency or last-minute turnovers?", answer: "We do our best to accommodate urgent requests. Contact us as soon as possible and we'll do everything we can to fit you in — we know surprise bookings happen!" },
  { question: "How much does Airbnb cleaning cost in Romeoville?", answer: "Pricing is based on property size and services included. Most short-term rental turnovers range from $80–$250+. Contact us for a free custom quote based on your property." },
];

export default function AirbnbCleaningPage() {
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
    name: "Airbnb & Short-Term Rental Cleaning",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.dsmcleaningsolutions.com/#business",
      name: "DSM Cleaning Solutions",
      telephone: "+18152462113",
    },
    areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
    description: "Professional Airbnb and short-term rental turnover cleaning in Romeoville, IL and surrounding suburbs. Fast, reliable turnovers between guests.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
      { "@type": "ListItem", position: 2, name: "Airbnb & Short-Term Rental Cleaning", item: "https://www.dsmcleaningsolutions.com/airbnb-cleaning" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Airbnb & Short-Term Rental Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Airbnb Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Fast, reliable turnover cleaning for Airbnb, VRBO & short-term rental properties. We get your space guest-ready between every booking — every time.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-white btn-lg text-base font-bold">Get a Free Estimate</Link>
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" className="btn-outline-white btn-lg text-base">Book Now Online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            {["🏠 Same-Day Turnovers", "⭐ 5-Star Ready", "🛡️ Fully Insured", "🔑 Key-Holder Service", "📋 Supply Restocking"].map(item => <span key={item} className="whitespace-nowrap">{item}</span>)}
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Trusted by Hosts</p>
              <h2 className="section-heading">The Airbnb Cleaning Partner Romeoville Hosts Rely On</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Your Airbnb listing lives and dies by its cleanliness rating. Guests expect hotel-quality results and write reviews that directly impact your bookings. One bad clean can cost you multiple future reservations.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">DSM Cleaning Solutions understands the high standards of short-term rental hosting. We work around your schedule, communicate proactively, and deliver a guest-ready property every single turnover — so you can focus on growing your hosting business.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "⚡", title: "Fast Turnovers", desc: "Same-day availability between check-out and check-in." },
                  { icon: "📋", title: "Restocking Service", desc: "We refill toiletries, paper products, and supplies." },
                  { icon: "🛏️", title: "Linen Reset", desc: "Fresh beds made to hotel standards every time." },
                  { icon: "⭐", title: "5-Star Standards", desc: "Cleaning level that earns you 5-star cleanliness reviews." },
                  { icon: "📱", title: "Flexible Scheduling", desc: "We work around your booking calendar, not ours." },
                  { icon: "🔑", title: "Key-Holder Service", desc: "No need to be present — we handle access securely." },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="#contact" className="btn-primary">Get a Free Estimate</Link>
                <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" className="btn-secondary">Book Now</Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-3xl p-7">
                <h3 className="font-bold text-xl mb-5">What&apos;s Included in Every Turnover</h3>
                {[
                  { category: "Kitchen", items: ["Wipe all counters & surfaces", "Clean sink & faucet", "Wipe appliance exteriors", "Empty & clean trash"] },
                  { category: "Bathrooms", items: ["Scrub toilet, shower & tub", "Wipe sink & vanity", "Clean mirrors", "Replace towels & toiletries"] },
                  { category: "Bedrooms", items: ["Change & make all beds", "Dust surfaces", "Vacuum floors", "Restock amenities"] },
                  { category: "Living Areas", items: ["Vacuum & mop all floors", "Dust & wipe surfaces", "Stage space for next guest"] },
                ].map(section => (
                  <div key={section.category} className="mb-4 last:mb-0">
                    <h4 className="text-orange-400 font-semibold text-sm mb-2">{section.category}</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {section.items.map(item => (
                        <li key={item} className="text-xs text-gray-400 flex items-start gap-1">
                          <span className="text-brand-green mt-0.5">✓</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="btn-primary w-full text-center block">Get My Free Turnover Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="section-heading">How Our Airbnb Turnover Service Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Share Your Calendar", desc: "Send us your booking calendar or check-out times so we can schedule turnovers in advance." },
              { step: "2", title: "We Show Up On Time", desc: "Our team arrives promptly after guest check-out, equipped with all supplies needed." },
              { step: "3", title: "Full Turnover Clean", desc: "We clean, stage, restock, and reset your property to hotel-quality standards." },
              { step: "4", title: "Guest-Ready Confirmation", desc: "We notify you when the property is ready — before your next guest checks in." },
            ].map(s => (
              <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{s.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">What Airbnb Hosts Are Saying</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard name="Kevin L." location="Romeoville, IL" text="I manage 3 Airbnb properties and DSM handles all my turnovers. They're fast, thorough, and my guests consistently mention cleanliness in their 5-star reviews. Best decision I made as a host." date="February 2025" />
            <ReviewCard name="Angela T." location="Plainfield, IL" text="DSM saved my Airbnb after I had two bad reviews about cleanliness. Since switching to them, I've had nothing but 5-star ratings on cleanliness. They are absolutely worth it." date="March 2025" />
            <ReviewCard name="David N." location="Bolingbrook, IL" text="Same-day turnovers, always on time, and they even restock my toiletries. I don't have to worry about my rental at all — DSM just handles it. Incredible service." date="January 2025" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="section-heading">Airbnb Cleaning FAQs</h2></div>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3><p className="text-sm text-gray-500">A thorough initial deep clean before listing your property.</p></Link>
            <Link href="/recurring-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service</h3><p className="text-sm text-gray-500">Set up a consistent cleaning schedule for your rental.</p></Link>
            <Link href="/apartment-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Apartment Cleaning</h3><p className="text-sm text-gray-500">Regular cleaning for condo and apartment Airbnb listings.</p></Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Airbnb Cleaning Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Tell us about your rental property and we&apos;ll build a custom turnover plan for you.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><BookingForm /></div>
        </div>
      </section>
    </>
  );
}
