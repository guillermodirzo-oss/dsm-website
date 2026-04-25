/**
 * pixelHelpers.ts — Client-side utilities for Meta Pixel advanced matching.
 *
 * HOW IT WORKS:
 *  1. When a user enters their email (ContactForm or BookingForm pre-capture),
 *     we call storeUserSignal(email, phone).
 *  2. storeUserSignal hashes the values browser-side (Web Crypto API / SHA-256),
 *     then stores BOTH raw (sessionStorage) and hashed (localStorage) versions.
 *  3. FacebookPixel reads the hashed email on every PageView and calls
 *     fbq('setUserProperties') — this enriches ALL subsequent PageView events.
 *  4. CAPI calls read the raw email (sessionStorage) so the server can hash it
 *     consistently with the server-side sha256() function in /api/track.
 *  5. fireLeadEvent() is called after ContactForm submit. It fires both the
 *     browser pixel Lead event and the server-side CAPI Lead event with a
 *     shared eventID for deduplication.
 *
 * STORAGE KEYS:
 *  sessionStorage.dsm_em_raw  → normalized raw email   (clears on tab close)
 *  sessionStorage.dsm_ph_raw  → normalized raw phone   (clears on tab close)
 *  localStorage.dsm_em_h      → SHA-256 hashed email   (persists across sessions)
 *  localStorage.dsm_eid       → anonymous external_id UUID (persists)
 *
 * PRIVACY:
 *  - Raw email/phone are only stored in sessionStorage (gone when tab closes).
 *  - Hashed values in localStorage contain no recoverable PII.
 *  - We never log raw PII to the console.
 *  - Raw email is only transmitted over HTTPS to our own /api/track server,
 *    which hashes it before forwarding to Meta.
 */

// ── Storage keys ──────────────────────────────────────────────────────────────
export const KEY_EID     = "dsm_eid";      // localStorage  — anonymous UUID
export const KEY_EM_RAW  = "dsm_em_raw";   // sessionStorage — raw email (session only)
export const KEY_EM_HASH = "dsm_em_h";     // localStorage  — SHA-256 hashed email
export const KEY_PH_RAW  = "dsm_ph_raw";   // sessionStorage — raw phone (session only)

// ── SHA-256 (browser) ─────────────────────────────────────────────────────────

/**
 * Hash a string with SHA-256 using the Web Crypto API.
 * Normalises to lowercase + trimmed before hashing — matches Meta's spec.
 */
export async function sha256Browser(raw: string): Promise<string> {
  const normalised = raw.trim().toLowerCase();
  const encoded = new TextEncoder().encode(normalised);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ── Validators / normalisers ──────────────────────────────────────────────────

/** Basic email format check. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Normalise a US phone number to E.164 digits only (no +).
 * Returns empty string if fewer than 10 digits found.
 * Examples: "(815) 246-2113" → "18152462113"
 */
export function normalisePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 10) return "";
  return digits.length === 10 ? `1${digits}` : digits;
}

// ── External-ID ───────────────────────────────────────────────────────────────

/**
 * Get or create a stable anonymous visitor ID (UUID stored in localStorage).
 * Persists across sessions so Meta can stitch browser + server events without PII.
 */
export function getOrCreateExternalId(): string {
  try {
    let eid = localStorage.getItem(KEY_EID);
    if (!eid) {
      eid = crypto.randomUUID();
      localStorage.setItem(KEY_EID, eid);
    }
    return eid;
  } catch {
    // localStorage blocked (private browsing, etc.)
    return crypto.randomUUID();
  }
}

// ── Cookie reader ─────────────────────────────────────────────────────────────

/** Read a named cookie from document.cookie. */
export function getCookie(name: string): string | undefined {
  return document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1];
}

// ── PII storage ───────────────────────────────────────────────────────────────

/**
 * Hash + store an email (and optionally phone) after a user provides them.
 *
 * - Raw values → sessionStorage  (available this tab/session only)
 * - Hashed values → localStorage (persists for fbq.setUserProperties across sessions)
 *
 * Safe to call multiple times — later calls overwrite earlier ones.
 */
