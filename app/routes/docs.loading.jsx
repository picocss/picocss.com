import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Loading ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Loading() {
  return (
    <>
      {/* Header */}
      <Header
        title="Loading"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
