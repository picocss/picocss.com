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

export default function Docs() {
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
            Link <Code display="inline">pico.css</Code> manually or via CDN for a dependency-free
            setup, or use NPM or Composer for advanced&nbsp;usage.
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
            anchor: "install-from-cdn",
            title: "Install from CDN",
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
        <section aria-label="Introduction">
          <p>There are 4 ways to get started with pico.css:</p>
        </section>

        <section ref={installManuallyRef}>
          <Heading level={2} anchor="install-manually">
            Install manually
          </Heading>
          <p>
            <Link to="https://github.com/picocss/pico/archive/refs/heads/v2.zip">
              Download Pico
            </Link>{" "}
            and link <Code display="inline">{`/css/pico.min.css`}</Code> in the{" "}
            <Code display="inline">{`<head>`}</Code> of your website.
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.min.css" />`}</Code>
        </section>

        <section ref={installFromCdnRef}>
          <Heading level={2} anchor="install-from-cdn">
            Install from CDN
          </Heading>
          <p>
            Alternatively, you can use <Link to={cdnBaseUrl}>jsDelivr CDN</Link> to link pico.css
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
            npm install @picocss/pico@next
          </Code>
          <Code language="bash" className="small">
            yarn add @picocss/pico@next
          </Code>
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
    <link rel="stylesheet" href="css/pico.min.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello, world!</h1>
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
