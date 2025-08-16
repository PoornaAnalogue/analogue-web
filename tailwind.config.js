// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//   "./src/app/**/*.{js,ts,jsx,tsx}",
//   "./src/components/**/*.{js,ts,jsx,tsx}",
// ],
//   theme: {
//     screens: {
//       xs: "350px",
//       sm: "480px",
//       md: "640px",
//       lg: "768px",
//       xl: "1024px", 
//       "2xl": "1536px",
//       "3xl": "1920px",
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    // Completely override default breakpoints
    screens: {
      xs: "350px",
      sm: "480px",
      md: "640px",
      lg: "768px",
      xl: "1024px",  // NOW 1024px, not 1280px
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
};
