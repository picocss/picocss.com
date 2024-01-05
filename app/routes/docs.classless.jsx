import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix, cdnBaseUrl } = metaData();

export const meta = () => [
  { title: `Class-less version ${titleSuffix}` },
  {
    name: "description",
    content:
      "Embrace minimalism with Pico’s .classless version, a semantic option for wild HTML purists who prefer a stripped-down approach.",
  },
];

export default function Classless() {
  const introductionRef = useRef();
  const usageRef = useRef();
  const rootContainerRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Class-less version"
        description={
          <>
            Embrace minimalism with Pico’s <Code display="inline">.classless</Code> version, a
            semantic&nbsp;option for wild&nbsp;HTML&nbsp;purists who prefer a
            stripped-down&nbsp;approach.
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Semantic containers",
            ref: introductionRef,
          },
          {
            anchor: "usage",
            title: "Usage",
            ref: usageRef,
          },
          {
            anchor: "root-container",
            title: "Custom root container",
            ref: rootContainerRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={introductionRef}>
          <p>
            Pico provides a <Code display="inline">.classless</Code> version (
            <Link to="https://codesandbox.io/s/github/picocss/examples/tree/master/v1-classless">
              example
            </Link>
            ).
          </p>
          <p>
            In this version, <Code display="inline">{`<header>`}</Code>,{" "}
            <Code display="inline">{`<main>`}</Code>, and <Code display="inline">{`<footer>`}</Code>{" "}
            inside <Code display="inline">{`<body>`}</Code> act as{" "}
            <Link to="/docs/container">containers</Link> to define a centered or a fluid viewport.
          </p>
          <Code language="css">{`/* Containers */
body > header,
body > main,
body > footer {
  ...
}`}</Code>
          <p>These 2 pages have the same style:</p>
          <Code>{`<!-- With pico.min.css -->
<body>
  <main class="container">
    <h1>Hello, world!</h1>
  </main>
</body>`}</Code>
          <Code>{`<!-- With pico.classless.min.css -->
<body>
  <main>
    <h1>Hello, world!</h1>
  </main>
</body>`}</Code>
        </section>

        <section ref={usageRef}>
          <Heading level={2} anchor="usage">
            Usage
          </Heading>
          <p>
            Use the default <Code display="inline">.classless</Code> version if you need centered
            viewports:
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.classless.min.css" />`}</Code>

          <p>
            Or use the <Code display="inline">.fluid.classless</Code> version if you need a fluid
            container:
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.fluid.classless.min.css" />`}</Code>

          <p>
            These <Code display="inline">.classless</Code> versions are also available on{" "}
            <a href={cdnBaseUrl}>jsDelivr CDN</a>:
          </p>
          <Code>{`<!-- Centered viewport --> 
<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.classless.min.css"
/>`}</Code>
          <Code>{`<!-- Fluid viewport --> 
<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.fluid.classless.min.css"
/>`}</Code>
        </section>

        <section ref={rootContainerRef}>
          <Heading level={2} anchor="root-container">
            Root container
          </Heading>
          <p>
            If you need to customize the default root container for{" "}
            <Code display="inline">{`<header>`}</Code>, <Code display="inline">{`<main>`}</Code>,
            and <Code display="inline">{`<footer>`}</Code>, you can recompile Pico with another CSS
            selector.
          </p>

          <p>
            Useful for <a href="https://reactjs.org/">React</a>,{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a>, or{" "}
            <a href="https://nextjs.org/">Next.js</a>.
          </p>
          <Code language="scss">{`/* Custom Class-less version for React */
@use "pico" with (
  
  // Define the root element used to target <header>, <main>, <footer>
  // with $enable-semantic-container and $enable-responsive-spacings
  $semantic-root-element: "#root";
  
  // Enable <header>, <main>, <footer> inside $semantic-root-element as containers
  $enable-semantic-container: true;

  // Enable .classes
  $enable-classes: false;
)`}</Code>

          <p>The code above will compile Pico with the containers defined like this:</p>
          <Code language="css">{`/* Containers */
#root > header,
#root > main,
#root > footer {
  ...
}`}</Code>
          <p>
            Learn more about{" "}
            <Link to="/docs/sass">compiling a custom version of Pico with SASS</Link>.
          </p>
        </section>
      </Content>
    </>
  );
}
