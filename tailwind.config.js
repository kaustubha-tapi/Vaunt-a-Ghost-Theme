module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: true,
    content: [
      './partials/*.hbs',
      './*.hbs'
    ],
    options:{
      keyframes: true,
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark':'#1a1c20',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
