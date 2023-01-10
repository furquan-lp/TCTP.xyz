module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'panel': '0px 3px 5px -5px rgba(0, 0, 0, 1)'
      },
      fontFamily: {
        'logofont': ['VT323', 'monospace']
      }
    }
  },
  plugins: [],
}
