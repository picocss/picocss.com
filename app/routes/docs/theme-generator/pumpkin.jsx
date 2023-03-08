import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/pumpkin.css";
import cssCode from "~/data/code-snippets/pumpkin.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Pumpkin";

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
