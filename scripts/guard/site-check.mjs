/**
 * Full site check against a built, running copy of the site.
 *
 *   npm run build && npm start   (or npm run check, which does it all)
 *   node scripts/guard/site-check.mjs [baseUrl]
 *
 * Reads only HTML. It never runs page JavaScript, so no GA4, Pixel, HubSpot
 * or BookingKoala traffic is ever sent.
 *
 * Errors fail the run. Warnings are listed for review but don't block.
 */
import { readdirSync, statSync, appendFileSync } from "node:fs";
import path from "node:path";
import { ROOT, SITE, BUSINESS, NOINDEX_PAGES, BANNED_PHRASES, REVIEW_PHRASES, reviewCount } from "./rules.mjs";

const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3100").replace(/\/$/, "");
const REVIEWS = reviewCount();
const errors = [];
const warnings = [];
const err = (page, msg) => errors.push({ page, msg });
const warn = (page, msg) => warnings.push({ page, msg });

// ---------- helpers ----------
async function get(p) {
  const res = await fetch(BASE + p, { redirect: "manual", headers: { "user-agent": "dsm-site-check" } });
  const body = res.status === 200 ? await res.text() : "";
  return { status: res.status, location: res.headers.get("location"), robots: res.headers.get("x-robots-tag") || "", body };
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");

function meta(html, name) {
  const re = new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]*>`, "i");
  const tag = html.match(re)?.[0];
  return tag ? decode(tag.match(/content="([^"]*)"/)?.[1] ?? "") : null;
}

function visibleText(html) {
  const body = html.split(/<body[^>]*>/i)[1] ?? html;
  return decode(
    body
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " ")
  ).replace(/\s+/g, " ");
}

function jsonLd(html) {
  const out = [];
  for (const m of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      out.push(JSON.parse(m[1]));
    } catch (e) {
      out.push({ __parseError: e.message });
    }
  }
  return out;
}

/** Every object in a JSON-LD tree. */
function* walk(node) {
  if (Array.isArray(node)) for (const n of node) yield* walk(n);
  else if (node && typeof node === "object") {
    yield node;
    for (const v of Object.values(node)) yield* walk(v);
  }
}

const typeOf = (o) => [].concat(o["@type"] || []);

function internalLinks(html) {
  const links = new Set();
  const body = html.split(/<body[^>]*>/i)[1] ?? html;
  for (const m of body.matchAll(/<a\s[^>]*href="([^"]+)"/gi)) {
    let href = decode(m[1]);
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || "/";
    else if (/^https?:\/\/(dsmcleaningsolutions\.com)/.test(href)) href = href.replace(/^https?:\/\/dsmcleaningsolutions\.com/, "") || "/";
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    href = href.split("#")[0].split("?")[0];
    if (href && !href.startsWith("/api/")) links.add(href);
  }
  return links;
}

/** Static page routes under app/ (skips dynamic [param] routes and api). */
function appRoutes(dir = path.join(ROOT, "app"), prefix = "") {
  const routes = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (!statSync(full).isDirectory()) {
      if (name === "page.tsx" || name === "page.ts") routes.push(prefix || "/");
      continue;
    }
    if (name === "api" || name.startsWith("[") || name.startsWith("_")) continue;
    const seg = name.startsWith("(") ? "" : `/${name}`;
    routes.push(...appRoutes(full, prefix + seg));
  }
  return routes;
}

const phraseRe = (p) => new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\%]/g, "\\$&")}\\b`, "i");
const phraseRes = BANNED_PHRASES.map((p) => ({ p, re: phraseRe(p) }));
const reviewRes = REVIEW_PHRASES.map((p) => ({ p, re: phraseRe(p) }));

function excerpt(text, idx, len = 1) {
  return "…" + text.slice(Math.max(0, idx - 40), idx + len + 40).trim() + "…";
}

