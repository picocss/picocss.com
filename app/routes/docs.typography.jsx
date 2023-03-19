import { useRef, useState } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";
import TableOfContents from "~/components/docs/TableOfContents";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Typography ${titleSuffix}`,
  description: "Links come with .secondaryand .contrast styles.",
});

export default function Typography() {
  const fontSizesRef = useRef();
  const headingsRef = useRef();
  const headingGroupRef = useRef();
  const inlineTextElementsRef = useRef();
  const blockquoteRef = useRef();
  const horizontalRuleRef = useRef();

  const [fontSizesInPixels, setFontSizesInPixels] = useState(true);

  const toggleFontSizesInPixels = (event) => {
    event.preventDefault();
    setFontSizesInPixels(!fontSizesInPixels);
  };

  const fontSizesTableData = {
    rootFontSize: [
      {
        key: "xs",
        name: "Extra small",
        fontSize: 100,
        fontUnit: "%",
        breakpoint: "< 576px",
      },
      {
        key: "sm",
        name: "Small",
        fontSize: 106.25,
        fontUnit: "%",
        breakpoint: "≥ 576px",
      },
      {
        key: "md",
        name: "Medium",
        fontSize: 112.5,
        fontUnit: "%",
        breakpoint: "≥ 768px",
      },
      {
        key: "lg",
        name: "Large",
        fontSize: 118.75,
        fontUnit: "%",
        breakpoint: "≥ 1024px",
      },
      {
        key: "xl",
        name: "Extra large",
        fontSize: 125,
        fontUnit: "%",
        breakpoint: "≥ 1280px",
      },
    ],
    htmlElements: [
      {
        name: "h1",
        fontSize: 2,
        fontUnit: "rem",
      },
      {
        name: "h2",
        fontSize: 1.75,
        fontUnit: "rem",
      },
      {
        name: "h3",
        fontSize: 1.5,
        fontUnit: "rem",
      },
      {
        name: "h4",
        fontSize: 1.25,
        fontUnit: "rem",
      },
      {
        name: "h5",
        fontSize: 1.125,
        fontUnit: "rem",
      },
      {
        name: "h6",
        fontSize: 1,
        fontUnit: "rem",
      },
      {
        name: "small",
        fontSize: 0.875,
        fontUnit: "em",
      },
    ],
  };

  return (
    <>
      {/* Header */}
      <Header
        title="Typography"
        description="All typographic elements are responsive, allowing text to scale gracefully across
        devices and viewports."
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
          <figure>
            <table className="striped" id="responsive-font-sizes">
              <caption>Responsive font sizes</caption>
              {/* Devices */}
              <thead>
                <tr>
                  <th>Breakpoint</th>
                  {fontSizesTableData.rootFontSize.map((device) => (
                    <th key={device.key}>
                      <span data-tooltip={device.breakpoint} data-placement="bottom">
                        {device.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Base font size */}
                <tr>
                  <th>Base</th>
                  {fontSizesTableData.rootFontSize.map((breakpoint) => {
                    const percent = breakpoint.fontSize;
                    const pixel = (percent * 16) / 100;
                    const formula = `${breakpoint.fontSize}${breakpoint.fontUnit} * 16px`;
                    return (
                      <td key={breakpoint.key}>
                        {fontSizesInPixels ? (
                          <span data-tooltip={formula} data-placement="bottom">
                            {pixel}
                            <small>px</small>
                          </span>
                        ) : (
                          <>
                            {percent}
                            <small>%</small>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* HTML elements */}
                {fontSizesTableData.htmlElements.map((htmlElement) => {
                  return (
                    <tr key={htmlElement.name}>
                      <th>
                        <Code display="inline">{`<${htmlElement.name}>`}</Code>
                      </th>
                      {fontSizesTableData.rootFontSize.map((breakpoint) => {
                        const breakpointPercent = breakpoint.fontSize;
                        const breakpointPixel = (breakpointPercent * 16) / 100;
                        const htmlElementPixel = breakpointPixel * htmlElement.fontSize;
                        const formula = `${breakpoint.fontSize}${breakpoint.fontUnit} * ${htmlElement.fontSize}${htmlElement.fontUnit} * 16px`;
                        return (
                          <td key={breakpoint.key}>
                            {fontSizesInPixels ? (
                              <span data-tooltip={formula} data-placement="bottom">
                                {htmlElementPixel}
                                <small>px</small>
                              </span>
                            ) : (
                              <>
                                <small>x&nbsp;</small>
                                {htmlElement.fontSize}
                                <small>{htmlElement.fontUnit}</small>
                              </>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </figure>
          <p>
            <Link to="#" onClick={toggleFontSizesInPixels}>
              {fontSizesInPixels
                ? "Display font sizes in percent and rem."
                : "Display font sizes in pixels."}
            </Link>
          </p>
          <p>
            To ensure that the user's default font size is followed, the base font size is defined
            as a percentage that grows with the user's screen size, while HTML elements are defined
            in <Code display="inline">rem</Code>.
          </p>
          <p>
            Since <Code display="inline">rem</Code> is a multiplier of the HTML document font size,
            all HTML element's font sizes grow proportionally with the size of the user's screen.
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
            <footer>
              <Code>{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={headingGroupRef}>
          <Heading level={2} anchor="heading-group">
            Heading group
          </Heading>
          <p>
            Inside a <Code display="inline">{`<hgroup>`}</Code>, margins are collapsed, and the{" "}
            <Code display="inline">:last-child</Code> is muted.
          </p>
          <article aria-label="Headings example" className="component">
            <hgroup>
              <Heading level={2}>Get inspired with CSS</Heading>
              <p>How to use CSS to add glam to your Website?</p>
            </hgroup>
            <footer>
              <Code>{`<hgroup>
  <h2>Get inspired with CSS</h2>
  <p>How to use CSS to add glam to your Website?</p>
</hgroup>`}</Code>
            </footer>
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
            you dig deeper, it's really how it works.”
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
            <footer>
              <Code>{`<p>Paragraph before the horizontal line.</p>
<hr />
<p>Paragraph after the horizontal line.</p>`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
