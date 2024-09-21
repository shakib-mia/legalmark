/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1240px",
      },
    },
    extend: {
      fontSize: {
        56: "3.5rem",
        32: "2rem",
        40: "2.5rem",
      },
      fontFamily: {
        quagera: ["Quagera", "sans-serif"],
        aileron: ["Aileron", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        niconne: ["Niconne", "cursive"],
      },
      colors: {
        primary: "#000F3F",
        secondary: "#988358",
        accent: { DEFAULT: "#8C1928", disabled: "#D4A1A9" },
        black: {
          heading: "#000229",
          body: "#02030DCC",
        },

        white: {
          DEFAULT: "#FFFFFF",
          heading: "#FFFFFF",
          body: "#FFFFFFCC",
        },
      },
    },
  },
  plugins: [],
};
