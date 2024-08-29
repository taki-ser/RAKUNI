/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // 緑色
      },
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}