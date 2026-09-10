# Agent Guide

## Purpose

This repository is Rodrigo Yokota's personal portfolio at `https://yokota.dev`. It is a static Astro site with no client application bundle; the only client script is the Google Analytics tag. The site presents Rodrigo as a Platform Engineer working across Zephyr Cloud and The AI Platform.

## Source Map

- `src/pages/index.astro`: homepage content, career data, focus areas, ticker topics, projects, and semantic page structure.
- `src/pages/links.astro`: compact social and contact landing page.
- `src/pages/rodrigo-yokota.vcf.ts`: prerendered vCard; the explicit CRLF output is required by the vCard format.
- `src/pages/404.astro`: static not-found page.
- `src/layouts/Layout.astro`: shared canonical, Open Graph, Twitter, favicon, font preload, Person JSON-LD metadata, and the Google Analytics tag.
- `src/styles/global.css`: the complete design system and responsive layout.
- `src/assets`: source portraits and local fonts processed by Astro.
- `public`: direct-address assets such as favicons, `robots.txt`, `llms.txt`, and the social card.
- `astro.config.mjs`: static output, sitemap generation, inlined CSS, responsive image styles, and Zephyr deployment.

## Architecture

- Keep pages static and server-rendered by Astro. Add a client island only when a feature requires runtime interaction. The analytics tag is the one sanctioned exception and stays an `is:inline` script so Astro never bundles it.
- Keep shared metadata in `Layout.astro`; pass each page a specific title and description.
- Keep content arrays close to the homepage markup in `index.astro`. This is a two-page portfolio, not a general content platform.
- Use Astro's `Image` component for source images under `src/assets`; specify dimensions, format, quality, loading behavior, and responsive sizes.
- Keep direct public URLs stable. Search and social metadata depend on `/og-card.jpg`, `/images/favicon.svg`, and the sitemap paths.

## Content Invariants

- Location: Curitiba, PR, Brazil.
- Current role: Platform Engineer across Zephyr Cloud and The AI Platform.
- Zephyr Cloud work began in November 2023 through Valor Software.
- Direct employment by Zephyr Cloud began in December 2025; the overlapping Valor and Zephyr timeline is intentional.
- Current highlighted projects are Guaranate and Module Federation, where Rodrigo is an open-source contributor.
- The resume remains the Google Drive URL held in `RESUME_URL`.

## Design Invariants

- Preserve the dark control-plane visual language: near-black grid, acid-lime signals, restrained violet accents, thin technical borders, and square geometry.
- Electrolize is the uppercase display/technical face; Inter is the body face.
- The main responsive breakpoints are 1040px, 780px, and 520px. Verify both 390px mobile and 1440px desktop after visual edits.
- Anchor IDs belong on visible heading blocks, not padded section boundaries. This keeps linked headings near the viewport top.
- The technology ticker renders two identical groups from `tickerItems`. Each group stays at least `100vw`; the track translates by `-50%` for a seamless loop.
- The ticker label `translateY(2px)` is an optical correction for Electrolize's font metrics. The diamond separators are geometrically centered.
- The portrait badge deliberately uses `right: -0.40rem` and a slight rotation.
- Preserve visible focus states, semantic landmarks, reduced-motion behavior, sufficient contrast, and explicit accessible names.

## Social And SEO

- Canonical URLs always use `https://yokota.dev`, including on preview deployments.
- Production social images default to `https://yokota.dev/og-card.jpg`.
- Set `SOCIAL_IMAGE_URL` to an absolute, already-published image when creating a shareable Zephyr preview.
- A shareable preview requires two builds when the card changed: publish the card first, then build again with `SOCIAL_IMAGE_URL` pointing to the first immutable Zephyr deployment.
- Keep the social card at 1200x630, JPEG, and approximately 100 KB or less. It should combine Rodrigo's portrait with the site's current visual language.
- `favicon.svg` is the canonical icon source. Regenerate the ICO, 16px PNG, 32px PNG, and 180px Apple touch icon whenever the SVG changes.
- `@astrojs/sitemap` generates `sitemap-index.xml` and `sitemap-0.xml`; `robots.txt` points to the index.
- `llms.txt` is the machine-readable summary for LLM crawlers. It restates the content invariants above, so update it whenever a role, project, or profile URL changes.
- Every portrait carries a descriptive alt attribute. The about-section portrait is content, not decoration: the wrapper is not `aria-hidden`, and only the `FULL-STACK SINCE '18` badge is hidden from assistive technology.
- Zephyr's current static preview fallback serves the homepage with HTTP 200 for unknown paths instead of `404.html`. This is platform routing behavior, not an Astro page issue.

## Analytics

- Google Analytics 4 property `G-EYT1QRFKV1`, declared as `GA_MEASUREMENT_ID` in `Layout.astro`. It is the same property the pre-Astro site used; do not mint a new one.
- The snippet loads `gtag/js` only when `location.hostname === 'yokota.dev'`. Every build renders canonical yokota.dev URLs in its markup, so the served hostname is the only signal that separates production traffic from builds.
- The comparison MUST stay strict equality against the bare apex. Zephyr's edge domain for this app is `ze.yokota.dev`, and version URLs are single-label subdomains of the apex, shaped `<version>-<app>-<project>-<org>-<hash>-ze.yokota.dev`. A suffix test such as `endsWith('yokota.dev')` would match every version URL and send their traffic to the production property.
- Consequence: local dev and Zephyr version URLs issue zero requests to `googletagmanager.com` and define no `dataLayer`. Verify analytics against `https://yokota.dev` itself, never a version URL.
- No Zephyr environment or tag hostnames exist today (`ENVIRONMENTS` is empty). If one is promoted onto its own subdomain, it stays untracked until it is added to the guard deliberately.
- The site is a static MPA, so gtag's automatic `page_view` on load is complete coverage. Do not add route-change tracking.
- Keep the tag free of consent-gated features: no Google Signals, no Ads linking, no cross-domain measurement.

## Commands

- Install dependencies: `pnpm install`
- Start local development: `pnpm dev`
- Run Astro and TypeScript diagnostics: `pnpm check`
- Preview the latest static output: `pnpm preview`
- Build and deploy to Zephyr: `pnpm build`

`pnpm build` is an external write: `withZephyr()` uploads and deploys the build using the login in `~/.zephyr`. Use it when a Zephyr deployment is intended and retain the resulting preview URL for verification or the PR description.

## Completion Criteria

1. `pnpm check` reports zero errors, warnings, and hints.
2. A requested production build completes and returns a working Zephyr preview URL.
3. Modified routes render without console warnings or horizontal overflow at 390px and 1440px.
4. SEO edits are present in generated HTML and social image URLs return `200` with the expected MIME type and dimensions.
5. Performance-sensitive changes ship no client application JavaScript beyond the analytics tag and should be checked with Lighthouse against the Zephyr preview.
6. `git diff --check` passes and the worktree contains only intended changes.
