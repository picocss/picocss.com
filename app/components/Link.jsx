import { Link as RemixLink } from "@remix-run/react";
import { useNavigation } from "~/contexts/NavigationContext";

export default function Link({ preventScrollReset = false, to, ...props }) {
  const { locationPath } = useNavigation();
  const isExternalLink = to ? to.startsWith("http") : false;

  return (
    <RemixLink
      to={to}
      {...(locationPath === to && { "aria-current": "page" })}
      {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
      preventScrollReset={preventScrollReset}
      {...props}
    />
  );
}
