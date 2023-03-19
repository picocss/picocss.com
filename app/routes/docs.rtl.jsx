import metaData from "~/data/meta";

import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `RTL (Right-To-Left) ${titleSuffix}`,
  description: "Support for Right-To-Left text with Pico.",
});

export default function Rtl() {
  return (
    <>
      {/* Header */}
      <Header title="RTL" description="Support for Right-To-Left text with Pico." />

      {/* Content */}
      <Content>
        <p>
          To enable RTL (Right-To-Left) with Pico, you need to set <code>dir="rtl"</code> on the{" "}
          <Code display="inline">{`<html>`}</Code> element (
          <Link to="https://picocss.com/examples/preview-rtl/">example</Link>).
        </p>
        <Code>{`<!doctype html>
<html dir="rtl" lang="ar">
  ...
</html>`}</Code>
      </Content>
    </>
  );
}
