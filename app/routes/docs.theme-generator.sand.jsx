import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssStyle from "~/styles/css/custom-themes/sand.css";
import cssCode from "~/data/code-snippets/sand.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Sand";

export const meta = () => [
  { title: themeGeneratorTitle(colorName) },
  {
    name: "description",
    content: themeGeneratorDescription(colorName),
  },
];

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
