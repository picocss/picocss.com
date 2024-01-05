import ThemePreview from "~/components/docs/ThemePreview";
import cssCode from "~/data/code-snippets/zinc.txt";
import cssStyle from "~/styles/css/custom-themes/zinc.css";
import { themeGeneratorDescription, themeGeneratorTitle } from "~/utils";

const colorName = "Zinc";

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
