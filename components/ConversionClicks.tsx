"use client";

import { useEffect } from "react";

// GA4 events for the two actions that never reach a thank-you page:
//   click_to_call  a tap on any tel: link
//   book_click     a click on an internal link to /book (not counted on /book itself)
// Mounted once in app/layout.tsx. One delegated listener on document. It never
// calls preventDefault and never waits, so dialing and navigation are untouched.
// Clicks inside the BookingKoala iframe on /book happen in another document and
// never reach this listener. If gtag is not loaded yet, the click is not counted.
type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

const SITE_HOST = /^(www\.)?dsmcleaningsolutions\.com$/;

export default function ConversionClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      try {
        const gtag = (window as unknown as { gtag?: Gtag }).gtag;
        if (typeof gtag !== "function") return;
        const target = e.target;
        if (!(target instanceof Element)) return;
        const link = target.closest("a[href]");
        if (!(link instanceof HTMLAnchorElement)) return;

        const href = link.getAttribute("href") ?? "";
        const pagePath = window.location.pathname;
        const text = (link.textContent ?? "").replace(/\s+/g, " ").trim() || (link.getAttribute("aria-label") ?? "").trim();
        const linkText = text.slice(0, 60);

        if (href.startsWith("tel:")) {
          gtag("event", "click_to_call", { page_path: pagePath, link_text: linkText, transport_type: "beacon" });
          return;
        }

        const url = new URL(link.href, window.location.href);
        const internal = url.origin === window.location.origin || SITE_HOST.test(url.hostname);
        if (internal && url.pathname === "/book" && pagePath !== "/book") {
          gtag("event", "book_click", { page_path: pagePath, link_text: linkText, transport_type: "beacon" });
        }
      } catch {
        // Tracking must never get in the way of a click.
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
