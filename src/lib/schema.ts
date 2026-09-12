/**
 * Stable identifiers for the JSON-LD entity graph.
 *
 * Crawlers and answer engines join the person, the site, and each page by `@id`, so these
 * strings are a published contract rather than an implementation detail: changing one orphans
 * every reference already cached against it. They live here because pages build their own
 * graph nodes (projects, breadcrumbs) and must point at exactly the same person.
 */
export const SITE_URL = 'https://yokota.dev';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const HOME_PAGE_ID = `${SITE_URL}/#webpage`;
