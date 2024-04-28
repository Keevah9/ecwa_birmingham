
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    dropShadow: {
      DEFAULT: "0px 8px 8px rgba(0, 0, 0, 0.05)",
      menu: "0px 16px 8px rgba(0, 0, 0, 0.05)",
    },
    screens: {
      ss: "345px",
      xs: "360px",
      // => @media (min-width: 320px) { ... }
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1300px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
      fontFamily: {
        sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
        barlow: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        exo: ["exo", ...defaultTheme.fontFamily.sans],
      },
     
      colors: {
        // primary: colors.purple,
        // secondary: colors.pink,
        ecwagrey: "#212545",
        ecwalightblue: "#292C27",
        ecwadarkblue: "#022147",
        ecwaverylightblue: "#021639",
        ecwaprimarybody: "#49525E",
        ecwaorange:"#F9864B",
        blue: {
          60: '#30AF5B',
          100: '#292C27',
          80: '#021639'
        },
        gray: {
          10: '#212545',
          20: '#212545',
          30: '#212545',
          50: '#212545',
          90: '#212545',
        },
        orange: {
          50: '#FF814C',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      // backgroundImage: {
      //   'bg-img-1': "url('/img-1.png')",
      //   'bg-img-2': "url('/img-2.png')",
      //   'feature-bg': "url('/feature-bg.png')",
      //   pattern: "url('/pattern.png')",
      //   'churchbg': "url('/churchbg.jpg')",
      // },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      animation: {
        loadingOne: "pulseOne 5s ease-in-out infinite",
        loadingTwo: "pulseTwo 5s ease-in-out infinite",
        loadingThree: "pulseThree 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
