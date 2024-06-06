const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    },
      colors: {
        primary: '#FF5D00', 
        secondary: '#001F5C',
        tertiary: '#000a1f',
        white: '#fff',
        grey:'#F9FAFB',
        black:'#000'
      },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1400px',
      },
    },
    
      screens: {
        'min-1024px': '1024px',
        'max-1024px': {'max': '1024px'},
        'min-992px': '992px',
        'min-768px': '768px',
        'max-768px': {'max': '768px'},
        'min-500px': '500px',
        'max-500px': {'max': '500px'},
      },
      animation: {
        ripple: 'ripple 2s linear infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(231,231,231,0) 0%, rgba(221,221,221,1) 100%)',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus', 'min', 'max'], // Add other variants as needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-image-slice-1': {
          'border-image-slice': '1',
        },
        '.border-image-gradient': {
          'border-image-source': 'linear-gradient(90deg, rgba(112, 160, 255, 0) 0%, rgba(112, 160, 255, 0.633) 50%, rgba(112, 160, 255, 0) 100%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ],
}