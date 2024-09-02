/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E98E37', // 緑色
      },
      fontFamily: {
        body: ['"Hiragino Mincho ProN"', 'serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times'], // ヒラギノ明朝とフォールバックフォント
      },
    },
  },
  plugins: [],
}