# DSM Cleaning Solutions: Project Context

## Business
- **Name:** DSM Cleaning Solutions
- **Owner:** Memo
- **Type:** Residential house cleaning, family owned
- **Base city:** Romeoville, IL 60446
- **Address:** 402 Tallman Ave, Romeoville, IL 60446. The website address must always match the Google Business Profile exactly: always "402 Tallman Ave", never "Avenue" or any other format. It is the streetAddress in every DSM PostalAddress in JSON-LD and the location line in the footer.
- **Phone:** (815) 246-2113
- **Hours:** Monday to Sunday, 7am to 9pm. Online booking is available 24 hours at /book.
- **Satisfaction guarantee:** 48 hours
- **Rating:** 5.0 from 46 Google reviews
- **Insurance:** Insured and bonded. Not licensed. Never claim a license.
- **Since:** Locally owned in Romeoville since 2020.
- **Cancellations:** No fee to cancel, skip or reschedule (the old $70 late-cancellation fee was retired Oct 2026). We ask customers to let us know as early as they can so we can adjust the schedule.
- **Deposit:** No deposit required to book (the old $70 deposit was retired Oct 2026). Payment is due on the day of cleaning, by check, cash or credit card. Renters' security deposits are a different thing: move-out pages and blog posts talk about getting a landlord's deposit back, and that copy stays.
- **Recurring service:** the same cleaner comes every recurring visit. No contracts, and no fees to cancel, skip or reschedule a clean. The recurring rate is locked for 12 months from the first recurring clean, as long as the home and the schedule stay the same. New clients do not need a deep clean first, and the recurring discount applies from the very first recurring clean. Every two weeks is the most popular schedule. Recurring clients can have bed sheets changed at no extra charge on request.

## Service Area (16 cities)
Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Shorewood, New Lenox, Lemont, Homer Glen, Westmont, Minooka, Hinsdale, Oak Brook, Downers Grove, Burr Ridge.

Romeoville's hub is the homepage (/). Every other city has a hub at /{city}-il.

## Core Services
1. **Standard / Recurring Cleaning** (/recurring-cleaning)
2. **Deep Cleaning** (/deep-cleaning)
3. **Move-In / Move-Out Cleaning** (/move-out-cleaning)

DSM does not offer post-construction or Airbnb cleaning. Those old URLs redirect, and no page should offer either service.

## Page Inventory (city pages)
| Type | URL pattern | Pages |
|---|---|---|
| City hub | /{city}-il | 15 (Romeoville is the homepage) |
| Deep cleaning | /deep-cleaning-{city}-il | 16 |
| Move-out cleaning | /move-out-cleaning-{city}-il | 16 |
| Recurring (maid service) | /recurring-cleaning-{city}-il | 4, listed below |

Recurring city pages:
- /recurring-cleaning-naperville-il
- /recurring-cleaning-plainfield-il
- /recurring-cleaning-bolingbrook-il
- /recurring-cleaning-joliet-il

All four are one component (`components/RecurringCityPage.tsx`) fed by one data file (`lib/recurringCities.ts`). To add a city, add an entry there, create its route file, and add the URL to `app/sitemap.ts`.

## Prices
`lib/pricing.ts` is the only source for prices. Pages and schema read from it; never type a price by hand.

| Service | Displayed starting price |
|---|---|
| Standard | from $145 |
| Deep | from $300 |
| Move-out | from $395 |

Recurring discounts: weekly 20%, biweekly 15%, monthly 10%.

Recurring "from" prices are the smallest standard home with the discount applied, rounded up to the whole dollar so they are never lower than what BookingKoala charges: weekly from $116, every two weeks from $124, monthly from $131. Read them from WEEKLY_FROM, BIWEEKLY_FROM and MONTHLY_FROM in `lib/pricing.ts`.

For a home size with no listed tier, `priceForHome()` in `lib/pricing.ts` works the price out with BookingKoala's rate formula: service base + bedroom add-on + bathroom add-on + square footage tier. The build fails if a listed tier and the formula ever disagree. The pricing cards on the recurring city pages use it through `recurringVisitPrice()`, which rounds up to the whole dollar.

