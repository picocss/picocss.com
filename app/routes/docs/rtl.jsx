import metaData from "~/data/meta";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `RTL (Right-To-Left) ${titleSuffix}`,
  description: "Support for Right-To-Left text with Pico.",
});

export default function Rtl() {
  return (
    <>
      <hgroup>
        <h1>RTL</h1>
        <p>Support for Right-To-Left text with Pico.</p>
      </hgroup>

      <p>
        To enable RTL (Right-To-Left) with Pico, you need to set <code>dir="rtl"</code> on the{" "}
        <Code display="inline">{`<html>`}</Code> element (
        <a href="https://picocss.com/examples/preview-rtl/">example</a>).
      </p>
      <Code>{`<!doctype html>
<html dir="rtl" lang="ar">
  …
</html>`}</Code>
    </>
  );
}
