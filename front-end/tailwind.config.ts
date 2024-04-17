import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/button.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'dark', // default theme from the themes object
      defaultExtendTheme: 'dark', // default theme to extend on custom themes
      themes: {
        // light: {
        //   colors: {
        //     background: '#FFFFFF',
        //     primary: '#1A1A1A',
        //     secondary: '#FFFD00',
        //   },
        // },
        dark: {
          colors: {
            background: '#1B1B1F',
            primary: '#282828',
            secondary: '#FFFD00',
          },
        },
      },
    }),
  ],
};
export default config;
