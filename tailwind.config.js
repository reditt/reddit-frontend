module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        wrapper: "1024px",
        searchbar: "40rem",
      },
      colors: {
        primary: "#4DACFF",
      },
      screens: {
        mob: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
