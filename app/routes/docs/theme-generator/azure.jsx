import { themeTitle, themeDescription } from "./";
import cssCode from "~/data/code-snippets/azure.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Azure";

export const meta = () => ({
  title: themeTitle(colorName),
  description: themeDescription(colorName),
});

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
