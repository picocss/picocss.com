import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Container ${titleSuffix}`,
  description:
    "Use .container for a centered viewport or .container-fluid for a full-width layout.",
});

export default function Container() {
  return (
    <>
      {/* Header */}
      <Header
        title="Container"
        description={
          <>
            Use <Code display="inline">.container</Code> for a centered&nbsp;viewport or{" "}
            <Code display="inline">.container-fluid</Code> for a full-width&nbsp;layout.
          </>
        }
      />

      {/* Content */}
      <Content />
    </>
  );
}
