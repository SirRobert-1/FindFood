/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navfoot: "#3AB1AA",
        boton: "#6FB1D6",
        barra: "#7DD0FF",
        cardFood: "#8FD7FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
