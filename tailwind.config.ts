import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-sora)", "var(--font-gilroy)", "Gilroy", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-gilroy)", "Gilroy", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "var(--font-gilroy)", "Gilroy", "system-ui", "sans-serif"],
        gilroy:  ["var(--font-gilroy)", "Gilroy", "system-ui", "sans-serif"],
        sora:    ["var(--font-sora)", "system-ui", "sans-serif"],
        inter:   ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand — Crimson
        brand: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#E11D2E",
          700: "#C4111F",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
        // Legacy primary = brand (backwards compat)
        primary: {
          50:  "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#E11D2E",
          700: "#C4111F",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
        // Secondary — Electric Indigo
        indigo: {
          500: "#5B5BFF",
          600: "#4040EE",
        },
        // Success — Emerald
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        // Legacy accent = emerald
        accent: {
          50:  "#ECFDF5",
          100: "#D1FAE5",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        // Neutral
        neutral: {
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Dark surface tokens
        dark: {
          bg:       "#0A0B10",
          surface:  "#12141C",
          elevated: "#1A1D28",
        },
      },
      backgroundImage: {
        "gradient-brand":  "linear-gradient(135deg, #E11D2E 0%, #FF5A36 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in":       "fadeIn 0.6s ease-out forwards",
        "fade-up":       "fadeUp 0.6s ease-out forwards",
        "float":         "float 6s ease-in-out infinite",
        "float-slow":    "float 8s ease-in-out infinite",
        "pulse-slow":    "pulse 4s ease-in-out infinite",
        "marquee":       "marquee 28s linear infinite",
        "spin-slow":     "spin 20s linear infinite",
        "pulse-dot":     "pulse-dot 2s ease-in-out infinite",
        "shimmer":       "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.6", transform: "scale(1.3)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "card":        "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover":  "0 8px 40px rgba(0,0,0,0.10)",
        "brand":       "0 8px 30px rgba(225,29,46,0.30)",
        "brand-lg":    "0 16px 50px rgba(225,29,46,0.35)",
        "glow-brand":  "0 0 40px rgba(225,29,46,0.20)",
        // Legacy names
        "primary":     "0 8px 30px rgba(225,29,46,0.30)",
        "primary-lg":  "0 16px 50px rgba(225,29,46,0.35)",
      },
      transitionTimingFunction: {
        "spring":     "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      borderRadius: {
        "card":  "1.25rem",
        "panel": "1.75rem",
        "btn":   "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
