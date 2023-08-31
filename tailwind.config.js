/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      "brand-gray-1": "#dadce0",
      "brand-blue-1": "#1967d2",
      "brand-green-1": "#137333",
    },
  },
};
export const plugins = [];


