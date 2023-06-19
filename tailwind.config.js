/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#282c33",
        "bg-modal": "#31353E",
        "gray-main": "#ABB2BF",
        "pink-main": "#C778DD",
        "orange-main": "#D87D4A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
