import { Link as RemixLink } from "@remix-run/react";
import { useNavigation } from "~/contexts/NavigationContext";

export default function Link({
  "aria-current": ariaCurrent,
  preventScrollReset = false,
  to,
  ...props
}) {
  const { locationPath } = useNavigation();
  const isExternalLink = to ? to.startsWith("http") : false;
  const isCurrent =
    (locationPath === to && ariaCurrent !== false) || (ariaCurrent && ariaCurrent !== false);

  return (
    <RemixLink
      to={to}
      {...(isCurrent && { "aria-current": "page" })}
      {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
      preventScrollReset={preventScrollReset}
      {...props}
    />
  );
}
