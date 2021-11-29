module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '2rem',
      center:true
    },
    extend: {
      colors:{
        'ft-gray':'#E8EAE3',
        'ft-dark':'#373833',
        'ft-pink':'#FA2742'
      },
      fontFamily:{
        'poppins':['Poppins','sans-serif'],
        'playFair':['"Playfair Display"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
