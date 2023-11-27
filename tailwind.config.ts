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
        dark_primary: "#06223D",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        orimary_linear: "linear-gradient(180deg,#B6CCF5 0.48%, #D5E3F1",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223,229, 0.9)",
      },
    },
    fontFamily: {},
    container: {
      center: true,
      padding: "4rem",
    },
  },
  plugins: [],
};
export default config;
