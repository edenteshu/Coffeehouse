/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        cursive: ["Ballet", "cursive"],
      },
      colors: {
        primary: "#909090",
        secondary: "#645F5A",
        brandDark: "#6D747D",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
