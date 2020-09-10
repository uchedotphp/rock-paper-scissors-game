module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        scissorsGradient: "hsl(39, 89 %, 49 %) to hsl(40, 84%, 53%)",
        paperGradient: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
        rockGradient: "hsl(349, 71 %, 52 %) to hsl(349, 70%, 56%)",
        lizardGradient: "hsl(261, 73 %, 60 %) to hsl(261, 72%, 63%)",
        cyan: "hsl(189, 59 %, 53 %) to hsl(189, 58%, 57%)",

        // Neutral Colors
        darkText: "hsl(229, 25 %, 31 %)",
        scoreText: "hsl(229, 64 %, 46 %)",
        headerOutline: "hsl(217, 16 %, 45 %)",

        // Background Colors
        radialGradient: "hsl(214, 47 %, 23 %) to hsl(237, 49%, 15%)",
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
