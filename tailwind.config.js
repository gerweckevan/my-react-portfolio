var defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Ubuntu'].concat(defaultTheme.fontFamily.sans),
    },
    extend: {
      backgroundImage: () => ({
        'app-background': "url('./Assets/Background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

