import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '991px',
      xl: '1440px',
      '2xl': '1536px',
    },
    // container: {
    //   center: true,
    //   screens: {
    //     sm: '540px',
    //     md: '720px',
    //     lg: '960px',
    //     xl: '1440px',
    //     '2xl': '1140px',
    //   },
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        'nexa-trial': 'var(--nexa-trial)', // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        montserrat: 'var(--montserrat)', // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      },
      spacing: {
        '24.5': '98px',
      },
    },
  },
  plugins: [],
};
export default config;
