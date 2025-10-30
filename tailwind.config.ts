import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-architects-daughter)",
          "Architects Daughter",
          "sans-serif",
        ],
        serif: [
          "Georgia",
          "serif",
        ],
        mono: [
          "var(--font-fira-code)",
          "Fira Code",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;