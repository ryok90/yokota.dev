import { extendTheme } from '@chakra-ui/react';

const base = {
  fonts: {
    body: `'Electrolize', 'sans-serif', 'Inter', 'Avenir'`,
  },
  colors: {
    background: {
      dark: '#121212',
    },
    font: {
      bright: '#00D9C0',
      default: '#CDCDCD',
    },
  },
};

export const theme = extendTheme(base);
