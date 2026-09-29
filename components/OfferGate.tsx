"use client";

import { useEffect, useState, type ReactNode } from "react";
import { offerNow } from "@/lib/offerTime";

/**
 * Browser half of <Offer>. The server already decided the offer was live when
 * it rendered this page, so it starts visible (no hydration mismatch). It then
 * checks the clock on load, every minute, and whenever the tab regains focus,
 * and swaps to the fallback the moment the offer ends. That covers a cached
 * page that hasn't regenerated yet and a tab left open past midnight.
 */
export default function OfferGate({
  expiresAt,
  children,
  fallback = null,
}: {
  expiresAt: string;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [live, setLive] = useState(true);

  useEffect(() => {
    const end = new Date(expiresAt).getTime();
    const check = () => setLive(offerNow().getTime() <= end);
    check();
    const timer = window.setInterval(check, 60_000);
    window.addEventListener("focus", check);
    document.addEventListener("visibilitychange", check);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", check);
      document.removeEventListener("visibilitychange", check);
    };
  }, [expiresAt]);

  return <>{live ? children : fallback}</>;
}