## Current Offers
| Code | Service | Deal | Runs through |
|---|---|---|---|
| FALL75 | Deep cleaning | $75 off plus free oven cleaning | November 30, 2026 |
| MOVE75 | Move-out cleaning | $75 off | October 31, 2026 |

All promotions live in `lib/offers.ts`. Never type a promo code or promo price into a page directly.

To renew or end an offer, change its last day in `lib/offers.ts`. To add one, add an entry to OFFER_LIST there (one offer per service). Each offer carries its code, service, description, start and end dates, and its discounted "from" price worked out from `lib/pricing.ts`. Every offer line on a page is wrapped in `<Offer>` (components/Offer.tsx) with a fallback that reads naturally once the offer is over, so it comes down on its own at 11:59:59 PM Central on the last day, with no deploy. The homepage hero lists every running offer through `components/OfferBanner.tsx`. Any page that shows an offer must export `revalidate = 3600`. Offers never go in page titles, meta descriptions, Open Graph or JSON-LD, because those get cached long after an offer ends.

To see the site as it will look after an offer ends, build locally with a fake clock: `NEXT_PUBLIC_OFFER_NOW=2026-12-01T12:00:00-06:00 npm run build`. Never set that variable in Vercel.

## Checklist Facts
- Windows means sills and inside glass only. We never clean window tracks. (Shower door tracks are fine.)
- Deep cleaning includes the refrigerator exterior only.
- Move-out cleaning includes the refrigerator inside and out.

## Customers
Move-out customers are mostly home buyers and sellers, not renters. Write move-out copy for people selling a house or moving into one.

## Live Site & Repo
- **Live site:** https://www.dsmcleaningsolutions.com
- **Repo:** guillermodirzo-oss/dsm-website
- **Auto-deploys:** Vercel on every push to main
- **Bare domain:** dsmcleaningsolutions.com (no www) is sent to www by Vercel's domain setting, before any redirect in `next.config.mjs` runs. A host-based rule in `next.config.mjs` never fires in production (checked October 2026), so a non-www link to an old URL always takes two hops: one to www, one to the new URL. The fix is to change the link where it lives. The BookingKoala booking form still links to dsmcleaningsolutions.com/terms-conditions; it should point to https://www.dsmcleaningsolutions.com/terms-and-conditions.

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Vercel (hosting)
- BookingKoala (online booking, embedded on /book)
- HubSpot (lead forms)

## Key Files
| File | Purpose |
|---|---|
| `app/layout.tsx` | Global metadata, title template, and the one LocalBusiness JSON-LD |
| `lib/pricing.ts` | Every price tier, the BookingKoala rate formula and recurring discounts |
| `lib/offers.ts` | Every promotion: code, service, description, dates, discounted price, and the helpers that decide whether it is running |
| `lib/siteConstants.ts` | SERVICE_CITIES, the 16-city list the LocalBusiness schema is built from; re-exports the review count and rating |
| `lib/realReviews.ts` | Verbatim Google reviews, REVIEW_COUNT and REVIEW_RATING |
| `lib/seoTitles.ts` | Title tag formats for every city page |
| `lib/recurringCities.ts` | Data, FAQ, metadata and schema for the recurring city pages |
| `components/RecurringCityPage.tsx` | The recurring city page itself |
| `lib/standardChecklist.ts` | The standard checklist, shared by /recurring-cleaning and the recurring city pages |
| `components/Offer.tsx` | Wrapper that expires offer copy automatically |
| `components/OfferBanner.tsx` | One line per running offer, for the homepage hero. Disappears when no offer is running |
| `components/HeroRating.tsx` | The star rating line for orange heroes. White on the darkest brand orange, which meets WCAG AA. Use it instead of coloring the text by hand |
| `components/Navigation.tsx` | Site nav |
| `components/Footer.tsx` | Footer with service and city links |
| `components/CityPageTemplate.tsx` | Shared template for the city hub pages |
| `lib/cityData.ts` | Data for the city hub pages |
| `lib/blogData.ts` | Blog post entries |
| `next.config.mjs` | All redirects and www canonicalization |
| `app/sitemap.ts` | XML sitemap |
| `app/robots.ts` | Crawl rules (the only robots source; there is no public/robots.txt) |

