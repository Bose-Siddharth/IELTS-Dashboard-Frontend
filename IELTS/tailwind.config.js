/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dynamic-blue-100': 'var(--dynamic-blue-100)',
        'dynamic-blue-200': 'var(--dynamic-blue-200)',
        'dynamic-blue-300': 'var(--dynamic-blue-300)',
        'dynamic-red-100': 'var(--dynamic-red-100)',
        'dynamic-red-200': 'var(--dynamic-red-200)',
        'dynamic-red-300': 'var(--dynamic-red-300)',
        'dynamic-green-100': 'var(--dynamic-green-100)',
        'dynamic-green-200': 'var(--dynamic-green-200)',
        'dynamic-green-300': 'var(--dynamic-green-300)',
        'dynamic-green-400': 'var(--dynamic-green-400)',
        'dynamic-yellow-100': 'var(--dynamic-yellow-100)',
    
      },
    },
  },
  plugins: [],
}