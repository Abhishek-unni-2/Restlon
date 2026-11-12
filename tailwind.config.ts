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
        cloud: "#FFFFFF",
        mist: "#F5F5F7",
        pebble: "#E8E8ED",
        nordic: {
          50: "#F2F5F9",
          100: "#E3EAF2",
          200: "#C5D3E3",
          300: "#9DB4CF",
          400: "#6F8FB3",
          500: "#46688F",
          600: "#2F4F75",
          700: "#223F61",
          800: "#173250",
          900: "#0F2238",
          950: "#0A1626",
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
          DEFAULT: "#1D1D1F",
          50: "#F6F7F6",
          100: "#E2E4E3",
          500: "#6E6E73",
          700: "#424245",
          800: "#2C2C2E",
          900: "#1D1D1F",
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
        card: "0 1px 2px 0 rgba(26, 28, 27, 0.04)",
        "card-hover": "0 8px 24px -8px rgba(26, 28, 27, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
