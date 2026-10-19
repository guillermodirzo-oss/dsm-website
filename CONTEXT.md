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
- **Insurance:** Insured and bonded. Not licensed. Never claim a license. No insurance claim since 2020. The label on badges, pills, trust bars and card titles is "Insured & Bonded", never "Fully Insured".
- **Team:** Recurring clients get the SAME TEAM every visit (a team, not one cleaner). Never write "same cleaner" or "your cleaner". Cleaners are background-checked and drug tested. Cleaners are trained. There is NO certification: never call them "certified".
- **Products:** Regular cleans use DSM's standard products. Eco-friendly, non-toxic products are used only when the customer adds the "Eco-Friendly Green Products" add-on (owner, October 2026): $30 per clean on one-time standard, deep and move-in/move-out cleans, $15 per visit on recurring plans (weekly, every two weeks, monthly). Both prices live in `lib/addOns.ts`. The eco products are NOT certified by anyone: never say "certified safe". Never claim DSM's products are safe for kids and pets.
- **Same-day service:** available.
- **Since:** Locally owned in Romeoville since 2020.
- **Growth focus:** DSM is not investing in new pages or content for Minooka or areas south of Joliet. Existing pages for those cities stay live and Minooka stays in the service area, but new work targets Romeoville and cities north and east: Bolingbrook, Lemont, Homer Glen, Lockport, Plainfield, Naperville, Westmont, Downers Grove, Hinsdale, Oak Brook, Burr Ridge, and Joliet.
- **Cancellations:** No fee to cancel, skip or reschedule (the old $70 late-cancellation fee was retired Oct 2026). We ask customers to let us know as early as they can so we can adjust the schedule.
- **Deposit:** No deposit required to book (the old $70 deposit was retired Oct 2026). Payment is due on the day of cleaning, by check, cash or credit card. Renters' security deposits are a different thing: move-out pages and blog posts talk about getting a landlord's deposit back, and that copy stays.
- **Recurring service:** the same team comes every recurring visit. No contracts, and no fees to cancel, skip or reschedule a clean. The recurring rate is locked for 12 months from the first recurring clean, as long as the home and the schedule stay the same. New clients do not need a deep clean first, and the recurring discount applies from the very first recurring clean. Every two weeks is the most popular schedule. Recurring clients can have bed sheets changed at no extra charge on request.

## Service Area (16 cities)
Romeoville, Plainfield, Naperville, Bolingbrook, Joliet, Lockport, Shorewood, New Lenox, Lemont, Homer Glen, Westmont, Minooka, Hinsdale, Oak Brook, Downers Grove, Burr Ridge.

Romeoville's hub is the homepage (/). Every other city has a hub at /{city}-il.

Zip codes: `CITY_ZIPS` in `lib/cityData.ts` is the only source. Pages say "We clean homes in {City} zip codes {zips}." through `zipLine()`, or name the zips through `zipCodesPhrase()`. Short lists ("60544, 60585 & 60586", or with "and"/"or") come from `zipCodesShort()`. Never type a list of neighborhoods or subdivisions; the zip line replaces it. The owner confirmed every city's zip codes (October 2026): Plainfield 60544, 60585, 60586; Lockport 60441 only (60491 is Homer Glen's); Hinsdale 60521 only.

Each city page shows its zip line once outside the FAQ. The 13 hubs with their own "Zip Codes We Serve" and landmarks section pass `ownZipSection` to `CityPageTemplate`, which then leaves its own zip block out; Bolingbrook has no section of its own, so the template shows its zip line.

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

## Local Proof
City pages carry one real, anonymized client story with an example price computed from `lib/pricing.ts`. The stories and their prices live in `lib/localProof.ts` and render through `components/ClientStory.tsx`.

