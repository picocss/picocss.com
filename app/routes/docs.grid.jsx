import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Grid ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Grid() {
  return (
    <>
      {/* Header */}
      <Header
        title="Grid"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
