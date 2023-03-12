import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Table ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Table() {
  return (
    <>
      {/* Header */}
      <Header
        title="Table"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
