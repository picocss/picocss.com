import metaData from "~/data/meta";

import Code from "~/components/Code";

export const meta = () => ({
  title: `RTL (Right-To-Left) ${metaData.titleSuffix}`,
  description: "Support for Right-To-Left text with Pico.",
});

export default function Rtl() {
  return (
    <>
      <hgroup>
        <h1>RTL</h1>
        <h2>Support for Right-To-Left text with Pico.</h2>
      </hgroup>
      <p>
        To enable RTL (Right-To-Left) with Pico, you need to set <code>dir="rtl"</code> on the{" "}
        <code>{`<html>`}</code> element (
        <a href="https://picocss.com/examples/preview-rtl/">example</a>).
      </p>
      <Code language="html">{`<!doctype html>
<html dir="rtl" lang="ar">
  …
</html>`}</Code>
    </>
  );
}
