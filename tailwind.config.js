/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: {
          DEFAULT: "#ffa100",
        },
        second: {
          light: "#c3d3f8",
          DEFAULT: "#3D52A0",
        },
        skin: {
          DEFAULT: "#ede8f5",
        },
        green: {
          DEFAULT: "#2fa97c",
        },
        textClr: "#6B7385",
        blackClr: "#292323",
      },
    },
  },
  plugins: [],
};
