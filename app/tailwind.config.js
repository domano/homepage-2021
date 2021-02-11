module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        swell: {
          '0%, 100%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(1.00)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        swell: 'swell 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
