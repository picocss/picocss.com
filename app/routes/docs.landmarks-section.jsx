import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";
import Link from "~/components/Link";
import Heading from "~/components/Heading";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Landmarks & section ${titleSuffix}`,
  description:
    "Structure your pages with semantic landmarks and sections for better accessibility and graceful spacings.",
});

export default function LandmarksAndSection() {
  const landmarksRef = useRef();
  const rootContainerRef = useRef();
  const sectionRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Landmarks & section"
        description="Structure your pages with semantic landmarks and sections for better&nbsp;accessibility and graceful&nbsp;spacings."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Landmarks",
            ref: landmarksRef,
          },
          {
            anchor: "root-container",
            title: "Custom root container",
            ref: rootContainerRef,
          },
          {
            anchor: "section",
            title: "Section",
            ref: sectionRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={landmarksRef}>
          <p>
            <Code display="inline">{`<header>`}</Code>, <Code display="inline">{`<main>`}</Code> and{" "}
            <Code display="inline">{`<footer>`}</Code> as direct children of{" "}
            <Code display="inline">{`<body>`}</Code> provide a responsive vertical{" "}
            <Code display="inline">padding</Code>
          </p>
          <Code>{`<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>`}</Code>
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

        <section ref={sectionRef}>
          <Heading level={2} anchor="section">
            Section
          </Heading>
          <p>
            <Code display="inline">{`<section>`}</Code> provides a responsive{" "}
            <Code display="inline">margin-bottom</Code> to separate your sections.
          </p>
        </section>
      </Content>
    </>
  );
}
