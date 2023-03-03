import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Horizontal scroller ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Scroller() {
  return (
    <>
      {/* Header */}
      <Header
        title="Horizontal scroller"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
