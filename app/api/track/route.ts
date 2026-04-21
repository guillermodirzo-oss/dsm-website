import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = "604766394322878";

// Send directly to Meta's Conversions API Graph endpoint.
// access_token goes as a query param; pixel_id is in the URL path.
const META_CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventData, userData, eventSourceUrl } = body;

    if (!eventName) {
      return NextResponse.json({ success: false, error: "eventName is required" }, { status: 400 });
    }

    const accessToken = process.env.FB_ACCESS_TOKEN;
    if (!accessToken) {
      console.error("[CAPI] FB_ACCESS_TOKEN env var is not set");
      return NextResponse.json({ success: false, error: "FB access token not configured" }, { status: 200 });
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const resolvedEventId = eventId || crypto.randomUUID();

    const eventPayload = {
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

    const url = `${META_CAPI_URL}?access_token=${accessToken}`;
    console.log(`[CAPI] Firing ${eventName} | event_id: ${resolvedEventId} | pixel: ${PIXEL_ID}`);
    console.log(`[CAPI] → POST ${META_CAPI_URL}`);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      });

      const responseText = await response.text();
      console.log(`[CAPI] ← status: ${response.status} | body: ${responseText}`);

      if (response.ok) {
        let result;
        try { result = JSON.parse(responseText); } catch { result = responseText; }
        return NextResponse.json({ success: true, status: response.status, result });
      }

      console.error(`[CAPI] Meta CAPI returned ${response.status}: ${responseText}`);
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
