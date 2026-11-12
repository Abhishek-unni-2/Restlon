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
        ivory: {
          DEFAULT: "#F8F6F2",
          50: "#FFFFFF",
          100: "#FDFCFA",
          200: "#F8F6F2",
          300: "#F1ECE3",
          400: "#EAE3D4",
        },
        sand: {
          DEFAULT: "#E8E1D5",
          50: "#FAF9F6",
          100: "#F3F0E9",
          200: "#E8E1D5",
          300: "#D6CCA",
          400: "#C4B6A3",
        },
        warmgrey: {
          DEFAULT: "#6B6660",
          50: "#F5F4F3",
          100: "#E7E5E3",
          200: "#C7C4C0",
          300: "#9E9993",
          400: "#6B6660",
          500: "#544F4A",
          600: "#3D3935",
          700: "#2A2724",
          800: "#1C1A18",
        },
        teal: {
          DEFAULT: "#0F5C56",
          50: "#F0F7F6",
          100: "#DDEEEB",
          200: "#BFDFD9",
          300: "#95CAC2",
          400: "#5EADA2",
          500: "#0F5C56",
          600: "#0B4C47",
          700: "#093D39",
          800: "#072E2B",
          900: "#05201E",
        },
        terracotta: {
          DEFAULT: "#C96F4A",
          50: "#FDF7F4",
          100: "#F9ECE4",
          200: "#F3D5C5",
          300: "#EAB9A1",
          400: "#DE9474",
          500: "#C96F4A",
          600: "#B45733",
          700: "#944324",
          800: "#75351D",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
