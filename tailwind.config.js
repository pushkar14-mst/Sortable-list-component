/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "deep-blue": "#0D2167",
        "input-white": "#F7F7FA",
        "placeholder-gray": "#5A6793",
      },
    },
  },
  plugins: [require("daisyui")],
};
