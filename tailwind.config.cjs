const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ["Gothic A1", "sans-serif"],
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
      colors: {
        "ghs-blue": "#010096",
        "ghs-dark-blue": "#010046",
        "bg-blue": "#000029",
        "ghs-silver": "#8492A6",
      },
    },
  },
  plugins: [],
};
