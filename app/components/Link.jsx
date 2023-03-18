import { useCurrentPath } from "~/utils";
import { Link as RemixLink } from "@remix-run/react";

export default function Link({ preventScrollReset = false, to, ...props }) {
  const currentPath = useCurrentPath();
  const isExternalLink = to ? to.startsWith("http") : false;

  return (
    <RemixLink
      to={to}
      {...(currentPath === to && { "aria-current": "page" })}
      {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
      preventScrollReset={preventScrollReset}
      {...props}
    />
  );
}
