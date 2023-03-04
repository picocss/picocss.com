export function isScrollbarVisible() {
  if (typeof window !== "undefined") {
    return document.body.scrollHeight > screen.height;
  }
  return false;
}
