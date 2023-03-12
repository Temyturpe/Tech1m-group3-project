/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      adelia: ["ArticulatCF-700", "san-serif"],
    },
    colors : {
      'primary': {
        50 : '#E6F0FF',
        75 : '#96C0FF',
        100 : '#6BA6FF',
        200 : '#2B7FFF',
        300 : '#0065FF',
        400 : '#0047B3',
        500 : '#003E9C'
      },
      'neutral': {
        30 : '#EBEDF0',
        40 : '#DFE2E6',
        50 : '#C2C7D0',
        60 : '#B3B9C4',
        70 : '#A6AEBB',
        80 : '#98A1B0',
        90 : '#8993A4',
        100 : '#7A8699',
        200 : '#6B788E',
        300 : '#5D6B82',
        400 : '#505F79',
      },
      'dblue' : {
        500 : '#42526D',
        600 : '#354764',
        700 : '#243757',
        800 : '#15294B',
        900 : '#091E42'
      },
      'black': '#1E1717',
      'green': '#01A830',
      'red': '#FA0724',
      'white': {
        0 : '#FFFFFF',
        10 : '#FAFBFB',
        20 : '#F5F6F7',
        30 : '#FFFEFE'
      },
      'error': '#FA0724',
      'success': '#01A830'
    },
    extend: {
    },
  },
  plugins: [],
}
