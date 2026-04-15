import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Standard Cleaning Plainfield IL | DSM Cleaning Solutions",
  description: "Standard house cleaning in Plainfield, IL — one-time or recurring. Eco-friendly, fully insured. Family-owned. Get your free estimate today.",
  keywords: ["house cleaning Romeoville IL", "standard cleaning Romeoville", "home cleaning service Romeoville", "maid service Romeoville IL", "professional house cleaners Romeoville", "residential cleaning Romeoville IL"],
  alternates: { canonical: "https://www.dsmcleaningsolutions.com/standard-cleaning" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is included in a standard house cleaning?", acceptedAnswer: { "@type": "Answer", text: "Our standard cleaning covers all main living areas: vacuuming, mopping, bathroom cleaning and disinfecting, kitchen surface wipe-down, dusting, and trash removal. We can customize the checklist for your home." } },
    { "@type": "Question", name: "How often should I get a standard house cleaning?", acceptedAnswer: { "@type": "Answer", text: "Most families in Romeoville choose biweekly (every 2 weeks) service. Weekly is great for busy households or homes with pets. Monthly works well if you do light upkeep in between." } },
    { "@type": "Question", name: "How much does standard house cleaning cost in Romeoville?", acceptedAnswer: { "@type": "Answer", text: "Standard cleaning starts around $120–$180 for an average home and varies by size and frequency. Recurring clients receive discounted rates. Contact us for a free personalized estimate." } },
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
  { question: "How much does standard house cleaning cost in Romeoville?", answer: "Standard cleaning starts around $120–$180 for an average home and varies by size and frequency. Recurring clients receive discounted rates. Contact us for a free personalized estimate." },
  { question: "Do I need to be home during the cleaning?", answer: "No — many clients provide a key or access code. Our fully insured and background-checked team will take excellent care of your home." },
  { question: "Do you bring your own supplies?", answer: "Yes! We bring all eco-friendly, non-toxic cleaning products and equipment. You don't need to provide anything." },
];

export default function StandardCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Standard House Cleaning Service",
            provider: {
              "@type": "LocalBusiness",
              "@id": "https://www.dsmcleaningsolutions.com/#business",
              name: "DSM Cleaning Solutions",
              telephone: "+18152462113",
            },
            areaServed: ["Romeoville, IL", "Plainfield, IL", "Naperville, IL", "Bolingbrook, IL"],
            description: "Professional standard house cleaning in Romeoville, IL. Recurring or one-time residential cleaning tailored to your home and schedule. Eco-friendly, fully insured.",
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

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/Work%20Pictures/IMG_1601.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="text-white">Standard House Cleaning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Standard House Cleaning in <span className="text-orange-400">Romeoville, IL</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">Professional, thorough home cleaning on your schedule. One-time or recurring — we keep your home spotless so you can focus on what matters.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-white btn-lg text-base font-bold">Get a Free Estimate</Link>
              <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" target="_blank" rel="noopener noreferrer" className="btn-outline-white btn-lg text-base">Book Now Online</Link>
            </div>
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

      {/* WHAT IS IT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Most Popular Service</p>
              <h2 className="section-heading">What Is Standard House Cleaning?</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">Standard house cleaning is our most popular service — a thorough, consistent clean of your entire home. Our trained team follows a detailed checklist to ensure every room is left fresh, sanitized, and spotless every single visit.</p>
              <p className="text-gray-500 mb-6 leading-relaxed">Whether you want a one-time clean or a recurring schedule (weekly, biweekly, or monthly), we tailor the service to your home and preferences. You&apos;ll come home to the same great result every time.</p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-8">
                {["One-time or recurring", "Customizable checklist", "All supplies included", "Background-checked team", "Eco-friendly products", "Satisfaction guaranteed"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{item}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="#contact" className="btn-primary">Get a Free Estimate</Link>
                <Link href="https://dsmcleaningsolutions.bookingkoala.com/booknow" target="_blank" rel="noopener noreferrer" className="btn-secondary">Book Now</Link>
              </div>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="font-bold text-xl text-gray-900 mb-5">Choose Your Schedule</h3>
              {[
                { freq: "Weekly", badge: "Best Value", desc: "Perfect for busy families, pet owners, or anyone who loves a consistently clean home every week.", saving: "Save up to 20%" },
                { freq: "Biweekly", badge: "Most Popular", desc: "Our most popular plan — a thorough clean every two weeks at a great recurring rate.", saving: "Save up to 15%" },
                { freq: "Monthly", badge: "", desc: "Great if you maintain between visits and just want a professional reset once a month.", saving: "" },
                { freq: "One-Time", badge: "", desc: "No commitment. Perfect for special occasions, guests coming, or just when you need it.", saving: "" },
              ].map(plan => (
                <div key={plan.freq} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{plan.freq}</span>
                      {plan.badge && <span className="text-xs bg-brand-green text-white px-2 py-0.5 rounded-full">{plan.badge}</span>}
                      {plan.saving && <span className="text-xs text-brand-green font-semibold">{plan.saving}</span>}
                    </div>
                    <p className="text-sm text-gray-500">{plan.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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

      {/* PHOTO GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="section-heading">Standard Cleaning Results</h2>
            <p className="section-subheading mx-auto">A look at real homes we&apos;ve kept spotless across Plainfield, Romeoville, and the southwest suburbs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_1601.jpg"
                alt="Clean living room with dark hardwood floors maintained with recurring house cleaning in Plainfield IL"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_1610.jpg"
                alt="Clean bedroom with hardwood floors — standard maid service in Romeoville IL"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="/Work%20Pictures/IMG_0220.jpg"
                alt="Sparkling clean bathroom after standard house cleaning service in the southwest Chicago suburbs"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            <ReviewCard name="Ashley B." location="Romeoville, IL" text="DSM has been cleaning my home biweekly for 8 months. They are so consistent and thorough — I never have to check their work. My house always smells amazing when I get home!" date="February 2025" />
            <ReviewCard name="Robert K." location="Plainfield, IL" text="Switched from a big national company to DSM and the difference is night and day. More personal, more thorough, and I love that they use green cleaning products. Highly recommend!" date="January 2025" />
            <ReviewCard name="Maria G." location="Bolingbrook, IL" text="I get a monthly cleaning and it's exactly what I needed. They're in and out efficiently, everything is spotless, and the team is always friendly and professional." date="March 2025" />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/deep-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Deep Cleaning</h3><p className="text-sm text-gray-500">Start with a thorough deep clean before recurring service.</p></Link>
            <Link href="/recurring-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">Recurring Maid Service</h3><p className="text-sm text-gray-500">Set up a weekly, biweekly, or monthly plan.</p></Link>
            <Link href="/one-time-cleaning" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all"><h3 className="font-bold text-gray-900 mb-1">One-Time Cleaning</h3><p className="text-sm text-gray-500">No commitment — book when you need it.</p></Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Get a Free Estimate</h2>
            <p className="text-white/80 text-lg mb-5">Tell us about your home and we&apos;ll reach out with a personalized quote.</p>
            <a href="tel:+18152462113" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold text-xl px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-xl">📞 (815) 246-2113</a>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20"><BookingForm /></div>
        </div>
      </section>
    </>
  );
}
