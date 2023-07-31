/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        white: 'rgb(255,255,255)',
        lightBlue: 'rgb(70,75,109)',
        deepBlue: 'rgb(24,32,74)',
        lightGray: 'rgb(52,58,95)',
        veryLightGray: 'rgb(237,237,241)',
        deepGray: 'rgb(237,240,235)',
      }
    },
  },
  plugins: [],
};
