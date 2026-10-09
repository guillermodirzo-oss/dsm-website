/**
 * Time helpers for offer expiry. No dependencies, safe on server and client.
 *
 * Offers end at 11:59:59 PM Central on their last day. The server clock on
 * Vercel is UTC, so "end of day" has to be computed in America/Chicago, not
 * in whatever time zone the code happens to run in. Before this, an offer
 * dated Nov 30 actually ended at 5:59 PM Central.
 */

export const OFFER_TIME_ZONE = "America/Chicago";

/** Minutes the zone is ahead of UTC at `date` (Chicago: -300 in CDT, -360 in CST). */
function zoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)!.value);
  const asIfUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return Math.round((asIfUtc - date.getTime()) / 60_000);
}

/**
 * The last moment of `ymd` (YYYY-MM-DD) in `timeZone`: 23:59:59.999 local.
 * DST-safe: the offset is read for that date, and DST changes happen at
 * 2 AM, never late in the evening, so the evening offset is the right one.
 */
export function endOfDayIn(ymd: string, timeZone = OFFER_TIME_ZONE): Date {
  const [y, m, d] = ymd.split("-").map(Number);
  const wallClockAsUtc = Date.UTC(y, m - 1, d, 23, 59, 59, 999);
  const offset = zoneOffsetMinutes(new Date(wallClockAsUtc), timeZone);
  return new Date(wallClockAsUtc - offset * 60_000);
}

/**
 * The first moment of `ymd` (YYYY-MM-DD) in `timeZone`: 00:00:00.000 local.
 * The offset is read at noon that day, which is always past a 2 AM DST change.
 */
export function startOfDayIn(ymd: string, timeZone = OFFER_TIME_ZONE): Date {
  const [y, m, d] = ymd.split("-").map(Number);
  const offset = zoneOffsetMinutes(new Date(Date.UTC(y, m - 1, d, 12)), timeZone);
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0) - offset * 60_000);
}

/** "2026-10-31" becomes "October 31". Formatted in UTC so the day can't shift. */
export function monthDayLabel(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d))
  );
}

/**
 * The current time for offer checks. Normally just `new Date()`.
 *
 * For local testing only, NEXT_PUBLIC_OFFER_NOW (any date string) fakes the
 * clock on both server and client, for example:
 *   NEXT_PUBLIC_OFFER_NOW=2026-11-01T12:00:00-05:00 npm run build && npx next start
 * It is inlined at build time, so it must never be set in Vercel. As a second
 * guard it is ignored on a Vercel production deployment even if it were.
 */
export function offerNow(): Date {
  const override = process.env.NEXT_PUBLIC_OFFER_NOW;
  const onProduction =
    process.env.VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  if (override && !onProduction) {
    const faked = new Date(override);
    if (!Number.isNaN(faked.getTime())) return faked;
  }
  return new Date();
}