export async function storeUserSignal(
  rawEmail: string,
  rawPhone?: string
): Promise<void> {
  if (!isValidEmail(rawEmail)) return;

  const normEmail = rawEmail.trim().toLowerCase();
  const hashEmail = await sha256Browser(normEmail);

  try {
    sessionStorage.setItem(KEY_EM_RAW, normEmail);
    localStorage.setItem(KEY_EM_HASH, hashEmail);
  } catch {
    /* private browsing / storage quota — fail silently */
  }

  if (rawPhone) {
    const normPhone = normalisePhone(rawPhone);
    if (normPhone.length >= 11) {
      try {
        sessionStorage.setItem(KEY_PH_RAW, normPhone);
        // Phone hash not needed browser-side (server handles it via hashPhone())
      } catch {
        /* private browsing — fail silently */
      }
    }
  }
}

// ── Accessors ─────────────────────────────────────────────────────────────────

/** Raw email from sessionStorage — present only within the current tab session. */
export function getStoredRawEmail(): string | null {
  try { return sessionStorage.getItem(KEY_EM_RAW); } catch { return null; }
}

/** SHA-256 hashed email from localStorage — persists across sessions. */
export function getStoredHashedEmail(): string | null {
  try { return localStorage.getItem(KEY_EM_HASH); } catch { return null; }
}

/** Raw phone (E.164 digits) from sessionStorage — present only this session. */
export function getStoredRawPhone(): string | null {
  try { return sessionStorage.getItem(KEY_PH_RAW); } catch { return null; }
}

// ── Lead event ────────────────────────────────────────────────────────────────

/**
 * Fire a Lead conversion event after a form is successfully submitted.
 *
 * - Stores the email + phone for future PageView enrichment.
 * - Fires fbq('track', 'Lead') browser-side.
 * - Fires POST /api/track server-side (CAPI).
 * - Both calls share the same eventID so Meta deduplicates to exactly 1 Lead.
 *
 * Call this ONLY from ContactForm (which has no thank-you page redirect).
 * BookingForm submissions fire Lead from QuoteThankYouClient instead.
 */
export async function fireLeadEvent(
  rawEmail: string,
  rawPhone?: string
): Promise<void> {
  if (!isValidEmail(rawEmail)) return;

  // Persist for future PageViews in this session
  await storeUserSignal(rawEmail, rawPhone);

  const eventId    = crypto.randomUUID();
  const fbp        = getCookie("_fbp");
  const fbc        = getCookie("_fbc");
  const externalId = getOrCreateExternalId();
  const normEmail  = rawEmail.trim().toLowerCase();
  const normPhone  = rawPhone ? normalisePhone(rawPhone) : undefined;

  // 1. Browser pixel Lead
  try {
    const win = window as Window & { fbq?: (...args: unknown[]) => void };
    if (typeof win.fbq === "function") {
      win.fbq("track", "Lead", {
        content_name: "Quote Request",
        content_category: "House Cleaning",
        value: 0,
        currency: "USD",
      }, { eventID: eventId });
      console.debug("[Pixel] Lead (browser) | id:", eventId, "| em: ✓");
    }
  } catch {
    /* pixel not yet initialised — fail silently */
  }

  // 2. Server-side CAPI Lead (fire-and-forget)
  // Raw email + phone are sent to our own server over HTTPS.
  // The server's sha256() and hashPhone() functions normalise + hash before
  // forwarding to Meta — raw PII never reaches Meta's servers.
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: "Lead",
      eventId,
      eventSourceUrl: window.location.href,
      eventData: {
        content_name: "Quote Request",
        content_category: "House Cleaning",
        value: 0,
        currency: "USD",
      },
      userData: {
        em: normEmail,                        // raw — server hashes with SHA-256
        ph: normPhone || undefined,           // raw — server normalises + hashes
        fbp,
        fbc,
        external_id: externalId,
      },
    }),
  }).catch(() => {
    /* silent — pixel failures must never affect the user experience */
  });
}
