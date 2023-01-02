import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/pumpkin.css";
import cssCode from "~/styles/css/custom-themes/code/pumpkin.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Pumpkin example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Pumpkin" code={cssCode} />;
}
