// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//      "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         italiana: ['Italiana', 'serif'],
//         hanuman: ['Hanuman', 'serif'],
//       },
//       animation: {
//         scroll: "scroll 40s linear infinite",
//       },
//       keyframes: {
//         scroll: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        hanuman: ['Hanuman', 'serif'],
      },
      animation: {
        scrollLoop: "scrollLoop 40s linear infinite",
        "slide-right-to-left": "slide-right-to-left 1s ease-out",
        "slide-bottom-to-top": "slide-bottom-to-top 1s ease-out", // adjusted name for consistency
      },
      keyframes: {
        scrollLoop: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, 
         "slide-right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-bottom-to-top": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
}