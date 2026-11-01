import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// The colors below point at CSS variables defined in src/app/globals.css.
// Switching between light and dark mode just swaps those variables,
// so components never need separate "dark:" styles.
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        card: "var(--card)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "Cambria", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
