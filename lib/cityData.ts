export interface CityData {
  name: string;
  slug: string;
  state: string;
  zips: string[];
  distance: string;
  tagline: string;
  localIntro: string[];
  whyChoose: string[];
  services: Array<{ icon: string; title: string; desc: string; link: string }>;
  reviews: Array<{ name: string; location: string; text: string; date: string }>;
  faqs: Array<{ question: string; answer: string }>;
  nearbyAreas: Array<{ city: string; href: string }>;
}

export const cities: CityData[] = [
  {
    name: "Naperville",
    slug: "naperville-il",
    state: "IL",
    zips: ["60540", "60563", "60564", "60565"],
    distance: "about 14 miles from our Romeoville base",
    tagline: "Trusted house cleaning for Naperville families — local, eco-friendly, fully insured.",
    localIntro: [
      "Naperville is consistently ranked as one of the best places to live in America — and its residents expect the best. DSM Cleaning Solutions brings professional, eco-friendly house cleaning to Naperville families who want a spotless home without the hassle.",
      "As a locally owned company based just 14 miles away in Romeoville, we understand the Naperville community. We're not a national franchise with a call center — we're your southwest suburban neighbors, and we treat your home with the care it deserves.",
      "From established neighborhoods near downtown Naperville to newer developments in the 60564 and 60565 zip codes, we serve all of Naperville with the same high standard of professional cleaning.",
    ],
    whyChoose: [
      "Local company based just 14 miles away in Romeoville",
      "Fully insured and bonded — your Naperville home is protected",
      "Eco-friendly, non-toxic products safe for kids and pets",
      "Family-owned with a personal, attentive touch",
      "100% satisfaction guarantee on every clean",
      "Flexible weekly, biweekly, or monthly scheduling",
      "Background-checked, professional cleaning team",
      "Serving all Naperville zip codes: 60540, 60563, 60564, 60565",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Naperville",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Naperville home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Naperville",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Naperville home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Naperville",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Naperville home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Naperville",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Naperville home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Naperville",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Naperville family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Naperville",
        desc: "Professional apartment cleaning for renters and property managers throughout Naperville.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Jessica W.",
        location: "Naperville, IL",
        text: "DSM transformed my Naperville home — spotless from top to bottom. The eco-friendly products were a huge plus with my toddler running around. Professional, timely, and worth every penny.",
        date: "March 2025",
      },
      {
        name: "Tom A.",
        location: "Naperville, IL",
        text: "I've tried three different cleaning services in Naperville. DSM is by far the best. Consistent, thorough, and they always go above and beyond. Biweekly service for 6 months and counting.",
        date: "January 2025",
      },
      {
        name: "Priya S.",
        location: "Naperville, IL",
        text: "Used DSM for a deep clean before listing my Naperville home for sale. The house looked incredible — our realtor even commented on it. Got multiple offers above asking price that weekend.",
        date: "February 2025",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Naperville, IL?",
        answer:
          "Yes, DSM serves all of Naperville including zip codes 60540, 60563, 60564, and 60565. Standard, deep, move-out, and recurring service all available.",
      },
      {
        question: "How far do you travel to clean homes in Naperville?",
        answer:
          "We're based in Romeoville, about 14 miles away. We serve Naperville regularly and can accommodate same-week scheduling.",
      },
      {
        question: "What cleaning services are available in Naperville, IL?",
        answer:
          "Full range: standard, deep, move-out/in, recurring maid service, apartment, eco-friendly, post-construction, and Airbnb turnover cleaning.",
      },
      {
        question: "How much does house cleaning cost in Naperville?",
        answer:
          "Depends on home size and service type. Contact us for a free custom estimate — no obligation.",
      },
      {
        question: "Are your cleaning products safe for children and pets in my Naperville home?",
        answer:
          "Yes — all products are non-toxic, eco-friendly, and biodegradable. Safe for families and pets.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "Bolingbrook", href: "/bolingbrook-il" },
      { city: "Westmont", href: "/westmont-il" },
      { city: "Lisle", href: "/#contact" },
      { city: "Aurora", href: "/#contact" },
    ],
  },
  {
    name: "Bolingbrook",
    slug: "bolingbrook-il",
    state: "IL",
    zips: ["60440", "60490"],
    distance: "just 5 miles from our Romeoville base",
    tagline: "Professional house cleaning just minutes away — Bolingbrook's trusted local cleaners.",
    localIntro: [
      "Bolingbrook is right next door to our home base in Romeoville — which means faster response times, same-week availability, and a team that truly knows the community. DSM Cleaning Solutions is Bolingbrook's go-to local house cleaning service.",
      "Whether you're in a newer development near Rt. 53 or an established neighborhood off Weber Road, we service all of Bolingbrook with the same meticulous attention to detail. Our proximity means we can often accommodate last-minute requests that national companies can't.",
      "Bolingbrook families appreciate our eco-friendly approach — safe for kids and pets — and our straightforward, honest pricing. No hidden fees, no bait-and-switch. Just a consistently excellent clean, every time.",
    ],
    whyChoose: [
      "Based just 5 miles away — fastest response times in the area",
      "Fully insured and bonded — your home is protected",
      "Eco-friendly products safe for families and pets",
      "Family-owned with a genuine personal touch",
      "Satisfaction guarantee — we'll make it right",
      "Same-week and last-minute availability",
      "Background-checked, professional team",
      "Serving all of Bolingbrook: 60440 & 60490",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Bolingbrook",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Bolingbrook home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Bolingbrook",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Bolingbrook home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Bolingbrook",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Bolingbrook home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Bolingbrook",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Bolingbrook home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Bolingbrook",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Bolingbrook family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Bolingbrook",
        desc: "Professional apartment cleaning for renters and property managers throughout Bolingbrook.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Amanda K.",
        location: "Bolingbrook, IL",
        text: "DSM is so close and so good! They had availability the same week I called and did an incredible job on my whole house. I signed up for monthly service on the spot.",
        date: "February 2025",
      },
      {
        name: "Carlos M.",
        location: "Bolingbrook, IL",
        text: "I've had two other cleaning companies before DSM and nothing compares. Thorough, professional, and they actually care about the work. 5 stars every time.",
        date: "January 2025",
      },
      {
        name: "Lisa T.",
        location: "Bolingbrook, IL",
        text: "Used DSM for move-out cleaning on my Bolingbrook townhome. Got my full deposit back and the new owners even reached out to ask who cleaned it. Phenomenal.",
        date: "March 2025",
      },
    ],
    faqs: [
      {
        question: "Do you clean homes in Bolingbrook, IL?",
        answer:
          "Yes — Bolingbrook is one of our primary service areas. We're based just 5 miles away in Romeoville.",
      },
      {
        question: "Can you do same-week cleaning in Bolingbrook?",
        answer:
          "Often yes. Because we're so close, we frequently have same-week availability for Bolingbrook clients.",
      },
      {
        question: "What services do you offer in Bolingbrook?",
        answer:
          "Full range: standard, deep, move-out/in, recurring, apartment, eco-friendly, post-construction, Airbnb turnover.",
      },
      {
        question: "How much does cleaning cost in Bolingbrook, IL?",
        answer:
          "Pricing depends on home size and service. Contact us for a free, no-obligation estimate.",
      },
      {
        question: "Are you insured to clean homes in Bolingbrook?",
        answer:
          "Fully insured and bonded. Your home and belongings are completely protected.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Joliet", href: "/joliet-il" },
      { city: "Lemont", href: "/lemont-il" },
      { city: "Woodridge", href: "/#contact" },
    ],
  },
  {
    name: "Joliet",
    slug: "joliet-il",
    state: "IL",
    zips: ["60431", "60432", "60433", "60435", "60436"],
    distance: "about 10 miles from our Romeoville base",
    tagline: "Trusted professional cleaning for Joliet families — eco-friendly, insured, satisfaction guaranteed.",
    localIntro: [
      "Joliet is one of the largest and most diverse cities in the Chicago metro area, and DSM Cleaning Solutions is proud to serve its families with professional, eco-friendly house cleaning. Based just 10 miles away in Romeoville, we understand this community.",
      "From the historic neighborhoods on the east side to the growing residential developments in the southwest, we serve all of Joliet across its multiple zip codes. Our team is background-checked, professional, and brings all eco-friendly supplies to every job.",
      "Joliet homeowners choose DSM because we're local, accountable, and genuinely care about the quality of our work. We're not a faceless national franchise — we're your neighbors, and your satisfaction is personal to us.",
    ],
    whyChoose: [
      "Local company just 10 miles from Joliet in Romeoville",
      "Fully insured and bonded — complete protection",
      "Eco-friendly, non-toxic cleaning products",
      "Family-owned business with personal accountability",
      "Satisfaction guarantee on every single visit",
      "Flexible scheduling — weekly, biweekly, monthly",
      "Professional, background-checked team",
      "Serving all Joliet zip codes: 60431, 60432, 60433, 60435, 60436",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Joliet",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Joliet home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Joliet",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Joliet home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Joliet",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Joliet home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Joliet",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Joliet home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Joliet",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Joliet family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Joliet",
        desc: "Professional apartment cleaning for renters and property managers throughout Joliet.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Maria G.",
        location: "Joliet, IL",
        text: "DSM does my weekly cleaning and I couldn't be happier. They're consistent, thorough, and the eco-friendly products mean I don't worry about my kids. Highly recommend to any Joliet family.",
        date: "February 2025",
      },
      {
        name: "Robert H.",
        location: "Joliet, IL",
        text: "Called DSM for a deep clean of my Joliet home and they knocked it out of the park. Every room was perfect. I've been using them for recurring service ever since.",
        date: "March 2025",
      },
      {
        name: "Diana P.",
        location: "Joliet, IL",
        text: "Excellent move-out cleaning for my Joliet rental. My landlord was impressed and I got my full deposit back without any deductions. Professional and thorough.",
        date: "January 2025",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Joliet, IL?",
        answer:
          "Yes — we serve all of Joliet across zip codes 60431, 60432, 60433, 60435, and 60436.",
      },
      {
        question: "Are you a local cleaning company near Joliet?",
        answer:
          "Based in Romeoville, just 10 miles away. We're a true local company, not a national franchise.",
      },
      {
        question: "What cleaning services are available in Joliet, IL?",
        answer:
          "Full range: standard, deep, move-out/in, recurring, apartment, eco-friendly, post-construction, Airbnb.",
      },
      {
        question: "How much does house cleaning cost in Joliet?",
        answer:
          "Varies by home size and service type. Call or contact us for a free estimate.",
      },
      {
        question: "Do you bring your own cleaning supplies to Joliet?",
        answer:
          "Yes — we bring all eco-friendly, non-toxic supplies to every job. Nothing required from you.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "Bolingbrook", href: "/bolingbrook-il" },
      { city: "Lockport", href: "/lockport-il" },
      { city: "New Lenox", href: "/new-lenox-il" },
      { city: "Shorewood", href: "/shorewood-il" },
    ],
  },
  {
    name: "Westmont",
    slug: "westmont-il",
    state: "IL",
    zips: ["60559"],
    distance: "about 20 miles from our Romeoville base",
    tagline: "Professional house cleaning in Westmont, IL — family-owned, eco-friendly, fully insured.",
    localIntro: [
      "Westmont is a welcoming village in DuPage County, and its residents deserve professional cleaning they can trust. DSM Cleaning Solutions brings eco-friendly, family-owned house cleaning service to Westmont homeowners.",
      "We travel from our Romeoville base to serve Westmont because our clients here have come to rely on our consistency, professionalism, and genuine care for their homes. Every visit follows the same thorough checklist — no shortcuts.",
      "From single-family homes near Cass Avenue to condos throughout the 60559 zip code, we handle all types of residences in Westmont with equal attention to detail.",
    ],
    whyChoose: [
      "Family-owned company based in the southwest suburbs",
      "Fully insured and bonded — your home is protected",
      "Non-toxic, eco-friendly cleaning products",
      "Consistent results on every visit — no shortcuts",
      "Satisfaction guaranteed or we return at no charge",
      "Flexible scheduling to fit your lifestyle",
      "Background-checked, professional team",
      "Serving all of Westmont: 60559",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Westmont",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Westmont home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Westmont",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Westmont home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Westmont",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Westmont home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Westmont",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Westmont home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Westmont",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Westmont family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Westmont",
        desc: "Professional apartment cleaning for renters and property managers throughout Westmont.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Karen B.",
        location: "Westmont, IL",
        text: "DSM makes the drive to Westmont and it is absolutely worth it. My house has never been this consistently clean. They follow the same thorough checklist every single visit.",
        date: "March 2025",
      },
      {
        name: "Paul D.",
        location: "Westmont, IL",
        text: "Booked a deep clean with DSM for my Westmont condo and they exceeded every expectation. Professional, detail-oriented, and the eco-friendly products were a huge bonus.",
        date: "January 2025",
      },
      {
        name: "Susan F.",
        location: "Westmont, IL",
        text: "I was nervous hiring a company from out of the immediate area but DSM put all my concerns to rest. On time, thorough, and wonderful communication. I'm a regular client now.",
        date: "February 2025",
      },
    ],
    faqs: [
      {
        question: "Do you clean homes in Westmont, IL?",
        answer:
          "Yes — we serve Westmont (60559) regularly from our base in Romeoville.",
      },
      {
        question: "Is there a travel fee for Westmont?",
        answer:
          "No travel fees. Our pricing is straightforward based on your home size and service type.",
      },
      {
        question: "What services do you offer in Westmont?",
        answer:
          "Standard, deep, move-out/in, recurring maid service, apartment cleaning, eco-friendly cleaning.",
      },
      {
        question: "How much does house cleaning cost in Westmont, IL?",
        answer:
          "Contact us for a free estimate. Pricing based on home size and service.",
      },
      {
        question: "Do you serve the entire 60559 zip code?",
        answer:
          "Yes, we serve all of Westmont including the full 60559 zip code area.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Bolingbrook", href: "/bolingbrook-il" },
      { city: "Lemont", href: "/lemont-il" },
      { city: "Downers Grove", href: "/#contact" },
      { city: "Darien", href: "/#contact" },
    ],
  },
  {
    name: "Lockport",
    slug: "lockport-il",
    state: "IL",
    zips: ["60441", "60491"],
    distance: "about 8 miles from our Romeoville base",
    tagline: "Professional house cleaning in Lockport, IL — local, trusted, eco-friendly.",
    localIntro: [
      "Lockport is a growing Will County community with a mix of established neighborhoods and newer residential developments. DSM Cleaning Solutions is proud to serve Lockport homeowners with professional, eco-friendly house cleaning just 8 miles from our Romeoville base.",
      "Lockport families appreciate our local roots, transparent pricing, and the care we bring to every home. We're not a franchise — we're a family-owned business that takes every job personally.",
      "From homes near the historic Illinois & Michigan Canal corridor to newer subdivisions in the 60491 area, we clean all types of residences in Lockport with the same meticulous attention to detail.",
    ],
    whyChoose: [
      "Local — just 8 miles from Lockport in Romeoville",
      "Fully insured and bonded",
      "Eco-friendly, non-toxic products",
      "Family-owned, personally accountable",
      "100% satisfaction guarantee",
      "Flexible recurring or one-time service",
      "Professional, background-checked team",
      "Serving all of Lockport: 60441 & 60491",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Lockport",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Lockport home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Lockport",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Lockport home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Lockport",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Lockport home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Lockport",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Lockport home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Lockport",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Lockport family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Lockport",
        desc: "Professional apartment cleaning for renters and property managers throughout Lockport.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Michelle R.",
        location: "Lockport, IL",
        text: "DSM is the best cleaning service I've found in the Lockport area. Consistent, professional, and they genuinely care about doing a great job. My home looks amazing every time.",
        date: "February 2025",
      },
      {
        name: "James O.",
        location: "Lockport, IL",
        text: "Used DSM for a deep clean of my Lockport home before a family event. Absolutely outstanding. Every corner was perfect. Will be booking regular service.",
        date: "March 2025",
      },
      {
        name: "Linda C.",
        location: "Lockport, IL",
        text: "Family-owned and it shows. DSM treats your home like it's their own. I've tried national chains and they don't come close to the personal service DSM provides.",
        date: "January 2025",
      },
    ],
    faqs: [
      {
        question: "Do you clean homes in Lockport, IL?",
        answer:
          "Yes — we serve Lockport (60441 & 60491) from our base just 8 miles away in Romeoville.",
      },
      {
        question: "What cleaning services are available in Lockport?",
        answer:
          "Standard, deep, move-out/in, recurring, eco-friendly, post-construction, and Airbnb turnover.",
      },
      {
        question: "Are you insured to clean in Lockport?",
        answer:
          "Fully insured and bonded. Your home and belongings are protected on every visit.",
      },
      {
        question: "How do I get a quote for cleaning in Lockport?",
        answer:
          "Contact us via the form on this page or call (815) 246-2113 for a free estimate.",
      },
      {
        question: "Do you offer recurring cleaning in Lockport?",
        answer:
          "Yes — weekly, biweekly, and monthly plans available, often at a discount vs. one-time visits.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Joliet", href: "/joliet-il" },
      { city: "Homer Glen", href: "/homer-glen-il" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "New Lenox", href: "/new-lenox-il" },
      { city: "Lemont", href: "/lemont-il" },
    ],
  },
  {
    name: "Lemont",
    slug: "lemont-il",
    state: "IL",
    zips: ["60439"],
    distance: "about 12 miles from our Romeoville base",
    tagline: "Professional house cleaning in Lemont, IL — trusted by local families, eco-friendly, fully insured.",
    localIntro: [
      "Lemont is one of the most picturesque villages in the southwest suburbs — and its homeowners maintain high standards for their properties. DSM Cleaning Solutions brings professional, eco-friendly house cleaning to Lemont families who want a spotless home.",
      "Based just 12 miles away in Romeoville, we're a true neighbor to Lemont. We understand the community, the neighborhoods, and what local families expect from a professional cleaning service.",
      "Whether your home overlooks the Des Plaines River Valley or sits in one of Lemont's newer residential areas, we bring the same thorough, detail-oriented approach to every clean in the 60439 zip code.",
    ],
    whyChoose: [
      "Local company just 12 miles away in Romeoville",
      "Fully insured and bonded",
      "Eco-friendly, non-toxic cleaning products",
      "Family-owned with a personal touch",
      "Satisfaction guaranteed on every visit",
      "Flexible scheduling options",
      "Professional, background-checked cleaners",
      "Serving all of Lemont: 60439",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Lemont",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Lemont home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Lemont",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Lemont home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Lemont",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Lemont home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Lemont",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Lemont home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Lemont",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Lemont family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Lemont",
        desc: "Professional apartment cleaning for renters and property managers throughout Lemont.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Catherine M.",
        location: "Lemont, IL",
        text: "I found DSM through a neighbor's recommendation and I'm so glad I did. They are thorough, professional, and the eco-friendly products are perfect for our family. Excellent service.",
        date: "February 2025",
      },
      {
        name: "Brian K.",
        location: "Lemont, IL",
        text: "DSM did a deep clean on our Lemont home and we were blown away by the results. They cleaned areas I hadn't seen cleaned in years. Booking monthly service now.",
        date: "March 2025",
      },
      {
        name: "Helen T.",
        location: "Lemont, IL",
        text: "Reliable, honest, and really good at what they do. Our Lemont home looks incredible after every DSM visit. Love that they use non-toxic products.",
        date: "January 2025",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Lemont, IL?",
        answer:
          "Yes — we serve all of Lemont (60439) from our Romeoville base, about 12 miles away.",
      },
      {
        question: "What services are available in Lemont?",
        answer:
          "Standard, deep, move-out/in, recurring, eco-friendly, post-construction, and Airbnb cleaning.",
      },
      {
        question: "Are your products safe for children and pets?",
        answer:
          "Yes — all products are eco-friendly, non-toxic, and biodegradable. Safe for the whole family.",
      },
      {
        question: "How much does cleaning cost in Lemont, IL?",
        answer:
          "Pricing varies by home size and service. Contact us for a free custom estimate.",
      },
      {
        question: "Can I set up recurring cleaning in Lemont?",
        answer:
          "Absolutely — weekly, biweekly, or monthly. Recurring clients often save vs. one-time rates.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Bolingbrook", href: "/bolingbrook-il" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Lockport", href: "/lockport-il" },
      { city: "Homer Glen", href: "/homer-glen-il" },
      { city: "Westmont", href: "/westmont-il" },
    ],
  },
  {
    name: "Homer Glen",
    slug: "homer-glen-il",
    state: "IL",
    zips: ["60491"],
    distance: "about 9 miles from our Romeoville base",
    tagline: "Professional house cleaning in Homer Glen, IL — family-owned, eco-friendly, fully insured.",
    localIntro: [
      "Homer Glen is a beautiful Will County village known for its spacious homes, wooded lots, and strong sense of community. DSM Cleaning Solutions is proud to serve Homer Glen families with professional, eco-friendly house cleaning.",
      "Based just 9 miles away in Romeoville, we're a local company that understands Homer Glen's neighborhoods and the standards its residents expect. From large homes on wooded lots to newer construction near 143rd Street, we handle all property types.",
      "Our Homer Glen clients especially appreciate our eco-friendly product line — non-toxic and biodegradable, safe for families with kids, pets, and everyone in between.",
    ],
    whyChoose: [
      "Local — just 9 miles from Homer Glen in Romeoville",
      "Fully insured and bonded",
      "Eco-friendly products safe for families with kids & pets",
      "Family-owned with personal accountability",
      "Satisfaction guaranteed every visit",
      "Flexible one-time or recurring scheduling",
      "Professional, background-checked team",
      "Serving all of Homer Glen: 60491",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Homer Glen",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Homer Glen home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Homer Glen",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Homer Glen home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Homer Glen",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Homer Glen home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Homer Glen",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Homer Glen home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Homer Glen",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Homer Glen family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Homer Glen",
        desc: "Professional apartment cleaning for renters and property managers throughout Homer Glen.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Nicole S.",
        location: "Homer Glen, IL",
        text: "Our Homer Glen home is 3,800 sq ft and DSM handles it beautifully every time. Thorough, organized, and the team is always professional. I won't use anyone else.",
        date: "February 2025",
      },
      {
        name: "Steve J.",
        location: "Homer Glen, IL",
        text: "Used DSM for a deep clean on our large Homer Glen home and the results were fantastic. They spent the time it needed and didn't cut corners anywhere. Highly recommend.",
        date: "January 2025",
      },
      {
        name: "Debra W.",
        location: "Homer Glen, IL",
        text: "DSM has been cleaning our Homer Glen home biweekly for almost a year. Consistent, reliable, and excellent quality every single visit. Our whole family loves coming home on cleaning day.",
        date: "March 2025",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Homer Glen, IL?",
        answer:
          "Yes — we serve all of Homer Glen (60491) from Romeoville, just 9 miles away.",
      },
      {
        question: "Can you clean large homes in Homer Glen?",
        answer:
          "Absolutely. We regularly service larger homes throughout Homer Glen. Pricing is based on square footage and service type.",
      },
      {
        question: "What services are available in Homer Glen?",
        answer:
          "Standard, deep, move-out/in, recurring, eco-friendly, post-construction, Airbnb.",
      },
      {
        question: "How do I get a cleaning quote in Homer Glen?",
        answer:
          "Call (815) 246-2113 or fill out the form on this page for a free estimate.",
      },
      {
        question: "Do you offer recurring service in Homer Glen, IL?",
        answer:
          "Yes — weekly, biweekly, and monthly plans available.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Lockport", href: "/lockport-il" },
      { city: "Lemont", href: "/lemont-il" },
      { city: "Joliet", href: "/joliet-il" },
      { city: "New Lenox", href: "/new-lenox-il" },
      { city: "Plainfield", href: "/plainfield-il" },
    ],
  },
  {
    name: "New Lenox",
    slug: "new-lenox-il",
    state: "IL",
    zips: ["60451"],
    distance: "about 14 miles from our Romeoville base",
    tagline: "Professional house cleaning in New Lenox, IL — trusted, eco-friendly, fully insured.",
    localIntro: [
      "New Lenox is one of the fastest-growing communities in Will County, with beautiful residential neighborhoods and a strong family-oriented community. DSM Cleaning Solutions is proud to serve New Lenox homeowners with professional, eco-friendly cleaning.",
      "We travel from our Romeoville base to serve New Lenox because local families here have come to trust our consistency, professionalism, and genuine care. As a family-owned business, we treat every New Lenox home as if it were our own.",
      "Whether you're in an established neighborhood or one of the newer developments throughout New Lenox, we deliver the same high-quality clean to every home in the 60451 zip code.",
    ],
    whyChoose: [
      "Family-owned company from neighboring Romeoville",
      "Fully insured and bonded — full protection",
      "Eco-friendly, non-toxic cleaning products",
      "Consistent results every visit — guaranteed",
      "Flexible scheduling: weekly, biweekly, monthly",
      "One-time or recurring — no contract required",
      "Background-checked, professional team",
      "Serving all of New Lenox: 60451",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in New Lenox",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your New Lenox home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in New Lenox",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your New Lenox home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning New Lenox",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new New Lenox home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service New Lenox",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your New Lenox home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning New Lenox",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your New Lenox family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning New Lenox",
        desc: "Professional apartment cleaning for renters and property managers throughout New Lenox.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Kathleen R.",
        location: "New Lenox, IL",
        text: "DSM has been cleaning our New Lenox home monthly for 8 months and they are wonderful. Consistent, professional, and my house looks great after every visit.",
        date: "January 2025",
      },
      {
        name: "Mark S.",
        location: "New Lenox, IL",
        text: "Hired DSM for a deep clean before my parents visited. They did an incredible job — my mom even asked who cleaned the house. That's the best compliment possible!",
        date: "February 2025",
      },
      {
        name: "Tara B.",
        location: "New Lenox, IL",
        text: "Love that DSM is family-owned. You can really feel the personal care they put into their work. My New Lenox home has never been cleaner. Won't go anywhere else.",
        date: "March 2025",
      },
    ],
    faqs: [
      {
        question: "Do you clean homes in New Lenox, IL?",
        answer:
          "Yes — we serve New Lenox (60451) from our base in Romeoville, about 14 miles away.",
      },
      {
        question: "What services are available in New Lenox?",
        answer:
          "Standard, deep, move-out/in, recurring, eco-friendly, apartment, post-construction, Airbnb.",
      },
      {
        question: "Is there a contract for recurring service in New Lenox?",
        answer:
          "No contracts required. Book when you need it, or set up a recurring schedule — cancel anytime.",
      },
      {
        question: "How much does cleaning cost in New Lenox?",
        answer:
          "Depends on home size and service. Contact us for a free, no-obligation estimate.",
      },
      {
        question: "Do you bring supplies to New Lenox?",
        answer:
          "Yes — we bring all eco-friendly, non-toxic cleaning supplies. Nothing required from you.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Joliet", href: "/joliet-il" },
      { city: "Lockport", href: "/lockport-il" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "Shorewood", href: "/shorewood-il" },
      { city: "Mokena", href: "/#contact" },
    ],
  },
  {
    name: "Shorewood",
    slug: "shorewood-il",
    state: "IL",
    zips: ["60404"],
    distance: "about 10 miles from our Romeoville base",
    tagline: "Professional house cleaning in Shorewood, IL — local, eco-friendly, family-owned.",
    localIntro: [
      "Shorewood is a growing Will County village with a welcoming community and a mix of established and newer neighborhoods. DSM Cleaning Solutions serves Shorewood homeowners with professional, eco-friendly house cleaning from our base just 10 miles away.",
      "As a family-owned business, we bring a personal level of care to every Shorewood home we clean. Our team is professional, background-checked, and equipped with eco-friendly, non-toxic cleaning products safe for your whole family.",
      "From homes near Brook Crossing to neighborhoods throughout the 60404 zip code, we deliver consistent, thorough cleaning that Shorewood families can count on.",
    ],
    whyChoose: [
      "Local — based just 10 miles away in Romeoville",
      "Fully insured and bonded",
      "Non-toxic, eco-friendly cleaning products",
      "Family-owned business with a personal touch",
      "Satisfaction guaranteed on every clean",
      "Flexible recurring or one-time options",
      "Professional, background-checked team",
      "Serving all of Shorewood: 60404",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Shorewood",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Shorewood home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Shorewood",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Shorewood home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Shorewood",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Shorewood home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Shorewood",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Shorewood home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Shorewood",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Shorewood family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Shorewood",
        desc: "Professional apartment cleaning for renters and property managers throughout Shorewood.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Jennifer A.",
        location: "Shorewood, IL",
        text: "DSM is a gem in the southwest suburbs. They clean my Shorewood home biweekly and I love coming home on cleaning day. Professional and thorough every time.",
        date: "March 2025",
      },
      {
        name: "David M.",
        location: "Shorewood, IL",
        text: "Excellent deep cleaning service for my Shorewood home. DSM was professional, detailed, and the house was spotless when they were done. Great value.",
        date: "January 2025",
      },
      {
        name: "Sandra L.",
        location: "Shorewood, IL",
        text: "I was looking for a local cleaning service and DSM was recommended by a neighbor. So glad I called — they do an amazing job and are always on time and professional.",
        date: "February 2025",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Shorewood, IL?",
        answer:
          "Yes — we serve all of Shorewood (60404) from our Romeoville base.",
      },
      {
        question: "What services are available in Shorewood?",
        answer:
          "Standard, deep, move-out/in, recurring, eco-friendly, post-construction, Airbnb.",
      },
      {
        question: "How often can you clean my Shorewood home?",
        answer:
          "Weekly, biweekly, or monthly recurring service available, plus one-time cleanings.",
      },
      {
        question: "How do I get a quote for cleaning in Shorewood?",
        answer:
          "Fill out the form on this page or call (815) 246-2113 for a free estimate.",
      },
      {
        question: "Are you insured to clean in Shorewood, IL?",
        answer:
          "Fully insured and bonded on every job.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Joliet", href: "/joliet-il" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "Minooka", href: "/minooka-il" },
      { city: "New Lenox", href: "/new-lenox-il" },
      { city: "Bolingbrook", href: "/bolingbrook-il" },
    ],
  },
  {
    name: "Minooka",
    slug: "minooka-il",
    state: "IL",
    zips: ["60447"],
    distance: "about 18 miles from our Romeoville base",
    tagline: "Professional house cleaning in Minooka, IL — trusted local service, eco-friendly, fully insured.",
    localIntro: [
      "Minooka is a growing Grundy and Kendall County community that has seen rapid residential growth in recent years. DSM Cleaning Solutions is proud to extend our professional, eco-friendly house cleaning services to Minooka homeowners.",
      "We travel from Romeoville to serve Minooka because local families here deserve professional, accountable cleaning service they can actually rely on. As a family-owned business, we're personally invested in the quality of every job.",
      "From established homes near downtown Minooka to newer developments throughout the 60447 zip code, we bring the same thorough, detailed cleaning approach to every property.",
    ],
    whyChoose: [
      "Family-owned company from the southwest suburbs",
      "Fully insured and bonded",
      "Eco-friendly, non-toxic cleaning products",
      "Personal accountability on every job",
      "100% satisfaction guarantee",
      "Flexible one-time or recurring scheduling",
      "Background-checked, professional team",
      "Serving all of Minooka: 60447",
    ],
    services: [
      {
        icon: "🏠",
        title: "Standard House Cleaning in Minooka",
        desc: "Routine house cleaning on a one-time or recurring basis. We keep your Minooka home consistently clean and comfortable.",
        link: "/standard-cleaning",
      },
      {
        icon: "🧹",
        title: "Deep Cleaning in Minooka",
        desc: "Thorough top-to-bottom cleaning that tackles every corner, surface, and fixture in your Minooka home.",
        link: "/deep-cleaning",
      },
      {
        icon: "📦",
        title: "Move-Out / Move-In Cleaning Minooka",
        desc: "Comprehensive move-out cleaning to get your full deposit back, or move-in cleaning to start fresh in your new Minooka home.",
        link: "/move-out-cleaning",
      },
      {
        icon: "📅",
        title: "Recurring Maid Service Minooka",
        desc: "Weekly, biweekly, or monthly maid service plans tailored to your Minooka home and schedule.",
        link: "/recurring-cleaning",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly Cleaning Minooka",
        desc: "Green cleaning using non-toxic, biodegradable products — safe for your Minooka family and the environment.",
        link: "/eco-friendly-cleaning",
      },
      {
        icon: "🏢",
        title: "Apartment Cleaning Minooka",
        desc: "Professional apartment cleaning for renters and property managers throughout Minooka.",
        link: "/apartment-cleaning",
      },
    ],
    reviews: [
      {
        name: "Rachel T.",
        location: "Minooka, IL",
        text: "Not many cleaning companies come out to Minooka but DSM does and they are excellent. Professional, thorough, and my house looks amazing after every visit.",
        date: "February 2025",
      },
      {
        name: "Chris W.",
        location: "Minooka, IL",
        text: "DSM came highly recommended and they did not disappoint. Deep cleaned our Minooka home before a big family gathering and it was perfect. Will be booking regularly.",
        date: "January 2025",
      },
      {
        name: "Amy G.",
        location: "Minooka, IL",
        text: "Love that DSM services Minooka. They're consistent, professional, and the eco-friendly products are a huge plus for our household with young kids.",
        date: "March 2025",
      },
    ],
    faqs: [
      {
        question: "Do you clean homes in Minooka, IL?",
        answer:
          "Yes — we serve Minooka (60447) and travel from our Romeoville base to serve this growing community.",
      },
      {
        question: "Is there an extra charge for traveling to Minooka?",
        answer:
          "No travel surcharges. Our pricing is based on home size and service type only.",
      },
      {
        question: "What cleaning services are available in Minooka?",
        answer:
          "Standard, deep, move-out/in, recurring, eco-friendly, post-construction, Airbnb.",
      },
      {
        question: "How do I book cleaning in Minooka?",
        answer:
          "Fill out the form on this page or call (815) 246-2113.",
      },
      {
        question: "Do you serve all of Minooka including newer developments?",
        answer:
          "Yes — we serve the full 60447 zip code area including newer residential neighborhoods.",
      },
    ],
    nearbyAreas: [
      { city: "Romeoville", href: "/" },
      { city: "Joliet", href: "/joliet-il" },
      { city: "Shorewood", href: "/shorewood-il" },
      { city: "Plainfield", href: "/plainfield-il" },
      { city: "New Lenox", href: "/new-lenox-il" },
      { city: "Oswego", href: "/#contact" },
    ],
  },
];
