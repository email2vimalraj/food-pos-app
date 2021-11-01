module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      driftwood: {
        50: '#fbf9f5',
        100: '#f7f3ec',
        200: '#eae0cf',
        300: '#ddceb2',
        400: '#c4a979',
        500: '#ab843f',
        600: '#9a7739',
        700: '#80632f',
        800: '#674f26',
        900: '#54411f'
      },
      tan: {
        50: '#fcfbf9',
        100: '#f9f7f2',
        200: '#f1eadf',
        300: '#e8ddcb',
        400: '#d6c4a4',
        500: '#c5ab7d',
        600: '#b19a71',
        700: '#94805e',
        800: '#76674b',
        900: '#61543d'
      },
      'stark-white': {
        50: '#fdfdfc',
        100: '#fcfbf8',
        200: '#f7f4ee',
        300: '#f2ede4',
        400: '#e9e0cf',
        500: '#dfd2bb',
        600: '#c9bda8',
        700: '#a79e8c',
        800: '#867e70',
        900: '#6d675c'
      },
      alabaster: {
        50: '#ffffff',
        100: '#fefefe',
        200: '#fefefe',
        300: '#fdfdfd',
        400: '#fbfbfb',
        500: '#f9f9f9',
        600: '#e0e0e0',
        700: '#bbbbbb',
        800: '#959595',
        900: '#7a7a7a'
      },
      shark: {
        50: '#f4f4f4',
        100: '#e9e9e9',
        200: '#c9c9c9',
        300: '#a9a9a9',
        400: '#686868',
        500: '#272727',
        600: '#232323',
        700: '#1d1d1d',
        800: '#171717',
        900: '#131313'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
