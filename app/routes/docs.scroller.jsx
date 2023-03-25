import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Horizontal scroller ${titleSuffix}`,
  description:
    "<figure> acts as a container to make any content scrollable horizontally with minimal and semantic HTML.",
});

export default function Scroller() {
  return (
    <>
      {/* Header */}
      <Header
        title="Horizontal scroller"
        description={
          <>
            <Code display="inline">{`<figure>`}</Code> acts as a container to make any content
            scrollable horizontally with minimal and semantic&nbsp;HTML.
          </>
        }
      />

      {/* Content */}
      <Content />
    </>
  );
}
