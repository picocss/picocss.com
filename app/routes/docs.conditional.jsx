import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix, cdnBaseUrl } = metaData;

export const meta = () => [
  {
    title: `
  Conditional styling ${titleSuffix}`,
  },
  {
    name: "description",
    content:
      "Apply Pico CSS styles selectively by wrapping elements in a .pico container, ideal for mixed-style environments.",
  },
];

export default function Conditional() {
  const introductionRef = useRef();
  const installManuallyRef = useRef();
  const installFromCdnRef = useRef();
  const usageWithSaasRef = useRef();
  const starterHtmlTemplateRef = useRef();
  const examplesRef = useRef();
  const demoRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Conditional styling"
        description={
          <>
            Apply Pico CSS styles selectively by wrapping elements in a <code>.pico</code>{" "}
            container, ideal for mixed-style environments.
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Introduction",
            ref: introductionRef,
          },
          {
            anchor: "local-setup",
            title: "Install manually",
            ref: installManuallyRef,
          },
          {
            anchor: "usage-from-cdn",
            title: "Usage from CDN",
            ref: installFromCdnRef,
          },
          {
            anchor: "usage-with-sass",
            title: "Usage with Sass",
            ref: usageWithSaasRef,
          },
          {
            anchor: "starter-html-template",
            title: "Starter HTML template",
            ref: starterHtmlTemplateRef,
          },
          {
            anchor: "examples",
            title: "Examples",
            ref: examplesRef,
          },
          {
            anchor: "demo",
            title: "Demo",
            ref: demoRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        {/* Introduction */}
        <section ref={introductionRef}>
          <p>
            Pico offers a <code>.conditional</code> version that restricts styling to elements
            within <code>.pico</code> class containers.
          </p>
          <p>
            The remaining minimal <code>:root</code> reset ensures typography consistency across
            your entire site.
          </p>
          <p>
            See the <Link to="/docs/version-picker">version picker</Link> to easily select the ideal
            Pico CSS version variant to match your project's needs.
          </p>
        </section>

        {/* Install manually */}
        <section ref={installManuallyRef}>
          <Heading level={2} anchor="local-setup">
            Install manually
          </Heading>
          <p>
            <Link to="https://github.com/picocss/pico/archive/refs/heads/v2.zip">
              Download Pico
            </Link>{" "}
            and link <code>/css/pico.conditional.min.css</code> in the{" "}
            <Code display="inline">{`<head>`}</Code> of your website.
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.conditional.min.css" />`}</Code>
        </section>

        {/* Usage from CDN */}
        <section ref={installFromCdnRef}>
          <Heading level={2} anchor="usage-from-cdn">
            Usage from CDN
          </Heading>
          <p>
            Alternatively, you can use <Link to={cdnBaseUrl}>jsDelivr CDN</Link> to link
            <code>pico.conditional.min.css</code>.
          </p>
          <Code>{`<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.conditional.min.css"
/>`}</Code>
        </section>

        {/* Usage with Sass */}
        <section ref={usageWithSaasRef}>
          <Heading level={2} anchor="usage-with-sass">
            Usage with Sass
          </Heading>
          <Code language="scss">{`@use "pico" with (
  $parent-selector: ".pico"
);`}</Code>
        </section>

        {/* Starter HTML template */}
        <section ref={starterHtmlTemplateRef}>
          <Heading level={2} anchor="starter-html-template">
            Starter HTML template
          </Heading>
          <Code>{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark" />
    <link rel="stylesheet" href="css/pico.conditional.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <main>
      <section>
        <p>Unstyled hello world!</p>
      </section>
      <section class="pico">
        <p>Styled hello world!</p>
      </section>
    </main>
  </body>
</html>`}</Code>
        </section>

        {/* Examples */}
        <section ref={examplesRef}>
          <Heading level={2} anchor="examples">
            Examples
          </Heading>
          <p>Example with Pico styles:</p>
          <article aria-label="Styled example" className="component">
            <form>
              <input type="text" name="text" placeholder="Text" aria-label="Text" />
            </form>
            <Code as="footer">{`<form class="pico">
  <input type="text" name="text" placeholder="Text" aria-label="Text" />
</form>`}</Code>
          </article>
          <p>Example without Pico styles:</p>
          <article aria-label="Unstyled example" className="component">
            <form>
              <input
                type="text"
                name="text"
                placeholder="Text"
                aria-label="Text"
                style={{ all: "revert" }}
              />
            </form>
            <Code as="footer">{`<form>
  <input type="text" name="text" placeholder="Text" aria-label="Text" />
</form>`}</Code>
          </article>
        </section>

        {/* Demo */}
        <section ref={demoRef}>
          <Heading level={2} anchor="demo">
            Demo
          </Heading>
          <ul>
            <li>
              <Link to="https://kv4lrs.csb.app/">Preview</Link>
            </li>
            <li>
              <Link to="https://codesandbox.io/embed/kv4lrs?view=Editor+%2B+Preview&module=%2Findex.html">
                Edit in CodeSandbox
              </Link>
            </li>
            <li>
              <Link to="https://github.com/picocss/examples/tree/master/v2-conditional-styling">
                View source
              </Link>
            </li>
          </ul>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.conditional.jsx" />
      </Content>
    </>
  );
}
