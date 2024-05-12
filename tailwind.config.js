/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plain: ["Hind Siliguri", "sans-serif"], // Adding Hind Siliguri with sans-serif fallback
        styled: ["Sansita", "serif"], // Adding Sansita with serif fallback
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8C654F",
          secondary: "#593D3B",
          accent: "#BFA249",
          neutral: "#BF9B7A",
          "base-100": "#F2F2F2",
        },
      },
    ],
  },
};
