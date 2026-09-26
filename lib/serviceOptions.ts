/**
 * The "Service Type" dropdown for every form that posts to the residential
 * HubSpot form. Each label is sent as-is in the `service_type` field, so every
 * entry must also exist as an option on that HubSpot property. Change the list
 * here and nowhere else.
 */
export const SERVICE_OPTIONS = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Recurring Cleaning",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
