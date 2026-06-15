/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#23452A",
          dark: "#162d1b",
          light: "#3a6042",
        },
        secondary: {
          DEFAULT: "#D7C4A3",
          light: "#e2d5be",
          dark: "#baa47b",
        },
        background: "#F6F2EA",
        dark: "#1A1A1A",
        border: "#E7E2D8",
      },
      borderRadius: {
        '3xl': '24px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 35px -10px rgba(35, 69, 42, 0.08), 0 1px 3px rgba(35, 69, 42, 0.02)',
        'premium-hover': '0 20px 45px -15px rgba(35, 69, 42, 0.15), 0 1px 5px rgba(35, 69, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
