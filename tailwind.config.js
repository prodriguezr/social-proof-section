/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,js,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        'footer-link': 'hsl(228, 45%, 44%)',
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans'],
      },
    },
  },
  plugins: [],
};
