import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = "604766394322878";

// Stape CAPIG endpoint — pixel ID goes in the URL path, CAPIG-API-KEY in header.
// Try both the direct Stape host and the custom domain CNAME.
const ENDPOINTS = [
  `https://capig.stape.st/${PIXEL_ID}/events`,
  `https://capi.dsmcleaningsolutions.com/${PIXEL_ID}/events`,
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

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const resolvedEventId = eventId || crypto.randomUUID();

    const payload = {
      pixel_id: PIXEL_ID,
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: resolvedEventId,
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

    console.log(`[CAPI] Firing ${eventName} | event_id: ${resolvedEventId} | pixel: ${PIXEL_ID}`);

    for (const endpoint of ENDPOINTS) {
      try {
        console.log(`[CAPI] → POST ${endpoint}`);

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "CAPIG-API-KEY": apiKey,
          },
          body: JSON.stringify(payload),
        });

        const responseText = await response.text();
        console.log(`[CAPI] ← ${endpoint} | status: ${response.status} | body: ${responseText}`);

        if (response.ok) {
          let result;
          try { result = JSON.parse(responseText); } catch { result = responseText; }
          return NextResponse.json({ success: true, endpoint, status: response.status, result });
        }

        console.warn(`[CAPI] ${endpoint} returned ${response.status} — trying next`);

      } catch (fetchErr) {
        console.error(`[CAPI] Fetch error for ${endpoint}:`, fetchErr);
      }
    }

    console.error("[CAPI] All endpoints failed");
    return NextResponse.json(
      { success: false, error: "All endpoints failed — check Vercel function logs" },
      { status: 200 }
    );

  } catch (err) {
    console.error("[CAPI] Unexpected error:", err);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 200 });
  }
}
