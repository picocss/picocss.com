import { useCurrentPath } from "~/utils";
import { Link as RemixLink } from "@remix-run/react";

export default function Link({ preventScrollReset = false, to, ...props }) {
  const currentPath = useCurrentPath();
  const unFocus = (event) => {
    event.target.blur();
  };
  return (
    <RemixLink
      to={to}
      {...(currentPath === to && { "aria-current": "page" })}
      onMouseLeave={unFocus}
      preventScrollReset={preventScrollReset}
      {...props}
    />
  );
}
