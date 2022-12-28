import { useState, useEffect } from "react";
import { useMatches } from "@remix-run/react";

function getPathFromRoutes(routes) {
  return routes[routes.length - 1].pathname.replace(/\/\s*$/, "");
}

export default function useCurrentPath() {
  const routes = useMatches();
  const [currentPath, setCurrentPath] = useState(getPathFromRoutes(routes));

  useEffect(() => {
    setCurrentPath(getPathFromRoutes(routes));
  }, [routes]);

  return currentPath;
}
