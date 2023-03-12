import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssStyle from "~/styles/css/custom-themes/pink.css";
import cssCode from "~/data/code-snippets/pink.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Pink";

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
