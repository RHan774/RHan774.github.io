module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#1a1a1a',
        background: '#ffffff',
        'text-primary': '#111111',
        'text-secondary': '#666666',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#0070f3',
              '&:hover': {
                color: '#0056b3',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}; 