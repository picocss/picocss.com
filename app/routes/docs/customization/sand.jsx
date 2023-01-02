import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/sand.css";
import cssCode from "~/styles/css/custom-themes/code/sand.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Sand example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Sand" code={cssCode} />;
}
