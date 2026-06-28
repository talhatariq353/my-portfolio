/**
 * Prefix a static asset path with the configured basePath so links to
 * files in /public resolve correctly whether the site is deployed at
 * the root (vercel, username.github.io) or under a subpath
 * (username.github.io/repo-name/).
 *
 * Set NEXT_PUBLIC_BASE_PATH=/repo-name at build time for the subpath case.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const RESUME_HREF = assetPath("/talha-tariq-resume.pdf");
