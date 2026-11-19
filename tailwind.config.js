/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Adjust this to match your project's structure
  theme: {
    extend: {
       colors: {
        basit: "black",
        secondary: '#facc15',
        zain: "#80aa2c",
      },
    },
  },
  plugins: [],
};