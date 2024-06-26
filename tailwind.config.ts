import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ed64",
        "primary-content": "#000000",
        "primary-dark": "#00ba4e",
        "primary-light": "#21ff7f",

        secondary: "#0012ed",
        "secondary-content": "#edeeff",
        "secondary-dark": "#000eba",
        "secondary-light": "#2132ff",

        background: "#eff0f0",
        foreground: "#fbfbfb",
        border: "#dee1df",

        copy: "#242826",
        "copy-light": "#616b65",
        "copy-lighter": "#87928b",

        success: "#00ed00",
        warning: "#eded00",
        error: "#ed0000",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#ffeded"
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

export default config;