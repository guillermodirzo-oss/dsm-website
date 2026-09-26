"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Longest a Step 1 lock can hold if its request stalls, so Next never sticks. */
export const STALLED_REQUEST_MS = 10_000;

/**
 * Lock for a button that sends a request. The ref flips synchronously, so a
 * second click in the same tick sees it before React re-renders `pending`.
 *
 *   if (!lock.begin()) return;   // already running, ignore this click
 *   ... send the request ...
 *   lock.end();                  // unlock (skip on success if the page is about to redirect)
 *
 * `begin(maxMs)` also releases the lock on its own after maxMs.
 */
export function useInFlight() {
  const locked = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [pending, setPending] = useState(false);

  const end = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    locked.current = false;
    setPending(false);
  }, []);

  const begin = useCallback(
    (maxMs?: number) => {
      if (locked.current) return false;
      locked.current = true;
      setPending(true);
      if (maxMs) timer.current = setTimeout(end, maxMs);
      return true;
    },
    [end]
  );

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  return { pending, begin, end };
}
