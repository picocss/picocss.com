import ThemePreview from "~/components/docs/ThemePreview";
import { themeTitle, themeDescription } from "./";

import cssStyle from "~/styles/css/custom-themes/indigo.css";
import cssCode from "~/styles/css/custom-themes/code/indigo.txt";

const colorName = "Indigo";

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
