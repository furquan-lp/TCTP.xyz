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
      },
      colors: {
        'green-dark': '#1e8c62',
        'green-light': '#05fc99',
        'purple-new': '#6405fc'
      }
    }
  },
  plugins: [],
}
