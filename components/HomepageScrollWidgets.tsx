"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * HomepageScrollWidgets — client-only interactive elements for app/page.tsx.
 *
 * Split into a separate "use client" component so app/page.tsx stays a
 * server component (preserving its static generation benefits) while still
 * getting interactive scroll behaviour.
 *
 * Exports:
 *   ScrollIndicator   — animated bouncing chevron; clicking scrolls to #services
 *   StickyMobileBar   — fixed bottom bar on mobile, fades in after 300px scroll
 */

export function ScrollIndicator() {
  const handleClick = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to services"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce bg-transparent border-none cursor-pointer p-3 rounded-full hover:bg-white/10 transition-colors"
      style={{ minWidth: "44px", minHeight: "44px" }}
    >
      <svg
        className="w-6 h-6 text-white/70"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check immediately in case page loaded scrolled
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        background: "#1a5c38",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
      }}
      aria-hidden={!visible}
    >
      <div className="flex items-stretch gap-2 px-3" style={{ minHeight: "60px" }}>
        <a
          href="tel:+18152462113"
          className="flex items-center gap-1.5 text-white font-semibold text-sm flex-shrink-0 py-3"
          style={{ minHeight: "44px" }}
        >
          📞 (815) 246-2113
        </a>
        <Link
          href="/book"
          className="flex-1 flex items-center justify-center text-center font-bold text-sm rounded-full my-2 px-4 hover:opacity-90 active:scale-95 transition-all duration-200"
          style={{
            backgroundColor: "#E8721C",
            color: "#fff",
            minHeight: "44px",
            boxShadow: "0 4px 15px rgba(232,114,28,0.4)",
          }}
        >
          Book Now →
        </Link>
      </div>
    </div>
  );
}
