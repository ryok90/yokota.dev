import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { withZephyr } from 'zephyr-astro-integration';
import { lastModified } from './src/lib/last-modified.mjs';

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
      // Google and Bing ignore `changefreq` and `priority`; `lastmod` is the only hint they
      // read, and it comes from git history so a rebuild alone never bumps it.
      serialize(item) {
        const lastmod = lastModified(new URL(item.url).pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
      namespaces: {
        image: false,
        news: false,
        video: false,
        xhtml: false,
      },
    }),
    withZephyr(),
  ],
});
