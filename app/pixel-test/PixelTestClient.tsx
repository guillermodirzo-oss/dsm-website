"use client";

import { useEffect, useState } from "react";

interface DiagState {
  pixelLoaded: boolean;
  pageViewsFired: number;
  fbp: string | null;
  fbc: string | null;
  fbclid: string | null;
  externalId: string | null;
  capiResponse: string | null;
  capiStatus: "idle" | "loading" | "ok" | "error";
  matchParams: string[];
}

export default function PixelTestClient() {
  const [state, setState] = useState<DiagState>({
    pixelLoaded: false,
    pageViewsFired: 0,
    fbp: null,
    fbc: null,
    fbclid: null,
    externalId: null,
    capiResponse: null,
    capiStatus: "idle",
    matchParams: [],
  });

  useEffect(() => {
    // Count how many times fbq('track') has been called for PageView
    let pageViewCount = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalFbq = (window as any).fbq as ((...args: any[]) => void) | undefined;

    if (typeof originalFbq === "function") {
      // Wrap fbq with an arrow function to intercept PageView calls (non-destructive).
      // Arrow functions avoid the `this` implicit-any error in strict TS.
      const wrappedFbq = (...args: unknown[]) => {
        if (args[0] === "track" && args[1] === "PageView") {
          pageViewCount++;
        }
        originalFbq(...args);
      };
      // Copy all properties from original fbq so the pixel SDK still works
      Object.assign(wrappedFbq, originalFbq);
      (window as any).fbq = wrappedFbq;
    }

    // Give any queued fbq calls a moment to flush
    setTimeout(() => {
      const fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1] ?? null;
      const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1] ?? null;
      const fbclid = new URLSearchParams(window.location.search).get("fbclid");
      const externalId = (() => {
        try { return localStorage.getItem("dsm_eid"); } catch { return null; }
      })();

      const matchParams: string[] = [];
      if (fbp)         matchParams.push("fbp ✓");
      if (fbc)         matchParams.push("fbc ✓");
      if (externalId)  matchParams.push("external_id ✓");
      if (!fbp)        matchParams.push("fbp ✗ MISSING");
      if (!fbc)        matchParams.push("fbc ✗ (OK if no ad click)");
      if (!externalId) matchParams.push("external_id ✗ MISSING");

      setState(prev => ({
        ...prev,
        pixelLoaded: typeof (window as any).fbq === "function",
        pageViewsFired: pageViewCount,
        fbp,
        fbc,
        fbclid,
        externalId,
        matchParams,
      }));
    }, 1500);
  }, []);

  function testCapiCall() {
    setState(prev => ({ ...prev, capiStatus: "loading", capiResponse: null }));
    const fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1];
    const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1];
    const externalId = (() => { try { return localStorage.getItem("dsm_eid") ?? undefined; } catch { return undefined; } })();

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "PageView",
        eventId: crypto.randomUUID(),
        eventSourceUrl: window.location.href,
        userData: { fbp, fbc, external_id: externalId },
      }),
    })
      .then(r => r.json())
      .then(data => {
        setState(prev => ({
          ...prev,
          capiStatus: data.success ? "ok" : "error",
          capiResponse: JSON.stringify(data, null, 2),
        }));
      })
      .catch(err => {
        setState(prev => ({
          ...prev,
          capiStatus: "error",
          capiResponse: String(err),
        }));
      });
  }

  const row = (label: string, value: string | null, good: boolean | null = null) => (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <span className="w-40 flex-shrink-0 text-xs font-bold text-gray-500 uppercase tracking-wide pt-0.5">{label}</span>
      <span className={`font-mono text-sm break-all ${good === true ? "text-green-600" : good === false ? "text-red-500" : "text-gray-800"}`}>
        {value ?? <span className="text-gray-400 italic">not set</span>}
      </span>
    </div>
  );

  const pvGood = state.pageViewsFired === 1;
  const pvBad  = state.pageViewsFired > 1;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-mono">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">🔬 Pixel Diagnostic</h1>
          <p className="text-gray-400 text-sm">DSM Cleaning Solutions · Internal debug tool · Not indexed by Google</p>
        </div>

        {/* Pixel status card */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-4 border border-gray-800">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Pixel Status</h2>
          <div className="space-y-1">
            {row("fbq loaded", state.pixelLoaded ? "YES" : "NO — pixel script not yet ready", state.pixelLoaded ? true : false)}
            {row(
              "PageViews fired",
              state.pageViewsFired === 0
                ? "0 — waiting… (reload if stuck)"
                : state.pageViewsFired === 1
                ? "1 ✓ CORRECT — exactly one PageView per load"
                : `${state.pageViewsFired} ✗ DUPLICATE — should be 1`,
              state.pageViewsFired === 1 ? true : state.pageViewsFired > 1 ? false : null,
            )}
          </div>
          {pvBad && (
            <div className="mt-4 bg-red-950 border border-red-700 rounded-lg px-4 py-3 text-red-300 text-sm">
              ⚠️ Duplicate PageViews detected. This inflates the fbp coverage metric in Meta Events Manager. Check that <code>fbq(&apos;track&apos;, &apos;PageView&apos;)</code> only appears in the useEffect, not in the inline script.
            </div>
          )}
          {pvGood && (
            <div className="mt-4 bg-green-950 border border-green-700 rounded-lg px-4 py-3 text-green-300 text-sm">
              ✅ PageView firing correctly — exactly once per page load with eventID for CAPI deduplication.
            </div>
          )}
        </div>

        {/* Cookie & ID card */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-4 border border-gray-800">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Cookies & IDs</h2>
          {row("_fbp cookie", state.fbp, !!state.fbp)}
          {row("_fbc cookie", state.fbc, state.fbc !== null ? true : null)}
          {row("fbclid in URL", state.fbclid, state.fbclid !== null ? true : null)}
          {row("external_id", state.externalId, !!state.externalId)}
          {!state.fbp && (
            <div className="mt-4 bg-yellow-950 border border-yellow-700 rounded-lg px-4 py-3 text-yellow-200 text-sm">
              ⚠️ <strong>_fbp missing</strong> — this cookie is set by the Facebook pixel JS after it loads. If it&apos;s absent, the pixel may not have initialised yet. Reload the page. If still missing, check browser ad blockers.
            </div>
          )}
          {!state.fbc && !state.fbclid && (
            <div className="mt-4 bg-gray-800 rounded-lg px-4 py-3 text-gray-400 text-sm">
              ℹ️ <strong>_fbc not set</strong> — this is expected on organic visits. It only populates when a user arrives via a Facebook ad with <code>?fbclid=</code> in the URL.
              <br /><br />
              To test fbc capture: add <code>?fbclid=test123</code> to this URL and reload.
            </div>
          )}
          {state.fbclid && !state.fbc && (
            <div className="mt-4 bg-red-950 border border-red-700 rounded-lg px-4 py-3 text-red-300 text-sm">
              ✗ <strong>fbclid present but _fbc not set</strong> — the inline cookie-capture code may not be running. Check the FacebookPixel component.
            </div>
          )}
          {state.fbclid && state.fbc && (
            <div className="mt-4 bg-green-950 border border-green-700 rounded-lg px-4 py-3 text-green-300 text-sm">
              ✅ fbclid captured and _fbc cookie written correctly.
            </div>
          )}
        </div>

        {/* Match quality card */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-4 border border-gray-800">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Advanced Matching Parameters</h2>
          <p className="text-gray-400 text-xs mb-4">These are the signals sent to CAPI with every event. More signals = higher match quality score.</p>
          <div className="space-y-2">
            {state.matchParams.map(p => (
              <div key={p} className={`text-sm px-3 py-2 rounded-lg ${p.includes("✓") ? "bg-green-950 text-green-300" : p.includes("OK if") ? "bg-gray-800 text-gray-400" : "bg-red-950 text-red-300"}`}>
                {p}
              </div>
            ))}
            <div className="text-sm px-3 py-2 rounded-lg bg-gray-800 text-gray-400">
              em (hashed email) — only sent on Lead/Purchase events after form fill
            </div>
            <div className="text-sm px-3 py-2 rounded-lg bg-gray-800 text-gray-400">
              ph (hashed phone) — only sent when captured from form input
            </div>
            <div className="text-sm px-3 py-2 rounded-lg bg-gray-800 text-gray-400">
              client_ip_address — sent by server (from request headers) ✓
            </div>
            <div className="text-sm px-3 py-2 rounded-lg bg-gray-800 text-gray-400">
              client_user_agent — sent by server (from request headers) ✓
            </div>
          </div>
        </div>

        {/* CAPI live test card */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-4 border border-gray-800">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Live CAPI Test</h2>
          <p className="text-gray-400 text-xs mb-4">Fire a test PageView directly to the CAPI endpoint and see Meta&apos;s response.</p>
          <button
            onClick={testCapiCall}
            disabled={state.capiStatus === "loading"}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors"
          >
            {state.capiStatus === "loading" ? "Firing…" : "Fire Test CAPI Event"}
          </button>
          {state.capiResponse && (
            <div className={`mt-4 rounded-lg p-4 text-sm ${state.capiStatus === "ok" ? "bg-green-950 border border-green-700 text-green-300" : "bg-red-950 border border-red-700 text-red-300"}`}>
              <div className="font-bold mb-2">{state.capiStatus === "ok" ? "✅ CAPI responded OK" : "✗ CAPI error"}</div>
              <pre className="whitespace-pre-wrap break-all text-xs">{state.capiResponse}</pre>
            </div>
          )}
        </div>

        {/* Checklist */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Match Quality Checklist</h2>
          <div className="space-y-2 text-sm text-gray-300">
            <div>📋 Target scores in Meta Events Manager:</div>
            <div className="ml-4 space-y-1 text-xs text-gray-400">
              <div>• PageView match quality: <span className="text-green-400">7.0+</span> (was 3.5)</div>
              <div>• fbc coverage: <span className="text-green-400">80%+</span> of ad-click sessions (was 4.21%)</div>
              <div>• fbp coverage: <span className="text-green-400">~100%</span> (was 1158% = duplicates)</div>
              <div>• external_id: <span className="text-green-400">present on all events</span> (was absent)</div>
            </div>
            <div className="mt-4 text-xs text-gray-500 border-t border-gray-800 pt-4">
              To test fbc capture: visit this page at <code className="text-gray-300">/pixel-test?fbclid=TestClick123</code> — the _fbc cookie should appear above.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
