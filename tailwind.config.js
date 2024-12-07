/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
      },

      colors: {
        'deep-blue': "#00171f",
        'sky-blue': "#00A8E8", 
        'gray': "#CBCBCB",
      },

      fontFamily: {
        'helvetica': "'helvetica', sans-serif",
      },

      fontSize: {
        'custom-6xl': "64px",
      },
      lineHeight: {
        'custom-sm': "17.6px",
        'custom-base': "18.4px",
        'custom-6xl': "70.4px",
      },

      backgroundImage: {
        'hero': "url('/public/assets/images/webp/hero-bg-image.webp')",
      },
    },
  },
  plugins: [],
}

