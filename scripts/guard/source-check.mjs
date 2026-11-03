/**
 * Fast source checks. Runs before every build (npm "prebuild"), so Vercel
 * refuses to deploy if one of the locked pieces was changed by mistake:
 *  - both HubSpot form GUIDs
 *  - the BookingKoala embed on /book
 *  - the business address and map pin in the LocalBusiness schema
 *
 * No network, no build needed. Takes well under a second.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { ROOT, BUSINESS, FORMS, BOOK_EMBED } from "./rules.mjs";

const errors = [];
const read = (f) => readFileSync(path.join(ROOT, f), "utf8");
const squash = (s) => s.replace(/\s+/g, " ").trim();

// 1. HubSpot form GUIDs
for (const form of FORMS) {
  if (!read(form.file).includes(`"${form.guid}"`) && !read(form.file).includes(`'${form.guid}'`)) {
    errors.push(`${form.file}: the ${form.label} HubSpot form GUID ${form.guid} is missing or changed.`);
  }
}

// 2. BookingKoala embed on /book
{
  const src = read(BOOK_EMBED.file);
  const m = src.match(/__html:\s*`(<iframe[\s\S]*?<\/iframe>)`/);
  if (!m) {
    errors.push(`${BOOK_EMBED.file}: the BookingKoala iframe embed is missing.`);
  } else if (squash(m[1]) !== squash(BOOK_EMBED.html)) {
    errors.push(
      `${BOOK_EMBED.file}: the BookingKoala embed was changed. It must stay exactly:\n    ${BOOK_EMBED.html}\n  Found:\n    ${squash(m[1])}`
    );
  }
}

// 3. LocalBusiness address and map pin in app/layout.tsx
{
  const src = read("app/layout.tsx");
  const want = {
    streetAddress: `streetAddress: "${BUSINESS.streetAddress}"`,
    addressLocality: `addressLocality: "${BUSINESS.addressLocality}"`,
    postalCode: `postalCode: "${BUSINESS.postalCode}"`,
    latitude: `latitude: ${BUSINESS.latitude}`,
    longitude: `longitude: ${BUSINESS.longitude}`,
  };
  for (const [key, text] of Object.entries(want)) {
    if (!src.includes(text)) errors.push(`app/layout.tsx: LocalBusiness ${key} must be ${text.split(": ")[1]}.`);
  }
}

if (errors.length) {
  console.error(`\nDSM source check FAILED (${errors.length}):\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(`\nThese are locked values (CONTEXT.md). If the change is on purpose, update scripts/guard/rules.mjs in the same commit.\n`);
  process.exit(1);
}
console.log("DSM source check passed: form GUIDs, /book embed, schema address and pin.");
