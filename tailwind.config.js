const config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gold: "#E0A42B",
        blue: "#5040A1",
        orange: {
          100: "#F67F20",
          105: "#D0A127",
          110: "#FFF5EE",
        },
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        opensan: ["Open Sans", "sans-serif"],
        londrina: ["Londrina Outline", "cursive"],
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "10%": { opacity: "1", transform: "translateY(0)" },
          "90%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
