import ThemePreview from "~/components/docs/ThemePreview";
import cssCode from "~/data/code-snippets/red.txt";
import cssStyle from "~/styles/css/custom-themes/red.css";

const colorName = "Red";

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
