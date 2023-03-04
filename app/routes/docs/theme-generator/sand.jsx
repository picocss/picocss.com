import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/sand.css";
import cssCode from "~/styles/css/custom-themes/code/sand.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Sand";

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
