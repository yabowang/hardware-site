/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // 如果你有 src 目录，记得加上 "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 你可以在这里定义你们公司的品牌色
      colors: {
        brand: {
          blue: '#0056b3', // 工业蓝
          orange: '#ff6b00', // 类似博世/牧田那种工具橙
        }
      }
    },
  },
  plugins: [],
}