import ThemePreview from "~/components/docs/ThemePreview";
import cssCode from "~/data/code-snippets/indigo.txt";
import cssStyle from "~/styles/css/custom-themes/indigo.css";
import { themeGeneratorDescription, themeGeneratorTitle } from "~/utils";

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
