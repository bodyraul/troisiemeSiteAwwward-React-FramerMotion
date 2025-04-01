/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      supp405:"405px",
      supp500:"500px",
      supp546:"546px",
      supp610:"610px",
      supp625:"625px",
      supp680:"680px",
      supp721:"721px",
      supp750:"750px",
      supp1100:"1100px",
      supp1285:"1285px",
      supp1740:"1740px",
    },
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      transitionDelay: {
        '600': '600ms',
      },
      height: {
        '10vh': '10vh',
        '150px':"150px",
      },
      width: {
        '70%': '70%',
        '90%': '90%',
      },
      maxWidth: {
        '1800px': '1800px',
      },
      zIndex: {
        '3000': '3000',
      },
      colors: {
        'blanc': '#FBFBFB',
        'noir': '#181818',
        'grisPlusGris': '#D3D3D3',
        'grisTexte': '#787878',
        'grisTexteDeux': '#333',
        'grisClair': '#747474',
        'grisParaCache': '#292929',
        'orangeCustom': '#FF5314',
        'cardUn': '#212121',
        'cardDeux': '#2B2B2B',
        'cardTrois': '#363636',
        'borderGris': '#303030',
      },
    },
  },
  plugins: [],
}

