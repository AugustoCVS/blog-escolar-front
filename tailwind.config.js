/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      gray: {
        100: "#E1E1E6",
        300: "#C4C4CC",
        400: "#8D8D99",
        500: "#7C7C8A",
        600: "#323238",
        700: "#29292E",
        800: "#202024",
        900: "#121214",
      },
      green: {
        300: "#00B37E",
        500: "#00875F",
        700: "#015F43",
      },
      red: {
        300: "#F75A68",
        500: "#AB222E",
        700: "#7A1921",
      },
      purple: {
        600: "#9333EA",
      }
    },
    screens: {
      xsm: '375px',
      sm: '575px',
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1920px"
    }
  },
  darkMode: "class",
};
export default config;