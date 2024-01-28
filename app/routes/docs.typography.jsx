import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import FontsizeTable from "~/components/docs/FontsizeTable";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Typography ${titleSuffix}` },
  {
    name: "description",
    content:
      "All typographic elements are responsive and scale gracefully across devices and viewports.",
  },
];

export default function Typography() {
  const fontSizesRef = useRef();
  const headingsRef = useRef();
  const headingGroupRef = useRef();
  const inlineTextElementsRef = useRef();
  const blockquoteRef = useRef();
  const horizontalRuleRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Typography"
        description="All typographic elements are responsive and scale gracefully across devices and viewports."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Font sizes",
            ref: fontSizesRef,
          },
          {
            anchor: "headings",
            title: "Headings",
            ref: headingsRef,
          },
          {
            anchor: "heading-group",
            title: "Heading group",
            ref: headingGroupRef,
          },
          {
            anchor: "inline-text-elements",
            title: "Inline text elements",
            ref: inlineTextElementsRef,
          },
          {
            anchor: "blockquote",
            title: "Blockquote",
            ref: blockquoteRef,
          },
          {
            anchor: "horizontal-rule",
            title: "Horizontal rule",
            ref: horizontalRuleRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={fontSizesRef}>
          <FontsizeTable />
          <p>
            To ensure that the user’s default font size is followed, the base font size is defined
            as a percentage that grows with the user’s screen size, while HTML elements are defined
            in <code>rem</code>.
          </p>
          <p>
            Since <code>rem</code> is a multiplier of the HTML document font size, all HTML
            element’s font sizes grow proportionally with the size of the user’s screen.
          </p>
        </section>

        <section ref={headingsRef}>
          <Heading level={2} anchor="headings">
            Headings
          </Heading>
          <article aria-label="Headings example" className="component">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
            <Code as="footer">{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</Code>
          </article>
        </section>

        <section ref={headingGroupRef}>
          <Heading level={2} anchor="heading-group">
            Heading group
          </Heading>
          <p>
            Inside a <Code display="inline">{`<hgroup>`}</Code>, margins are collapsed, and the{" "}
            <code>:last-child</code> is muted.
          </p>
          <article aria-label="Headings example" className="component">
            <hgroup>
              <Heading level={2}>Get inspired with CSS</Heading>
              <p>How to use CSS to add glam to your Website?</p>
            </hgroup>
            <Code as="footer">{`<hgroup>
  <h2>Get inspired with CSS</h2>
  <p>How to use CSS to add glam to your Website?</p>
</hgroup>`}</Code>
          </article>
        </section>

        <section ref={inlineTextElementsRef}>
          <Heading level={2} anchor="inline-text-elements">
            Inline text elements
          </Heading>
          <div className="grid">
            <div>
              <p>
                <abbr title="Abbreviation">Abbr.</abbr> <Code display="inline">{`<abbr>`}</Code>
              </p>
              <p>
                <strong>Bold</strong> <Code display="inline">{`<strong>`}</Code>{" "}
                <Code display="inline">{`<b>`}</Code>
              </p>
              <p>
                <em>Italic</em> <Code display="inline">{`<i>`}</Code>{" "}
                <Code display="inline">{`<em>`}</Code> <Code display="inline">{`<cite>`}</Code>
              </p>
              <p>
                <del>Deleted</del> <Code display="inline">{`<del>`}</Code>
              </p>
              <p>
                <ins>Inserted</ins> <Code display="inline">{`<ins>`}</Code>
              </p>
              <p>
                <kbd>Ctrl + S</kbd> <Code display="inline">{`<kbd>`}</Code>
              </p>
            </div>
            <div>
              <p>
                <mark>Highlighted</mark> <Code display="inline">{`<mark>`}</Code>
              </p>
              <p>
                <s>Strikethrough</s> <Code display="inline">{`<s>`}</Code>
              </p>
              <p>
                <small>Small </small>
                <Code display="inline">{`<small>`}</Code>
              </p>
              <p>
                Text <sub>Sub</sub> <Code display="inline">{`<sub>`}</Code>
              </p>
              <p>
                Text <sup>Sup</sup> <Code display="inline">{`<sup>`}</Code>
              </p>
              <p>
                <u>Underline</u> <Code display="inline">{`<u>`}</Code>
              </p>
            </div>
          </div>
        </section>

        <section ref={blockquoteRef}>
          <Heading level={2} anchor="blockquote">
            Blockquote
          </Heading>
          <blockquote>
            “Design is a funny word. Some people think design means how it looks. But of course, if
            you dig deeper, it’s really how it works.”
            <footer>
              <cite>— Steve Jobs</cite>
            </footer>
          </blockquote>
          <Code>{`<blockquote>
  “Design is a funny word. Some people think 
  design means how it looks. But of course, if 
  you dig deeper, it's really how it works.”
  <footer>
    <cite>— Steve Jobs</cite>
  </footer>
</blockquote>`}</Code>
        </section>

        <section ref={horizontalRuleRef}>
          <Heading level={2} anchor="horizontal-rule">
            Horizontal rule
          </Heading>
          <p>
            The <Code display="inline">{`<hr>`}</Code> tag renders a horizontal line.
          </p>
          <article aria-label="Horizontal rule example" className="component">
            <p>Paragraph before the horizontal line.</p>
            <hr />
            <p>Paragraph after the horizontal line.</p>
            <Code as="footer">{`<p>Paragraph before the horizontal line.</p>
<hr />
<p>Paragraph after the horizontal line.</p>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.typography.jsx" />
      </Content>
    </>
  );
}
