import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "House Cleaning Romeoville IL | DSM Cleaning Solutions",
  description:
    "Family-owned house cleaning in Romeoville, IL. Eco-friendly, insured and trusted. Book online or call for a free estimate. Serving Plainfield, Naperville, Bolingbrook and surrounding suburbs.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com" },
  openGraph: {
    title: "House Cleaning Romeoville IL | DSM Cleaning Solutions",
    description: "Family-owned house cleaning in Romeoville, IL. Eco-friendly, insured and trusted.",
    url: "https://www.dsmcleaningsolutions.com",
  },
};

const services = [
  { icon: "🏠", title: "Standard House Cleaning", description: "Recurring or one-time residential cleaning tailored to your home and schedule.", slug: "https://dsmcleaningsolutions.com/booknow" },
  { icon: "🧹", title: "Deep Cleaning", description: "Thorough top-to-bottom cleaning of every surface, corner, and fixture in your home.", slug: "/deep-cleaning" },
  { icon: "📦", title: "Move-Out / Move-In Cleaning", description: "Get your full deposit back or start fresh in your new home with our detail-focused cleaning.", slug: "/move-out-cleaning" },
  { icon: "📅", title: "Recurring Maid Service", description: "Weekly, biweekly, or monthly cleaning plans to keep your home consistently spotless.", slug: "/recurring-cleaning" },
  { icon: "🌿", title: "Eco-Friendly Green Cleaning", description: "Safe for kids and pets — we use non-toxic, environmentally responsible products.", slug: "https://dsmcleaningsolutions.com/booknow" },
  { icon: "🏢", title: "Apartment Cleaning", description: "Specialized apartment cleaning for renters and property managers in the southwest suburbs.", slug: "https://dsmcleaningsolutions.com/booknow" },
  { icon: "🔨", title: "Post-Construction Cleaning", description: "Dust, debris, and residue removal after renovations or new construction projects.", slug: "https://dsmcleaningsolutions.com/booknow" },
  { icon: "🛏️", title: "Airbnb / Short-Term Rental", description: "Fast, reliable turnover cleaning between guests to maintain your 5-star rating.", slug: "https://dsmcleaningsolutions.com/booknow" },
  { icon: "✨", title: "One-Time Cleaning", description: "No commitment required. Perfect for special occasions or giving your home a reset.", slug: "https://dsmcleaningsolutions.com/booknow" },
];

const faqs = [
  { question: "How much does house cleaning cost in Romeoville, IL?", answer: "Pricing depends on the size of your home and the type of cleaning needed. Standard recurring cleanings typically start around $120–$180 for an average home. Contact us for a free, no-obligation estimate." },
  { question: "Are you insured and bonded?", answer: "Yes — DSM Cleaning Solutions is fully insured and bonded. You can have complete peace of mind knowing your home and belongings are protected every time we clean." },
  { question: "Do you use eco-friendly cleaning products?", answer: "Absolutely. We use non-toxic, eco-friendly cleaning products that are safe for children, pets, and the environment. Our green cleaning approach delivers a deep clean without harsh chemicals." },
  { question: "Can I book cleaning online?", answer: "Yes! You can book directly through our online booking page or call us at (815) 246-2113. We respond within 1 business day." },
  { question: "What areas do you serve?", answer: "We primarily serve Romeoville and Plainfield, IL, and extend to Naperville, Bolingbrook, Joliet, Westmont, and the surrounding southwest Chicago suburbs." },
  { question: "What is your satisfaction guarantee?", answer: "Your satisfaction is our top priority. If you're not completely happy with our cleaning, let us know within 24 hours and we'll return to re-clean the area at no additional charge." },
];

