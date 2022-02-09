const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          600: '#00031D',
        },
      },
      boxShadow: {
        primary: '0 2px 10px 2px #1E2468',
        primaryHalf: '0 1px 5px 2px #1E2468',
      },
    },
  },
  variants: {},
  plugins: [],
};
