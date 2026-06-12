const basePath = "/valentines";

export function getImagePath(src: string): string {
  if (typeof window !== "undefined" && window.location.hostname.includes("github.io")) {
    return `${basePath}${src}`;
  }
  return src;
}

export const prefixedImages = [
  getImagePath("/game-photos/1.jpg"),
  getImagePath("/game-photos/2.jpg"),
  getImagePath("/game-photos/3.jpg"),
  getImagePath("/game-photos/4.jpg"),
  getImagePath("/game-photos/5.jpg"),
  getImagePath("/game-photos/6.jpg"),
  getImagePath("/game-photos/7.jpg"),
  getImagePath("/game-photos/8.jpg"),
  getImagePath("/game-photos/9.jpg"),
  getImagePath("/game-photos/10.jpg"),
  getImagePath("/game-photos/11.jpg"),
  getImagePath("/game-photos/12.jpg"),
  getImagePath("/game-photos/13.jpg"),
  getImagePath("/game-photos/14.jpg"),
  getImagePath("/game-photos/15.jpg"),
  getImagePath("/game-photos/16.jpg"),
  getImagePath("/game-photos/17.jpg"),
  getImagePath("/game-photos/18.jpg"),
];

export const prefixedImagesDeduped = [...prefixedImages]; // already deduped (18 unique)