import { documentationMenu } from "~/data/documentationMenu";

export function getChapter(route) {
  let sanitizedRoute = route.slice(-1) === "/" ? route.slice(0, -1) : route;
  if (sanitizedRoute.includes("theme-generator/")) {
    sanitizedRoute = sanitizedRoute.split("/").slice(0, -1).join("/");
  }
  const category = documentationMenu.find((category) =>
    category.links.some((link) => link.route === sanitizedRoute)
  );
  return category ? category.category : null;
}
