// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Adjusted to ./src/pages
    './src/components/**/*.{js,ts,jsx,tsx}',  // Adjusted to ./src/components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
