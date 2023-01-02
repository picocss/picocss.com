import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/jade.css";
import cssCode from "~/styles/css/custom-themes/code/jade.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Jade example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Jade" code={cssCode} />;
}
