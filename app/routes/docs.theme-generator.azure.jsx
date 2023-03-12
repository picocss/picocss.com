import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssCode from "~/data/code-snippets/azure.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Azure";

export const meta = () => ({
  title: themeGeneratorTitle(colorName),
  description: themeGeneratorDescription(colorName),
});

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
