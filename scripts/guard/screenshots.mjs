/**
 * Full-page screenshots of key pages at phone and desktop size, so a change
 * can be reviewed from a tablet before it ships.
 *
 *   node scripts/guard/screenshots.mjs [baseUrl]
 *   PAGES="/naperville-il,/deep-cleaning" node scripts/guard/screenshots.mjs   (only these)
 *   EXTRA_PAGES="/naperville-il" node scripts/guard/screenshots.mjs          (defaults plus these)
 *
 * Tracking (GA4, Pixel, HubSpot, Clarity, Vercel) and the server-side
 * conversion API are blocked, so screenshots never count as real visits.
 * Output: guard-output/screenshots/{phone,desktop}/<page>-1-first-screen.png
 *         and <page>-2-full-page.png
 */
import { mkdirSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { ROOT } from "./rules.mjs";

const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3100").replace(/\/$/, "");
const DEFAULT_PAGES = ["/", "/deep-cleaning", "/move-out-cleaning", "/recurring-cleaning", "/joliet-il", "/book"];
const list = (s) => (s || "").split(",").map((p) => p.trim()).filter(Boolean);
// PAGES replaces the default list; EXTRA_PAGES adds to it.
const PAGES = [...new Set([...(process.env.PAGES ? list(process.env.PAGES) : DEFAULT_PAGES), ...list(process.env.EXTRA_PAGES)])];
const OUT = path.join(ROOT, "guard-output/screenshots");

const SIZES = {
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
};

const BLOCK = [
  /googletagmanager\.com/,
  /google-analytics\.com/,
  /analytics\.google\.com/,
  /doubleclick\.net/,
  /facebook\.(com|net)/,
  /hubspot|hs-scripts|hs-analytics|hs-banner|hsforms|hscollectedforms|usemessages/,
  /clarity\.ms/,
  /\/_vercel\//,
  /\/api\//,
];

const browser = await chromium.launch();
let failed = 0;
for (const [size, opts] of Object.entries(SIZES)) {
  mkdirSync(path.join(OUT, size), { recursive: true });
  const context = await browser.newContext(opts);
  await context.route("**/*", (route) => (BLOCK.some((re) => re.test(route.request().url())) ? route.abort() : route.continue()));
  const page = await context.newPage();
  for (const p of PAGES) {
    const name = p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "_");
    try {
      await page.goto(BASE + p, { waitUntil: "load", timeout: 45000 });
      await page.waitForTimeout(800);
      // 1. What a visitor sees first, exactly as it loads.
      await page.screenshot({ path: path.join(OUT, size, `${name}-1-first-screen.png`) });
      // 2. The whole page. Scroll through once so lazy images load, then back
      //    to the top. In a full-page capture a sticky header lands wherever
      //    the browser last was, so pin it to the top and leave out floating
      //    bars (the phone "Book" bar); the first-screen shot shows them as
      //    they really are.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
        for (const el of document.querySelectorAll("body *")) {
          const pos = getComputedStyle(el).position;
          if (pos === "sticky") el.style.setProperty("position", "relative", "important");
          else if (pos === "fixed") el.style.setProperty("display", "none", "important");
        }
      });
      await page.waitForTimeout(800);
      await page.screenshot({ path: path.join(OUT, size, `${name}-2-full-page.png`), fullPage: true });
      console.log(`  ${size.padEnd(7)} ${p}`);
    } catch (e) {
      failed++;
      console.error(`  ✗ ${size} ${p}: ${e.message.split("\n")[0]}`);
    }
  }
  await context.close();
}
await browser.close();
console.log(`Screenshots saved to guard-output/screenshots (${PAGES.length} pages, phone and desktop).`);
process.exit(failed ? 1 : 0);
