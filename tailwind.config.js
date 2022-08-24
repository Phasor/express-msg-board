/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
        backgroundImage: {
            'airplane': "url('/images/airplane.svg')"
        }
    },
  },
  plugins: []
}
