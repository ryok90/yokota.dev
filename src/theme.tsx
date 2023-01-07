import { extendTheme } from '@chakra-ui/react';

const base = {
  fonts: {
    body: `'Electrolize', 'Inter', 'sans-serif', 'Avenir'`,
    secondary: 'Inter',
  },
  colors: {
    custom: {
      dark: '#121212',
      lighterDark: '#1B1B1B',
      main: '#00D9C0',
      light: '#CDCDCD',
    },
  },
  styles: {
    global: {
      html: { width: '100%' },
      ':root': { width: '100%' },
      body: {
        width: '100%',
        color: 'custom.light',
        backgroundColor: 'custom.dark',
        fontSize: '16px',
        fontWeight: 400,
        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-text-size-adjust': '100%',
      },
    },
  },
};

export const theme = extendTheme(base);
