import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/violet.css";
import cssCode from "~/styles/css/custom-themes/code/violet.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Violet example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Violet" code={cssCode} />;
}
