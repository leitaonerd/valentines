const basePath = "/valentines";

export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // In production (GitHub Pages), prepend the base path
  if (typeof window !== "undefined" && window.location.hostname.includes("github.io")) {
    if (src.startsWith(basePath)) return src;
    return `${basePath}${src}`;
  }
  // For local development, use src as-is if it already has the prefix
  if (src.startsWith(basePath)) return src;
  return src;
}