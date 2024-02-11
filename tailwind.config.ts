import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.png')",
      },
      maxWidth: { _1366: "1366px" },
      spacing: {
        _784: "784px",
        _305: "305px",
      },
    },
  },
  plugins: [],
};
export default config;
