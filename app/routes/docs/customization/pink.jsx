import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/pink.css";
import cssCode from "~/styles/css/custom-themes/code/pink.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Pink example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Pink" code={cssCode} />;
}
