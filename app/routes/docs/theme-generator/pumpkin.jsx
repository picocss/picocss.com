import ThemePreview from "~/components/docs/ThemePreview";
import { themeTitle, themeDescription } from "./";

import cssStyle from "~/styles/css/custom-themes/pumpkin.css";
import cssCode from "~/styles/css/custom-themes/code/pumpkin.txt";

const colorName = "Pumpkin";

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
