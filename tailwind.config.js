/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'rgb(59 130 246)',
        'secondary': '#ffffff'
      },
      colors: {
        'primary': 'rgb(59 130 246)',
        'secondary': '#ffffff'
      },
      backgroundImage: {
        'bgHome':  "url('./bg-home.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

