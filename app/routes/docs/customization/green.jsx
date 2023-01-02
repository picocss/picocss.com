import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/green.css";
import cssCode from "~/styles/css/custom-themes/code/green.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Green example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Green" code={cssCode} />;
}
