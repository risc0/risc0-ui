/* c8 ignore start */
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "../../packages/shared/client/**/*.{ts,tsx,js,jsx,mdx}",
    "../../packages/shared/server/**/*.{ts,tsx,js,jsx,mdx}",
    "../../node_modules/@risc0/ui/**/*.{ts,tsx,js,jsx,mdx}",
    "./node_modules/@risc0/ui/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
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
      screens: {
        "3xl": "1600px",
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        tilt: {
          "0%, 50%, to": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(0.5deg)" },
          "75%": { transform: "rotate(-0.5deg)" },
        },
        "head-shake": {
          "0%": { transform: "translateX(0)" },
          "6.5%": { transform: "translateX(-6px) rotateY(-9deg)" },
          "18.5%": { transform: "translateX(5px) rotateY(7deg)" },
          "31.5%": { transform: "translateX(-3px) rotateY(-5deg)" },
          "43.5%": { transform: "translateX(2px) rotateY(3deg)" },
          "50%": { transform: "translateX(0)" },
        },
        indeterminate1: {
          "0%": {
            left: "-35%",
            right: "100%",
          },
          "60%": {
            left: "100%",
            right: "-90%",
          },
          "100%": {
            left: "100%",
            right: "-90%",
          },
        },
        indeterminate2: {
          "0%": {
            left: "-200%",
            right: "100%",
          },
          "60%": {
            left: "100%",
            right: "-8%",
          },
          "100%": {
            left: "100%",
            right: "-8%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-down": "fade-in-down 1s ease-in-out",
        "fade-in-left": "fade-in-left 1s ease-in-out",
        "fade-in-right": "fade-in-right 1s ease-in-out",
        "fade-in-up": "fade-in-up 1s ease-in-out",
        "fade-in": "fade-in 1s ease-in-out",
        "head-shake": "head-shake 1s ease-in-out",
        indeterminate1: "indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
        indeterminate2: "indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite",
        tilt: "tilt 10s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
