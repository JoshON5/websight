/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
<<<<<<< HEAD
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
=======
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
>>>>>>> 948f471 (Nav foundation/tailwind config)
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
<<<<<<< HEAD
    require('flowbite/plugin'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
=======
    require('flowbite/plugin')
>>>>>>> 948f471 (Nav foundation/tailwind config)
]
}

