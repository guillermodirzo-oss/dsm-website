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
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
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
        destination: "/standard-cleaning",
        permanent: true,
      },
      {
        source: "/cleaning-services",
        destination: "/standard-cleaning",
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
      {
        source: "/post-construction",
        destination: "/post-construction-cleaning",
        permanent: true,
      },
      {
        source: "/airbnb",
        destination: "/airbnb-cleaning",
        permanent: true,
      },
      {
        source: "/short-term-rental",
        destination: "/airbnb-cleaning",
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
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/login",
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
        destination: "/standard-cleaning",
        permanent: true,
      },
      {
        source: "/residential-cleaning",
        destination: "/standard-cleaning",
        permanent: true,
      },
      {
        source: "/spring-cleaning",
        destination: "/deep-cleaning",
        permanent: true,
      },

      // ─── DEEP CLEANING CITY REDIRECTS ─────────────────────────────────────
      {
        source: "/deep-cleaning/naperville",
        destination: "/deep-cleaning-naperville-il",
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
    ];
  },
};

export default nextConfig;
