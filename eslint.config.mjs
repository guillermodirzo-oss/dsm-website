// ESLint 9 flat config (Next.js 16 removed `next lint`; run `npm run lint`).
// Same rules as before: Next.js core web vitals.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    // New in eslint-config-next 16 (React Compiler rules). Two existing forms
    // (LeadForm with the HubSpot residential form, SpringBookingForm) set
    // state inside an effect, which worked fine under Next 14 rules. Keep it
    // visible as a warning instead of rewriting live forms in an upgrade.
    rules: { "react-hooks/set-state-in-effect": "warn" },
  },
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "next-env.d.ts",
    "public/**",
    "scripts/**",
    "video/**",
    "evidence/**",
  ]),
]);
