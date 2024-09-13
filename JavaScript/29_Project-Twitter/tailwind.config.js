/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'custom-blue1':'rgb(29, 155, 240)', // Add your custom color
      },
    },
  },
  // other configurations
}

