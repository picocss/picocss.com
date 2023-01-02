import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/blue.css";
import cssCode from "~/styles/css/custom-themes/code/blue.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Blue example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Blue" code={cssCode} />;
}
