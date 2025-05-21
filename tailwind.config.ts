import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7DF9FF",
        cta: "#FFA500",
        coral: "#FF7F50",
        pink: "#FF69B4",
        coralRed: "#FF5349",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};

export default config;
