const isProduction = process.env.NODE_ENV === "production";
const basePath = "/valentines";

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (isProduction && src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}