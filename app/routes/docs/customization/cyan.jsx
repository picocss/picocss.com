import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssStyle from "~/styles/css/custom-themes/cyan.css";
import cssCode from "~/styles/css/custom-themes/code/cyan.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Cyan example ${titleSuffix}`,
});

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title="Cyan" code={cssCode} />;
}
