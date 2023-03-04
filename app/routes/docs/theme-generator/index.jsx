import cssStyle from "~/styles/css/custom-themes/red.css";
import cssCode from "~/styles/css/custom-themes/code/red.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Red";

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
