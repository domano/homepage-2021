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
        grow: {
          '0%,30%,100%': { transform: 'scale(1.00)' },
          '20%': { transform: 'scale(1.03)' },
        },
        flicker: {
          '0%, 100%': { opacity:'0' },
          '50%': { opacity: '100' },
        },
        appear: {
          '0%':{ opacity:'0' , transform: 'rotate(-20deg)' },
          '50%':{ opacity:'100' ,  transform: 'rotate(0deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        swell: 'swell 1s ease-in-out infinite',
        grow: 'grow 4s ease-in-out',
        flicker: 'flicker 1s linear infinite',
        appear: 'appear 500ms ease-in-out ',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
