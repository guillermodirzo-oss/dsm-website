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
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/get-a-quote",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/booking",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },
      {
        source: "/book",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },
      {
        source: "/booknow",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },
      {
        source: "/book-now",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
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
      {
        source: "/move-in-move-out-cleaning-plainfield-il",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      {
        source: "/move-in-move-out-cleaning-romeoville-il",
        destination: "/move-out-cleaning",
        permanent: true,
      },
      {
        source: "/move-in-move-out-cleaning-naperville-il",
        destination: "/move-out-cleaning",
        permanent: true,
      },
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
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/contact",
        permanent: true,
      },

      // Booking / signup shortcuts
      {
        source: "/signup",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },
      {
        source: "/sign-up",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },
      {
        source: "/schedule-cleaning",
        destination: "https://dsmcleaningsolutions.bookingkoala.com/booknow",
        permanent: true,
      },

      // Estimate / pricing variants → contact form
      {
        source: "/estimate",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/free-estimate",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/price",
        destination: "/contact",
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

      // Missing move-in/move-out city variant
      {
        source: "/move-in-move-out-cleaning-bolingbrook-il",
        destination: "/move-out-cleaning",
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
    ];
  },
};

export default nextConfig;
