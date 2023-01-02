import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/yellow.css";
import cssCode from "~/styles/css/custom-themes/code/yellow.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Yellow example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Yellow" code={cssCode} />;
}
