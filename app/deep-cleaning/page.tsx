import type { Metadata } from "next";
import Link from "next/link";
import CityDeepCleanForm from "@/components/CityDeepCleanForm";

export const metadata: Metadata = {
  title: "Deep Cleaning Service in Romeoville & Plainfield IL | DSM Cleaning Solutions",
  description:
    "Professional deep cleaning for homes in Romeoville, Plainfield & Bolingbrook. Perfect before a big event, after winter, or for a fresh start. Free quote.",
  alternates: {
    canonical: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  openGraph: {
    title: "Deep Cleaning Service in Romeoville & Plainfield IL | DSM Cleaning Solutions",
    description:
      "Professional deep cleaning for homes in Romeoville, Plainfield & Bolingbrook. Perfect before a big event, after winter, or for a fresh start. Free quote.",
    url: "https://www.dsmcleaningsolutions.com/deep-cleaning",
  },
  twitter: { card: "summary_large_image", images: ["/hero-image.png"] },
};

const faqs = [
  {
    q: "What does a deep cleaning include?",
    a: "We clean inside the oven, degrease the stovetop and hood vent, scrub bathroom grout, wipe baseboards, clean window sills and inside glass, dust ceiling fans, vacuum under furniture, and more. Every room gets full attention from top to bottom.",
  },
  {
    q: "How long does a deep clean take?",
    a: "Most homes take 3 to 5 hours. Larger homes or homes that have not been deep cleaned in a while may take longer. We do not rush. We take the time to do each room right.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "You do not need to be home. Many of our clients leave a key or lockbox code. We take care of everything and lock up when we are done.",
  },
  {
    q: "What if my quote comes in higher than the range listed?",
    a: "The ranges listed cover typical homes in that bedroom count. If your home runs bigger, has more bathrooms, or needs extra attention, your quote might land higher. We always confirm your exact price before we book anything. No surprises.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use plant-based, non-toxic products on every job. Safe for your family and pets. No harsh chemical smell when we leave.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services",
  serviceType: "Deep Cleaning",
  areaServed: [
    { "@type": "City", name: "Romeoville", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Plainfield", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Bolingbrook", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Naperville", containedInPlace: { "@type": "State", name: "Illinois" } },
  ],
  provider: { "@id": "https://www.dsmcleaningsolutions.com/#business" },
  description:
    "Professional deep cleaning for homes in Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Includes oven cleaning, grout scrubbing, baseboard wiping, and full room detail.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "200",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "200",
      maxPrice: "375",
      priceCurrency: "USD",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dsmcleaningsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Deep Cleaning", item: "https://www.dsmcleaningsolutions.com/deep-cleaning" },
  ],
};

const checklist = [
  {
    room: "Kitchen",
    items: [
      "Clean inside/outside oven",
      "Degrease stovetop burners and hood vent",
      "Clean inside microwave",
      "Wipe all cabinet fronts",
      "Scrub sink and faucet",
      "Clean countertops and backsplash",
      "Wipe refrigerator exterior",
      "Mop and scrub floors",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Scrub/disinfect toilet",
      "Deep scrub shower/tub with grout cleaning",
      "Clean/polish faucets and fixtures",
      "Wash sink and vanity",
      "Clean mirrors",
      "Wipe cabinets and shelves",
      "Mop floors and clean grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Dust all surfaces and shelves",
      "Wipe baseboards and door frames",
      "Clean window sills and inside glass",
      "Vacuum under/behind furniture",
      "Clean ceiling fans and light fixtures",
      "Dust blinds and windowsills",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Vacuum all carpets and rugs",
      "Mop all hard floors",
      "Wipe all doors and door frames",
      "Clean all visible baseboards",
      "Dust vents and registers",
    ],
  },
];

export default function DeepCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section
        style={{ background: "linear-gradient(135deg, #1a4731 0%, #2d6a4f 100%)" }}
        className="text-white py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Deep Cleaning</span>
          </nav>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Professional Deep Cleaning Services in Romeoville, Plainfield, Bolingbrook &amp; Naperville
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: "#FFA869" }} className="text-xl">★★★★★</span>
                <span className="text-sm opacity-90">5.0 — 42 reviews on Google</span>
              </div>
              <p className="text-lg font-semibold mb-2">
                A real deep clean for your home. Every room, every detail.
              </p>
              <p className="opacity-90 mb-6 leading-relaxed">
                DSM Cleaning Solutions is a family-owned cleaning company serving the southwest Chicago suburbs. We do deep cleaning the right way — oven scrubbing, grout cleaning, baseboards, ceiling fans, and everything in between. Eco-friendly products and a 48-hour satisfaction guarantee on every job.
              </p>
              <div className="flex flex-wrap gap-3">
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
            <div className="flex-shrink-0 w-full md:w-80">
              <img
                src="/Work%20Pictures/double-vanity-bathroom-clean-naperville-il.jpg"
                alt="Professional deep cleaning results in Romeoville and Plainfield IL"
                className="rounded-xl shadow-lg w-full object-cover"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
          <span>✅ Family Owned &amp; Operated</span>
          <span>✅ Eco-Friendly Products</span>
          <span>✅ Fully Insured</span>
          <span>✅ 48-Hour Satisfaction Guarantee</span>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-gray-700 leading-relaxed mb-4">
            DSM Cleaning Solutions has been serving homeowners in Romeoville, Plainfield, Bolingbrook, and Naperville since we started. These are our home communities. When you hire us for a deep clean, you get a team that knows the area, cares about the work, and shows up on time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our deep cleaning is built for homes that need more than a weekly maintenance clean. That means getting inside the oven, scrubbing bathroom grout, cleaning behind the stovetop grates, wiping every baseboard, and dusting ceiling fans in every room. We do not skip the spots that other services miss.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We use eco-friendly, non-toxic products on every job. Safe for your whole family including pets. And if anything is not right after we leave, contact us within 48 hours and we will come back to fix it at no charge.
          </p>
        </div>
      </section>

      {/* ANCHOR REVIEW */}
      <section className="py-10 px-4" style={{ backgroundColor: "#FFF4EE" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ color: "#E8622A" }} className="text-5xl font-serif leading-none mb-3">&ldquo;</p>
          <p className="text-gray-800 text-lg leading-relaxed italic mb-4">
            My house was a mess after a long winter and I had no idea where to start. DSM came in and took care of everything. The bathrooms alone were worth every penny.
          </p>
          <p className="font-semibold text-gray-700">Sandra L., Romeoville IL</p>
          <div className="flex justify-center mt-2">
            <span style={{ color: "#FFA869" }}>★★★★★</span>
          </div>
        </div>
      </section>

      {/* WHY DSM */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Homeowners in Our Area Choose DSM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Are Local</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                DSM is a small, family-run business based in the area. We are not a franchise. Romeoville, Plainfield, Bolingbrook, and Naperville are our home communities. When you work with us you get a team that is personally invested in doing good work.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">We Do Not Cut Corners</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our deep clean is not a surface wipe-down. We get into the spots that usually get skipped: inside the oven, behind the toilet, grout lines, ceiling fan blades, baseboards, and window sills. Every room gets real attention.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use plant-based, non-toxic cleaning products on every job. Safe for kids, pets, and sensitive surfaces. You will not come home to a harsh chemical smell.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-2">48-Hour Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If something is not right, contact us within 48 hours and we will come back to make it right. No hassle, no charge. We stand behind every job we do.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/Work%20Pictures/Google%20Post%20Image%20-%20Cleaning%20Service%20(1).png"
              alt="DSM Cleaning Solutions team serving Romeoville, Plainfield, Bolingbrook and Naperville"
              className="rounded-xl shadow-md mx-auto"
              style={{ maxWidth: "560px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            What We Clean in Your Home
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Every deep clean includes all of the following
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {checklist.map((section) => (
              <div key={section.room} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">{section.room}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#quote-form"
              style={{ backgroundColor: "#E8721C" }}
              className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block"
            >
              Book Your Deep Clean
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Deep Cleaning Pricing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pricing for deep cleaning in Romeoville, Plainfield, and Bolingbrook starts around $200 for smaller homes. A 3 to 4 bedroom home typically runs $250 to $350 depending on your home&rsquo;s exact size, bedroom count, and bathroom count. Naperville homes start around $225 with 3 to 4 bedroom homes running $275 to $375, depending on your home&rsquo;s exact size, bedroom count, and bathroom count.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We price by the job, not by the hour, so you know the total before we start. Every quote is free with no obligation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your price depends on three things: how big your home is, how many bedrooms it has, and how many bathrooms it has. The ranges above cover typical homes in that bedroom range. If your home runs bigger or has extra bathrooms, your quote might land higher. We&rsquo;ll always confirm your exact price with you before we book anything. No surprises after we show up.
          </p>
          <a
            href="#quote-form"
            style={{ backgroundColor: "#E8721C" }}
            className="text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition inline-block"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* 3-REVIEW BLOCK */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Booked them for a deep clean before putting my house on the market. Agent said it was one of the cleanest showings she had seen in a while. Highly recommend.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">David K., Romeoville IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;We hired DSM for a spring deep clean and the difference was night and day. The oven and kitchen were spotless. Professional team and easy to work with.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Patricia H., Plainfield IL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-3">
                <span style={{ color: "#FFA869" }}>★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
                &ldquo;Really pleased with the results. On time, professional, and thorough. My kitchen hood vent looked brand new. Will book again.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-600">Angela C., Bolingbrook IL</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://g.co/kgs/KFkN2MX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-semibold hover:underline text-sm"
            >
              Read all 42 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section
        id="quote-form"
        style={{ background: "linear-gradient(135deg, #E8721C 0%, #c45a10 100%)" }}
        className="py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Get a Free Deep Cleaning Quote</h2>
          <p className="opacity-90">
            Serving Romeoville, Plainfield, Bolingbrook, Naperville, and surrounding communities. Fill out the form and we will get back to you fast.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <span style={{ color: "#FFD8BC" }} className="text-2xl">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500">Trusted by homeowners across the southwest suburbs — 42 five-star reviews</p>
          </div>
          <CityDeepCleanForm />
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Deep Cleaning by City</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/deep-cleaning-plainfield-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Plainfield IL</Link>
            <Link href="/deep-cleaning-romeoville-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Romeoville IL</Link>
            <Link href="/deep-cleaning-bolingbrook-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Bolingbrook IL</Link>
            <Link href="/deep-cleaning-naperville-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Naperville IL</Link>
            <Link href="/deep-cleaning-joliet-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Joliet IL</Link>
            <Link href="/deep-cleaning-lockport-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Lockport IL</Link>
            <Link href="/deep-cleaning-lemont-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Lemont IL</Link>
            <Link href="/deep-cleaning-westmont-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Westmont IL</Link>
            <Link href="/deep-cleaning-shorewood-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Shorewood IL</Link>
            <Link href="/deep-cleaning-homer-glen-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Homer Glen IL</Link>
            <Link href="/deep-cleaning-new-lenox-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">New Lenox IL</Link>
            <Link href="/deep-cleaning-minooka-il" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Minooka IL</Link>
            <Link href="/deep-cleaning/hinsdale" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Hinsdale IL</Link>
            <Link href="/deep-cleaning/oak-brook" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Oak Brook IL</Link>
            <Link href="/deep-cleaning/downers-grove" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Downers Grove IL</Link>
            <Link href="/deep-cleaning/burr-ridge" className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-700 hover:text-green-700 transition">Burr Ridge IL</Link>
          </div>
        </div>
      </section>
    </>
  );
}
