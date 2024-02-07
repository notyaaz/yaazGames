/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#0B2434",
        lightGreen: "#59E391",
        purple: "#5035FF",
      },
      fontFamily: {
        "Inter": ["Inter"]
      }
    },
  },
  plugins: [],
};
