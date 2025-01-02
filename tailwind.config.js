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
        primary: {
          light: "#6D28D9",
          DEFAULT: "#3D52A0",
          dark: "#3d52a0",
        },
        second: {
          light: "#ede8f5",
          DEFAULT: "#3D52A0",
        },
        skin: {
          DEFAULT: "#ede8f5",
        },
        green: {
          DEFAULT: "#2fa97c",
        },
        textClr: "#6B7385",
      },
    },
  },
  plugins: [],
};
