/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        'sage': {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d4daca',
          300: '#b5c0a5',
          400: '#95a580',
          500: '#788a63',
          600: '#5e6e4d',
          700: '#4a573e',
          800: '#3d4734',
          900: '#343d2e',
        },
        'champagne': {
          50: '#fdfcf9',
          100: '#faf6ed',
          200: '#f4ead7',
          300: '#ead8b8',
          400: '#ddc291',
          500: '#d0a96e',
          600: '#c08f4f',
          700: '#a17642',
          800: '#825f3b',
          900: '#6a4e33',
        },
        'blush': {
          50: '#fdf8f6',
          100: '#fbf0eb',
          200: '#f7ddd3',
          300: '#f0c4b3',
          400: '#e6a48c',
          500: '#d98567',
          600: '#c66a4b',
          700: '#a6543c',
          800: '#884635',
          900: '#713c30',
        },
      },
    },
  },
  plugins: [],
}

