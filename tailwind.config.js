/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        open: ["'Open Sans'", "sans-serif"],
        serif: ["Inconsolata", "monospace"],
      }
    },
  },
  plugins: [],
}
