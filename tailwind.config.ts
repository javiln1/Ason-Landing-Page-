import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "#d4a574",
          light: "#e0be96",
          dark: "#a17a4e",
        },
        burgundy: {
          DEFAULT: "#5b1f0f",
          light: "#7a2e15",
          dark: "#3d150a",
        },
        cream: "#f2eee6",
        surface: {
          dark: "#0a0908",
          elevated: "#1a1714",
        },
      },
      fontFamily: {
        sans: ["Cormorant Garamond", "Georgia", "serif"],
        display: ["Cinzel", "serif"],
        body: ["Cormorant Garamond", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": [
          "6rem",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        display: [
          "2.75rem",
          { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        heading: [
          "2rem",
          { lineHeight: "1.25", letterSpacing: "0", fontWeight: "600" },
        ],
        subheading: ["1.25rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 165, 116, 0.5)" },
        },
        "gold-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(212, 165, 116, 0.2), 0 0 60px rgba(212, 165, 116, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(212, 165, 116, 0.4), 0 0 80px rgba(212, 165, 116, 0.2)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "gold-pulse": "gold-pulse 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(180deg, #0f0d0b 0%, #0a0908 100%)",
        "card-gradient": "linear-gradient(135deg, #1a1714 0%, #141210 100%)",
      },
      boxShadow: {
        premium:
          "0 4px 6px -1px rgba(0,0,0,0.3), 0 10px 20px -2px rgba(0,0,0,0.25)",
        "premium-lg":
          "0 10px 25px -5px rgba(0,0,0,0.4), 0 20px 40px -10px rgba(0,0,0,0.3)",
        "glow-gold": "0 0 40px -10px rgba(212, 165, 116, 0.4)",
        "glow-gold-lg": "0 0 60px -10px rgba(212, 165, 116, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
