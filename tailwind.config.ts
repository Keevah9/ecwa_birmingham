
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
    extend: {
      fontFamily: {
        sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
        barlow: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ecwagrey: "#212545",
        ecwalightblue: "#292C27",
        ecwadarkblue: "#032F70",
        ewcaverylightblue: "#021639",
        ewcaprimarybody: "#49525E",
        dynamicblue: '#4A0AF7',
        mint: '#6DEBDD',
        offblack: '#1D1D1B',
        blue: {
          60: '#30AF5B',
          100: '#292C27',
          80: '#021639'
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
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
