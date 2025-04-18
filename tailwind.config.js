/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"], // or wherever your HTML files live
    theme: {
      extend: {
        screens: {
          'widescreen': { raw: '(min-aspect-ratio: 3/2)' },
          'tallscreen': { raw: '(min-aspect-ratio: 1/2)' },
        },
      },
    },
    plugins: [],
  }