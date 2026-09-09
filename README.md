# yokota.dev

Rodrigo Yokota's portfolio, built as a zero-JavaScript Astro site and deployed by Zephyr Cloud.

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