- Never invent a client story. Every story is the owner's own account of a real client, used word for word.
- Never use client names.
- Never type the example price. It is worked out from the home in the story (bedrooms, baths, square footage bracket, and the recurring discount if the client is on a plan) and rounded up to the whole dollar.
- No neighborhood or subdivision names anywhere on the site (city pages, the homepage, /service-areas, cost and office pages, blog posts, FAQs, schema and `lib/cityData.ts`) unless the owner confirms them. None are confirmed, so every `neighborhoods` list is empty. Use the zip line instead. Landmarks (parks, roads, downtowns, golf courses) are not neighborhoods and can stay.
- Never label a photo with a town unless the owner confirms it came from that town. None are confirmed yet. That covers alt text, captions and the Open Graph image alt. Work photo alt text comes from `lib/workPhotos.ts`, which describes what is in the photo and names no town and no service. The social share photo (/hero-image.png) uses OG_IMAGE_ALT from the same file. A town in a file name ("...-naperville-il.jpg") is only a file name.

Stories so far: Joliet (monthly), Plainfield (every two weeks), Bolingbrook (every two weeks), Lockport (monthly) and Lemont (move-in) hubs ("One of Our {City} Clients"), and the Lemont move-out page ("A Recent Lemont Move-In"). The Joliet, Plainfield and Bolingbrook clients are the same ones on the recurring city pages, so both read the same home from `lib/recurringCities.ts`.

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

Add-on prices live in `lib/addOns.ts` and nowhere else. /pricing lists every add-on from it. The FALL75 "free oven cleaning" value (`DEEP_OFFER.bonusValue` in `lib/offers.ts`) is the inside oven add-on price read from that file.

## Current Offers
| Code | Service | Deal | Runs through |
|---|---|---|---|
| FALL75 | Deep cleaning | $75 off plus free oven cleaning | November 30, 2026 |
| MOVE75 | Move-out cleaning | $75 off | October 31, 2026 |

All promotions live in `lib/offers.ts`. Never type a promo code or promo price into a page directly.

To renew or end an offer, change its last day in `lib/offers.ts`. To add one, add an entry to OFFER_LIST there (one offer per service). Each offer carries its code, service, description, start and end dates, and its discounted "from" price worked out from `lib/pricing.ts`. Every offer line on a page is wrapped in `<Offer>` (components/Offer.tsx) with a fallback that reads naturally once the offer is over, so it comes down on its own at 11:59:59 PM Central on the last day, with no deploy. The homepage hero lists every running offer through `components/OfferBanner.tsx`. Any page that shows an offer must export `revalidate = 3600`. Offers never go in page titles, meta descriptions, Open Graph or JSON-LD, because those get cached long after an offer ends.

To see the site as it will look after an offer ends, build locally with a fake clock: `NEXT_PUBLIC_OFFER_NOW=2026-12-01T12:00:00-06:00 npm run build`. Never set that variable in Vercel.

## Checklist Facts
The owner confirmed exactly what each service includes (October 2026). The lists live in two files and nowhere else: `lib/standardChecklist.ts` and `lib/deepChecklist.ts`. Pages render those files. Never type a checklist into a page, and never claim anything that is not on these lists.

**Standard and recurring clean includes:** inside the microwave; dusting ceiling fans; dusting window sills; wiping the hood and the oven and refrigerator exteriors; countertops; cabinet fronts; toilets and the area around them; soap scum and mildew in the shower and tub; sinks and fixtures; light switches; kitchen and bathroom vents; dusting furniture; making beds; wiping door handles; vacuuming upholstery. The owner also confirmed that these basics stay on the standard checklist: vacuuming and mopping floors, mirrors, blinds, cobwebs, trash and recycling, the stove exterior, and the laundry room (outside of the washer and dryer, dryer lint, sink, floor).

**Deep clean adds, on top of everything standard:** baseboards; doors and door frames; grout scrubbing; vacuuming under and behind furniture; inside window glass; light fixtures; degreasing the stovetop, hood vent and burners. Exactly these seven.

**Move-in/move-out adds:** inside the oven, inside the refrigerator, inside all cabinets and drawers, inside the dishwasher ("Clean inside the dishwasher"), closet shelves ("Wipe closet shelves") and the patio ("Sweep the patio"). Sweeping inside the garage is not included: it is an add-on. There is no final walkthrough or inspection with the client (not confirmed by the owner), so never claim one. Sentences about a landlord's or buyer's walkthrough are fine. For appliances, write "inside the oven, refrigerator, dishwasher and microwave" for move-in/move-out and "inside the microwave" for standard or deep, never "all appliances".

