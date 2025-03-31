import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'amazon-blue': '#131921',
        'amazon-blue-light': '#232F3E',
        'amazon-yellow': '#FFD814',
        'amazon-yellow-dark': '#F3A847',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

export default config; 