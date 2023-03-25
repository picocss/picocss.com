import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Loading ${titleSuffix}`,
  description: 'Add a loading indicator with aria-busy="true".',
});

export default function Loading() {
  return (
    <>
      {/* Header */}
      <Header
        title="Loading"
        description={
          <>
            Add a loading indicator with <Code display="inline">aria-busy="true"</Code>.
          </>
        }
      />

      {/* Content */}
      <Content />
    </>
  );
}
