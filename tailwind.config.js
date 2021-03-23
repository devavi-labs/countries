module.exports = {
  purge: ["./pages/*.tsx", "./components/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        enter: {
          "0%": { opacity: 0, transform: "translateY(-16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        enter: "enter 0.5s ease-in-out",
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
};