**Add-ons:** `lib/addOns.ts` is the only source, copied from the BookingKoala booking form: inside oven, inside fridge, inside cabinets (empty or full), inside dishwasher, interior windows (standard cleans only), detail baseboards and doors (standard cleans only), extra room (basement), sweep inside garage, homes with pets, eco-friendly green products. The first five are for standard and deep cleans (move-out already includes them); the last four also apply to move-out. Eco-friendly green products is the only add-on with two prices: one-time and recurring (`recurringPrice`). Nothing else is an add-on: no laundry, no exterior windows, no carpet cleaning, no organizing. Every page that names an add-on uses these names.

**Not offered by any service. Never claim these:** spot-cleaning walls; pulling appliances out or cleaning behind or under appliances; caulking detail; removing calcium or hard water deposits (no "mineral deposits", "limescale" or "descaling" either).

Rules that follow from the lists:
- Never describe a standard item as skipped by a standard clean or as a deep cleaning extra. The seven deep additions are the only things copy may name as skipped by a standard or recurring clean. Never write that a standard or recurring clean covers one of them.
- A deep clean is never required before regular visits. The wording is: "Many new clients start with a deep clean to get the house caught up, but it's not required. You can start with regular visits."
- Pages that describe cleaning without naming a service (/pet-friendly-cleaning, /cleaning-for-allergies) say that baseboards, the floor under and behind furniture, inside window glass and light fixtures are part of a deep clean.
- A blog checklist of things a homeowner or renter should do is advice, not a service list. Never follow one with "our service covers every item on this list".
- Windows means sills and inside glass only. We never clean window tracks. (Shower door tracks are fine.)
- Deep cleaning includes the refrigerator exterior only.
- Move-out cleaning includes the refrigerator inside and out.
- Every service (standard, recurring, deep, move-in/move-out) wipes cabinet FRONTS. Never list cabinet fronts among the things a standard or recurring clean skips.
- Only move-in/move-out cleans the INSIDE of cabinets as part of the service. Never write "cabinet interiors", "inside cabinets" or "inside and out" as included in a deep or standard clean.
- The cabinet add-on is "inside cabinets" (empty or full). Write "inside cabinets", never "inside kitchen cabinets". Where a page lists add-ons, write "Inside cabinets (add-on)".
- A deep clean never dusts cabinet tops or vacuums mattresses, and stairs are not a separate deep cleaning extra. Never list any of them as something a deep clean adds.
- For a deep clean, "inside appliances" means inside the microwave only. Write "inside the microwave". Inside the oven and inside the refrigerator are add-ons. A standard clean includes the inside of the microwave too, so it is never what sets a deep clean apart.
- Deep cleaning does NOT include cleaning inside the oven. Inside oven cleaning is an add-on. Never write that a deep clean "gets inside the oven" or list the oven interior on a deep cleaning checklist. The oven exterior is fine.
- During FALL75 (`lib/offers.ts`), inside oven cleaning is added free with a deep clean. That claim must only appear while FALL75 is active: put it inside `<Offer service="deep">`, and give it a fallback that does not mention the oven (or no fallback at all).
- Move-in and move-out cleaning ALWAYS includes inside the oven (and inside the refrigerator). It is never an add-on there.

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
| `lib/siteConstants.ts` | SERVICE_CITIES, the 16-city list the LocalBusiness schema is built from; the two Google links (GOOGLE_REVIEW_URL, GOOGLE_PROFILE_URL); re-exports the review count and rating |
| `lib/realReviews.ts` | Verbatim Google reviews, REVIEW_COUNT and REVIEW_RATING |
| `lib/seoTitles.ts` | Title tag formats for every city page |
| `lib/recurringCities.ts` | Data, FAQ, metadata and schema for the recurring city pages |
| `components/RecurringCityPage.tsx` | The recurring city page itself |
| `lib/localProof.ts` | The client story and computed example price for each city page that has one |
| `components/ClientStory.tsx` | The "One of Our {City} Clients" section |
| `lib/workPhotos.ts` | Alt text for work photos and for the social share photo. No town, no service |
| `lib/standardChecklist.ts` | The owner-confirmed standard checklist (full and short versions). Every page that lists what a standard or recurring clean includes renders it |
| `lib/deepChecklist.ts` | The owner-confirmed deep checklist: the seven additions and the room-by-room list every deep cleaning page renders |
| `lib/addOns.ts` | Every add-on: name, price (and recurring price for eco products) and the services it applies to, from the BookingKoala booking form. /pricing, /eco-friendly-cleaning, the terms page and the FALL75 oven value read it |
| `components/Offer.tsx` | Wrapper that expires offer copy automatically |
| `components/OfferBanner.tsx` | One line per running offer, for the homepage hero. Disappears when no offer is running |
| `components/HeroRating.tsx` | The star rating line for orange heroes. White on the darkest brand orange, which meets WCAG AA. Use it instead of coloring the text by hand |
| `components/Navigation.tsx` | Site nav |
| `components/Footer.tsx` | Footer with service and city links |
| `components/CityPageTemplate.tsx` | Shared template for the city hub pages |
| `lib/cityData.ts` | Data for the city hub pages, and `CITY_ZIPS` with `zipLine()` and `zipCodesPhrase()`, the only source for every city's zip codes |
| `lib/blogData.ts` | Blog post entries |
| `next.config.mjs` | All redirects and www canonicalization |
| `app/sitemap.ts` | XML sitemap |
| `app/robots.ts` | Crawl rules (the only robots source; there is no public/robots.txt) |
| `components/ConversionClicks.tsx` | GA4 `click_to_call` (any tel: link) and `book_click` (any internal link to /book, not counted on /book) events, from one click listener mounted in `app/layout.tsx` |

