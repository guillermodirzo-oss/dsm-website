/**
 * Phone tap test for /book, the page every booking goes through.
 *
 *   node scripts/guard/book-test.mjs [baseUrl]
 *
 * Fails if any booking button on /book lands somewhere the BookingKoala form
 * isn't on screen (the Oct 2026 Clarity data showed 33 taps on buttons that
 * seemed to do nothing), if the phone bar stays up over the form, if a link
 * has no target, or if the page uses wording the owner has ruled out.
 *
 * Tracking is blocked, so test taps never reach GA4, Meta, HubSpot or Clarity.
 * Screenshots: guard-output/book-test/
 */
import { mkdirSync, appendFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { ROOT } from "./rules.mjs";

const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3100").replace(/\/$/, "");
const OUT = path.join(ROOT, "guard-output/book-test");
mkdirSync(OUT, { recursive: true });

/** Wording that must not come back on /book. */
const RULED_OUT = ["Licensed", "Limited Time", "Spots Fill", "Lock In My Spot", "Claim $"];
const CTA = "a[href='#book-now']";
const PHONE = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
const BLOCK = /googletagmanager|google-analytics|analytics\.google|doubleclick|facebook\.(com|net)|hubspot|hs-scripts|hs-analytics|hs-banner|hsforms|usemessages|clarity\.ms|\/_vercel\/|\/api\//;

const browser = await chromium.launch();
const ctx = await browser.newContext(PHONE);
await ctx.route("**/*", (r) => (BLOCK.test(r.request().url()) ? r.abort() : r.continue()));
const page = await ctx.newPage();
const lines = [];
let fails = 0;
const pass = (m) => lines.push(`- ✅ ${m}`);
const fail = (m) => (fails++, lines.push(`- ❌ ${m}`));

const open = async () => {
  await page.goto(BASE + "/book", { waitUntil: "load", timeout: 45000 });
  await page.waitForTimeout(700);
};
const formTop = () =>
  page.evaluate(() => {
    const f = document.querySelector("#booking-form iframe");
    return f ? Math.round(f.getBoundingClientRect().top) : null;
  });

await open();
await page.screenshot({ path: path.join(OUT, "1-first-screen.png") });

const text = await page.evaluate(() => document.body.innerText);
const found = RULED_OUT.filter((w) => text.includes(w));
found.length ? fail(`page says ${found.map((w) => `"${w}"`).join(", ")}`) : pass("none of the ruled-out wording");

const dead = await page.$$eval("a", (as) => as.filter((a) => !a.getAttribute("href") || a.getAttribute("href") === "#").map((a) => a.innerText.trim().slice(0, 40)));
dead.length ? fail(`links that go nowhere: ${dead.join(" | ")}`) : pass("every link has a target");

const count = await page.locator(CTA).count();
if (!count) fail("no booking buttons found");
for (let i = 0; i < count; i++) {
  await open();
  const el = page.locator(CTA).nth(i);
  const label = (await el.innerText()).trim();
  const inBar = await el.evaluate((e) => !!e.closest("div.fixed"));
  if (inBar) {
    await page.evaluate(() => window.scrollTo(0, 2500)); // the bar shows once the hero is passed
    await page.waitForTimeout(700);
  } else {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
  }
  await el.tap();
  await page.waitForTimeout(1500);
  const top = await formTop();
  const where = `"${label}"${inBar ? " (phone bar)" : ""}`;
  top !== null && top >= 40 && top <= 320
    ? pass(`${where} lands with the form ${top}px from the top of the screen`)
    : fail(`${where} lands with the form at ${top}px, not on screen`);
  if (i === 0) await page.screenshot({ path: path.join(OUT, "2-after-tap.png") });
}

const barUp = await page.evaluate(() => {
  const bar = [...document.querySelectorAll("div.fixed")].find((d) => d.querySelector("a[href='#book-now']"));
  if (!bar) return false;
  const s = getComputedStyle(bar);
  return s.opacity !== "0" && s.pointerEvents !== "none";
});
barUp ? fail("phone bar stays up over the form") : pass("phone bar hides while the form is on screen");

const report = [`## /book phone tap test: ${fails ? `❌ ${fails} problem${fails > 1 ? "s" : ""}` : "✅ passed"}`, ...lines].join("\n");
console.log(report);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + "\n\n");
await browser.close();
process.exit(fails ? 1 : 0);
