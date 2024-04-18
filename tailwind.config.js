module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "initial": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/bg-initial.jpg')"
      },

      fontFamily: {
        "logo": ["Montserrat", 'sans-serif'],
        "texto": ["Roboto", 'sans-serif'],
        "links": ["Poppins", 'sans-serif']
      },
    }
  },
  plugins: [],
}
