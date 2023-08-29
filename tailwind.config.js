/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 0px 10px 3px rgba(0, 0, 0, 0.3)'
    }},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}

