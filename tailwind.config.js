/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
