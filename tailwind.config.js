/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Findel", "serif"],
    },
    extend: {
      colors: {
        "mtc-black": "#292929",
        "mtc-yellow": "#fee581",
      },
      skew: {
        20: "20deg",
      },
    },
  },
  plugins: [],
};
