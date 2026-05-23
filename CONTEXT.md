# DSM Cleaning Solutions — Project Context

## Business
- **Name:** DSM Cleaning Solutions
- **Owner:** Memo
- **Type:** Residential house cleaning
- **Base city:** Romeoville, IL (60446)
- **Phone:** (815) 246-2113
- **Hours:** Monday–Sunday, 8am–6pm
- **Satisfaction guarantee:** 48 hours
- **Rating:** 5.0 / 38 reviews

## Service Areas
Romeoville, Plainfield, Naperville, Bolingbrook, Joliet — Will County and DuPage County suburbs

## Revenue Priority Services
1. Deep Cleaning (highest ticket, most searched)
2. Move-In / Move-Out Cleaning (high intent, seasonal spikes)
3. Recurring Maid Service (best lifetime customer value)

## Live Site & Repo
- **Live site:** https://www.dsmcleaningsolutions.com
- **Repo:** guillermodirzo-oss/dsm-website
- **Auto-deploys:** Vercel on every push to main

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Vercel (hosting)
- BookingKoala (booking/lead system)

## Key Files
| File | Purpose |
|---|---|
| `app/layout.tsx` | Global metadata + LocalBusiness JSON-LD |
| `components/Navigation.tsx` | Nav with Blog link |
| `components/Footer.tsx` | Footer with all internal service links |
| `next.config.mjs` | All 301 redirects + www canonicalization |
| `app/sitemap.ts` | XML sitemap generator (37+ URLs) |
| `lib/cityData.ts` | Data for city+service combo page template |
| `lib/blogData.ts` | Blog post entries |
| `components/CityPageTemplate.tsx` | Shared template for all city/service combo pages |
| `public/robots.txt` | Crawl rules |

## What Has Already Been Completed
- 301 redirects and www canonicalization in next.config.mjs
- JSON-LD structured data on all major pages (LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting)
- Footer and nav internal links fixed and optimized
- Title tag deduplication — brand name appended only in root layout, never at the page level
- Meta descriptions optimized site-wide
- 9 city+service combo landing pages: deep cleaning, standard cleaning, and move-out cleaning × Plainfield, Naperville, Romeoville
- Privacy Policy (/privacy-policy) and Terms & Conditions (/terms-and-conditions) pages
- Blog launched with 3 keyword-targeted posts
- Sitemap.xml with 37+ URLs submitted to Google Search Console
- Robots.txt configured (disallows /spring-special, includes sitemap URL)
- Google Business Profile name and service area corrected
- Yelp listing updated
- URL removal requests submitted for old/dead pages

## In Progress
- Bolingbrook city+service combo pages (deep cleaning, move-out cleaning, standard cleaning)
- Premium suburb pages: Burr Ridge, Hinsdale, Oak Brook, Downers Grove
- Bing Places listing (manual — Memo completing)
- Apple Maps listing (manual — Memo completing)

## SEO Rules — Never Break These
1. Never add "| DSM Cleaning Solutions" at the page level — root layout handles it
2. Always use addressLocality: "Romeoville" in JSON-LD schema — never Plainfield
3. All internal links must point to internal pages — never to BookingKoala URLs
4. Satisfaction guarantee is always 48 hours — never 24 or 72
5. Never alter existing design, layout, colors, or content unless explicitly instructed
6. Every new page must be added to app/sitemap.ts

## Overall Goal
Dominate local SEO for house cleaning keywords across all service area cities in Will County and DuPage County suburbs of Chicago.
