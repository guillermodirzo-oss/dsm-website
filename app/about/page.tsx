import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "About Us | DSM Cleaning Solutions — Romeoville, IL House Cleaning",
  description:
    "Learn about DSM Cleaning Solutions — a family-owned, eco-friendly house cleaning company based in Romeoville, IL. Fully insured, 5-star rated, serving the southwest Chicago suburbs.",
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/about" },
};

const stats = [
  { value: "5+", label: "Years in Business" },
  { value: "500+", label: "Happy Clients" },
  { value: "12+", label: "Cities Served" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "5.0 ★", label: "Average Rating" },
  { value: "0", label: "Contracts Required" },
];

const values = [
  {
    icon: "🌿",
    title: "Eco-Friendly Always",
    desc: "We use non-toxic, biodegradable cleaning products on every job. Safe for your children, safe for your pets, safe for the environment — no exceptions.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured & Bonded",
    desc: "Every job is covered. Your home, your belongings, and your peace of mind are protected on every single visit — because that&apos;s what professionals do.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family-Owned",
    desc: "We&apos;re not a franchise. Every decision, every hire, every standard is set by us — the owners — because we&apos;re personally invested in your satisfaction.",
  },
  {
    icon: "✅",
    title: "Satisfaction Guaranteed",
    desc: "If something wasn&apos;t done to your standard, tell us within 48 hours and we&apos;ll return to fix it at absolutely no charge. No arguments, no excuses.",
  },
  {
    icon: "📋",
    title: "Consistent Standards",
    desc: "We follow a detailed checklist on every visit — so every clean meets the same high standard, whether it&apos;s your first booking or your fiftieth.",
  },
  {
    icon: "💬",
    title: "Real Communication",
    desc: "We answer our phone, respond to messages, and treat you like a real person. If something changes, we&apos;ll let you know. That&apos;s just how neighbors should operate.",
  },
];

