import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
      writingMode: {
        "vertical-rl": "vertical-rl",
        "horizontal-tb": "horizontal-tb",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.writing-vertical-rl': { 'writing-mode': 'vertical-rl' },
        '.writing-horizontal-tb': { 'writing-mode': 'horizontal-tb' },
      });
    }),
  ],
} satisfies Config;
