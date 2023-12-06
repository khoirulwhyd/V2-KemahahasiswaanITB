/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'primary' : {
        50: '#eef8ff',
        100: '#d9efff',
        200: '#bce3ff',
        300: '#8ed3ff',
        400: '#59b8ff',
        500: '#41A0FF',
        600: '#1b79f5',
        700: '#1463e1',
        800: '#174fb6',
        900: '#19458F',
        950: '#142B57',
      },
      // 'neutral': {
      //   50: '#eef8ff',
      //   100: '#d9efff',
      //   200: '#bce3ff',
      //   300: '#8ed3ff',
      //   400: '#59b8ff',
      //   500: '#41a0ff',
      //   600: '#1b79f5',
      //   700: '#1463e1',
      //   800: '#174fb6',
      //   900: '#19458F',
      //   950: '#142B57',
      // },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}