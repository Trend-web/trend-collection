import type { Config } from "tailwindcss";

const config: Config = {
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
        darkBiege: "#d5b990",
        fonnt: "#291f0f",
        lightBiege: "#ece3d4",
        categories: "#d4c3aa",
        whiteBiege: "#f8f2eb"

      },
    },
  },
  plugins: [],
};
export default config;
