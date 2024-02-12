import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
        },
      },

      borderRadius: {
        _53: "53px",
      },

      fontSize: {
        "64": ["64px", "1.25"],
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.png')",
      },
      maxWidth: { _1366: "1366px" },
      spacing: {
        _108: "108px",
        _134: "134px",
        _142: "142px",
        _156: "156px",
        _182: "182px",
        _200: "200px",
        _305: "305px",
        _469: "469px",
        _784: "784px",
      },
    },
  },
  plugins: [],
};
export default config;
