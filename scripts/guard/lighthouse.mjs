/**
 * Lighthouse scores (phone settings) for the money pages. Report only: it
 * never fails the run, because scores on a test machine move a few points
 * between runs. Watch for big drops after a change.
 *
 *   npm i --no-save lighthouse@13.5.0 playwright@1.63.0
 *   node scripts/guard/lighthouse.mjs [baseUrl]
 *
 * Tracking is blocked so test runs never reach GA4, Meta or HubSpot.
 * Output: guard-output/lighthouse/<page>.html and a summary table.
 */
import { mkdirSync, writeFileSync, appendFileSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
import { ROOT } from "./rules.mjs";

const BASE = (process.argv[2] || process.env.SITE_URL || "http://localhost:3100").replace(/\/$/, "");
const PAGES = (process.env.LH_PAGES || "/,/deep-cleaning,/move-out-cleaning,/recurring-cleaning,/joliet-il")
  .split(",")
  .map((p) => p.trim())
  .filter(Boolean);
const OUT = path.join(ROOT, "guard-output/lighthouse");
mkdirSync(OUT, { recursive: true });

const blockedUrlPatterns = [
  "*googletagmanager.com*",
  "*google-analytics.com*",
  "*analytics.google.com*",
  "*doubleclick.net*",
  "*facebook.net*",
  "*facebook.com*",
  "*hubspot*",
  "*hs-scripts*",
  "*hs-analytics*",
  "*hs-banner*",
  "*hsforms*",
  "*usemessages*",
  "*clarity.ms*",
  "*/_vercel/*",
  "*/api/*",
];

const chrome = await launch({
  chromePath: process.env.CHROME_PATH || chromium.executablePath(),
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
});

const pct = (x) => (x == null ? "n/a" : Math.round(x * 100));
const rows = [];
for (const p of PAGES) {
  const name = p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "_");
  try {
    const result = await lighthouse(BASE + p, {
      port: chrome.port,
      output: "html",
      logLevel: "error",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      blockedUrlPatterns,
    });
    writeFileSync(path.join(OUT, `${name}.html`), result.report);
    const c = result.lhr.categories;
    const a = result.lhr.audits;
    rows.push(
      `| \`${p}\` | ${pct(c.performance.score)} | ${pct(c.accessibility.score)} | ${pct(c["best-practices"].score)} | ${pct(c.seo.score)} | ${a["largest-contentful-paint"].displayValue} | ${a["cumulative-layout-shift"].displayValue} |`
    );
    console.log(`  ${p}`);
  } catch (e) {
    rows.push(`| \`${p}\` | failed: ${e.message.split("\n")[0]} | | | | | |`);
  }
}
await chrome.kill();

const report = [
  "## Lighthouse (phone settings, tracking blocked)",
  "Report only. Scores on a test machine move a few points run to run; look for big drops.",
  "",
  "| Page | Speed | Accessibility | Best practices | SEO | Largest paint | Layout shift |",
  "|---|---|---|---|---|---|---|",
  ...rows,
].join("\n");
console.log(report);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + "\n\n");
