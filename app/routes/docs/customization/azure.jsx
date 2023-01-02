import metaData from "~/data/meta";
import ThemePreview from "~/components/docs/ThemePreview";

import cssCode from "~/styles/css/custom-themes/code/azure.txt";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Azure example ${titleSuffix}`,
});

export default function Customization() {
  return <ThemePreview title="Azure" code={cssCode} />;
}
