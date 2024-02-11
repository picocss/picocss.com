import ThemePreview from "~/components/docs/ThemePreview";
import cssStyle from "~/styles/css/custom-themes/blue.css";
import { themeGeneratorDescription, themeGeneratorTitle } from "~/utils";

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

export default function VersionPicker() {
  return <ThemePreview title={colorName} />;
}
