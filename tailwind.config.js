/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        introEmailSignUpBackground: "hsl(217, 28%, 15%)",
        mainBackground: "hsl(218, 28%, 13%)",
        footerBackground: "hsl(216, 53%, 9%)",
        testimonialsBackground: "hsl(219, 30%, 18%)",

        // ACCENT
        // (inside call-to-action gradient)

        cyanColor: "hsl(176, 68%, 64%)",
        // (inside call-to-action gradient)
        blueColor: "hsl(198, 60%, 50%)",
        errorColor: "hsl(0, 100%, 63%)",

        // NEUTRAL
        whiteColor: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      headings: ['"Open Sans"', "sans-serif"],
      body: ['"Raleway"', "sans-serif"],
    },
  },
  plugins: [],
};
