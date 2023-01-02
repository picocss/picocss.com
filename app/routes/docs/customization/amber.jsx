import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/amber.css";
import cssCode from "~/styles/css/custom-themes/code/amber.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Amber example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Amber" code={cssCode} />;
}
