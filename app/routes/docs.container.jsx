import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Container ${titleSuffix}`,
  description:
    "Use .container for a centered viewport or .container-fluid for a full-width layout.",
});

const breakpoints = [
  {
    key: "xs",
    name: "Extra small",
    breakpoint: "<576px",
    viewport: "100%",
  },
  {
    key: "sm",
    name: "Small",
    breakpoint: "≥576px",
    viewport: "510px",
  },
  {
    key: "md",
    name: "Medium",
    breakpoint: "≥768px",
    viewport: "700px",
  },
  {
    key: "lg",
    name: "Large",
    breakpoint: "≥1024px",
    viewport: "950px",
  },
  {
    key: "xl",
    name: "Extra large",
    breakpoint: "≥1280px",
    viewport: "1200px",
  },
  {
    key: "xxl",
    name: "Extra extra large",
    breakpoint: "≥1536px",
    viewport: "1450px",
  },
];

export default function Container() {
  const breakpointsRef = useRef();
  const fixedRef = useRef();
  const fluidRef = useRef();
  const semanticRef = useRef();

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

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Breakpoints",
            ref: breakpointsRef,
          },
          {
            anchor: "fixed-width",
            title: "Fixed width",
            ref: fixedRef,
          },
          {
            anchor: "fluid-width",
            title: "Fluid width",
            ref: fluidRef,
          },
          {
            anchor: "semantic-containers",
            title: "Semantic containers",
            ref: semanticRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={breakpointsRef}>
          <p>
            Pico includes six default breakpoints. These breakpoints can be customized with{" "}
            <Link to="/docs/sass">Sass</Link>.
          </p>
          <table className="striped">
            <thead>
              <tr>
                <th>Device</th>
                <th>Breakpoint</th>
                <th>Viewport</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((breakpoint) => (
                <tr key={breakpoint.key}>
                  <td>{breakpoint.name}</td>
                  <td>{breakpoint.breakpoint}</td>
                  <td>{breakpoint.viewport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section ref={fixedRef}>
          <Heading level={2} anchor="fixed-width">
            Fixed width
          </Heading>
          <p>
            <Code display="inline">.container</Code> provides a centered container with a fixed
            width.
          </p>
          <Code>{`<body>
  <main class="container">
    ...
  </main>
</body>`}</Code>
        </section>

        <section ref={fluidRef}>
          <Heading level={2} anchor="fluid-width">
            Fluid width
          </Heading>
          <p>
            <Code display="inline">.container-fluid</Code> provides a full-width container.
          </p>
          <Code>{`<body>
  <main class="container-fluid">
    ...
  </main>
</body>`}</Code>
        </section>

        <section ref={semanticRef}>
          <Heading level={2} anchor="semantic-containers">
            Semantic containers
          </Heading>
          <p>
            In the classless version, <Code display="inline">{`<header>`}</Code>,{" "}
            <Code display="inline">{`<main>`}</Code>, and <Code display="inline">{`<footer>`}</Code>{" "}
            inside <Code display="inline">{`<body>`}</Code> act as containers to define a centered
            or a fluid viewport.
          </p>
          <p>
            See <Link to="/docs/classless">Class-less version</Link>.
          </p>
        </section>
      </Content>
    </>
  );
}
