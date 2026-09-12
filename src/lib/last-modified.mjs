import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// Every route renders through the shared layout and the single stylesheet, so a change to
// either is a real change to the document a crawler sees.
const SHARED_SOURCES = ['src/layouts/Layout.astro', 'src/styles/global.css'];

/** @type {Map<string, Date | undefined>} */
const committedAtCache = new Map();

/**
 * Last commit date of one source file. Git history is the only honest signal available at
 * build time: a fresh clone rewrites file mtimes to checkout time, which would claim every
 * page changed on every build and train crawlers to ignore the date.
 * @param {string} file Path relative to the project root.
 * @returns {Date | undefined} `undefined` when the file is untracked or git is unavailable.
 */
function committedAt(file) {
  if (committedAtCache.has(file)) return committedAtCache.get(file);

  /** @type {Date | undefined} */
  let date;
  try {
    if (existsSync(file)) {
      const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (iso) date = new Date(iso);
    }
  } catch {
    // No git binary or no history: omit the date rather than invent one.
  }

  committedAtCache.set(file, date);
  return date;
}

/**
 * Newest commit date among the sources that render `pathname`. Paths resolve against
 * `process.cwd()`, which is the project root for every `astro` command.
 * @param {string} pathname Route pathname, with or without a trailing slash.
 * @returns {Date | undefined} `undefined` when the build has no usable git history.
 */
export function lastModified(pathname) {
  const route = pathname.replace(/\/+$/, '');
  const page = route === '' ? 'src/pages/index.astro' : `src/pages${route}.astro`;
  const times = [page, ...SHARED_SOURCES]
    .map(committedAt)
    .filter((date) => date !== undefined)
    .map((date) => date.getTime());

  return times.length > 0 ? new Date(Math.max(...times)) : undefined;
}
