/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          'card-hover': '#2A2A2A',
          border: '#3D3D3D',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A6A6A6',
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
