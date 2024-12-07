import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "zoom-out": "zoomOut 4s ease-in-out infinite",
      },
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
