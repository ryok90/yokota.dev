# Agent Guide

## Purpose

This repository is Rodrigo Yokota's personal portfolio at `https://yokota.dev`. It is a static Astro site with no client application bundle; the only client script is the Google Analytics tag. The site presents Rodrigo as a Platform Engineer working across Zephyr Cloud and The AI Platform.

## Source Map

- `src/pages/index.astro`: homepage content, career data, focus areas, ticker topics, projects, and semantic page structure.
- `src/pages/links.astro`: compact social and contact landing page.
- `src/pages/rodrigo-yokota.vcf.ts`: prerendered vCard; the explicit CRLF output is required by the vCard format.
- `src/pages/404.astro`: static not-found page.
- `src/layouts/Layout.astro`: shared canonical, Open Graph, Twitter, favicon, font preload, the JSON-LD entity graph, and the Google Analytics tag.
- `src/styles/global.css`: the complete design system and responsive layout.
- `src/assets`: source portraits and local fonts processed by Astro.
- `src/lib/last-modified.mjs`: git-derived `lastmod` / `dateModified` dates, imported by both `astro.config.mjs` and `Layout.astro`.
- `src/lib/schema.ts`: the stable `@id` values for the JSON-LD graph, shared by the layout and by pages that contribute their own nodes.
- `public`: direct-address assets such as favicons, the web app manifest, `robots.txt`, `llms.txt`, the legacy `sitemap.xml` alias, the legacy `api/contact/index.html` redirect stub, and the social card.
- `astro.config.mjs`: static output, sitemap generation with git-derived `lastmod`, inlined CSS, responsive image styles, and Zephyr deployment.

## Architecture

- Keep pages static and server-rendered by Astro. Add a client island only when a feature requires runtime interaction. Exactly two `is:inline` scripts are sanctioned, both in `Layout.astro`: the analytics tag and the route guard. Neither is ever bundled.
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
- The technology ticker renders two identical groups, each repeating `tickerItems` `tickerRepeats` times. One pass is intrinsically about 1400px wide, so six passes keep a group wider than any real viewport and the fixed `1.25rem` gap sets the spacing at every width; `min-width: 100vw` and `justify-content: space-around` survive only as the degradation past roughly 8400px, where spreading beats a blank strip. The track translates by `-50%` for a seamless loop, and its duration is `calc(40s * var(--ticker-repeats))`, which holds the scroll at about 35px/s instead of letting it accelerate with the viewport.
- The ticker label `translateY(2px)` is an optical correction for Electrolize's font metrics. The diamond separators are geometrically centered.
- The portrait badge deliberately uses `right: -0.40rem` and a slight rotation.
- The favicon monogram is Arial Bold at `font-size="34"` with default letter spacing. The `R` and `Y` must stay visually separated: negative letter spacing closes the counter between the bowl of the `R` and the left arm of the `Y`, and it merges into a blob at 16px.
- The header wordmark badge carries `letter-spacing: 0.1em` with a matching `text-indent`, for the same reason: Electrolize sets `RY` almost touching, and the indent cancels the trailing letter-space so the pair stays optically centered in the rotated square.
- Preserve visible focus states, semantic landmarks, reduced-motion behavior, sufficient contrast, and explicit accessible names.

## Social And SEO

