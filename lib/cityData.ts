export interface CityData {
  name: string;
  slug: string;
  state: string;
  zips: string[];
  distance: string;
  tagline: string;
  localIntro: string[];
  whyChoose: string[];
  neighborhoods: string[];
  landmarks: string[];
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
      "Naperville is consistently ranked as one of the best places to live in America — and its residents expect the best. DSM Cleaning Solutions brings professional, eco-friendly house cleaning to Naperville families in neighborhoods like Cress Creek, Hobson West, Ashbury, and White Eagle who want a spotless home without the hassle.",
      "As a locally owned company based just 14 miles away in Romeoville, we understand the Naperville community. We're not a national franchise with a call center — we're your southwest suburban neighbors, and we treat your home with the care it deserves.",
      "From established neighborhoods near the Riverwalk and Centennial Beach area to newer developments in the 60563, 60564, and 60565 zip codes, we serve all of Naperville with the same high standard of professional cleaning.",
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
    neighborhoods: ["Cress Creek", "Hobson West", "Ashbury", "White Eagle", "River Run", "Tall Grass"],
    landmarks: ["Riverwalk", "Centennial Beach", "Downtown Naperville"],
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
        question: "What neighborhoods in Naperville does DSM Cleaning serve?",
        answer:
          "We serve all of Naperville including Cress Creek, Hobson West, Ashbury, White Eagle, River Run, and Tall Grass, across zip codes 60540, 60563, 60564, and 60565. If you're near the Riverwalk or in the newer 60564/60565 areas, we cover you.",
      },
      {
        question: "How much does house cleaning cost in Naperville, IL?",
        answer:
          "Pricing depends on your home size and the type of service. Standard recurring cleanings typically start around $120–$180. Deep cleanings start around $200. Contact us for a free, no-obligation estimate.",
      },
      {
        question: "Do you offer same-day or same-week cleaning in Naperville?",
        answer:
          "We work hard to accommodate same-week requests. Because we're based just 14 miles away in Romeoville, we can often schedule Naperville clients quickly. Contact us and we'll do our best.",
      },
      {
        question: "Are your cleaners background checked for Naperville homes?",
        answer:
          "Yes — every member of our cleaning team undergoes a thorough background check before ever entering a client's home. Fully insured and bonded too.",
      },
      {
        question: "Do you use eco-friendly cleaning products in Naperville homes?",
        answer:
          "Absolutely. We use non-toxic, biodegradable cleaning products on every job. Safe for children, pets, and the environment — perfect for Naperville families.",
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
      "Bolingbrook is right next door to our home base in Romeoville — which means faster response times, same-week availability, and a team that truly knows the community. DSM Cleaning Solutions serves neighborhoods like Naperville Acres, Americana Estates, Pheasant Chase, and Stillwater with the same professional care.",
      "Whether you're near the Promenade Bolingbrook shopping area, a family home near Hidden Lakes, or an established neighborhood off Weber Road, we service all of Bolingbrook with meticulous attention to detail. Our proximity means we can often accommodate last-minute requests that national companies can't.",
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
    neighborhoods: ["Naperville Acres", "Americana Estates", "Pheasant Chase", "Stillwater", "Fox Run", "Lakewood Crossing"],
    landmarks: ["Promenade Bolingbrook", "Hidden Lakes", "Pelican Harbor Aquatic Park"],
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
        question: "What neighborhoods in Bolingbrook does DSM Cleaning serve?",
        answer:
          "We serve all of Bolingbrook including Naperville Acres, Americana Estates, Pheasant Chase, Stillwater, Fox Run, and Lakewood Crossing — across zip codes 60440 and 60490.",
      },
      {
        question: "Do you offer same-day cleaning in Bolingbrook, IL?",
        answer:
          "Yes — because we're based just 5 miles away in Romeoville, we frequently have same-week and sometimes same-day availability for Bolingbrook clients. Call (815) 246-2113 to check.",
      },
      {
        question: "How much does house cleaning cost in Bolingbrook?",
        answer:
          "Pricing depends on home size and service type. Standard cleanings start around $120–$180 and deep cleanings start around $200. Contact us for a free, no-obligation estimate.",
      },
      {
        question: "Are you insured to clean homes in Bolingbrook, IL?",
        answer:
          "Fully insured and bonded on every job. Your home and belongings are completely protected on every visit.",
      },
      {
        question: "Do you bring your own cleaning supplies to Bolingbrook?",
        answer:
          "Yes — we bring all eco-friendly, non-toxic cleaning supplies to every job. Nothing required from you.",
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
      "From the historic neighborhoods on the east side to growing residential areas like Ingalls Park and Rock Run in the southwest, we serve all of Joliet across its multiple zip codes. Our team is background-checked, professional, and brings all eco-friendly supplies to every job.",
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
    neighborhoods: ["Ingalls Park", "Rock Run", "Cathedral Area", "Forest Park", "Woodgate", "White Oak Subdivision"],
    landmarks: ["Rialto Theatre", "Joliet Iron Works Historic Site", "Pilcher Park Nature Center", "Splash Station"],
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
        question: "What neighborhoods in Joliet does DSM Cleaning serve?",
        answer:
          "We serve all of Joliet including Ingalls Park, Rock Run, Cathedral Area, Forest Park, and Woodgate, across all zip codes: 60431, 60432, 60433, 60435, and 60436.",
      },
      {
        question: "Do you offer same-day cleaning in Joliet, IL?",
        answer:
          "We often accommodate same-week requests for Joliet clients. Based just 10 miles away in Romeoville, we can typically schedule you quickly. Call (815) 246-2113 to check availability.",
      },
      {
        question: "What cleaning services are available in Joliet, IL?",
        answer:
          "Full range: standard, deep, move-out/in, recurring, apartment, eco-friendly, post-construction, Airbnb.",
      },
      {
        question: "How much does house cleaning cost in Joliet?",
        answer:
          "Standard cleanings start around $120–$180 for an average home. Deep cleanings start around $200+. Call or contact us for a free estimate tailored to your Joliet home.",
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
      "From single-family homes along the Cass Avenue Corridor to Oakwood Estates and condos throughout the 60559 zip code, we handle all types of residences in Westmont with equal attention to detail.",
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
    neighborhoods: ["Westmont Crossing", "Drummond Commons", "Oakwood Estates", "Village Center District", "Cass Avenue Corridor"],
    landmarks: ["Ty Warner Park", "St. Joseph Creek Trail", "Westmont Community Park"],
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
      {
        question: "What neighborhoods in Westmont do you clean?",
        answer:
          "We serve the full 60559 zip code including Westmont Crossing, Drummond Commons, Oakwood Estates, and the Village Center area.",
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
      "From homes in the Heritage Fields subdivision near the I&M Canal corridor to newer developments in the 60491 area, we clean all types of residences in Lockport with the same meticulous attention to detail.",
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
    neighborhoods: ["Heritage Fields", "Division Street area", "Lockport Township", "Broken Arrow Subdivision", "Farrell Road area"],
    landmarks: ["Illinois & Michigan Canal National Heritage Corridor", "Dellwood Park", "Lockport Historic District", "Will County Courthouse"],
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
      {
        question: "What neighborhoods in Lockport does DSM serve?",
        answer:
          "We serve all of Lockport (60441 & 60491) including Heritage Fields, Division Street area, Lockport Township, and Broken Arrow Subdivision.",
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
      "Whether your home overlooks the Des Plaines River Valley or sits in neighborhoods like Glenmoor or Lemont Hills, we bring the same thorough, detail-oriented approach to every clean in the 60439 zip code.",
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
    neighborhoods: ["Lemont Main Street District", "Glenmoor", "Lemont Hills", "Keepataw Forest area", "Sagamore Hills"],
    landmarks: ["Des Plaines River Valley", "Centennial Park", "Lemont Quarries", "Sandhills Wildlife Area"],
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
      {
        question: "What neighborhoods in Lemont does DSM serve?",
        answer:
          "We serve all of Lemont (60439) including the Main Street District, Glenmoor, Lemont Hills, Sagamore Hills, and the Keepataw Forest area.",
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
      "Based just 9 miles away in Romeoville, we're a local company that understands Homer Glen's neighborhoods and the standards its residents expect. From large homes on wooded lots near the 143rd Street area to newer construction in Goodings Grove, we handle all property types.",
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
    neighborhoods: ["Goodings Grove", "Bell Road Corridor", "143rd Street area", "Broken Arrow", "Cedar Ridge"],
    landmarks: ["Homer Lake Forest Preserve", "Highland Lake", "Tampier Slough Nature Area", "Messenger Woods Nature Preserve"],
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
      {
        question: "What neighborhoods in Homer Glen does DSM serve?",
        answer:
          "We serve all of Homer Glen (60491) including Goodings Grove, Cedar Ridge, the 143rd Street corridor, Bell Road area, and Broken Arrow.",
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
      "Whether you're in established neighborhoods like Sanctuary, White Oak, or Arbor Hills, or one of the newer developments throughout New Lenox, we deliver the same high-quality clean to every home in the 60451 zip code.",
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
    neighborhoods: ["Sanctuary", "White Oak", "Arbor Hills", "Spencer Crossing", "Founders Pointe"],
    landmarks: ["New Lenox Community Park", "Lincoln-Way Central High School area", "Hadley Valley Preserve", "Arbury Hills"],
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
      {
        question: "What neighborhoods in New Lenox does DSM serve?",
        answer:
          "We serve all of New Lenox (60451) including Sanctuary, White Oak, Arbor Hills, Spencer Crossing, and Founders Pointe.",
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
      "From homes in Brook Crossing and Shorewood Glen to neighborhoods throughout the 60404 zip code, we deliver consistent, thorough cleaning that Shorewood families can count on.",
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
    neighborhoods: ["Brook Crossing", "Shorewood Glen", "Willowbend", "River Crossing", "Morningside Estates"],
    landmarks: ["Heritage Woods of Shorewood", "I&M Canal Trail", "Aux Sable Creek", "Rivervale Park"],
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
      {
        question: "What neighborhoods in Shorewood does DSM serve?",
        answer:
          "We serve all of Shorewood (60404) including Brook Crossing, Shorewood Glen, Willowbend, River Crossing, and Morningside Estates.",
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
    name: "Burr Ridge",
    slug: "burr-ridge",
    state: "IL",
    zips: ["60527"],
    distance: "about 22 miles from our Romeoville base",
    tagline: "White-glove deep cleaning for Burr Ridge's executive homes — detail-oriented, eco-friendly, fully insured.",
    localIntro: [
      "Burr Ridge is one of the Chicago area's most prestigious residential communities — a village of executive estates, custom builds, and meticulous homeowners who hold every detail to a high standard. DSM Cleaning Solutions brings professional, white-glove deep cleaning to Burr Ridge homes that match those expectations.",
      "Located along the Route 83 corridor between Hinsdale and Willowbrook, Burr Ridge homes tend toward the larger end — spacious square footage, formal dining rooms, finished basements, and multiple full baths. Our deep cleaning process is designed for exactly this type of property: thorough, methodical, and never rushed.",
      "Whether you're near Harveys Lake, the Burr Ridge Village Center, or one of the area's upscale residential enclaves, our team arrives fully equipped with professional-grade, eco-friendly products and a detailed checklist built for large, high-end homes.",
    ],
    whyChoose: [
      "Experienced cleaning team for large executive homes",
      "Fully insured and bonded — your luxury home is protected",
      "Eco-friendly, non-toxic products safe for the whole family",
      "Detail-oriented approach built for high-end properties",
      "48-hour satisfaction guarantee on every deep clean",
      "Flexible scheduling — Mon–Sun, 8am–6pm",
      "Background-checked, professional cleaning team",
      "Serving all of Burr Ridge: 60527",
    ],
    neighborhoods: ["Burr Ridge Village Center area", "Harveys Lake area", "County Line Road corridor", "Route 83 corridor", "Old Farm Road area"],
    landmarks: ["Burr Ridge Village Center", "Harveys Lake", "Route 83 corridor", "County Line Road"],
    services: [
      { icon: "🧹", title: "Deep Cleaning in Burr Ridge", desc: "Thorough top-to-bottom deep cleaning for Burr Ridge executive homes — every room, every surface, every detail.", link: "/deep-cleaning" },
      { icon: "🏠", title: "Standard House Cleaning in Burr Ridge", desc: "Recurring weekly, biweekly, or monthly maid service to keep your Burr Ridge home consistently spotless.", link: "/standard-cleaning" },
      { icon: "📦", title: "Move-Out Cleaning Burr Ridge", desc: "Comprehensive move-out cleaning designed to satisfy even the most detail-oriented buyers and landlords.", link: "/move-out-cleaning" },
      { icon: "📅", title: "Recurring Maid Service Burr Ridge", desc: "Consistent, scheduled cleaning plans for Burr Ridge homes — your team, your schedule.", link: "/recurring-cleaning" },
      { icon: "🌿", title: "Eco-Friendly Cleaning Burr Ridge", desc: "Green cleaning using non-toxic products — safe for your Burr Ridge family and the environment.", link: "/eco-friendly-cleaning" },
      { icon: "🏢", title: "Apartment Cleaning Burr Ridge", desc: "Professional apartment and condo cleaning for Burr Ridge properties.", link: "/apartment-cleaning" },
    ],
    reviews: [
      { name: "Patricia H.", location: "Burr Ridge, IL", text: "Our home is 4,800 sq ft and DSM handled the deep clean flawlessly. Every room was done to a standard I hadn't seen from a cleaning service before. Methodical and truly professional.", date: "March 2025" },
      { name: "Edward L.", location: "Burr Ridge, IL", text: "We have high expectations for our Burr Ridge home and DSM met every one of them. They treated our house with real care and got into details that other cleaners skip entirely.", date: "February 2025" },
      { name: "Claire B.", location: "Burr Ridge, IL", text: "DSM does our deep clean every quarter. Consistent, thorough, and they use products that are safe for our children. That level of trust is hard to find.", date: "January 2025" },
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in Burr Ridge, IL?",
        answer: "Deep cleaning in Burr Ridge starts around $225 after seasonal discounts. Because Burr Ridge homes tend to be larger — many ranging from 3,500 to 6,000+ square feet — most deep cleans fall in the $350–$550 range depending on your home's size and current condition. Contact us for a free, personalized estimate.",
      },
      {
        question: "Do you serve all of Burr Ridge, IL?",
        answer: "Yes — we serve all of Burr Ridge (60527), including homes near the Burr Ridge Village Center, Harveys Lake, the Route 83 corridor, and County Line Road. We also serve neighboring Hinsdale, Oak Brook, and Willowbrook.",
      },
      {
        question: "How long does a deep cleaning take in Burr Ridge?",
        answer: "Most deep cleans take 3–6 hours, but Burr Ridge's larger executive homes often require 5–7 hours to complete properly. We never rush a job — every room gets the same thorough attention regardless of size.",
      },
    ],
    nearbyAreas: [
      { city: "Hinsdale", href: "/deep-cleaning/hinsdale" },
      { city: "Oak Brook", href: "/deep-cleaning/oak-brook" },
      { city: "Downers Grove", href: "/deep-cleaning/downers-grove" },
      { city: "Westmont", href: "/westmont-il" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Willowbrook", href: "/#contact" },
    ],
  },
  {
    name: "Hinsdale",
    slug: "hinsdale",
    state: "IL",
    zips: ["60521", "60522"],
    distance: "about 23 miles from our Romeoville base",
    tagline: "White-glove deep cleaning for Hinsdale's historic and luxury homes — fully insured, eco-friendly, satisfaction guaranteed.",
    localIntro: [
      "Hinsdale is one of the most storied and affluent villages in the Chicago suburbs — a community where classic architecture meets modern renovation, and where homeowners genuinely expect white-glove service. DSM Cleaning Solutions brings that level of care to every deep cleaning job in Hinsdale.",
      "The village's housing stock ranges from century-old frame homes near downtown Hinsdale to sprawling newer construction properties, and our deep cleaning approach is tailored to both. We understand the standards Hinsdale homeowners hold — and we take them personally.",
      "Whether you're a few blocks from the Metra BNSF commuter line, near Hinsdale Central, or in one of the village's established residential enclaves, DSM arrives fully prepared with eco-friendly, professional-grade products and a room-by-room checklist that leaves nothing behind.",
    ],
    whyChoose: [
      "Trusted by Hinsdale homeowners for high-standard deep cleans",
      "Fully insured and bonded — your Hinsdale home is protected",
      "Eco-friendly, non-toxic products safe for families",
      "Experienced with both historic and newer construction homes",
      "48-hour satisfaction guarantee on every job",
      "Flexible scheduling — Mon–Sun, 8am–6pm",
      "Background-checked, professional cleaning team",
      "Serving all of Hinsdale: 60521 & 60522",
    ],
    neighborhoods: ["Downtown Hinsdale area", "Hinsdale Central area", "Surrey Ridge", "Katherine Avenue area", "Burns Woods area"],
    landmarks: ["Downtown Hinsdale", "Hinsdale Central High School area", "Metra BNSF station area", "Katherine Legge Memorial Park"],
    services: [
      { icon: "🧹", title: "Deep Cleaning in Hinsdale", desc: "Comprehensive top-to-bottom deep cleaning for Hinsdale homes — from historic properties to modern builds.", link: "/deep-cleaning" },
      { icon: "🏠", title: "Standard House Cleaning in Hinsdale", desc: "Recurring weekly, biweekly, or monthly maid service for Hinsdale homes.", link: "/standard-cleaning" },
      { icon: "📦", title: "Move-Out Cleaning Hinsdale", desc: "Detailed move-out cleaning that meets the standards of Hinsdale's buyers, landlords, and agents.", link: "/move-out-cleaning" },
      { icon: "📅", title: "Recurring Maid Service Hinsdale", desc: "Consistent, scheduled cleaning plans for Hinsdale homeowners.", link: "/recurring-cleaning" },
      { icon: "🌿", title: "Eco-Friendly Cleaning Hinsdale", desc: "Non-toxic, biodegradable cleaning products safe for your Hinsdale family.", link: "/eco-friendly-cleaning" },
      { icon: "🏢", title: "Apartment Cleaning Hinsdale", desc: "Professional apartment and condo cleaning throughout Hinsdale.", link: "/apartment-cleaning" },
    ],
    reviews: [
      { name: "Marilyn C.", location: "Hinsdale, IL", text: "DSM treats our Hinsdale home with the kind of care you rarely see from a cleaning service. Thorough, respectful, and they use non-toxic products I feel good about. Highly recommend.", date: "February 2025" },
      { name: "Thomas W.", location: "Hinsdale, IL", text: "We hired DSM for a deep clean on our 1920s Hinsdale home and they were exceptional. They knew how to work carefully around older finishes while still getting everything spotless.", date: "March 2025" },
      { name: "Sandra K.", location: "Hinsdale, IL", text: "Consistent, professional, and genuinely detail-oriented. Our Hinsdale home looks better after a DSM visit than it has since we first moved in. Worth every cent.", date: "January 2025" },
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in Hinsdale, IL?",
        answer: "Deep cleaning in Hinsdale starts around $225 after seasonal discounts. Hinsdale's mix of large historic homes and newer construction typically places most deep cleans in the $300–$500 range, depending on size and condition. We provide a free, no-obligation estimate before every job.",
      },
      {
        question: "Do you serve all of Hinsdale, IL?",
        answer: "Yes — we serve all of Hinsdale across both zip codes (60521 and 60522), from downtown Hinsdale and the Hinsdale Central area to residential neighborhoods throughout the village. We also serve nearby Burr Ridge, Oak Brook, and Western Springs.",
      },
      {
        question: "How long does a deep cleaning take in Hinsdale?",
        answer: "A typical deep cleaning in Hinsdale takes 3–6 hours. Larger historic homes or newer construction with more square footage may take 5–7 hours. We work at the pace needed to do the job right — not to meet a time limit.",
      },
    ],
    nearbyAreas: [
      { city: "Burr Ridge", href: "/deep-cleaning/burr-ridge" },
      { city: "Oak Brook", href: "/deep-cleaning/oak-brook" },
      { city: "Downers Grove", href: "/deep-cleaning/downers-grove" },
      { city: "Westmont", href: "/westmont-il" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Western Springs", href: "/#contact" },
    ],
  },
  {
    name: "Oak Brook",
    slug: "oak-brook",
    state: "IL",
    zips: ["60523"],
    distance: "about 24 miles from our Romeoville base",
    tagline: "Premium deep cleaning for Oak Brook's luxury homes — thorough, eco-friendly, satisfaction guaranteed.",
    localIntro: [
      "Oak Brook is widely regarded as one of the Midwest's most prestigious residential communities — a DuPage County village known for luxury homes, the iconic Oakbrook Center, and homeowners who hold their properties to an exceptional standard. DSM Cleaning Solutions delivers the premium, detail-first deep cleaning that Oak Brook homes deserve.",
      "From estates near Butler National Golf Club to elegant homes throughout the 60523 zip code, our team approaches every Oak Brook deep cleaning with the same discipline: a methodical room-by-room process, professional-grade eco-friendly products, and zero shortcuts. Premium results, every visit.",
      "As a family-owned business with roots in the southwest suburbs, we've built our reputation on delivering consistent, high-quality cleaning for demanding homeowners. We're not a franchise with a high turnover rate — we're a dedicated team that values your trust and earns it on every job.",
    ],
    whyChoose: [
      "Premium cleaning for Oak Brook's luxury homes",
      "Fully insured and bonded — complete protection",
      "Eco-friendly, professional-grade products",
      "Methodical, no-shortcuts deep cleaning process",
      "48-hour satisfaction guarantee",
      "Flexible scheduling — Mon–Sun, 8am–6pm",
      "Background-checked, professional team",
      "Serving all of Oak Brook: 60523",
    ],
    neighborhoods: ["Timber Trails", "Saddle Brook area", "Butler National Golf Club area", "Oak Brook Club area", "Brook Forest"],
    landmarks: ["Oakbrook Center", "Butler National Golf Club area", "McDonald's campus area", "Oak Brook Park District"],
    services: [
      { icon: "🧹", title: "Deep Cleaning in Oak Brook", desc: "Premium top-to-bottom deep cleaning for Oak Brook luxury homes — thorough, eco-friendly, and satisfaction guaranteed.", link: "/deep-cleaning" },
      { icon: "🏠", title: "Standard House Cleaning in Oak Brook", desc: "Recurring weekly, biweekly, or monthly maid service for Oak Brook homes.", link: "/standard-cleaning" },
      { icon: "📦", title: "Move-Out Cleaning Oak Brook", desc: "Comprehensive move-out cleaning for Oak Brook properties — built to satisfy exacting buyer and landlord standards.", link: "/move-out-cleaning" },
      { icon: "📅", title: "Recurring Maid Service Oak Brook", desc: "Reliable, scheduled cleaning service for Oak Brook homeowners.", link: "/recurring-cleaning" },
      { icon: "🌿", title: "Eco-Friendly Cleaning Oak Brook", desc: "Non-toxic, biodegradable cleaning products safe for Oak Brook families.", link: "/eco-friendly-cleaning" },
      { icon: "🏢", title: "Apartment Cleaning Oak Brook", desc: "Professional apartment and condo cleaning throughout Oak Brook.", link: "/apartment-cleaning" },
    ],
    reviews: [
      { name: "Robert J.", location: "Oak Brook, IL", text: "DSM deep cleaned our Oak Brook home before a dinner party and the results were extraordinary. Every surface was immaculate. They understood this home needed premium-level care and they delivered it.", date: "March 2025" },
      { name: "Christine L.", location: "Oak Brook, IL", text: "I've had several cleaning services over the years in Oak Brook and DSM stands apart. Professional, detail-oriented, and they always do what they say they'll do. Trust is everything in this business.", date: "January 2025" },
      { name: "Michael T.", location: "Oak Brook, IL", text: "Quarterly deep cleans with DSM for over a year now. The consistency is what I appreciate most — every visit is as thorough as the first. Genuinely impressed by this team.", date: "February 2025" },
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in Oak Brook, IL?",
        answer: "Deep cleaning in Oak Brook starts around $225 after seasonal discounts. Most Oak Brook homes — which tend toward larger square footage and premium finishes — fall in the $350–$550+ range. We provide a detailed free estimate before every job with no surprises.",
      },
      {
        question: "Do you serve all of Oak Brook, IL?",
        answer: "Yes — we serve all of Oak Brook (60523), including areas near Oakbrook Center, Butler National Golf Club, and residential neighborhoods throughout the village. We also serve neighboring Hinsdale, Burr Ridge, Elmhurst, and Downers Grove.",
      },
      {
        question: "How long does a deep cleaning take in Oak Brook?",
        answer: "Deep cleanings in Oak Brook typically take 4–7 hours depending on the size and condition of the home. Luxury homes with multiple bathrooms, large kitchens, and extensive square footage may require additional time. We never compromise thoroughness for speed.",
      },
    ],
    nearbyAreas: [
      { city: "Hinsdale", href: "/deep-cleaning/hinsdale" },
      { city: "Burr Ridge", href: "/deep-cleaning/burr-ridge" },
      { city: "Downers Grove", href: "/deep-cleaning/downers-grove" },
      { city: "Westmont", href: "/westmont-il" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Elmhurst", href: "/#contact" },
    ],
  },
  {
    name: "Downers Grove",
    slug: "downers-grove",
    state: "IL",
    zips: ["60515", "60516"],
    distance: "about 22 miles from our Romeoville base",
    tagline: "Reliable deep cleaning for Downers Grove families — thorough, eco-friendly, fully insured.",
    localIntro: [
      "Downers Grove is a well-established DuPage County suburb — a community of tree-lined streets, historic homes, newer builds, and busy families who value reliability as much as quality. DSM Cleaning Solutions has become the trusted deep cleaning partner for Downers Grove homeowners who want a thorough clean they can actually count on.",
      "From homes near downtown Downers Grove and the Metra BNSF commuter hub to neighborhoods surrounding Lyman Woods and Belmont Prairie, we serve all of Downers Grove across both zip codes. Our team understands the mix of property types here — everything from classic 1940s bungalows to newer construction in the 60516 area — and adapts our approach accordingly.",
      "Busy families in Downers Grove come back to DSM because we show up on time, follow through on every detail, and leave their home genuinely cleaner than when we arrived. Reliability and thoroughness aren't extras — they're our baseline.",
    ],
    whyChoose: [
      "Reliable, detail-oriented cleaning for Downers Grove families",
      "Fully insured and bonded — your home is fully protected",
      "Eco-friendly products safe for kids and pets",
      "Experience with both historic and newer builds",
      "48-hour satisfaction guarantee",
      "Flexible scheduling — Mon–Sun, 8am–6pm",
      "Background-checked, professional team",
      "Serving all of Downers Grove: 60515 & 60516",
    ],
    neighborhoods: ["Downtown Downers Grove area", "Lyman Woods area", "Belmont Prairie area", "Main Street corridor", "Gilbert area", "Fairmount neighborhoods"],
    landmarks: ["Downtown Downers Grove", "Metra BNSF commuter hub", "Lyman Woods Nature Preserve", "Belmont Prairie Nature Preserve"],
    services: [
      { icon: "🧹", title: "Deep Cleaning in Downers Grove", desc: "Comprehensive top-to-bottom deep cleaning for Downers Grove homes — from bungalows to newer builds.", link: "/deep-cleaning" },
      { icon: "🏠", title: "Standard House Cleaning in Downers Grove", desc: "Reliable recurring weekly, biweekly, or monthly maid service for busy Downers Grove families.", link: "/standard-cleaning" },
      { icon: "📦", title: "Move-Out Cleaning Downers Grove", desc: "Thorough move-out cleaning to help Downers Grove renters and homeowners get their full security deposit back.", link: "/move-out-cleaning" },
      { icon: "📅", title: "Recurring Maid Service Downers Grove", desc: "Consistent scheduled cleaning service tailored to your Downers Grove home and schedule.", link: "/recurring-cleaning" },
      { icon: "🌿", title: "Eco-Friendly Cleaning Downers Grove", desc: "Non-toxic, biodegradable products safe for your Downers Grove family and pets.", link: "/eco-friendly-cleaning" },
      { icon: "🏢", title: "Apartment Cleaning Downers Grove", desc: "Professional apartment and condo cleaning for Downers Grove renters and property managers.", link: "/apartment-cleaning" },
    ],
    reviews: [
      { name: "Heather N.", location: "Downers Grove, IL", text: "DSM is exactly what I was looking for — reliable, thorough, and they show up when they say they will. Our Downers Grove home has never looked better. Finally found a cleaning service I can trust.", date: "March 2025" },
      { name: "Kevin P.", location: "Downers Grove, IL", text: "Hired DSM for a deep clean on our older Downers Grove home. They knew how to handle the details without being rough on the finishes. Excellent work from a genuinely professional team.", date: "February 2025" },
      { name: "Lisa A.", location: "Downers Grove, IL", text: "I have three kids and two dogs — my house needed a serious deep clean. DSM delivered. They used eco-friendly products and left every room spotless. I've already booked them for recurring service.", date: "January 2025" },
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in Downers Grove, IL?",
        answer: "Deep cleaning in Downers Grove starts around $225 after seasonal discounts. Most homes in Downers Grove — a mix of 1940s-era homes and newer builds — fall in the $250–$425 range depending on size and condition. We provide free, no-obligation estimates before every job.",
      },
      {
        question: "Do you serve all of Downers Grove, IL?",
        answer: "Yes — we serve all of Downers Grove across both zip codes: 60515 and 60516. From downtown Downers Grove and the Metra BNSF area to neighborhoods near Lyman Woods and Belmont Prairie, our team covers the full village. We also serve nearby Oak Brook, Westmont, Lisle, and Woodridge.",
      },
      {
        question: "How long does a deep cleaning take in Downers Grove?",
        answer: "Most deep cleanings in Downers Grove take 3–5 hours for a typical single-family home. Larger homes or those with more bathrooms and finished basements may take up to 6 hours. We always finish what we start — no room gets skipped.",
      },
    ],
    nearbyAreas: [
      { city: "Oak Brook", href: "/deep-cleaning/oak-brook" },
      { city: "Hinsdale", href: "/deep-cleaning/hinsdale" },
      { city: "Burr Ridge", href: "/deep-cleaning/burr-ridge" },
      { city: "Westmont", href: "/westmont-il" },
      { city: "Naperville", href: "/naperville-il" },
      { city: "Lisle", href: "/#contact" },
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
      "From established homes near downtown Minooka to newer developments like Minooka Commons, Lakewood Trails, and Heritage Place throughout the 60447 zip code, we bring the same thorough, detailed cleaning approach to every property.",
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
    neighborhoods: ["Minooka Commons", "Heritage Place", "Lakewood Trails", "Indian Trails", "Rock Run Estates"],
    landmarks: ["Minooka Community High School area", "Aux Sable Creek corridor", "Heritage Prairie Farm", "DuPage River access"],
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
      {
        question: "What neighborhoods in Minooka does DSM serve?",
        answer:
          "We serve all of Minooka (60447) including Minooka Commons, Heritage Place, Lakewood Trails, Indian Trails, and Rock Run Estates.",
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

// ─── COMBO PAGE DATA (city + service landing pages) ───────────────────────────

export interface ComboPageData {
  slug: string;
  city: string;
  state: string;
  service: string;
  heroHeading: string;
  heroSubheading: string;
  metaTitle: string;
  metaDescription: string;
  serviceDescription: string;
  checklist: string[];
  faqs: Array<{ question: string; answer: string }>;
  internalLinks: Array<{ label: string; href: string }>;
}

export const comboPages: ComboPageData[] = [
  {
    slug: "deep-cleaning-bolingbrook-il",
    city: "Bolingbrook",
    state: "IL",
    service: "Deep Cleaning",
    heroHeading: "Professional Deep Cleaning in Bolingbrook, IL",
    heroSubheading:
      "Top-to-bottom deep cleaning for Bolingbrook homes — baseboards, appliances, grout, and every corner most cleaners miss. Backed by our 48-hour satisfaction guarantee.",
    metaTitle: "Deep Cleaning Bolingbrook IL | DSM Cleaning Solutions",
    metaDescription:
      "Professional deep cleaning in Bolingbrook, IL. DSM Cleaning Solutions delivers thorough, detail-oriented deep cleans for homes across Bolingbrook. 5-star rated. Book today.",
    serviceDescription:
      "A deep cleaning is a full reset for your home — not just surfaces, but the spots that accumulate grime over weeks and months. Our Bolingbrook deep cleaning service covers every room from ceiling fans to baseboards, inside appliances, grout lines, and all the areas a standard clean doesn't reach.",
    checklist: [
      "Inside and outside of microwave",
      "Inside oven scrubbed",
      "Stovetop and burners cleaned",
      "Cabinet fronts wiped down",
      "Countertops and backsplash sanitized",
      "Sink and faucet polished",
      "Toilet scrubbed inside, outside, and behind",
      "Tub, shower, and grout scrubbed",
      "Shower doors cleaned",
      "Mirror polished",
      "Baseboards wiped in all rooms",
      "Ceiling fans dusted",
      "Blinds and window sills cleaned",
      "Light switches and door handles sanitized",
      "Floors vacuumed and mopped throughout",
    ],
    faqs: [
      {
        question: "How long does a deep cleaning take in Bolingbrook?",
        answer:
          "Most deep cleans in a 3-bedroom Bolingbrook home take 3–5 hours with our team. Larger homes or homes that haven't been deep cleaned recently may take longer. We'll give you an honest estimate when you book.",
      },
      {
        question: "How is a deep cleaning different from a standard cleaning?",
        answer:
          "A standard clean maintains a tidy home — surfaces, floors, high-traffic areas. A deep cleaning goes further: inside appliances, baseboards, ceiling fans, grout lines, behind furniture. We recommend a deep clean every 3–6 months or as a one-time reset before starting recurring service.",
      },
      {
        question: "Do I need to be home during the deep cleaning?",
        answer:
          "You don't need to be home. Many of our Bolingbrook clients provide entry and let us handle the rest. We're fully insured and trusted by homeowners across the area.",
      },
      {
        question: "Is there a satisfaction guarantee?",
        answer:
          "Yes — every deep cleaning is backed by our 48-hour satisfaction guarantee. If you're not happy with any area we cleaned, contact us within 48 hours and we'll come back and re-clean it free of charge.",
      },
    ],
    internalLinks: [
      { label: "Bolingbrook House Cleaning", href: "/bolingbrook-il" },
      { label: "Deep Cleaning Services", href: "/deep-cleaning" },
      { label: "Move-Out Cleaning Bolingbrook", href: "/move-out-cleaning-bolingbrook-il" },
      { label: "Standard Cleaning Bolingbrook", href: "/standard-cleaning-bolingbrook-il" },
    ],
  },
  {
    slug: "move-out-cleaning-bolingbrook-il",
    city: "Bolingbrook",
    state: "IL",
    service: "Move-Out Cleaning",
    heroHeading: "Move-Out Cleaning in Bolingbrook, IL",
    heroSubheading:
      "Professional move-out cleaning for Bolingbrook rentals and homes — designed to help you get your full security deposit back. 48-hour satisfaction guarantee.",
    metaTitle: "Move-Out Cleaning Bolingbrook IL | DSM Cleaning Solutions",
    metaDescription:
      "Move-out cleaning in Bolingbrook, IL. DSM Cleaning Solutions helps renters and homeowners leave their property spotless. 5-star rated, 48-hour guarantee. Book online.",
    serviceDescription:
      "Moving out of your Bolingbrook home or apartment is stressful enough — the last thing you need is to lose your security deposit over cleaning. DSM Cleaning Solutions provides thorough move-out cleanings designed to meet landlord and property manager standards across Bolingbrook and Will County.",
    checklist: [
      "Inside oven and stovetop scrubbed",
      "Inside refrigerator cleaned",
      "Inside microwave cleaned",
      "All cabinet interiors and fronts wiped",
      "Countertops and backsplash sanitized",
      "Sink and faucet polished",
      "All bathrooms scrubbed top to bottom",
      "Tub, shower, toilet, sink, mirror",
      "Grout and tile cleaned",
      "Baseboards wiped in every room",
      "Window sills and blinds cleaned",
      "Light switches and door handles sanitized",
      "Inside all closets wiped",
      "Floors vacuumed and mopped throughout",
    ],
    faqs: [
      {
        question: "Will a move-out cleaning help me get my deposit back in Bolingbrook?",
        answer:
          "It significantly improves your chances. Our move-out cleaning is designed to meet the cleaning standards most Bolingbrook landlords and property managers require. We also back every clean with our 48-hour satisfaction guarantee — if they flag anything, we come back free.",
      },
      {
        question: "Do I need to have everything moved out before you arrive?",
        answer:
          "Yes — all furniture and belongings need to be out before we start. We need full access to floors, closets, cabinets, and appliances to do a thorough job.",
      },
      {
        question: "How far in advance should I book my move-out cleaning in Bolingbrook?",
        answer:
          "We recommend booking at least 5–7 days before your move-out date. Late spring and summer are our busiest season in Bolingbrook — the earlier you book, the better your chances of getting your preferred date.",
      },
      {
        question: "Do you clean inside appliances?",
        answer:
          "Yes. Our move-out cleaning includes inside the oven, inside the refrigerator, and inside the microwave — areas that are commonly flagged during landlord inspections.",
      },
    ],
    internalLinks: [
      { label: "Bolingbrook House Cleaning", href: "/bolingbrook-il" },
      { label: "Move-Out Cleaning Services", href: "/move-out-cleaning" },
      { label: "Deep Cleaning Bolingbrook", href: "/deep-cleaning-bolingbrook-il" },
      { label: "Standard Cleaning Bolingbrook", href: "/standard-cleaning-bolingbrook-il" },
    ],
  },
  {
    slug: "standard-cleaning-bolingbrook-il",
    city: "Bolingbrook",
    state: "IL",
    service: "Standard Cleaning",
    heroHeading: "Standard House Cleaning in Bolingbrook, IL",
    heroSubheading:
      "Reliable recurring maid service for Bolingbrook homes — weekly, bi-weekly, or monthly. Consistent cleaners, consistent results, 48-hour satisfaction guarantee.",
    metaTitle: "House Cleaning Service Bolingbrook IL | DSM Cleaning Solutions",
    metaDescription:
      "Recurring house cleaning in Bolingbrook, IL. DSM Cleaning Solutions offers weekly, bi-weekly, and monthly maid service for Bolingbrook homes. 5-star rated. Book online.",
    serviceDescription:
      "Keeping a clean home in Bolingbrook shouldn't be a second job. DSM Cleaning Solutions provides dependable recurring maid service — weekly, bi-weekly, or monthly — so your home stays consistently clean without the effort. We send the same trusted team every visit so you always know who's coming through your door.",
    checklist: [
      "Kitchen countertops wiped and sanitized",
      "Stovetop cleaned",
      "Microwave exterior and interior wiped",
      "Sink scrubbed and polished",
      "Bathroom toilets, sinks, tubs, and showers cleaned",
      "Mirrors polished",
      "All floors vacuumed and mopped",
      "Furniture dusted",
      "Trash emptied in all rooms",
      "Beds made (linens changed if left out)",
      "Window sills dusted",
      "High-traffic surfaces sanitized",
    ],
    faqs: [
      {
        question: "How often should I schedule house cleaning in Bolingbrook?",
        answer:
          "Most Bolingbrook homeowners choose bi-weekly service — it keeps the home consistently clean without the cost of weekly visits. Families with kids or pets often prefer weekly. We also offer monthly service for lighter maintenance.",
      },
      {
        question: "Will I get the same cleaner every visit?",
        answer:
          "We do our best to send the same team to your Bolingbrook home every visit. Consistency matters — your team learns your preferences and your home's specific needs over time.",
      },
      {
        question: "What's the difference between standard cleaning and deep cleaning?",
        answer:
          "A standard clean maintains a tidy home between deep cleans — surfaces, floors, bathrooms, and kitchen. A deep cleaning goes further: inside appliances, baseboards, grout, ceiling fans. We recommend starting with a deep clean and then moving to recurring standard service.",
      },
      {
        question: "Is there a satisfaction guarantee on recurring cleaning?",
        answer:
          "Yes — every standard cleaning is backed by our 48-hour satisfaction guarantee. If anything isn't up to your standard, contact us within 48 hours and we'll make it right, free.",
      },
    ],
    internalLinks: [
      { label: "Bolingbrook House Cleaning", href: "/bolingbrook-il" },
      { label: "Standard Cleaning Services", href: "/standard-cleaning" },
      { label: "Deep Cleaning Bolingbrook", href: "/deep-cleaning-bolingbrook-il" },
      { label: "Move-Out Cleaning Bolingbrook", href: "/move-out-cleaning-bolingbrook-il" },
    ],
  },
];
