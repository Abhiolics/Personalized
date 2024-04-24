/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "purple": "#F3F8FF",
        "blue": "#5356FF",
        "swag": "#F875A",
        "new": "#a570ff",
        "wow":"#7D2AE7",
        "suu":"#FC819E",
        "foot": "#C65BCF"
      },
      bgImg: {
        "my": "url('/assets/abhay.jpg')"
      }
    },
  },
  plugins:  [require("daisyui")],
}

