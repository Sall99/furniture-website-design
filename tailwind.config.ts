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
          300: "var(--color-primary-300)",
        },

        secondary: {
          100: "var(--color-secondary-100)",
        },
      },

      borderRadius: {
        _53: "53px",
      },

      fontSize: {
        "13": ["13px", "1.25"],
        "64": ["64px", "1.25"],
        "40": ["40px", "1.25"],
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.png')",
      },
      maxWidth: { _1366: "1366px" },
      spacing: {
        _88: "88px",
        _108: "108px",
        _134: "134px",
        _142: "142px",
        _156: "156px",
        _182: "182px",
        _196: "196px",
        _200: "200px",
        _305: "305px",
        _448: "448px",
        _469: "469px",
        _784: "784px",
      },
    },
  },
  plugins: [],
};
export default config;
