/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  lightMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Caveat', 'cursive']
      },
      colors: {
        catppuccinRosewater: "#f5e0dc",
        catppuccinFlamingo: "#f2cdcd",
        catppuccinPink: "#f5c2e7",
        catppuccinMauve: "#cba6f7",
        catppuccinRed: "#f38ba8",
        catppuccinMaroon: "#eba0ac",
        catppuccinPeach: "#fab387",
        catppuccinYellow: "#f9e2af",
        catppuccinGreen: "#a6e3a1",
        catppuccinTeal: "#94e2d5",
        catppuccinSky: "#89dceb",
        catppuccinSapphire: "#74c7ec",
        catppuccinBlue: "#89b4fa",
        catppuccinLavender: "#b4befe",
        catppuccinText: "#cdd6f4",
        catppuccinSubtext1: "#bac2de",
        catppuccinSubtext0: "#a6adc8",
        catppuccinOverlay2: "#9399b2",
        catppuccinOverlay1: "#7f849c",
        catppuccinOverlay0: "#6c7086",
        catppuccinSurface2: "#585b70",
        catppuccinSurface1: "#45475a",
        catppuccinSurface0: "#313244",
        catppuccinBase: "#1e1e2e",
        catppuccinMantle: "#181825",
        catppuccinCrust: "#11111b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            backgroundColor: 'transparent',
          },
          '50%': {
            backgroundColor: '#FFF',
          },
        },
      },
      animation: {
        blink: 'blink 1.5s steps(1, start) infinite',
      },
    },
  },
  plugins: [],
};
