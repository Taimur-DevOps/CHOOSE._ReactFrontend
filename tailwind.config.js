/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: "#F05A22",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        lightGray: "#707070",
        darkGray: "#181818",
        foggySummer: "#F6F7F8",
        GeminiGray: "#707070",
        Sonia: "#EB5A32",
        OlderGray: "#B2B2B2",
        Frei: "#3B3B3B",
        skyblue: "#FAF9F6",
      },
      spacing: {
        49: "12.5rem",
      },
      maxWidth: {
        "8xl": "37.75rem",
        "9xl": "13rem",
        "95%": "95%",
        "90%": "90%",
        "85%": "85%",
        "80%": "80%",
        md: "26.563rem",
      },
      minWidth: {
        36: "2.25rem",
      },
      borderRadius: {
        20: "1.25rem",
        "50%": "50%",
        "l-t-b": "6px 0px 0px 6px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        sm: "2px 4px 20px #030E1A14",
        xs: "0px 2px 6px #00000014",
        "3xl": "2px 2px 15px #04041C14;",
        "4xl": "0px 2px 12px #040B1D1F;",
      },
      width: {
        23: "1.438rem",
        53: "13.3rem",
        "70%": "70%",
        "30%": "30%",
      },
      container: {
        screens: {
          xs: "370px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1800px",
        },
      },
      screens: {
        "1xl": "1400px",
        xs: "992px",
      },
      zIndex: {
        1: "1",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

