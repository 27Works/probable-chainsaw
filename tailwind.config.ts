import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura PT", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        demi: "600",
        bold: "700",
        extrabold: "800",
        heavy: "900",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".font-futura-light": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "300",
        },
        ".font-futura-book": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "400",
        },
        ".font-futura-medium": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "500",
        },
        ".font-futura-demi": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "600",
        },
        ".font-futura-bold": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "700",
        },
        ".font-futura-extrabold": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "800",
        },
        ".font-futura-heavy": {
          fontFamily: "Futura PT, sans-serif",
          fontWeight: "900",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;
