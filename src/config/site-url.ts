/**
 * Production origin used for metadataBase, canonical URLs, Open Graph, the sitemap, and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL (for example `https://www.your-domain.com`) once the final domain is known.
 * Until then the reserved `.example` placeholder is used so no real or local host is ever published.
 */
export const SITE_URL_PLACEHOLDER = "https://use-ai-better.example";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "[::1]"]);

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = new URL(configured || SITE_URL_PLACEHOLDER);
  if (LOCAL_HOSTS.has(url.hostname)) {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be the public production URL, not ${url.origin}.`);
  }
  return url.origin;
}

export const SITE_URL = resolveSiteUrl();
export const isPlaceholderSiteUrl = SITE_URL === SITE_URL_PLACEHOLDER;

/** Absolute URL for a site path, matching the canonical form Next.js emits (no trailing slash on the root). */
export function absoluteUrl(path: `/${string}`): string {
  return path === "/" ? SITE_URL : new URL(path, SITE_URL).href;
}