## Form Usage Rules: Critical
There are TWO HubSpot lead forms on this site. Never mix them up, and never change either GUID.

| Form | Components | HubSpot Form GUID | Used On |
|---|---|---|---|
| Residential | `components/LeadForm.tsx`, `components/CityDeepCleanForm.tsx` (both submit through `lib/submitToHubspot.ts`) | `c702ab87-4ac4-4fcf-adcd-80603639cb6e` | All residential pages, homepage, city pages, contact page |
| Commercial/Office | `components/OfficeLeadForm.tsx` (submits through `lib/submitOfficeLeadToHubspot.ts`) | `fda5d224-97f4-4b79-ba1b-ff0ef512ce7f` | Office and commercial cleaning pages only |

**Rule: Never place a residential form on commercial pages. Never place `OfficeLeadForm.tsx` on residential pages.**

Never change form payloads, guards or the Step 1 partial capture. Never send test leads to HubSpot. Never modify the BookingKoala embed on /book.

## SEO Rules: Never Break These
1. Never add "| DSM Cleaning Solutions" at the page level. The root layout's title template adds it. Two exceptions use absolute titles with no brand, 60 characters or fewer: city pages build theirs in `lib/seoTitles.ts` ("{Service} {City} IL | From {price} | {rating} Stars", or "Maid Service {City} IL | Weekly From {price} | {rating} Stars" on the recurring pages), and blog posts use their `metaTitle`.
2. Schema address is always 402 Tallman Ave, Romeoville, IL 60446, coordinates 41.6336, -88.0904 (the Google Business Profile pin). Never Plainfield.
3. Review count is 46 and rating 5.0 everywhere. Read them from REVIEW_COUNT and REVIEW_RATING; never type them by hand.
4. Schema hours are Monday through Sunday, opens "07:00", closes "21:00". Visible hours read "7am to 9pm".
5. Satisfaction guarantee is always 48 hours. Never 24 or 72.
6. Prices in schema must match page copy. Both come from `lib/pricing.ts`.
7. FAQ answers shown on a page must match its FAQPage schema word for word. Build the schema from the same array the page renders. Blog posts get theirs from `faqSchemaFromContent()` in `lib/blogData.ts`, which reads the post's own "Frequently Asked Questions" section, so never write a blog FAQ schema by hand.
8. Internal links must point to live internal pages: never to BookingKoala URLs, and never to a URL that redirects.
9. Every new page must be added to `app/sitemap.ts`. Standalone blog routes that aren't in `lib/blogData.ts` need their own entry.
10. Never alter existing design, layout, colors, or content unless explicitly instructed.
11. Service city pages use the pattern /{service}-{city}-il. Never create nested /service/city routes.
12. Blog posts answer questions (cost, checklists, how to prepare, comparisons). A blog post must never target the same search as a service page or city page, for example "move-out cleaning {city}" or "maid service {city}". Those searches belong to the landing pages.

## Copy Rules
- No em dashes, no en dashes, no double hyphens.
- Banned phrases: "top-to-bottom reset", "incredibly thorough", "delivering exceptional results", "we take pride in", "look no further".
- Write like a local business owner: short, plain sentences.
- Reviews are verbatim from Google, stored in `lib/realReviews.ts`. Never write or edit a review.
- Review attributions use the format "Name, City IL". Google doesn't publish reviewer cities, so when the city isn't known, show the name alone. Never guess a city. The owner has confirmed three: Thomas Cheng (Shorewood), Donna Slas (Romeoville) and Jae Mac (Joliet). They are kept in OWNER_CONFIRMED_CITIES in `lib/realReviews.ts` and shown on the recurring city pages.

## Overall Goal
Dominate local SEO for house cleaning keywords across all 16 service area cities in the Will County and DuPage County suburbs of Chicago.
