import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { withZephyr } from 'zephyr-astro-integration';

export default defineConfig({
  site: 'https://yokota.dev',
  output: 'static',
  trailingSlash: 'always',
  image: {
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
    }),
    withZephyr(),
  ],
});
