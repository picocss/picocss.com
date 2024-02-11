import ThemePreview from "~/components/docs/ThemePreview";
import cssStyle from "~/styles/css/custom-themes/fuchsia.css";
import { themeGeneratorDescription, themeGeneratorTitle } from "~/utils";

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

export default function VersionPicker() {
  return <ThemePreview title={colorName} />;
}
