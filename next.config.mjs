/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // ─── NON-WWW → WWW (301) ───────────────────────────────────────────────
      // Fixes the 403 on dsmcleaningsolutions.com by redirecting all paths
      // to the canonical www version.
      {
        source: "/:path*",
        has: [{ type: "host", value: "dsmcleaningsolutions.com" }],
        destination: "https://www.dsmcleaningsolutions.com/:path*",
        permanent: true,
      },

      // ─── BOOKINGKOALA ADMIN SHORTCUT ──────────────────────────────────────
      {
        source: "/admin/:path*",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/admin/:path*",
        permanent: false,
      },

      // ─── OLD ABOUT / CONTACT / AUTH PAGES ─────────────────────────────────
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      // /contact is now a real page — no redirect needed (removed old /#contact redirect)
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/",
        permanent: true,
      },
      {
        source: "/onlinequote",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/get-a-quote",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/booking",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/booknow",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/book-now",
        destination: "/book",
        permanent: true,
      },

      // ─── LOGIN / ACCOUNT REDIRECTS ─────────────────────────────────────────
      {
        source: "/log-in",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/signin",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/sign-in",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/account",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/my-account",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/portal",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },

      // ─── OLD CITY / AREA PAGES ─────────────────────────────────────────────
      {
        source: "/romeoville-il",
        destination: "/",
        permanent: true,
      },
      {
        source: "/romeoville",
        destination: "/",
        permanent: true,
      },

      // ─── OLD SERVICE PAGES ─────────────────────────────────────────────────
      {
        source: "/services",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/house-cleaning",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/cleaning-services",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/maid-service",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/recurring",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/deep-clean",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/move-out",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      {
        source: "/move-in-cleaning",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      {
        source: "/move-in-out-cleaning",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      // Old /move-in-move-out-cleaning-[city]-il URLs go to the matching
      // /move-out-cleaning-[city]-il page. The city list is explicit, one entry
      // per move-out page that exists, so no old URL can redirect to a 404.
      {
        source:
          "/move-in-move-out-cleaning-:city(bolingbrook|burr-ridge|downers-grove|hinsdale|homer-glen|joliet|lemont|lockport|minooka|naperville|new-lenox|oak-brook|plainfield|romeoville|shorewood|westmont)-il",
        destination: "/move-out-cleaning-:city-il",
        permanent: true,
      },
      // Woodridge has no move-out page, so it goes to the hub.
      {
        source: "/move-in-move-out-cleaning-woodridge-il",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      {
        source: "/green-cleaning",
        destination: "/eco-friendly-cleaning",
        permanent: true,
      },
      {
        source: "/eco-cleaning",
        destination: "/eco-friendly-cleaning",
        permanent: true,
      },
      // DSM no longer offers post-construction or Airbnb/short-term-rental
      // cleaning as of 2026-09-27. These used to point at dedicated pages;
      // now they point straight at the closest active service so no one
      // hits a chain.
      {
        source: "/post-construction",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/airbnb",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/short-term-rental",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/apartment",
        destination: "/apartment-cleaning",
        permanent: true,
      },
      {
        source: "/one-time",
        destination: "/one-time-cleaning",
        permanent: true,
      },

      // ─── NEWLY ADDED MISSING REDIRECTS ────────────────────────────────────

      // Internal page shortcuts
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/#faq",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/#faq",
        permanent: true,
      },

      // Booking / signup shortcuts
      {
        source: "/signup",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/sign-up",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/schedule-cleaning",
        destination: "/book",
        permanent: true,
      },

      // Estimate / pricing variants → contact form
      {
        source: "/estimate",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      // /free-estimate is now a real page — redirect removed
      // /pricing is now a real page — redirect removed
      {
        source: "/price",
        destination: "/pricing",
        permanent: true,
      },

      // Reviews / social proof
      {
        source: "/testimonials",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/testimonial",
        destination: "/reviews",
        permanent: true,
      },

      // Residential / service name variants
      {
        source: "/residential",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/residential-cleaning",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/spring-cleaning",
        destination: "/deep-cleaning",
        permanent: true,
      },
      // Retired SPRING75 landing page (the offer ended in May).
      {
        source: "/spring-special",
        destination: "/deep-cleaning",
        permanent: true,
      },

      // ─── DEEP CLEANING CITY REDIRECTS ─────────────────────────────────────
      {
        source: "/deep-cleaning/naperville",
        destination: "/deep-cleaning-naperville-il",
        permanent: true,
      },
      // Last 4 nested deep cleaning pages, moved to /deep-cleaning-{city}-il.
      {
        source: "/deep-cleaning/hinsdale",
        destination: "/deep-cleaning-hinsdale-il",
        permanent: true,
      },
      {
        source: "/deep-cleaning/oak-brook",
        destination: "/deep-cleaning-oak-brook-il",
        permanent: true,
      },
      {
        source: "/deep-cleaning/downers-grove",
        destination: "/deep-cleaning-downers-grove-il",
        permanent: true,
      },
      {
        source: "/deep-cleaning/burr-ridge",
        destination: "/deep-cleaning-burr-ridge-il",
        permanent: true,
      },

      // ─── BLOG POSTS CONSOLIDATED INTO LANDING PAGES ───────────────────────
      // These posts targeted the same searches as a service or city page, so
      // each one now points at the page that should rank for that search.
      {
        source: "/blog/move-out-cleaning-romeoville-il",
        destination: "/move-out-cleaning-romeoville-il",
        permanent: true,
      },
      {
        source: "/blog/move-out-cleaning-joliet-il",
        destination: "/move-out-cleaning-joliet-il",
        permanent: true,
      },
      {
        source: "/blog/move-out-cleaning-lockport-il",
        destination: "/move-out-cleaning-lockport-il",
        permanent: true,
      },
      {
        source: "/blog/how-to-get-your-security-deposit-back-move-out-cleaning-naperville-bolingbrook",
        destination: "/move-out-cleaning-naperville-il",
        permanent: true,
      },
      {
        source: "/blog/deep-cleaning-service-joliet-il",
        destination: "/deep-cleaning-joliet-il",
        permanent: true,
      },
      {
        source: "/blog/deep-cleaning-service-bolingbrook-il",
        destination: "/deep-cleaning-bolingbrook-il",
        permanent: true,
      },
      {
        source: "/blog/deep-cleaning-service-naperville-checklist",
        destination: "/deep-cleaning-naperville-il",
        permanent: true,
      },
      {
        source: "/blog/what-to-expect-from-a-professional-deep-cleaning-service-plainfield-il",
        destination: "/deep-cleaning-plainfield-il",
        permanent: true,
      },
      {
        source: "/blog/maid-service-romeoville-il",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/blog/recurring-cleaning-service-romeoville-il",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/blog/house-cleaning-service-naperville-il",
        destination: "/naperville-il",
        permanent: true,
      },
      {
        source: "/blog/best-house-cleaning-service-joliet-il",
        destination: "/joliet-il",
        permanent: true,
      },
      {
        source: "/blog/best-house-cleaning-service-lockport-il",
        destination: "/lockport-il",
        permanent: true,
      },
      {
        source: "/blog/how-to-prepare-for-a-deep-cleaning-service",
        destination: "/blog/how-to-prepare-your-home-for-a-deep-clean",
        permanent: true,
      },
      {
        source: "/blog/deep-clean-vs-regular-cleaning",
        destination: "/standard-vs-deep-cleaning",
        permanent: true,
      },

      // ─── SEARCH CONSOLE 404 CLEANUP ───────────────────────────────────────
      // Wrong slugs and deleted pages that Google still crawls.
      {
        source: "/gift-card",
        destination: "/gift-cards",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/blog/move-out-cleaning-services",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      {
        source: "/blog/cleaninginfo",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/subcontractor-application",
        destination: "/contact",
        permanent: true,
      },
      // BookingKoala billing link. Send to the customer portal.
      {
        source: "/reauth-card",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },

      // ─── FOCUS ON 3 CORE SERVICES (2026-09-27) ────────────────────────────
      // DSM no longer offers post-construction or Airbnb/short-term-rental
      // cleaning. Every page for either service is deleted; these send
      // anyone who still has the old URL to the closest active service.
      {
        source: "/post-construction-cleaning",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/post-construction-cleaning-naperville-il",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/blog/post-construction-cleaning-romeoville-il",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/airbnb-cleaning",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/airbnb-cleaning-naperville-il",
        destination: "/recurring-cleaning",
        permanent: true,
      },

      // Apartment and condo cleaning consolidate onto the one /apartment-cleaning
      // hub instead of splitting Naperville-specific pages off on their own.
      {
        source: "/apartment-cleaning-naperville-il",
        destination: "/apartment-cleaning",
        permanent: true,
      },
      {
        source: "/condo-cleaning-naperville-il",
        destination: "/apartment-cleaning",
        permanent: true,
      },

      // Eco-friendly cleaning consolidates onto the one /eco-friendly-cleaning
      // page instead of a separate Plainfield page.
      {
        source: "/eco-friendly-cleaning-plainfield-il",
        destination: "/eco-friendly-cleaning",
        permanent: true,
      },

      // Duplicate blog posts that competed with an existing service page for
      // the same keyword. The service page is the better page, so the post
      // is gone and the URL forwards there.
      {
        source: "/blog/how-much-does-deep-cleaning-cost-naperville-il",
        destination: "/deep-cleaning-cost-naperville-il",
        permanent: true,
      },
      {
        source: "/blog/move-out-cleaning-checklist-naperville-il",
        destination: "/move-out-cleaning-naperville-il",
        permanent: true,
      },
      {
        source: "/blog/house-cleaning-services-bolingbrook-il",
        destination: "/bolingbrook-il",
        permanent: true,
      },
      {
        source: "/blog/deep-cleaning-service-naperville-il",
        destination: "/deep-cleaning-naperville-il",
        permanent: true,
      },

      // Old blog URLs still showing up in Search Console. Both 404 today.
      {
        source:
          "/blog/say-goodbye-to-cleaning-stress---why-our-one-time-and-recurring-cleaning-services-are-the-best-choi",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/blog/premium-cleaning-services",
        destination: "/",
        permanent: true,
      },

      // ─── STANDARD CLEANING MERGED INTO RECURRING CLEANING (2026-09-27) ────
      // /standard-cleaning is gone; recurring cleaning is the same service on
      // a schedule and now owns this content. Each city page merges into its
      // general city page, except Romeoville, which never had a separate
      // general city page and goes straight to the homepage.
      {
        source: "/standard-cleaning",
        destination: "/recurring-cleaning",
        permanent: true,
      },
      {
        source: "/standard-cleaning-romeoville-il",
        destination: "/",
        permanent: true,
      },
      {
        source: "/standard-cleaning-plainfield-il",
        destination: "/plainfield-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-bolingbrook-il",
        destination: "/bolingbrook-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-homer-glen-il",
        destination: "/homer-glen-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-joliet-il",
        destination: "/joliet-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-lemont-il",
        destination: "/lemont-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-lockport-il",
        destination: "/lockport-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-minooka-il",
        destination: "/minooka-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-naperville-il",
        destination: "/naperville-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-new-lenox-il",
        destination: "/new-lenox-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-shorewood-il",
        destination: "/shorewood-il",
        permanent: true,
      },
      {
        source: "/standard-cleaning-westmont-il",
        destination: "/westmont-il",
        permanent: true,
      },

      // ─── MOVE-OUT CHECKLIST MERGED INTO THE HUB (2026-09-28) ─────────────
      // /move-out-cleaning now carries the full room-by-room checklist.
      {
        source: "/move-out-cleaning-checklist",
        destination: "/move-out-cleaning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
