import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/orange.css";
import cssCode from "~/styles/css/custom-themes/code/orange.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Orange example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Orange" code={cssCode} />;
}
