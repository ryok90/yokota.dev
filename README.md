# yokota.dev

Rodrigo Yokota's portfolio, built as a static Astro site with no client framework bundle and deployed by Zephyr Cloud. The only client script is the Google Analytics tag, which loads solely on `yokota.dev`, so local and preview builds send no analytics traffic.

## Development

Requires Node.js 22.12+ and pnpm 10.

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm check
pnpm build
pnpm preview
```

`pnpm build` creates an SEO-friendly static site in `dist` and publishes it through the default `zephyr-astro-integration`. The first build on a new machine opens the Zephyr Cloud login flow; later builds reuse `~/.zephyr`.

Set `SOCIAL_IMAGE_URL` to an absolute, already-published image URL when building a shareable preview. Production builds default to `https://yokota.dev/og-card.jpg`.
