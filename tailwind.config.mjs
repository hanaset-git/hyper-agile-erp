import twAnimate from './plugins/tw-animate-css/index.js'; // update path if needed

/** @type {import('tailwindcss').Config} */
const config = {
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
  plugins: [twAnimate],
};

export default config;

