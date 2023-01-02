import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/purple.css";
import cssCode from "~/styles/css/custom-themes/code/purple.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Purple example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Purple" code={cssCode} />;
}