const serviceAreas = [
  { city: "Romeoville", slug: "/" }, { city: "Plainfield", slug: "/plainfield-il" },
  { city: "Naperville", slug: "https://dsmcleaningsolutions.com/booknow" }, { city: "Bolingbrook", slug: "https://dsmcleaningsolutions.com/booknow" },
  { city: "Joliet", slug: "https://dsmcleaningsolutions.com/booknow" }, { city: "Westmont", slug: "https://dsmcleaningsolutions.com/booknow" },
  { city: "Lockport", slug: "https://dsmcleaningsolutions.com/booknow" }, { city: "Lemont", slug: "https://dsmcleaningsolutions.com/booknow" },
  { city: "Homer Glen", slug: "https://dsmcleaningsolutions.com/booknow" }, { city: "New Lenox", slug: "https://dsmcleaningsolutions.com/booknow" },
  { city: "Shorewood", slug: "https://dsmcleaningsolutions.com/booknow" }, { city: "Minooka", slug: "https://dsmcleaningsolutions.com/booknow" },
];

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness",
  "@id": "https://www.dsmcleaningsolutions.com/#business",
  name: "DSM Cleaning Solutions",
  description: "Family-owned, eco-friendly professional house cleaning service serving Romeoville, Plainfield, and the southwest Chicago suburbs. Fully insured and bonded.",
  url: "https://www.dsmcleaningsolutions.com", telephone: "+18152462113", priceRange: "$$",
  image: "https://www.dsmcleaningsolutions.com/og-image.jpg",
  address: { "@type": "PostalAddress", addressLocality: "Romeoville", addressRegion: "IL", postalCode: "60446", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 41.6475, longitude: -88.0892 },
  areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL", "Joliet, IL", "Westmont, IL"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
        {/* Orange tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-white/90 text-sm font-medium">5-Star Rated · Romeoville &amp; Plainfield, IL</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Professional House<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
              Cleaning Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Family-owned, eco-friendly cleaning you can trust. Fully insured and satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://dsmcleaningsolutions.com/booknow" className="btn-white btn-lg text-base font-bold">
              Book Online Now
            </Link>
            <a href="tel:+18152462113" className="btn-outline-white btn-lg text-base">
              📞 (815) 246-2113
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/60 text-sm">
            {["✓ Family Owned", "✓ Fully Insured", "✓ Eco-Friendly", "✓ Satisfaction Guaranteed"].map((t) => (
              <span key={t} className="font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "👨‍👩‍👧", label: "Family Owned", desc: "Local & personal service" },
              { icon: "🛡️", label: "Fully Insured", desc: "Licensed and bonded" },
              { icon: "🌿", label: "Eco-Friendly", desc: "Safe for kids & pets" },
              { icon: "✅", label: "Satisfaction Guaranteed", desc: "We re-clean if needed" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="section-heading text-4xl md:text-5xl">Every Clean, Done Right</h2>
            <p className="section-subheading mx-auto text-lg">
              From one-time deep cleans to recurring maid service — we have a plan for every home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link key={service.title} href={service.slug}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-4xl block mb-5">{service.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-green transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-1 text-brand-green font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="section-heading text-4xl md:text-5xl">3 Steps to a Clean Home</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {[
              { step: "01", title: "Book Online", desc: "Fill out our quick form or call us. Tell us about your home — we'll confirm fast.", icon: "📋" },
              { step: "02", title: "We Show Up", desc: "Our professional, background-checked team arrives on time with all eco-friendly supplies.", icon: "🚗" },
              { step: "03", title: "You Relax", desc: "Come home to a spotlessly clean house. Satisfaction guaranteed — we'll make it right.", icon: "😊" },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-xl text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] border-t-2 border-dashed border-orange-200" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="https://dsmcleaningsolutions.com/booknow" className="btn-primary btn-lg">
              Book Your Cleaning Today
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Reviews</p>
            <h2 className="section-heading text-4xl md:text-5xl">What Romeoville Families Are Saying</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-400 font-medium">5.0 average · 47+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard name="Sarah M." location="Romeoville, IL" text="DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about the quality of their work. Highly recommend!" date="November 2024" />
            <ReviewCard name="Mike T." location="Plainfield, IL" text="Used DSM for a move-out clean on my Plainfield home. Got my full security deposit back! They are thorough, professional, and use eco-friendly products. Will definitely use them again." date="December 2024" />
            <ReviewCard name="Jennifer R." location="Bolingbrook, IL" text="I have a biweekly cleaning with DSM and I couldn't be happier. The team is reliable, trustworthy, and my house has never looked better. Love the eco-friendly products — safe for my kids and dogs!" date="January 2025" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="section-heading text-4xl md:text-5xl">A Family Business Built on Trust</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                DSM Cleaning Solutions was born right here in Romeoville, IL. As a family-owned and operated
                cleaning company, we understand that inviting someone into your home is a matter of trust —
                and we take that responsibility seriously.
              </p>
              <p className="text-gray-500 mb-5 leading-relaxed">
                We serve families across Romeoville, Plainfield, and the entire southwest Chicago suburbs. Unlike
                large national chains, we&apos;re your neighbors. We know this community, we live here, and we bring
                genuine care to every home we clean.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our commitment to eco-friendly cleaning means we use non-toxic, biodegradable products that are
                safe for children, pets, and the environment.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Years in Business", value: "5+" },
                  { label: "Happy Clients", value: "500+" },
                  { label: "Cities Served", value: "10+" },
                  { label: "Satisfaction Rate", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-100">
                    <p className="text-3xl font-bold text-brand-green">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="https://dsmcleaningsolutions.com/booknow" className="btn-primary">
                Get Your Free Estimate
              </Link>
            </div>

            <div className="relative">
              {/* Image with overlay card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-100 h-[500px]"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating trust card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">47+ Reviews</p>
                <p className="text-xs text-gray-400 mt-0.5">5.0 avg rating</p>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-green to-brand-green-dark text-white rounded-2xl p-4 shadow-xl shadow-orange-200">
                <p className="font-bold text-2xl">5+</p>
                <p className="text-xs text-white/80 font-medium">Years Serving<br/>Romeoville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="section-heading text-4xl">Cleaning Services Near You</h2>
            <p className="section-subheading mx-auto">Serving Romeoville, Plainfield, and the entire southwest Chicago suburbs.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.map((area) => (
              <Link key={area.city} href={area.slug}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center text-gray-600 hover:border-brand-green hover:text-brand-green hover:bg-orange-50 hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium">
                {area.city}, IL
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            Not sure if we cover your area?{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">(815) 246-2113</a>
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="section-heading text-4xl md:text-5xl">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 border border-gray-200 rounded-2xl group overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-brand-green">
                  <h3 className="text-left pr-4 text-sm md:text-base">{faq.question}</h3>
                  <svg className="w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 relative overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="text-white">
              <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
                Ready for a Spotlessly<br />Clean Home?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Get a free, no-obligation quote in minutes. Serving Romeoville, Plainfield, Naperville,
                Bolingbrook, and all surrounding southwest suburbs.
              </p>
              <a href="tel:+18152462113" className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-2xl px-6 py-4 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl mb-8">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                (815) 246-2113
              </a>
              <div className="space-y-2.5 text-white/80 text-sm">
                {["Free estimates — no obligation", "100% satisfaction guarantee", "Fully insured and bonded", "Eco-friendly products", "Family-owned and operated"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Right — form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Get Your Free Quote</h3>
              <p className="text-gray-400 text-sm mb-6">We respond within 1 business day.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
