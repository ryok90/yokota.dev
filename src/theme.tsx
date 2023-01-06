import { extendTheme } from '@chakra-ui/react';

const base = {
  fonts: {
    body: `'Electrolize', 'Inter', 'sans-serif', 'Avenir'`,
    secondary: 'Inter',
  },
  colors: {
    custom: {
      dark: '#121212',
      lightDark: '#1B1B1B',
      main: '#00D9C0',
      light: '#CDCDCD',
    },
  },
  styles: {
    global: {
      body: {
        color: 'custom.light',
      },
    },
  },
};

export const theme = extendTheme(base);
