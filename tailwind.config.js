/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "2rem",
      },
    },
  },
  mode: "jit",
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
]
}