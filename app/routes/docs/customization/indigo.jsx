import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/indigo.css";
import cssCode from "~/styles/css/custom-themes/code/indigo.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Indigo example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Indigo" code={cssCode} />;
}
