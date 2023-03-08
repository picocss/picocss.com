import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/green.css";
import cssCode from "~/data/code-snippets/green.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Green";

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
