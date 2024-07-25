import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif", "Bona Nova", "serif", "Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00ed64",
        "primary-content": "#ffffff",
        "primary-dark": "#000000",
        "primary-light": "#21ff7f",

        secondary: "#0012ed",
        "secondary-content": "#edeeff",
        "secondary-dark": "#000000",
        "secondary-light": "#2132ff",

        background: {
          light: "#F1E5D1",
          dark: "#000000"
        },
        copy: {
          light: "#1a1b1a",
          dark: "#eff0f0"
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

export default config;
