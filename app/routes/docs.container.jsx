import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Container ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Container() {
  return (
    <>
      {/* Header */}
      <Header
        title="Container"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
