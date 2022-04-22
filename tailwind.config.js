/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = config
