/**
 * The locked values the build checks enforce. These mirror CONTEXT.md.
 *
 * If one of these really changes (new address, new booking embed), change it
 * here in the same commit, on purpose. Everything else the checks compare
 * against is read from the site's own source (REVIEW_COUNT, the sitemap).
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const SITE = "https://www.dsmcleaningsolutions.com";

export const BUSINESS = {
  streetAddress: "402 Tallman Ave",
  addressLocality: "Romeoville",
  postalCode: "60446",
  latitude: 41.6336,
  longitude: -88.0904,
};

/** HubSpot form GUIDs. Never change. */
export const FORMS = [
  { file: "lib/submitToHubspot.ts", guid: "c702ab87-4ac4-4fcf-adcd-80603639cb6e", label: "residential" },
  { file: "lib/submitOfficeLeadToHubspot.ts", guid: "fda5d224-97f4-4b79-ba1b-ff0ef512ce7f", label: "commercial" },
];

/**
 * The BookingKoala embed on /book, exactly as it is (whitespace collapsed).
 * The owner's rule: never modify it.
 */
export const BOOK_EMBED = {
  file: "app/book/page.tsx",
  html: `<iframe src="https://dsmcleaningsolutions.bookingkoala.com/booknow?embed=true" style="border:none;height:1800px;display:block" width="100%" scrolling="auto" loading="lazy" onload="var s=document.getElementById('bk-skeleton');if(s)s.style.display='none';" ></iframe>`,
};

/** Pages that must stay out of Google (and out of the sitemap). */
export const NOINDEX_PAGES = ["/thank-you", "/quote-thank-you", "/deep-clean-offer", "/photo-library", "/pixel-test"];

/** Copy rules from CONTEXT.md, checked on the visible text of every page. */
export const BANNED_PHRASES = [
  "top-to-bottom reset",
  "incredibly thorough",
  "delivering exceptional results",
  "we take pride in",
  "look no further",
  "100% satisfaction guarantee",
  "same cleaner",
  "your cleaner",
];

/**
 * Wording that is usually wrong but needs a person to judge, so it's reported
 * without blocking. "Insured & Bonded" is the label; "fully insured" isn't.
 */
export const REVIEW_PHRASES = ["fully insured"];

/** The live review count, read from lib/realReviews.ts so it never goes stale. */
export function reviewCount() {
  const src = readFileSync(path.join(ROOT, "lib/realReviews.ts"), "utf8");
  const m = src.match(/export const REVIEW_COUNT\s*=\s*(\d+)/);
  if (!m) throw new Error("Could not find REVIEW_COUNT in lib/realReviews.ts");
  return Number(m[1]);
}
