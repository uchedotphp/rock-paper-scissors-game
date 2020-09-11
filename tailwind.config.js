module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        scissorsGradientOne: "hsl(39, 89%, 49%)",
        scissorsGradientTwo: "hsl(40, 84%, 53%)",
        paperGradient: "hsl(230, 89%, 62%)",
        paperGradientTwo: "hsl(230, 89%, 65%)",
        rockGradient: "hsl(349, 71%, 52%)",
        rockGradientTwo: "hsl(349, 70%, 56%)",
        lizardGradient: "hsl(261, 73%, 60%)",
        lizardGradientTwo: "hsl(261, 72%, 63%)",
        cyanOne: "hsl(189, 59%, 53%)",
        cyanTwo: "hsl(189, 58%, 57%)",

        // Neutral Colors
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",

        // Background Colors
        radialGradientOne: "hsl(214, 47%, 23%)",
        radialGradientTwo: "hsl(237, 49%, 15%)",
      },
      borderWidth: {
        gameMobile: "20px",
        gameDesktop: "25px",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
