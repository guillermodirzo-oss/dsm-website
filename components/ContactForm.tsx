"use client";

import BookingForm from "@/components/BookingForm";

/**
 * ContactForm — delegates to the BookingKoala embedded lead form.
 *
 * The previous implementation was a fake HTML form that submitted to nothing
 * (TODO comment on line 29 of the old file; used a simulated 800ms delay and
 * showed a fake success screen — no email or data was ever sent anywhere).
 *
 * This component now renders the same BookingKoala iframe embed used on the
 * homepage, /contact, and /about pages. BookingKoala handles submission,
 * confirmation, and redirects to /quote-thank-you on success.
 *
 * Note: The `dark` prop is retained for API compatibility but has no effect —
 * the BookingKoala embed controls its own styling.
 *
 * Pages that currently import ContactForm: none (as of this fix).
 * Pages using BookingForm directly: app/page.tsx, app/contact/page.tsx,
 * app/about/page.tsx, and all city/service combo pages.
 */
export default function ContactForm({ dark: _dark = false }: { dark?: boolean }) {
  return <BookingForm />;
}
