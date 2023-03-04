import { themeTitle, themeDescription } from "./";
import cssStyle from "~/styles/css/custom-themes/blue.css";
import cssCode from "~/styles/css/custom-themes/code/blue.txt";

import ThemePreview from "~/components/docs/ThemePreview";

const colorName = "Blue";

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
