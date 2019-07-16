module.exports = {
  theme: {
    // Overrides of theme default theme
    fontFamily: {
      title: `"Ginto"`,
      body: `"GT America", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      mono: `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      gray: {
        50: "#fafafa",
        100: "#d3dade",
        200: "#C2CCD1",
        300: "#9FAEB6",
        400: "#8D9BA3",
        500: "#7b878e",
        525: "#6E7980",
        550: "#60696F",
        575: "#545D60",
        600: "#454d4f",
        // 800: "#2b3031",
        // 800: "#282d2e",
        // 800: "#262b2c",
        // 800: "#212526",
        700: "#272b2f",
        800: "#1f2123",
        900: "#1A1C1D",
        // 1000: "#111113",
        // 1000: "#131515",
        1000: "#111313",

        5: "#52595D",
        8: "#98A3AA",
      },
      black: "black",
      blue: {
        500: "#4299E1",
      },
      green: "#05C77E",
      "green-dark": "#048b57",
    },

    // Extensions of theme default theme
    extend: {
      screens: {
        "2xl": "1440px",
      },
      boxShadow: {
        "black-inset":
          "inset 0 0px 28px 4px rgba(0, 0, 0, 0.09), inset 0 0px 4px 2px rgba(0, 0, 0, 0.18)",
        black: "0 2px 28px -1px black, 0 1px 3px 1px rgba(0, 0, 0, 0.72)",
        form:
          "0 0px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      lineHeight: {
        title: 1.21875,
        tighter: 1.125,
        "title-lg": 1.15,
        copy: 1.6,
      },
      letterSpacing: {
        sm: "-0.0125em",
        title: "-0.0375em",
      },
      fontSize: {
        "sm-": "0.8125rem",
        "base+": "1.0625rem",
        "2-5xl": "1.6875rem",
        "2-75xl": "1.875rem",
        "3-5xl": "2.0625rem",
        "4-5xl": "2.5rem",
        "5-5xl": "3.5rem",
      },
      maxWidth: {
        "1-5xl": "40rem",
        "2-5xl": "45rem",
        "7xl": "80rem",
      },
      height: {
        "128": "32rem",
      },
      borderWidth: {
        "3": "3px",
      },
      inset: {
        "-16": "-4rem",
        "-4": "-1rem",
        "8": "2rem",
        "16": "4rem",
      },
      spacing: {
        "7": "1.75rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "72": "18rem",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
}
