import Heading from "~/components/Heading";
import { useNavigation } from "~/contexts/NavigationContext";
import { getChapter } from "~/utils";

export default function Header({ title, description, ...props }) {
  const { routePath } = useNavigation();
  const chapter = getChapter(routePath);

  return (
    <hgroup {...props}>
      {chapter && <p className="chapter">{chapter}</p>}
      <Heading level={1}>{title}</Heading>
      {description && <p>{description}</p>}
    </hgroup>
  );
}
