// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.menu-open:checked ~ .menu': {
            display: 'block',
          },
          '.menu': {
            display: 'none',
          }
        });
      }
    ],
  }
  