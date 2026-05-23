import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "House Cleaning Gift Cards Romeoville & Plainfield IL",
  description:
    "Give the gift of a clean home. House cleaning gift cards in Romeoville and Plainfield IL from DSM Cleaning Solutions. Call (815) 246-2113.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/gift-cards" },
  openGraph: {
    title: "House Cleaning Gift Cards Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Give the gift of a clean home. House cleaning gift cards in Romeoville and Plainfield IL from DSM Cleaning Solutions. Call (815) 246-2113.",
    url: "https://www.dsmcleaningsolutions.com/gift-cards",
    siteName: "DSM Cleaning Solutions",
    images: [{ url: "/hero-image.png", width: 1200, height: 630, alt: "House Cleaning Gift Cards Romeoville Plainfield" }],
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    question: "Do you offer house cleaning gift cards?",
    answer:
      "Yes — DSM Cleaning Solutions offers house cleaning gift cards for any occasion. Gift cards can be purchased by calling us directly at (815) 246-2113 or by submitting a request through our contact form. We'll confirm the value, process your gift card, and provide instructions for the recipient.",
  },
  {
    question: "What values are available?",
    answer:
      "We offer gift cards in standard denominations of $100, $150, and $200 — as well as custom amounts. Popular gift card amounts correspond to specific service types: $160 covers a standard clean for a smaller home, $315 covers a deep clean, and $200 is a great partial gift toward a larger service. Call us at (815) 246-2113 to discuss the best value for your situation.",
  },
  {
    question: "How does the recipient redeem it?",
    answer:
      "The recipient simply contacts DSM Cleaning Solutions to book their cleaning and mentions they have a gift card. We'll apply the gift card value to their service. Gift cards can be applied to any service — standard, deep, or move-out cleaning — anywhere in our southwest suburb service area.",
  },
  {
    question: "Do gift cards expire?",
    answer:
      "DSM Cleaning Solutions gift cards do not expire. The recipient can redeem their gift card at any time with no expiration date or usage deadline. We want gift recipients to use their cleaning at the right moment for them — whether that's immediately or months from now.",
  },
  {
    question: "Can I use a gift card for any service?",
    answer:
      "Yes — gift cards can be applied to any DSM Cleaning Solutions service: standard cleaning, deep cleaning, move-out cleaning, or any specialty service we offer. If the gift card value is less than the total service cost, the recipient simply pays the difference. If the gift card value exceeds the service cost, the balance remains on the card for future use.",
  },
];

const faqSchema = {
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
  serviceType: "House Cleaning Gift Card",
  name: "House Cleaning Gift Cards — DSM Cleaning Solutions",
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
  description:
    "House cleaning gift cards for Romeoville, Plainfield, Naperville, and the southwest Chicago suburbs. Available in $100, $150, $200, and custom amounts. Never expire.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Gift Cards", item: "https://www.dsmcleaningsolutions.com/gift-cards" },
  ],
};

const giftRecipients = [
  { icon: "🏠", title: "New Homeowners", desc: "Help them start fresh in their new home with a professional deep clean — the perfect housewarming gift." },
  { icon: "👶", title: "New Parents", desc: "A clean home is one less thing to worry about. Give new moms and dads the gift of a spotless house." },
  { icon: "👴", title: "Elderly Family", desc: "Help elderly parents or relatives keep their home clean and safe without the physical strain of doing it themselves." },
  { icon: "💼", title: "Busy Professionals", desc: "For the person who has everything — give them their time back with regular professional cleaning." },
  { icon: "🎓", title: "Recent Graduates", desc: "Moving into their first place? A cleaning gift card gives them a clean start." },
  { icon: "💒", title: "Newlyweds", desc: "A practical and thoughtful wedding gift that helps them focus on what matters most." },
];

const occasions = [
  { occasion: "Mother's Day", emoji: "🌷" },
  { occasion: "Christmas & Holidays", emoji: "🎄" },
  { occasion: "Birthday", emoji: "🎂" },
  { occasion: "Housewarming", emoji: "🏠" },
  { occasion: "Baby Shower", emoji: "👶" },
  { occasion: "Wedding / Bridal Shower", emoji: "💒" },
  { occasion: "Father's Day", emoji: "👨‍👧" },
  { occasion: "Graduation", emoji: "🎓" },
  { occasion: "Thank You Gift", emoji: "💝" },
  { occasion: "Get Well Soon", emoji: "💐" },
  { occasion: "Corporate Gift", emoji: "💼" },
  { occasion: "Any Occasion", emoji: "🎁" },
];

const cardValues = [
  { amount: "$100", desc: "Great starter gift or contribution toward any service.", highlight: false },
  { amount: "$150", desc: "Covers a standard cleaning for a 2-bedroom home.", highlight: false },
  { amount: "$200", desc: "Most popular gift value — covers most standard cleanings.", highlight: true },
  { amount: "Custom", desc: "Any amount — perfect for specific services or larger homes.", highlight: false },
];

