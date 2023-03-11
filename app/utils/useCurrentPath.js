import { useState, useEffect } from "react";
import { useMatches } from "@remix-run/react";

// Get the current path from the routes
function getPathFromRoutes(routes) {
  return routes[routes.length - 1].pathname.replace(/\/\s*$/, "");
}

// Get the current path
export function useCurrentPath() {
  const routes = useMatches();
  const [currentPath, setCurrentPath] = useState(getPathFromRoutes(routes));

  useEffect(() => {
    setCurrentPath(getPathFromRoutes(routes));
  }, [routes]);

  return currentPath;
}
