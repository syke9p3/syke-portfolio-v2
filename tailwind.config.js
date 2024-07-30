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
        catppuccinRosewater: "var(--catppuccin-rosewater)",
        catppuccinFlamingo: "var(--catppuccin-flamingo)",
        catppuccinPink: "var(--catppuccin-pink)",
        catppuccinMauve: "var(--catppuccin-mauve)",
        catppuccinRed: "var(--catppuccin-red)",
        catppuccinMaroon: "var(--catppuccin-maroon)",
        catppuccinPeach: "var(--catppuccin-peach)",
        catppuccinYellow: "var(--catppuccin-yellow)",
        catppuccinGreen: "var(--catppuccin-green)",
        catppuccinTeal: "var(--catppuccin-teal)",
        catppuccinSky: "var(--catppuccin-sky)",
        catppuccinSapphire: "var(--catppuccin-sapphire)",
        catppuccinBlue: "var(--catppuccin-blue)",
        catppuccinLavender: "var(--catppuccin-lavender)",
        catppuccinText: "var(--catppuccin-text)",
        catppuccinSubtext1: "var(--catppuccin-subtext1)",
        catppuccinSubtext0: "var(--catppuccin-subtext0)",
        catppuccinOverlay2: "var(--catppuccin-overlay2)",
        catppuccinOverlay1: "var(--catppuccin-overlay1)",
        catppuccinOverlay0: "var(--catppuccin-overlay0)",
        catppuccinSurface2: "var(--catppuccin-surface2)",
        catppuccinSurface1: "var(--catppuccin-surface1)",
        catppuccinSurface0: "var(--catppuccin-surface0)",
        catppuccinBase: "var(--catppuccin-base)",
        catppuccinMantle: "var(--catppuccin-mantle)",
        catppuccinCrust: "var(--catppuccin-crust)",
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
  safelist: [
    {
      pattern: /bg-.+/,
      variants: ['hover', 'focus'],
    }
  ]
};
