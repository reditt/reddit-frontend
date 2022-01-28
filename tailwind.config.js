module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        wrapper: "1024px",
        searchbar: "40rem",
        modal: "550px",
      },
      colors: {
        primary: "#4DACFF",
        black: "#2d2d2d",
        modal: "rgba(0, 0, 0, 0.8)",
      },
      screens: {
        mob: "400px",
      },
      fontSize: {
        xxs: "11px",
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@themesberg/flowbite/plugin")],
  // content: ["./node_modules/@themesberg/flowbite/**/*.js"],
};
