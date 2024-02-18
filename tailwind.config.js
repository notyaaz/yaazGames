/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#E09600",
        accentHover: "#FFAA00",
        complenetary: "#4483E3",
        complenetaryHover: "#4D94FF",


        //for minessweeper
        m_light: "#9AD667",
        m_dark: "#86B959",
        m_hovered: "#677CD7",
        m_light1: "#D68367 ",
        m_dark1: "#B97159",
        //m_backgroundColor: "#2F3862",
        m_resetButton: "#4CAF50",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
