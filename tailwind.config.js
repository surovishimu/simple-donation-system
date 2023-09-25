/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-mobile': '425px',
        'md-mobile': '375px',
        'sm-mobile':'320px'
      },
    },
  },
  plugins: [require("daisyui")],
}

