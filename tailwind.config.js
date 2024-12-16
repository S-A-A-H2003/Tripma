/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#605DEC',
      },
      width: {
        cardMd: '410px' ,
        cardLg: '1312px',
      },
      height: {
        cardMd: '480px',
        cardLg: '520px',
      },
    },
  },
  plugins: [],
}


