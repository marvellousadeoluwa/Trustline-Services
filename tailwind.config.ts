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
        white: "#FFFFFF",
        "trust-blue": "#003366",
        "accent-sky": "#E6F0FA",
        "action-cyan": "#00A3FF",
        "border-grey": "#D1D9E6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Lexend", "sans-serif"],
      },
      spacing: {
        "section": "8rem", // 20% more whitespace
        "section-sm": "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
