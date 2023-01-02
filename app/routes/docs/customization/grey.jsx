import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/grey.css";
import cssCode from "~/styles/css/custom-themes/code/grey.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Grey example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Grey" code={cssCode} />;
}
