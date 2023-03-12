import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssStyle from "~/styles/css/custom-themes/violet.css";
import cssCode from "~/data/code-snippets/violet.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Violet";

export const meta = () => ({
  title: themeGeneratorTitle(colorName),
  description: themeGeneratorDescription(colorName),
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
