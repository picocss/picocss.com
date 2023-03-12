import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Modal ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Modal() {
  return (
    <>
      {/* Header */}
      <Header
        title="Modal"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
