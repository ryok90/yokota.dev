import { extendTheme } from '@chakra-ui/react';

const base = {
  fonts: {
    body: `'Electrolize', 'sans-serif', 'Inter', 'Avenir'`,
  },
  colors: {
    custom: {
      dark: '#121212',
      main: '#00D9C0',
      light: '#CDCDCD',
    },
  },
  styles: {
    global: {
      body: {
        color: 'font.default'
      }
    }
  }
};

export const theme = extendTheme(base);
