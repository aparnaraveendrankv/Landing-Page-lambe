module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        deep_purple: { 700: "#4a1fb7", 900: "#3e1c96", A400: "#5925db", A100: "#9b8afb" },
        gray: { 50: "#fef6fb", 100: "#f4f3ff", 900: "#101828" },
        blue_gray: { 50: "#eaecf0", 100: "#d0d5dd", 500: "#667085", 900: "#1d2939" },
        pink: { 300: "#ee46bc" },
        blue: { 500: "#2e90fa" },
      },
      boxShadow: {},
      fontFamily: { poppins: "Poppins" },
      backgroundImage: { gradient: "linear-gradient(90deg, #eaecf019,#eaecf0,#eaecf019)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
