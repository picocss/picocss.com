import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/jade.css";
import cssCode from "~/data/code-snippets/jade.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Jade";

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
