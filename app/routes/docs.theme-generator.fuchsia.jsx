import { themeGeneratorTitle, themeGeneratorDescription } from "~/utils";
import cssStyle from "~/styles/css/custom-themes/fuchsia.css";
import cssCode from "~/data/code-snippets/fuchsia.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Fuchia";

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
