/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'roblox-red': '#FF0000',
        'roblox-black': '#000000',
        'roblox-white': '#FFFFFF',
        'primary-blue': '#00A2FF',
        'secondary-blue': '#0076BA',
        'dark-blue': '#004A75',
        'light-blue': '#66C7FF',
        'gray-blue': '#7F96A3',
        'background': '#000000',
        'background-dark': '#000000',
        'foreground': '#FFFFFF',
        'card-bg': '#0A0A0F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'media', // Use 'media' to respect system preferences, or 'class' if you want to toggle it manually
};
