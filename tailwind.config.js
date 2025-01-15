/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins' : "Poppins",
      'inter' : "Inter",
    }
    ,
    extend: {
      colors: {
        'primaryColor' : "#131313",
        'secondaryColor' : "#313131",
        'secondaryColorHover' : "#2B2B2B",
        'accentColor' : "#3E85FF",
        'textPrimaryColor' : "#FEFEFE",
        'textSecondaryColor' : "#ECECEC",
        'textInactiveColor' : "#C3C3C3",
      },
      borderRadius: {
        'radiusGambarHero' : '4rem',
      }
    },
  },
  plugins: [],
}