// ---------- page checks ----------
function checkPage(p, page) {
  const html = page.body;

  // indexable
  const robotsMeta = meta(html, "robots") || "";
  if (/noindex/i.test(robotsMeta) || /noindex/i.test(page.robots)) err(p, "is in the sitemap but marked noindex, so Google will drop it");

  // title, description, canonical
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
  if (!title) err(p, "has no <title>");
  else if (title.length > 65) warn(p, `title is ${title.length} characters, Google cuts it off around 60: "${title}"`);
  const desc = meta(html, "description");
  if (!desc) err(p, "has no meta description");
  else if (desc.length > 160) warn(p, `meta description is ${desc.length} characters (aim for 160 or fewer)`);
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  const want = p === "/" ? [SITE, SITE + "/"] : [SITE + p, SITE + p + "/"];
  if (!canonical) err(p, "has no canonical link");
  else if (!want.includes(canonical)) err(p, `canonical points to ${canonical}, should be ${want[0]}`);

  // structured data
  for (const block of jsonLd(html)) {
    if (block.__parseError) {
      err(p, `has JSON-LD that doesn't parse: ${block.__parseError}`);
      continue;
    }
    for (const o of walk(block)) {
      const t = typeOf(o);
      if (t.includes("PostalAddress") && o.addressLocality && o.streetAddress) {
        for (const k of ["streetAddress", "addressLocality", "postalCode"]) {
          if (String(o[k]) !== String(BUSINESS[k])) err(p, `schema address ${k} is "${o[k]}", must be "${BUSINESS[k]}"`);
        }
      }
      if (t.includes("GeoCoordinates") && o.latitude !== undefined) {
        if (Number(o.latitude) !== BUSINESS.latitude || Number(o.longitude) !== BUSINESS.longitude)
          err(p, `schema map pin is ${o.latitude}, ${o.longitude}, must be ${BUSINESS.latitude}, ${BUSINESS.longitude}`);
      }
      if (t.includes("AggregateRating")) {
        const count = Number(o.reviewCount ?? o.ratingCount);
        if (count !== REVIEWS) err(p, `schema review count is ${count}, must be ${REVIEWS} (REVIEW_COUNT)`);
        if (String(o.ratingValue) !== "5.0" && Number(o.ratingValue) !== 5) err(p, `schema rating is ${o.ratingValue}, must be 5.0`);
      }
    }
  }

  // visible copy
  const text = visibleText(html);
  for (const m of text.matchAll(/(\d{2,3})\s+(?:five-star\s+|5-star\s+|Google\s+|5\.0\s+)?reviews\b/gi)) {
    if (Number(m[1]) !== REVIEWS) err(p, `says "${m[0]}" but the review count is ${REVIEWS}`);
  }
  const dash = text.search(/—|--/);
  if (dash >= 0) err(p, `has an em dash or double hyphen, which the copy rules don't allow: ${excerpt(text, dash)}`);
  const enDashes = [...text.matchAll(/–/g)];
  if (enDashes.length)
    warn(p, `has ${enDashes.length} en dash${enDashes.length > 1 ? "es" : ""} (copy rules say none; write "5 to 7 days"): ${excerpt(text, enDashes[0].index)}`);
  for (const { p: phrase, re } of phraseRes) {
    const i = text.search(re);
    if (i >= 0) err(p, `uses the banned phrase "${phrase}": ${excerpt(text, i, phrase.length)}`);
  }
  for (const { p: phrase, re } of reviewRes) {
    const i = text.search(re);
    if (i >= 0) warn(p, `says "${phrase}" (the label is "Insured & Bonded"): ${excerpt(text, i, phrase.length)}`);
  }

  return { title, links: internalLinks(html) };
}

// ---------- run ----------
const started = Date.now();
const results = { pages: 0, links: 0 };

// robots.txt
{
  const r = await get("/robots.txt");
  if (r.status !== 200) err("/robots.txt", `returns ${r.status}`);
  else {
    if (/^\s*Disallow:\s*\/\s*$/im.test(r.body)) err("/robots.txt", "blocks the whole site (Disallow: /)");
    if (!r.body.includes(`${SITE}/sitemap.xml`)) err("/robots.txt", "doesn't point to the sitemap");
  }
}

// sitemap
const sm = await get("/sitemap.xml");
if (sm.status !== 200) {
  err("/sitemap.xml", `returns ${sm.status}`);
}
const sitemapPaths = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
  const u = m[1].trim();
  if (!u.startsWith(SITE)) err("/sitemap.xml", `lists a URL that isn't on www: ${u}`);
  return u.replace(SITE, "") || "/";
});
const seen = new Set();
for (const p of sitemapPaths) {
  if (seen.has(p)) err("/sitemap.xml", `lists ${p} twice`);
  seen.add(p);
  if (NOINDEX_PAGES.includes(p)) err("/sitemap.xml", `lists ${p}, which must stay out of Google`);
}

