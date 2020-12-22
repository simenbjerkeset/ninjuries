module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif']
      },
      textColor: {
        'primary': '#FFF',
        'secondary': '#022945',
        'secondary-darker': '#001a2c' 
      },
      backgroundColor: {
        'primary': '#022945',
        'secondary': '#FFF',
        'primary-darker': '#001a2c' 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
