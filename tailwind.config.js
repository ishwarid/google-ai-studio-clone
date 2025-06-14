module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f1f1f",
        surface: "#121212",
      },
     fontFamily: {
      sans: ['"Google Sans"', '"Helvetica Neue"', 'sans-serif'],
    },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [],
};
