import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Landmarks & section ${titleSuffix}`,
  description:
    "Structure your pages with semantic landmarks and sections for better accessibility and graceful spacings.",
});

export default function LandmarksAndSection() {
  return (
    <>
      {/* Header */}
      <Header
        title="Landmarks & section"
        description="Structure your pages with semantic landmarks and sections for better&nbsp;accessibility and graceful&nbsp;spacings."
      />

      {/* Content */}
      <Content />
    </>
  );
}