// every sitemap page
const titles = new Map();
const allLinks = new Map(); // link -> first page it was found on
const CONCURRENCY = 8;
let cursor = 0; // shared by the workers below; safe because JS runs one at a time
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < sitemapPaths.length) {
      const p = sitemapPaths[cursor++];
      const page = await get(p);
      results.pages++;
      if (page.status !== 200) {
        err(p, `is in the sitemap but returns ${page.status}${page.location ? ` (redirects to ${page.location})` : ""}`);
        continue;
      }
      const { title, links } = checkPage(p, page);
      if (title) titles.set(title, [...(titles.get(title) || []), p]);
      for (const l of links) if (!allLinks.has(l)) allLinks.set(l, p);
    }
  })
);

for (const [title, pages] of titles) {
  if (pages.length > 1) warn(pages.join(", "), `share the same title: "${title}"`);
}

// pages that must stay noindex
for (const p of NOINDEX_PAGES) {
  const page = await get(p);
  if (page.status !== 200) continue; // a retired page is fine
  if (!/noindex/i.test(meta(page.body, "robots") || "") && !/noindex/i.test(page.robots)) err(p, "must be noindex but isn't");
}

// /book keeps its BookingKoala embed
{
  const book = await get("/book");
  if (book.status !== 200) err("/book", `returns ${book.status}`);
  else if (!book.body.includes("dsmcleaningsolutions.bookingkoala.com/booknow?embed=true")) err("/book", "the BookingKoala booking form is missing");
}

// every page under app/ is in the sitemap (unless it's noindex or redirected away)
for (const route of appRoutes()) {
  if (seen.has(route) || NOINDEX_PAGES.includes(route)) continue;
  const page = await get(route);
  if (page.status !== 200) continue;
  if (/noindex/i.test(meta(page.body, "robots") || "")) continue;
  err(route, "is a live, indexable page but isn't in app/sitemap.ts");
}

// internal links go straight to live pages (no redirects, no 404s)
const linkList = [...allLinks.keys()].filter((l) => !/\.(png|jpe?g|webp|gif|svg|pdf|mp4|webm|ico|xml|txt)$/i.test(l));
cursor = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < linkList.length) {
      const l = linkList[cursor++];
      if (seen.has(l)) continue;
      results.links++;
      const r = await get(l);
      if (r.status >= 300 && r.status < 400) err(allLinks.get(l), `links to ${l}, which redirects to ${r.location}. Link to the final page instead`);
      else if (r.status !== 200) err(allLinks.get(l), `links to ${l}, which returns ${r.status}`);
    }
  })
);

// ---------- report ----------
const secs = ((Date.now() - started) / 1000).toFixed(1);
const lines = [];
lines.push(`## DSM site check: ${errors.length ? `❌ ${errors.length} problem${errors.length === 1 ? "" : "s"}` : "✅ passed"}`);
lines.push(`Checked ${results.pages} sitemap pages and ${allLinks.size} internal links in ${secs}s. Review count ${REVIEWS}.`);
/** One line per problem; a problem on many pages (a footer, the layout) is listed once. */
function grouped(list) {
  const byMsg = new Map();
  for (const { page, msg } of list) byMsg.set(msg, [...(byMsg.get(msg) || []), page]);
  return [...byMsg].map(([msg, pages]) => {
    if (pages.length === 1) return `- \`${pages[0]}\` ${msg}`;
    const shown = pages.slice(0, 4).map((x) => `\`${x}\``).join(", ");
    return `- On ${pages.length} pages (${shown}${pages.length > 4 ? ` and ${pages.length - 4} more` : ""}): ${msg}`;
  });
}
if (errors.length) lines.push("", "### Must fix", ...grouped(errors));
if (warnings.length) lines.push("", `### Worth a look (${warnings.length})`, ...grouped(warnings));
const report = lines.join("\n");
console.log(report);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + "\n\n");
process.exit(errors.length ? 1 : 0);