export default function GiftCardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Gift Cards</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              House Cleaning Gift Cards in Romeoville &amp; Plainfield, IL
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Give the gift of a spotless home. DSM Cleaning Solutions gift cards are available
              in $100, $150, $200, and custom amounts — perfect for any occasion. Never expire.
              Redeemable for any cleaning service across the southwest Chicago suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18152462113" className="btn-white btn-lg">📞 Call to Purchase</a>
              <Link href="/contact" className="btn-outline-white btn-lg">Request via Form</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            {["🎁 Never Expire", "✅ Any Service", "🌿 Eco-Friendly Cleaning", "🛡️ Fully Insured", "👨‍👩‍👧 Family Owned"].map(
              (item) => <span key={item} className="whitespace-nowrap">{item}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHY CLEANING GIFT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Why Cleaning Gift Cards Make Perfect Gifts</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A house cleaning gift card is one of the most practical and genuinely appreciated
            gifts you can give. Unlike physical gifts that sit unused or get returned, a cleaning
            gift card gives someone something they actually need — time back, a clean home, and
            one less thing on their to-do list.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            For most recipients, professional house cleaning is something they want but don&apos;t
            treat themselves to. A gift card from DSM Cleaning Solutions removes that barrier and
            gives them the experience of a professionally cleaned home in Romeoville, Plainfield,
            Naperville, or anywhere in our southwest suburb service area.
          </p>
          <p className="text-gray-600 leading-relaxed">
            And because our gift cards never expire, the recipient can use it whenever the time
            is right for them — whether that&apos;s this week or six months from now.
          </p>
        </div>
      </section>

      {/* PURCHASE CTA */}
      <section className="py-12 bg-brand-green-50 border-y border-brand-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Purchase a Gift Card</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Gift cards are purchased by calling us or submitting a request through our contact form.
            We&apos;ll confirm the amount, process your gift card, and provide you with a gift card
            number or certificate for the recipient. Same-day processing available when you call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18152462113" className="btn-primary btn-lg">📞 Call (815) 246-2113 to Order</a>
            <Link href="/contact" className="btn-secondary btn-lg">Request via Contact Form</Link>
          </div>
        </div>
      </section>

      {/* GIFT CARD VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Gift Card Values Available</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardValues.map((card) => (
              <div key={card.amount} className={`rounded-2xl border-2 p-6 text-center ${card.highlight ? "border-brand-green bg-brand-green-50 shadow-lg" : "border-gray-200 bg-white"}`}>
                {card.highlight && <div className="text-xs font-bold text-brand-green uppercase tracking-widest mb-2">Most Popular</div>}
                <div className={`text-4xl font-bold mb-3 ${card.highlight ? "text-brand-green" : "text-gray-900"}`}>{card.amount}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Custom amounts available for any value.{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">Call to order →</a>
          </p>
        </div>
      </section>

      {/* WHO GIFT CARDS ARE FOR */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Who Cleaning Gift Cards Are For</h2>
            <p className="section-subheading mx-auto">The right gift for almost anyone on your list.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftRecipients.map((r) => (
              <div key={r.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <span className="text-4xl block mb-3">{r.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Perfect for Every Occasion</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {occasions.map((o) => (
              <span key={o.occasion} className="bg-brand-green-50 border border-brand-green-100 text-gray-800 font-medium px-4 py-2 rounded-full text-sm">
                {o.emoji} {o.occasion}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REDEEM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">How to Redeem a Gift Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Receive Your Gift Card", desc: "The gift giver provides you with a gift card number or certificate from DSM Cleaning Solutions." },
              { step: "02", title: "Book Your Cleaning", desc: "Call (815) 246-2113 or use our contact form to schedule your cleaning. Mention your gift card during booking." },
              { step: "03", title: "Enjoy Your Clean Home", desc: "Your gift card value is applied to your service total. Any remaining balance stays on the card for future use." },
            ].map((s) => (
              <div key={s.step} className="text-center bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Gift Card FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/standard-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Standard Cleaning</h3>
              <p className="text-sm text-gray-600">Starting at $160 — ideal recurring gift.</p>
            </Link>
            <Link href="/deep-cleaning" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3>
              <p className="text-sm text-gray-600">Starting at $315 — the ultimate home reset gift.</p>
            </Link>
            <Link href="/pricing" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">Full pricing guide to help you choose the right gift card value.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">Questions about gift cards? We&apos;re happy to help.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Order a Cleaning Gift Card Today</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Call us to purchase your gift card — same-day processing available. Gift cards
                never expire and can be used for any service anywhere in our southwest suburb
                service area.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-xl hover:bg-orange-50 transition-colors mb-4">
                📞 (815) 246-2113
              </a>
              <p className="text-white/80 text-sm mb-6">Call to order — same-day processing available</p>
              <p className="text-white/80">🎁 Never expire · ✅ Any service · 🌿 Eco-friendly cleaning · 🛡️ Fully insured</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
