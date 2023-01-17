module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'panel': '0px 3px 5px -5px rgba(0, 0, 0, 1)',
        'body': '0px 0px 40px 40px rgba(255, 255, 255, 1)'
      },
      fontFamily: {
        'logofont': ['VT323', 'monospace']
      },
      colors: {
        'green-dark': '#1e8c62',
        'green-light': '#05fc99',
        'purple-new': '#6405fc',
        'blue-dark': '#457b9d',
        'blue-deep': '#1d3557',
        'light-new': '#f1faee',
        'red-new': '#e63946'
      },
      fontSize: {
        'bigger-logo-title': '3.8rem'
      }, backgroundImage: {
        'mobile-img': "url('../../assets/background-mobile.png')",
      }
    }
  },
  plugins: [],
}