- Canonical URLs always use `https://yokota.dev`, including on preview deployments.
- Production social images default to `https://yokota.dev/og-card.jpg`.
- Set `SOCIAL_IMAGE_URL` to an absolute, already-published image when creating a shareable Zephyr preview.
- A shareable preview requires two builds when the card changed: publish the card first, then build again with `SOCIAL_IMAGE_URL` pointing to the first immutable Zephyr deployment.
- Keep the social card at 1200x630, JPEG, and approximately 100 KB or less. It should combine Rodrigo's portrait with the site's current visual language.
- `favicon.svg` is the canonical icon source. Regenerate the ICO, 16px PNG, 32px PNG, 180px Apple touch icon, and the 192px, 512px, and 512px maskable manifest icons whenever the SVG changes. The maskable icon renders the artwork at 410px centered on a `#090b0d` 512px canvas so the corner brackets survive Android's circular crop.
- `site.webmanifest` exists for Android install and home-screen icons only. There is no service worker and no offline story; do not add one.
- `@astrojs/sitemap` generates `sitemap-index.xml` and `sitemap-0.xml`; `robots.txt` points to the index. `public/sitemap.xml` is a hand-written index that keeps the pre-Astro sitemap URL resolving, and it references `sitemap-0.xml` because a sitemap index may not point at another index.
- Sitemap entries carry `lastmod` and nothing else. Google and Bing both ignore `changefreq` and `priority`, so they are deliberately absent, and every optional namespace is off because no entry uses one.
- `lastModified()` in `src/lib/last-modified.mjs` takes the newest commit date among the page source, `Layout.astro`, and `global.css`, resolved from `process.cwd()`. Git history is the source of truth on purpose: file mtimes are rewritten by any fresh clone, which would claim every page changed on every build. Uncommitted edits therefore do not move the date, and a build without git history omits it rather than inventing one. A page whose source file cannot be found still gets the shared-source date.
- The JSON-LD is one `@graph` per document: the `Person` at `https://yokota.dev/#person`, the `WebSite` at `#website`, and a page node at `<canonical>#webpage`. Those `@id` values live in `src/lib/schema.ts` and must stay stable; they are how crawlers and answer engines join the entity across routes. The homepage is the `ProfilePage` and references the person as `mainEntity`; every other route is a `WebPage` and only `about` them. The page node carries `dateModified` from the same git helper that feeds the sitemap.
- Pages contribute their own graph nodes through the layout's `schemaNodes` prop, built from the content arrays they already own, so no fact is written twice. The homepage derives one `SoftwareSourceCode` node per entry in `projects`, and `/links/` passes a `BreadcrumbList` that the page node links through `breadcrumb`. A `BreadcrumbList` in `schemaNodes` is detected by type, so passing one is all a route has to do.
- Authorship in the project nodes is deliberate: Rodrigo is the `author` of `guaranate` and only a `contributor` to Module Federation. Each node's `@id` is its repository URL, because that is where the code lives; site-scoped identifiers stay reserved for things this site owns.
- `Person.worksFor` is an `OrganizationRole` carrying `startDate: '2023-11'`, matching the homepage timeline. Zephyr Cloud is the only employer in the graph; The AI Platform is a product line of that one role, not a second job.
- `Person.image` is the source portrait under `src/assets`, not `og-card.jpg`. Referencing `portraitSquare.src` emits the original JPEG into the build as a crawlable entity image; it is never fetched by a visitor. The social card stays a card: 1200x630 with type on it is a poor entity image.
- There is no `meta keywords` tag. Google dropped the signal in 2009 and it earned nothing here; do not reintroduce it.
- `llms.txt` is the machine-readable summary for LLM crawlers. It restates the content invariants above, so update it whenever a role, project, or profile URL changes.
- Every portrait carries a descriptive alt attribute. The about-section portrait is content, not decoration: the wrapper is not `aria-hidden`, and only the `FULL-STACK SINCE '18` badge is hidden from assistive technology.
- Zephyr's static hosting serves the homepage document with HTTP 200 for unknown paths instead of `404.html`, and a static site cannot answer with a 404 status. The `routeGuard` script in `Layout.astro` closes the gap: it ships only in the document built at `/`, and on a fallback hit it calls `location.replace('/404.html')` before anything paints. Every real route is served from its own file, so no legitimate URL can trip it. The status code stays 200, so `404.astro` passes `noindex` to keep the soft 404 out of the index. Note that `/rodrigo-yokota.vcf/` now resolves to the 404 page; `/rodrigo-yokota.vcf`, without the trailing slash, is the real asset.
- Legacy URLs from the pre-Astro site: `/api/contact` served the vCard and now redirects to `/rodrigo-yokota.vcf` through the static stub in `public/api/contact/index.html`. Do NOT move this into the `redirects` config: `trailingSlash: 'always'` rewrites the destination to `/rodrigo-yokota.vcf/`, which Zephyr answers with the homepage. `/images/rodrigo-yokota.webp` was the old `og:image` and is intentionally gone; social scrapers refresh their caches.
- Static prerendering discards the `Content-Type` and `Content-Disposition` headers set in `rodrigo-yokota.vcf.ts`, and Zephyr serves the file as `application/octet-stream` with `nosniff`. Browsers still save it by extension. Fixing this needs a MIME mapping on the host, not a repository change; tracked as ZephyrCloudIO/zephyr-cloud-io#3732.

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
