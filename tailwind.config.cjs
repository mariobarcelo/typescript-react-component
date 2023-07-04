/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          appear: {
            from: { opacity: 0 },
            to: { opacity: 1, transform: 'translateY(0)' },
          }
        },
        animation: {
          appear: 'appear 300ms forwards',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }