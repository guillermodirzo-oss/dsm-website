import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = "604766394322878";

// Endpoint candidates in priority order
const ENDPOINTS = [
  "https://capig.stape.gl/event?id=zxlczzbg",
  "https://www.facebook.com/tr/",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventData, userData, eventSourceUrl } = body;

    if (!eventName) {
      return NextResponse.json({ success: false, error: "eventName is required" }, { status: 400 });
    }

    const apiKey = process.env.STAPE_CAPIG_API_KEY;
    if (!apiKey) {
      console.error("[CAPI] STAPE_CAPIG_API_KEY env var is not set");
      return NextResponse.json({ success: false, error: "API key not configured" }, { status: 200 });
    }

    // Pull real client IP from Vercel/proxy headers
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId || crypto.randomUUID(),
          event_source_url: eventSourceUrl || "https://www.dsmcleaningsolutions.com",
          action_source: "website",
          user_data: {
            ...(clientIp && { client_ip_address: clientIp }),
            ...(userAgent && { client_user_agent: userAgent }),
            ...(userData?.fbp && { fbp: userData.fbp }),
            ...(userData?.fbc && { fbc: userData.fbc }),
          },
          ...(eventData && Object.keys(eventData).length > 0 && { custom_data: eventData }),
        },
      ],
    };

    console.log("[CAPI] Sending event:", eventName, "event_id:", payload.data[0].event_id);

    // Try each endpoint in order, log full response for debugging
    for (const endpoint of ENDPOINTS) {
      try {
        console.log(`[CAPI] Trying endpoint: ${endpoint}`);

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "CAPIG-API-KEY": apiKey,
          },
          body: JSON.stringify(payload),
        });

        const responseText = await response.text();
        console.log(`[CAPI] ${endpoint} → status: ${response.status}, body: ${responseText}`);

        if (response.ok) {
          console.log(`[CAPI] Success via ${endpoint}`);
          let result;
          try { result = JSON.parse(responseText); } catch { result = responseText; }
          return NextResponse.json({
            success: true,
            endpoint,
            status: response.status,
            result,
          });
        }

        // Log non-OK and continue to next endpoint
        console.warn(`[CAPI] ${endpoint} returned ${response.status} — trying next endpoint`);

      } catch (fetchErr) {
        console.error(`[CAPI] Fetch error for ${endpoint}:`, fetchErr);
      }
    }

    // All endpoints failed — return 200 so browser pixel is unaffected
    console.error("[CAPI] All endpoints failed");
    return NextResponse.json({
      success: false,
      error: "All endpoints failed — see Vercel function logs for details",
    }, { status: 200 });

  } catch (err) {
    console.error("[CAPI] Unexpected error:", err);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 200 });
  }
}
