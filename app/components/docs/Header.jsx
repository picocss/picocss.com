import { useDocumentation } from "~/contexts/DocumentationContext";
import Heading from "~/components/docs/Heading";

export default function Header({ title, description, ...props }) {
  const { chapter } = useDocumentation();
  return (
    <hgroup {...props}>
      <p className="chapter">{chapter}</p>
      <Heading level={1}>{title}</Heading>
      <p>{description}</p>
    </hgroup>
  );
}
