/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "/index.html"
  ],
  theme: {
    extend: {
      fontSize:{
        "header": "3.5rem"
      },
      colors:{
        SecondaryColor: "rgb(var(--SecondaryColor))",
PrimaryColor: "rgb(var(--PrimaryColor))",
defaultImageColor: "rgb(var(--defaultImageColor))",
      }
    },
  },
  plugins: [],
}

