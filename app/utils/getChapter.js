import { documentationMenu } from "~/data/documentationMenu";

export function getChapter(route) {
  const sanitizedRoute = route.slice(-1) === "/" ? route.slice(0, -1) : route;
  const category = documentationMenu.find((category) =>
    category.links.some((link) => link.route === sanitizedRoute)
  );
  return category ? category.category : null;
}