## Homepage Video
- A 59-second intro video sits in the section right under the homepage hero (`components/HomeVideo.tsx`, files in `public/videos/`, VideoObject schema in `app/page.tsx`). Phones get the vertical cut, tablets and desktops the wide one. It starts muted when half of it is on screen (captions are burned in), "Tap for sound" restarts it with sound, and it ends on a "See My Price & Book" button.
- It states 46 five-star reviews and 2,000+ cleanings since 2020. When those numbers move, re-render from `video/homepage-vsl/` (see its README). The narrator is an ElevenLabs AI voice. Never claim it is Guillermo or Rocío speaking.

## Tracking
- GA4 G-ZNH3HYZHQN loads through `<GoogleAnalytics>` in `app/layout.tsx`; the Facebook Pixel 604766394322878 (`components/FacebookPixel.tsx`) and HubSpot load with `lazyOnload`. Each loads exactly once per page. Don't change how they load.
- Homepage video events: `vsl_autoplay`, `vsl_sound_on`, `vsl_progress` (percent 25/50/75), `vsl_complete`, all with `video: "homepage_intro"` and `layout`.
- Conversion events: `click_to_call`, `book_click`; `generate_lead` with `lead_type: "residential"` on /quote-thank-you (after LeadForm or CityDeepCleanForm) and `lead_type: "commercial", form: "office"` in OfficeLeadForm's success step; `purchase` (value 200 USD) on /thank-you, where BookingKoala lands customers after a booking.
- /thank-you and /quote-thank-you fire their conversion (GA4, Pixel and the server-side CAPI call) once per browser session, guarded by a sessionStorage flag.
- Known (October 2026): on a full page load of /thank-you, `gtag` and `fbq` are not defined yet when the page's effect runs, so the browser-side `purchase` and Pixel Purchase do not fire; the server-side CAPI Purchase does. GA4 still records bookings through a `booking_completed` event that the GA4 tag settings create from /thank-you page views. Decide which one is the key event before making `purchase` wait for gtag, or bookings get counted twice.
- Never send test traffic to GA4, Meta or HubSpot: block or fake those requests in tests.

