/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: ['next/babel'],
    plugins: [
        [
          'emotion',
          {
            autoLabel: process.env.NODE_ENV !== 'production',
            labelFormat: '[local]',
            cssPropOptimization: true,
          },
        ],
    ],
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
      
    },
    colors: {
      purple: {
        50: "#F6F8FF",
        100: "#B677EA",
        200: "#A86ADE",
        300: "#9A5CD2",
        400: "#8C4FC7",
        500: "#834DAE",
        600: "#723F9A",
        700: "#7F46C8",
        800: "#551799",
        900: "#431863",
      },
      gray: {
        50: '#e8e8e8',
        100: '#b6b6b6',
        200: '#939393',
        300: '#626262',
        400: '#434343',
        500: '#141414',
        600: '#121212',
        700: '#0e0e0e',
        800: '#0b0b0b',
        900: '#1B1B1B',
      },
    plugins: [],
  }
}

