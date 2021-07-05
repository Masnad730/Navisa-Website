module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff0031',
        'primary-1': '#c27031',
        'primary-2': '#e58c30',
        'primary-dark-1': '#99001d',
        'primary-dark-2': '#660014',
        'primary-light-1': '#ff1a46',
        'primary-light-2': '#ff4d6f',
        secondary: '#222446',
        tertiary: '#eff3f7',
        light_gray: '#fafafa',
        paragraph: 'rgb(116, 117, 127)',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      zIndex: {
        '-1': '-1',
        1: '1',
      },
      lineHeight: {
        'extra-loose': '2.5',
        12: '3rem',
        14: '4rem',
        15: '5rem',
        16: '5.25rem',
        17: '5.5rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        12: '3rem',
      },
      fontSize: {
        tiny: [
          '0.813rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        medium: [
          '0.938rem',
          {
            lineHeight: '1.250rem',
          },
        ],
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      display: ['hover', 'group-hover'],
      borderWidth: ['hover', 'focus'],
      visibility: ['hover', 'group-hover'],
      inset: ['hover', 'group-hover'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      margin: ['last', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [],
}
