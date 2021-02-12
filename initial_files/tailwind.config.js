module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container: {
    //   center: true,
    //   padding: '12rem',
    // },
    backgroundImage: (theme) => ({
      showcase: "url('./dist/img/showcase.jpg')",
    }),
    fontFamily: {
      sans: 'Arial, Helvetica, sans-serif',
    },
    textColor: {
      gray: '#ccc',
      orange: '#e8491d',
      white: '#fff',
    },
    colors: {
      lightgray: '#f4f4f4',
      orange: '#e8491d',
      darkgray: '#35424a',
      gray: '#e6e6e6',
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
