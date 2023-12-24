import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssStyle from "~/styles/css/custom-themes/blue.css";
import cssCode from "~/data/code-snippets/blue.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Blue";

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
