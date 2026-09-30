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

## Service Area (16 cities)
Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Shorewood, New Lenox, Lemont, Homer Glen, Westmont, Minooka, Hinsdale, Oak Brook, Downers Grove, Burr Ridge.

Romeoville's hub is the homepage (/). Every other city has a hub at /{city}-il.

## Core Services
1. **Standard / Recurring Cleaning** (/recurring-cleaning)
2. **Deep Cleaning** (/deep-cleaning)
3. **Move-In / Move-Out Cleaning** (/move-out-cleaning)

DSM does not offer post-construction or Airbnb cleaning. Those old URLs redirect, and no page should offer either service.

## Prices
`lib/pricing.ts` is the only source for prices. Pages and schema read from it; never type a price by hand.

| Service | Displayed starting price |
|---|---|
| Standard | from $145 |
| Deep | from $300 |
| Move-out | from $395 |

Recurring discounts: weekly 20%, biweekly 15%, monthly 10%.

## Current Offers
| Code | Service | Deal | Runs through |
|---|---|---|---|
| FALL75 | Deep cleaning | $75 off plus free oven cleaning | November 30, 2026 |
| MOVE75 | Move-out cleaning | $75 off | October 31, 2026 |

Offers live in `lib/siteConstants.ts`. To renew or end one, change its last day there. Every offer line on a page is wrapped in `<Offer>` (components/Offer.tsx), so it comes down on its own at 11:59:59 PM Central on the last day, with no deploy. Offers never go in page titles, meta descriptions, Open Graph or JSON-LD, because those get cached long after an offer ends.

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
| `lib/pricing.ts` | Every price tier, recurring discounts, offer helpers |
| `lib/siteConstants.ts` | Offer codes, discounts and end dates; SERVICE_CITIES, the 16-city list the LocalBusiness schema is built from |
| `lib/realReviews.ts` | Verbatim Google reviews, REVIEW_COUNT and REVIEW_RATING |
| `components/Offer.tsx` | Wrapper that expires offer copy automatically |
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
1. Never add "| DSM Cleaning Solutions" at the page level. The root layout's title template adds it.
2. Schema address is always 402 Tallman Ave, Romeoville, IL 60446, coordinates 41.6299, -88.0890. Never Plainfield.
3. Review count is 46 and rating 5.0 everywhere. Read them from REVIEW_COUNT and REVIEW_RATING; never type them by hand.
4. Schema hours are Monday through Sunday, opens "07:00", closes "21:00". Visible hours read "7am to 9pm".
5. Satisfaction guarantee is always 48 hours. Never 24 or 72.
6. Prices in schema must match page copy. Both come from `lib/pricing.ts`.
7. FAQ answers shown on a page must match its FAQPage schema word for word.
8. Internal links must point to live internal pages: never to BookingKoala URLs, and never to a URL that redirects.
9. Every new page must be added to `app/sitemap.ts`. Standalone blog routes that aren't in `lib/blogData.ts` need their own entry.
10. Never alter existing design, layout, colors, or content unless explicitly instructed.

## Copy Rules
- No em dashes, no en dashes, no double hyphens.
- Banned phrases: "top-to-bottom reset", "incredibly thorough", "delivering exceptional results", "we take pride in", "look no further".
- Write like a local business owner: short, plain sentences.
- Reviews are verbatim from Google, stored in `lib/realReviews.ts`. Never write or edit a review.
- Review attributions use the format "Name, City IL". Google doesn't publish reviewer cities, so when the city isn't known, show the name alone. Never guess a city.

## Overall Goal
Dominate local SEO for house cleaning keywords across all 16 service area cities in the Will County and DuPage County suburbs of Chicago.
