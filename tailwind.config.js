/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#CA1F3D",
        gold: "#FFBE00",
        ink: "#25182E",
      },
      boxShadow: {
        soft: "0 16px 50px rgba(37,24,46,.08)",
      },
    },
  },
  plugins: [],
};