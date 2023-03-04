import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/lime.css";
import cssCode from "~/styles/css/custom-themes/code/lime.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Lime";

export const meta = () => ({
  title: themeTitle(colorName),
  description: themeDescription(colorName),
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
