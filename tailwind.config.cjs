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
    },
  },
  plugins: [],
};
