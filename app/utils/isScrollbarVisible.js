// Checks if the scrollbar is visible
export function isScrollbarVisible() {
  if (typeof window !== "undefined") {
    return document.body.scrollHeight > screen.height;
  }
  return false;
}
