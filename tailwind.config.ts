import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        dark: "rgb(var(--color-dark))",
        background: "rgb(var(--color-bg))",
        surface: "rgb(var(--color-surface))",
        "surface-muted": "rgb(var(--color-surface-muted))",
        fg: "rgb(var(--color-fg))",
        "fg-muted": "rgb(var(--color-fg-muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
