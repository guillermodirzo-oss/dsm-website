"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface StickyBookBarProps {
  /** Where "Book Online" goes. A "#anchor" renders a plain link so it scrolls in place. */
  bookHref?: string;
  bookLabel?: string;
  callHref?: string;
  /**
   * id of the page's hero section. The bar stays hidden until the hero's bottom
   * edge has scrolled above the viewport. Without it, the bar shows after 600px.
   */
  heroId?: string;
  /**
   * CSS selectors for elements that hide the bar while any part of them is on
   * screen. Point these at the lead form section and the footer so the bar
   * never sits on top of a submit button or the footer links.
   */
  hideWhenVisible?: string[];
}

/**
 * Bottom call-to-action bar for phones. Same look as the bar on /book:
 * white, thin top border, orange pill. Hidden at md and up.
 */
export default function StickyBookBar({
  bookHref = "/book",
  bookLabel = "Book Online",
  callHref = "tel:+18152462113",
  heroId,
  hideWhenVisible = [],
}: StickyBookBarProps) {
  const [visible, setVisible] = useState(false);
  const hideKey = hideWhenVisible.join("|");

  useEffect(() => {
    const selectors = hideKey ? hideKey.split("|") : [];

    const update = () => {
      const hero = heroId ? document.getElementById(heroId) : null;
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom <= 0
        : window.scrollY > 600;
      const covered = selectors.some((sel) => {
        const el = document.querySelector(sel);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      setVisible(pastHero && !covered);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [heroId, hideKey]);

  const bookClass =
    "flex-1 text-white font-bold text-sm py-3 px-4 rounded-full text-center my-auto hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg";
  const bookStyle = {
    backgroundColor: "#E8721C",
    minHeight: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;
  const tabIndex = visible ? 0 : -1;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 flex items-stretch gap-3 transition-opacity duration-300"
      style={{
        minHeight: "60px",
        paddingBottom: "env(safe-area-inset-bottom)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <a
        href={callHref}
        tabIndex={tabIndex}
        className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm flex-shrink-0 px-2 py-3"
        style={{ minHeight: "44px" }}
      >
        📞 Call
      </a>
      {bookHref.startsWith("#") ? (
        <a href={bookHref} tabIndex={tabIndex} className={bookClass} style={bookStyle}>
          {bookLabel}
        </a>
      ) : (
        <Link href={bookHref} tabIndex={tabIndex} className={bookClass} style={bookStyle}>
          {bookLabel}
        </Link>
      )}
    </div>
  );
}
