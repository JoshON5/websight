/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'webTeal': '#63A0A6',
        'webGrey': '#474B4D'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
]
}

