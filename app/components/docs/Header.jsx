import { useNavigation } from "~/contexts/NavigationContext";
import { getChapter } from "~/utils";

import Heading from "~/components/Heading";

export default function Header({ title, description, ...props }) {
  const { routePath } = useNavigation();
  const chapter = getChapter(routePath);

  return (
    <hgroup {...props}>
      {chapter && <p className="chapter">{chapter}</p>}
      <Heading level={1}>{title}</Heading>
      <p>{description}</p>
    </hgroup>
  );
}
