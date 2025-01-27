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
        'dark-green': "#026070",
        'light-green': "#56E3CB",
        'custom-gray': "#b2b2b2",
        'custom-purple': "#815CC8",
        'custom-blue': "#1BABFE",
        'custom-black': "#c4c4c400",
        'custom-dark-black': "#FFFFFF1A",
        'border-gray':"#FFFFFF33",
      },

      fontSize: {
        'custom-sm': "8px",
        'custom-md': "26px",
        'custom-base': "28px",
        'custom-xl': "32px",
        'custom-2xl': "38px",
        'custom-6xl': "64px",
        "custom-7xl": '22px',
        "custom-8xl": '40px',
      },

      lineHeight: {
        'custom-xs': "9px",
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
        'custom-9xl': '127.5%',
        'custom-10xl': '156%',
        'custom-11xl': '164%',
        'custom-12xl': '179%',
        'custom-13xl':'129%'
      },

      fontFamily: {
        'avantt': "'avantt',sans-serif",
        'Poppins': "'Poppins' ,sans-serif",
        'Josefin': "'Josefin sans',sans-serif",
        'Montserrat': "'Montserrat' ,sans-serif",

      },

      backgroundImage: {
        'hero': "url('/public/assets/images/webp/hero-bg-image.webp')",
        'gilded-hero': "url('/public/assets/images/webp/gilded-bg.webp')",
        'utility': "url('/public/assets/images/webp/utility-bg.webp')",
        'gaming-platform': "url('/public/assets/images/webp/future-bg-image.webp')",
        'token': "url('/public/assets/images/webp/token-bg.webp')",
        'buy-uniswap': "url('/public/assets/images/webp/buy-uniswap-bg.webp')",
        'buy-uniswap-mobile': "url('/public/assets/images/webp/buy-now-bg.webp')",
      },

    },
    plugins: [],
  }
};