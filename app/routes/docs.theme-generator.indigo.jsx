import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssStyle from "~/styles/css/custom-themes/indigo.css";
import cssCode from "~/data/code-snippets/indigo.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Indigo";

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
