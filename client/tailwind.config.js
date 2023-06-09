/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "fondo-main": "#001A5F",
        botones1: "#0948B1",
        "botones1-borde": "#0015CE",
        subrayado: "#4931AF",
        divProyectos: "#020C22",
        detailCardBg: "#181E26",
        detailCardBorder: "#A5ABB2",
        footerBg: "#020C22",
        inputBg: "#141A29",
        formButtons: "#0948B1",
      },
      textShadow: {
        1: " -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);",
        2: "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 2px 2px 0px rgba(0,0,0,0.79);",
        3: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        customProject: "8px 8px 16px #010919, -8px -8px 16px #030f2b",
      },
    },
    fontFamily: {
      sans: ["Quicksand"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
