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
        bg: "#0D0D0D",
        surface: "#151413",
        panel: "#111111",
        text: "#F5F1EB",
        "text-soft": "#DDD3C7",
        "text-muted": "#9E948A",
        accent: "#E85D26",
        "accent-soft": "#F4B49B",
        line: "#262220",
        terminal: "#121212",
        "terminal-border": "#24201D",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1100px",
        copy: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
