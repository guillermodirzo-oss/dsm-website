import { NextRequest, NextResponse } from "next/server";

const CAPIG_ENDPOINT = "https://capig.stape.st/jhzpdfyt/events";
const PIXEL_ID = "604766394322878";

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

    const resolvedEventId = eventId || crypto.randomUUID();

    const payload = {
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

    console.log(`[CAPI] → ${eventName} | event_id: ${resolvedEventId} | pixel: ${PIXEL_ID} | endpoint: ${CAPIG_ENDPOINT}`);

    const response = await fetch(CAPIG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CAPIG-API-KEY": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`[CAPI] ← status: ${response.status} | body: ${responseText}`);

    if (!response.ok) {
      console.error(`[CAPI] Stape error ${response.status}: ${responseText}`);
      return NextResponse.json({ success: false, status: response.status, error: responseText }, { status: 200 });
    }

    let result;
    try { result = JSON.parse(responseText); } catch { result = responseText; }
    return NextResponse.json({ success: true, status: response.status, result });

  } catch (err) {
    console.error("[CAPI] Unexpected error:", err);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 200 });
  }
}
