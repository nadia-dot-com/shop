/**
 * Returns the correct image path accounting for Vite's base URL
 * In development, this returns the path as-is since Vite serves from root
 * In production with base path, this prepends the base URL
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to ensure consistent handling
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, Vite serves public assets from the root
  // In production with a base path, we need to prepend it
  const base = import.meta.env.BASE_URL;

  return `${base}${cleanPath}`;
}
