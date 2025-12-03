/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[class="black"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Monaco', 'monospace'],
      },
      colors: {
        'dark-bg': '#000000',
        'dark-text': '#ffffff',
      },
    },
  },
  plugins: [],
}