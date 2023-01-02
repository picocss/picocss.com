import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/zinc.css";
import cssCode from "~/styles/css/custom-themes/code/zinc.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Zinc example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Zinc" code={cssCode} />;
}
