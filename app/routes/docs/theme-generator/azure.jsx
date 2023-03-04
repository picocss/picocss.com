import { themeTitle, themeDescription } from "./";
import cssCode from "~/styles/css/custom-themes/code/azure.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Azure";

export const meta = () => ({
  title: themeTitle(colorName),
  description: themeDescription(colorName),
});

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
