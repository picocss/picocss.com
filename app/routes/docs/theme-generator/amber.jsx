import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/amber.css";
import cssCode from "~/styles/css/custom-themes/code/amber.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Amber";

export const meta = () => ({
  title: themeTitle(colorName),
  description: themeDescription(colorName),
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} code={cssCode} />;
}
