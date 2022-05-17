module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'cel': {'max': '400px'},
    },
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss build styles.css -o