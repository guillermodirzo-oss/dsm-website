import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#F97316",
          "green-light": "#FB923C",
          "green-dark": "#EA580C",
          "green-darker": "#C2410C",
          "green-50": "#FFF7ED",
          "green-100": "#FFEDD5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-cleaning": "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
export default config;
