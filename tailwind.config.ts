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
        cloud: "#FCFCFA",
        mist: "#F7F6F2",
        pebble: "#EFECE6",
        nordic: {
          50: "#F4F7F5",
          100: "#E6EDE9",
          200: "#CFDDD5",
          300: "#A9C3B5",
          400: "#7DA391",
          500: "#5A8572",
          600: "#446959",
          700: "#365347",
          800: "#2B4C3F", // Primary Nordic Sage Green
          900: "#1E382E", // Deep Pine
          950: "#11211B",
        },
        clay: {
          DEFAULT: "#B86B4D",
          50: "#FDF7F5",
          100: "#F9ECE7",
          200: "#F3D8CD",
          500: "#B86B4D",
          600: "#A2573B",
        },
        charcoal: {
          DEFAULT: "#1A1C1B",
          50: "#F6F7F6",
          100: "#E2E4E3",
          500: "#7E847F",
          700: "#4A4E4B",
          800: "#2C2E2D",
          900: "#1A1C1B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px -2px rgba(26, 28, 27, 0.05), 0 2px 6px -1px rgba(26, 28, 27, 0.03)",
        "card-hover": "0 12px 30px -4px rgba(26, 28, 27, 0.08), 0 4px 12px -2px rgba(26, 28, 27, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
