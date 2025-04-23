/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-green-500",
    "bg-yellow-400",
    "bg-orange-400",
    "bg-red-500",
    "bg-amber-900"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
