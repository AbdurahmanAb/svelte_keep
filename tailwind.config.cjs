/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
        grey:'#9E9E9E',
        emerald:'#2ecc71',
        silver:'#bdc3c7',
        grey2:'#95a5a6'
      },
      borderRadius:{
        'circle':'50%',
      }
    },
  },
  plugins: [],
};

module.exports = config;
