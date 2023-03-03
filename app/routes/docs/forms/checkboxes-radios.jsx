import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Checkboxes and radios ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function CheckboxesAndRadios() {
  return (
    <>
      {/* Header */}
      <Header
        title="Checkboxes and radios"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}
