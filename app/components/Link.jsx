import { Link as RemixLink } from "@remix-run/react";
import useCurrentPath from "~/utils/useCurrentPath";

export default function Link({ to, ...props }) {
  const currentPath = useCurrentPath();
  return <RemixLink to={to} {...(currentPath === to && { "aria-current": "page" })} {...props} />;
}
