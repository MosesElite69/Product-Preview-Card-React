/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    montserrat: ["Montserrat"],
    fraunces: ["Fraunces"],
  },
  theme: {
    extend: {
      colors: {
        // PRIMARY
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        // NEUTRAL
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
