import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Tooltip ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Tooltip() {
  return (
    <>
      {/* Header */}
      <Header
        title="Tooltip"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
