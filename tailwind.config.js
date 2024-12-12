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

      colors: {
        'deep-blue': "#00171f",
        'sky-blue': "#00A8E8",
        'gray': "#CBCBCB",
        'ink-blue': "#003459",
        'navy-blue': "#1A2E35",
        'dark-gray': "#4b4b4b",
        'light-blue': "#EAF9FFF0",
        'border-gray': "#EBEBEB", 
        'grayish-blue': "#E5E8E9 ",
        'jet-black': "#010101",
        'light-gray': "#E5E5E5",
        'ice-blue': "#EAF9FF",
      },

      fontSize: {
        'custom-base': "28px",
        'custom-xl': "32px",
        'custom-2xl': "38px",
        'custom-6xl': "64px",
      },

      lineHeight: {
        'custom-sm': "17.6px",
        'custom-base': "18.4px",
        'custom-xl': "21px",
        'custom-2xl': "23px",
        'custom-3xl': "25.6px",
        'custom-4xl': "26.4px",
        'custom-5xl': "35.2px",
        'custom-6xl': "41.8px",
        'custom-7xl': "52.8px",
        'custom-8xl': "70.4px",
      },

      backgroundImage: {
        'hero': "url('/public/assets/images/webp/hero-bg-image.webp')",
      },

    },
    plugins: [],
  }
};