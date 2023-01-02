import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/red.css";
import cssCode from "~/styles/css/custom-themes/code/red.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Red example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Red" code={cssCode} />;
}
