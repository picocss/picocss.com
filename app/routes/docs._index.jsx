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
  { title: `Documentation ${titleSuffix}` },
  {
    name: "description",
    content:
      "Link Pico.css manually or via CDN for a dependency-free setup, or use NPM or Composer for advanced usage.",
  },
];

export default function QuickStart() {
  const installManuallyRef = useRef();
  const installFromCdnRef = useRef();
  const installWithNpmRef = useRef();
  const installWithComposerRef = useRef();
  const starterHtmlTemplateRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Quick start"
        description={
          <>
            Link <code>pico.css</code> manually or via CDN for a dependency-free setup, or use NPM
            or Composer for advanced&nbsp;usage.
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "install-manually",
            title: "Install manually",
            ref: installManuallyRef,
          },
          {
            anchor: "usage-from-cdn",
            title: "Usage from CDN",
            ref: installFromCdnRef,
          },
          {
            anchor: "install-with-npm",
            title: "Install with NPM",
            ref: installWithNpmRef,
          },
          {
            anchor: "install-with-composer",
            title: "Install with Composer",
            ref: installWithComposerRef,
          },
          {
            anchor: "starter-html-template",
            title: "Starter HTML template",
            ref: starterHtmlTemplateRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={installManuallyRef}>
          <p>There are 4 ways to get started with pico.css:</p>
          <Heading level={2} anchor="install-manually">
            Install manually
          </Heading>
          <p>
            <Link to="https://github.com/picocss/pico/archive/refs/heads/main.zip">
              Download Pico
            </Link>{" "}
            and link <code>/css/pico.min.css</code> in the <Code display="inline">{`<head>`}</Code>{" "}
            of your website.
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.min.css" />`}</Code>
        </section>

        <section ref={installFromCdnRef}>
          <Heading level={2} anchor="usage-from-cdn">
            Usage from CDN
          </Heading>
          <p>
            Alternatively, you can use <Link to={cdnBaseUrl}>jsDelivr CDN</Link> to link
            <code>pico.min.css</code>.
          </p>
          <Code>{`<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.min.css"
/>`}</Code>
        </section>

        <section ref={installWithNpmRef}>
          <Heading level={2} anchor="install-with-npm">
            Install with NPM
          </Heading>
          <Code language="bash" className="small">
            npm install @picocss/pico
          </Code>
          <p>Or</p>
          <Code language="bash" className="small">
            yarn add @picocss/pico
          </Code>
          <p>
            Then, import Pico into your SCSS file with{" "}
            <Link to="https://sass-lang.com/documentation/at-rules/use">@use</Link>:
          </p>
          <Code language="scss" className="small">
            @use "pico";
          </Code>
          <p>
            Learn more about the <Link to="/docs/sass">customization with Sass</Link>.
          </p>
        </section>

        <section ref={installWithComposerRef}>
          <Heading level={2} anchor="install-with-composer">
            Install with Composer
          </Heading>
          <Code language="bash" className="small">
            composer require picocss/pico
          </Code>
        </section>

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
    <link rel="stylesheet" href="css/pico.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello world!</h1>
    </main>
  </body>
</html>`}</Code>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs._index.jsx" />
      </Content>
    </>
  );
}
