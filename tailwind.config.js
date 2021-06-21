module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'indigo-black':'#0D0D1C',
        'indigo-dark':'#312E81',
        'indigo-medium':'#4338CA',
        'indigo-light':'#7969FF',
        'indigo-white':'#F9FAFB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
