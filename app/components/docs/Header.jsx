import { useMatches } from "@remix-run/react";
import { getChapter } from "~/utils";

import Heading from "~/components/docs/Heading";

export default function Header({ title, description, ...props }) {
  const routes = useMatches();
  const currentPathname = routes[routes.length - 1].pathname;
  const chapter = getChapter(currentPathname);

  return (
    <hgroup {...props}>
      {chapter && <p className="chapter">{chapter}</p>}
      <Heading level={1}>{title}</Heading>
      <p>{description}</p>
    </hgroup>
  );
}
