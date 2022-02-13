const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        xl: '36rem',
      },
      fontFamily: {
          sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      },
    },
  },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
}