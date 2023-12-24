import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssCode from "~/data/code-snippets/azure.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Azure";

export const meta = () => [
  { title: themeGeneratorTitle(colorName) },
  {
    name: "description",
    content: themeGeneratorDescription(colorName),
  },
];

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
