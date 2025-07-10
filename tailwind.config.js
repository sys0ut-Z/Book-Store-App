/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors : {
        primary : "#1182c5",
        secondary : "#2aa6df"
      },
    },
  },
  plugins: [],
}

