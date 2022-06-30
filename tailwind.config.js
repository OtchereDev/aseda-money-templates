/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
