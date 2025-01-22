/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "/index.html"
  ],
  theme: {
    extend: {
      colors:{
        SecondaryColor: "rgb(var(--SecondaryColor))",
PrimaryColor: "rgb(var(--PrimaryColor))"
      }
    },
  },
  plugins: [],
}

