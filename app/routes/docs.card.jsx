import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Card ${titleSuffix}` },
  {
    name: "description",
    content:
      "Create flexible cards with a semantic markup that provides graceful spacings across various devices and viewports.",
  },
];

export default function Card() {
  const syntaxRef = useRef();
  const sectioningRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Card"
        description="Create flexible cards with a semantic markup that provides graceful spacings across various devices and viewports."
      />

      {/* Table of contents */}
      <TableOfContents
        data={[
          { anchor: "", title: "Syntax", ref: syntaxRef },
          { anchor: "sectioning", title: "Sectioning", ref: sectioningRef },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Card example">I’m a card!</article>
          <Code className="small">{`<article>I’m a card!</article>`}</Code>
        </section>

        <section ref={sectioningRef}>
          <p>
            You can use <Code display="inline">{`<header>`}</Code> and{" "}
            <Code display="inline">{`<footer>`}</Code> inside{" "}
            <Code display="inline">{`<article>`}</Code>.
          </p>
          <Heading level={2} anchor="sectioning">
            Sectioning
          </Heading>
          <article aria-label="Card sectioning example">
            <header>Header</header>Body<footer>Footer</footer>
          </article>
          <Code>{`<article>
  <header>Header</header>
  Body
  <footer>Footer</footer>
</article>`}</Code>

          <p>
            Optionally, you can use <Code display="inline">{`<main>`}</Code> to wrap the body
            content.
          </p>
          <Code>{`<article>
  <header>Header</header>
  <main>Body</main>
  <footer>Footer</footer>
</article>`}</Code>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.card.jsx" />
      </Content>
    </>
  );
}
