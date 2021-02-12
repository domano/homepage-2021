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
        },
        flicker: {
          '0%, 100%': { opacity:'0' },
          '50%': { opacity: '100' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        swell: 'swell 1s ease-in-out infinite',
        flicker: 'flicker 1s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
