import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

const PIXEL_ID = "604766394322878";
const META_CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

// SHA-256 hash a string for GDPR-compliant advanced matching.
// Meta requires all PII (email, phone, external_id) to be hashed.
// Returns undefined for empty/null input so we never send empty strings.
function sha256(value: string | undefined | null): string | undefined {
  if (!value || !value.trim()) return undefined;
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

// Normalise a phone number to digits + country code only, then hash.
// Meta format: E.164 without the + (e.g. "18152462113")
function hashPhone(phone: string | undefined | null): string | undefined {
  if (!phone) return undefined;
  // Strip everything except digits
  const digits = phone.replace(/\D/g, "");
  // Ensure it starts with country code (add 1 for US if 10 digits)
  const normalised = digits.length === 10 ? `1${digits}` : digits;
  return normalised.length >= 10 ? sha256(normalised) : undefined;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventData, userData, eventSourceUrl } = body;

    if (!eventName) {
      return NextResponse.json(
        { success: false, error: "eventName is required" },
        { status: 400 }
      );
    }

    const accessToken = process.env.FB_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("[CAPI] FB_ACCESS_TOKEN env var is not set");
      return NextResponse.json(
        { success: false, error: "FB access token not configured" },
        { status: 200 }
      );
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const resolvedEventId = eventId || crypto.randomUUID();

    // Build user_data — only include fields that are present.
    // All PII is SHA-256 hashed. fbp/fbc/IP/UA are sent as-is per Meta spec.
    const user_data: Record<string, string> = {};
    if (clientIp)            user_data.client_ip_address = clientIp;
    if (userAgent)           user_data.client_user_agent = userAgent;
    if (userData?.fbp)       user_data.fbp = userData.fbp;
    if (userData?.fbc)       user_data.fbc = userData.fbc;

    // Advanced matching — hash PII before it leaves the server
    const hashedEmail      = sha256(userData?.em);
    const hashedPhone      = hashPhone(userData?.ph);
    const hashedExternalId = sha256(userData?.external_id);

    if (hashedEmail)      user_data.em          = hashedEmail;
    if (hashedPhone)      user_data.ph          = hashedPhone;
    if (hashedExternalId) user_data.external_id = hashedExternalId;

    const eventPayload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: resolvedEventId,
          event_source_url: eventSourceUrl || "https://www.dsmcleaningsolutions.com",
          action_source: "website",
          user_data,
          ...(eventData && Object.keys(eventData).length > 0
            ? { custom_data: eventData }
            : {}),
        },
      ],
    };

    const url = `${META_CAPI_URL}?access_token=${accessToken}`;
    console.log(
      `[CAPI] ${eventName} | id: ${resolvedEventId} | em: ${hashedEmail ? "✓" : "✗"} | ph: ${hashedPhone ? "✓" : "✗"} | ext: ${hashedExternalId ? "✓" : "✗"} | fbp: ${userData?.fbp ? "✓" : "✗"} | fbc: ${userData?.fbc ? "✓" : "✗"}`
    );

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      });

      const responseText = await response.text();
      console.log(`[CAPI] ← ${response.status} | ${responseText}`);

      if (response.ok) {
        let result;
        try {
          result = JSON.parse(responseText);
        } catch {
          result = responseText;
        }
        return NextResponse.json({ success: true, status: response.status, result });
      }

      console.error(`[CAPI] Meta returned ${response.status}: ${responseText}`);
      return NextResponse.json(
        { success: false, error: `Meta CAPI error ${response.status}`, detail: responseText },
        { status: 200 }
      );
    } catch (fetchErr) {
      console.error("[CAPI] Fetch error:", fetchErr);
      return NextResponse.json({ success: false, error: "Fetch failed" }, { status: 200 });
    }
  } catch (err) {
    console.error("[CAPI] Unexpected error:", err);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 200 });
  }
}