const serviceAreas = [
  { city: "Romeoville", href: "/" },
  { city: "Plainfield", href: "/plainfield-il" },
  { city: "Naperville", href: "/naperville-il" },
  { city: "Bolingbrook", href: "/bolingbrook-il" },
  { city: "Joliet", href: "/joliet-il" },
  { city: "Westmont", href: "/westmont-il" },
  { city: "Lockport", href: "/lockport-il" },
  { city: "Lemont", href: "/lemont-il" },
  { city: "Homer Glen", href: "/homer-glen-il" },
  { city: "New Lenox", href: "/new-lenox-il" },
  { city: "Shorewood", href: "/shorewood-il" },
  { city: "Minooka", href: "/minooka-il" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.dsmcleaningsolutions.com/#business",
            name: "DSM Cleaning Solutions",
            url: "https://www.dsmcleaningsolutions.com",
            telephone: "+18152462113",
            description: "Family-owned, eco-friendly professional house cleaning service based in Plainfield, IL. Serving Romeoville, Naperville, Bolingbrook, and the southwest Chicago suburbs.",
            foundingDate: "2019",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Plainfield",
              addressRegion: "IL",
              postalCode: "60585",
              addressCountry: "US",
            },
            areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL", "Joliet, IL"],
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
              { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.dsmcleaningsolutions.com/about" },
            ],
          }),
        }}
      />

      {/* ─── SECTION 1: HERO ─── */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About Us</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Family-Owned House Cleaning<br className="hidden sm:block" /> You Can Actually Trust
          </h1>
          <p className="text-xl text-white/75 mb-10 max-w-2xl leading-relaxed font-light">
            DSM Cleaning Solutions was born right here in Romeoville, IL — and we&apos;ve been making the southwest suburbs shine ever since.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-white text-gray-900 font-bold px-7 py-3.5 rounded-2xl hover:bg-orange-50 transition-colors shadow-lg text-base"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+18152462113"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-2xl hover:border-white/70 hover:bg-white/10 transition-colors text-base"
            >
              (815) 246-2113
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: STORY ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="section-heading text-4xl md:text-5xl mb-6">
                We Started DSM Because Homeowners Deserve Better
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                DSM Cleaning Solutions started with a simple belief: homeowners in Romeoville and the southwest suburbs deserved a cleaning company they could genuinely trust. Not a national franchise with a call center, not revolving-door staff — a real local company with real accountability.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                We&apos;re a family-owned business, and that means every client matters personally. When you book with us, you&apos;re not a ticket number — you&apos;re a neighbor. We know the communities we serve, and we take pride in representing them well.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Over the years, we&apos;ve grown from a small local operation to a trusted name across Romeoville, Plainfield, Naperville, Bolingbrook, and over a dozen southwest suburban communities. That growth has come entirely from word of mouth — from homeowners who trusted us enough to tell their friends and family.
              </p>
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" className="btn-primary">
                Book a Cleaning
              </Link>
            </div>

            {/* Right: Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-100">
                  <p className="text-3xl font-bold text-brand-green">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: VALUES ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="section-heading text-4xl md:text-5xl mb-3">Our Values Aren&apos;t a Marketing Slogan</h2>
            <p className="section-subheading mx-auto text-lg">They&apos;re the reason clients stay with us for years.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2 tracking-tight">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: TEAM ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-4xl md:text-5xl mb-3">The People Behind the Clean</h2>
            <p className="section-subheading mx-auto text-lg">
              We&apos;re your southwest suburban neighbors — and we treat your home the way we&apos;d want ours treated.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-12">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 tracking-tight">Local. Accountable. Personally Invested.</h3>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Every member of our cleaning team is background-checked, trained to our standards, and personally vetted by ownership. We don&apos;t hire just anyone — because you&apos;re trusting us with your home.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-orange-100">
                <p className="text-2xl mb-3">🔍</p>
                <h4 className="font-bold text-gray-900 mb-2">Background Checked</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Every team member passes a thorough background check before ever entering a client&apos;s home.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-orange-100">
                <p className="text-2xl mb-3">📚</p>
                <h4 className="font-bold text-gray-900 mb-2">Trained to Our Standards</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We train every cleaner personally on our checklist, our products, and our expectations.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-orange-100">
                <p className="text-2xl mb-3">👀</p>
                <h4 className="font-bold text-gray-900 mb-2">Owner-Supervised</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Ownership stays involved in quality control. We review every job and act on every piece of feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SERVICE AREA ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading text-4xl mb-3">Proud to Serve the Southwest Suburbs</h2>
            <p className="section-subheading mx-auto">
              From our home base in Romeoville, we serve families across the entire southwest Chicago suburbs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center text-gray-600 hover:border-brand-green hover:text-brand-green hover:bg-orange-50 hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium"
              >
                {area.city}, IL
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">
            Not sure if we cover your area? Call us at{" "}
            <a href="tel:+18152462113" className="text-brand-green font-semibold hover:underline">(815) 246-2113</a>
          </p>
        </div>
      </section>

      {/* ─── SECTION 6: REVIEWS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl md:text-5xl">What Our Clients Say About Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Sarah M."
              location="Romeoville, IL"
              text="DSM Cleaning Solutions is absolutely amazing! They transformed my home — every corner was spotless. Being a family-owned business, they truly care about quality."
              date="November 2024"
            />
            <ReviewCard
              name="Mike T."
              location="Plainfield, IL"
              text="Used DSM for a move-out clean. Got my full security deposit back! Thorough, professional, and eco-friendly products. Absolutely will use them again."
              date="December 2024"
            />
            <ReviewCard
              name="Jennifer R."
              location="Bolingbrook, IL"
              text="I have a biweekly cleaning with DSM and couldn&apos;t be happier. Reliable, trustworthy, and my house has never looked better. Love the eco-friendly products."
              date="January 2025"
            />
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CONTACT CTA ─── */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Ready to Experience the DSM Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Free estimates, no commitment required. We respond within 1 business day.
          </p>

          <a
            href="tel:+18152462113"
            className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-xl px-8 py-4 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl mb-10"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (815) 246-2113
          </a>

          <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
