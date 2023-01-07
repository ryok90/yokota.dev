import { extendTheme } from '@chakra-ui/react';

const base = {
  fonts: {
    body: `'Electrolize', 'Inter', 'sans-serif', 'Avenir'`,
    secondary: 'Inter',
  },
  colors: {
    custom: {
      background: '#121212',
      dark: '#1B1B1B',
      lightDark: '#424242',
      lighterDark: '#8B8B8B',
      light: '#CDCDCD',
      main: '#00D9C0',
    },
  },
  styles: {
    global: {
      html: { width: '100%' },
      ':root': { width: '100%' },
      body: {
        width: '100%',
        color: 'custom.light',
        backgroundColor: 'custom.background',
        fontSize: '16px',
        fontWeight: 400,
        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
      },
    },
  },
};

export const theme = extendTheme(base);
