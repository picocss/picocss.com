import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Landmarks & section ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function LandmarksAndSection() {
  return (
    <>
      {/* Header */}
      <Header
        title="Landmarks & section"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
