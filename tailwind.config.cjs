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
      },
      width:{
        rect:'27rem',
        18:'4.5rem',
        100:'6.25rem'
      },
      boxShadow:{
        'box':'2px 2px 6px 3px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
};

module.exports = config;
