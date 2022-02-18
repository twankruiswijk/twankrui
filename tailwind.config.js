const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
      },
    },
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
          400: '#1E2468',
          600: '#00031D',
        },
      },
      boxShadow: {
        primary: '0 2px 7px 2px rgba(30, 36, 104, .85)',
        primaryHalf: '0 1px 5px 2px rgba(30, 36, 104, .5)',
      },
    },
  },
  variants: {},
  plugins: [],
};
