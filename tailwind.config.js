/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js, jsx, ts, tsx}'],
  theme: {
    colors: {
      'dark': '#2E201B',
      'gray': '#F3F3F3',
      'orange': '#FF4500'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

