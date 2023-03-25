import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Grid ${titleSuffix}`,
  description: "Create minimal responsive layouts with .grid to enable auto-layout columns.",
});

export default function Grid() {
  return (
    <>
      {/* Header */}
      <Header
        title="Grid"
        description={
          <>
            Create minimal responsive&nbsp;layouts with <Code display="inline">.grid</Code> to
            enable auto-layout&nbsp;columns.
          </>
        }
      />

      {/* Content */}
      <Content />
    </>
  );
}