## Code Rules
- CSS inside a `<style>` tag must go in through `dangerouslySetInnerHTML`, never as a text child. React escapes `>` and quotes in text, a `<style>` tag does not unescape them, and the mismatch makes the whole page fail hydration and re-render in the browser. This broke /deep-clean-offer and every blog post until October 2026.

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
5. Satisfaction guarantee is always 48 hours. Never 24 or 72, and never "100% satisfaction guarantee": write "48-hour satisfaction guarantee".
6. Prices in schema must match page copy. Both come from `lib/pricing.ts`.
7. FAQ answers shown on a page must match its FAQPage schema word for word. Build the schema from the same array the page renders. Blog posts get theirs from `faqSchemaFromContent()` in `lib/blogData.ts`, which reads the post's own "Frequently Asked Questions" section, so never write a blog FAQ schema by hand.
8. Internal links must point to live internal pages: never to BookingKoala URLs, and never to a URL that redirects.
9. Every new page must be added to `app/sitemap.ts`. Standalone blog routes that aren't in `lib/blogData.ts` need their own entry.
10. Never alter existing design, layout, colors, or content unless explicitly instructed.
11. Service city pages use the pattern /{service}-{city}-il. Never create nested /service/city routes.
12. City pages link to each other, never to the generic service page when a city page exists. On every city hub the deep cleaning, move-out and maid service cards go to that city's own page (/deep-cleaning-{city}-il, /move-out-cleaning-{city}-il, and /recurring-cleaning-{city}-il where that page exists, otherwise /recurring-cleaning). Every deep cleaning and move-out city page links back to its hub (/{city}-il, or / for Romeoville) with the anchor "house cleaning in {City}".
13. There are only two Google links, both owner-supplied and confirmed working (October 2026), and both live in `lib/siteConstants.ts`. Never type a Google link into a page, and never use any other Google URL (no g.co/kgs links, no Google search links).
    - `GOOGLE_REVIEW_URL` = https://g.page/r/CX8eP54fxW4_EAE/review. It opens the "write a review" box. Every "leave a review" or "write a review" link uses it.
    - `GOOGLE_PROFILE_URL` = https://maps.app.goo.gl/T6UQsNQtBBoKbQXw9. It opens the Business Profile on Google Maps. Every "read our reviews", "Read all N reviews on Google" or "see us on Google" link uses it, and so does sameAs in the LocalBusiness schema in `app/layout.tsx`.
14. A city page's zip codes come from `CITY_ZIPS` in `lib/cityData.ts`, through the city's entry, `zipLine()` or `zipCodesPhrase()`. No page names a neighborhood or subdivision. /deep-cleaning-bolingbrook-il, /bolingbrook-il and /recurring-cleaning-bolingbrook-il all read the same entry. Never type a zip code or neighborhood into a city page. Bolingbrook's entry has no neighborhoods (none are confirmed), so its pages state the two zip codes, 60440 and 60490, and nothing more specific.
15. Blog posts answer questions (cost, checklists, how to prepare, comparisons). A blog post must never target the same search as a service page or city page, for example "move-out cleaning {city}" or "maid service {city}". Those searches belong to the landing pages.

## Copy Rules
- No em dashes, no en dashes, no double hyphens.
- Banned phrases: "top-to-bottom reset", "incredibly thorough", "delivering exceptional results", "we take pride in", "look no further".
- Write like a local business owner: short, plain sentences.
- Reviews are verbatim from Google, stored in `lib/realReviews.ts`. Never write or edit a review.
- Eco-friendly products are an add-on, not standard. Never claim eco-friendly, green or non-toxic products on every clean. Mention the option as "Prefer eco-friendly products? Add them when you book." Show the price only on /pricing and /eco-friendly-cleaning.
- Use the "Prefer eco-friendly products?" line at most once per page; anywhere else on that page, just leave the claim out. FAQs that ask whether DSM uses eco-friendly or safe products answer: "Yes, as an option. If you'd like eco-friendly, non-toxic products for your clean, just add them when you book. You'll see the price before you confirm." Trust bars and badges never list "Eco-Friendly".
- Review attributions use the format "Name, City IL". Google doesn't publish reviewer cities, so when the city isn't known, show the name alone. Never guess a city. The owner has confirmed three: Thomas Cheng (Shorewood), Donna Slas (Romeoville) and Jae Mac (Joliet). They are kept in OWNER_CONFIRMED_CITIES in `lib/realReviews.ts` and shown on the recurring city pages.

## Overall Goal
Dominate local SEO for house cleaning keywords across all 16 service area cities in the Will County and DuPage County suburbs of Chicago.
