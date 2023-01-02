import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/lime.css";
import cssCode from "~/styles/css/custom-themes/code/lime.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Lime example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Lime" code={cssCode} />;
}
