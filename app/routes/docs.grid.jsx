import { useRef, useState } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Minus from "~/components/icons/Minus";
import Plus from "~/components/icons/Plus";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Grid ${titleSuffix}` },
  {
    name: "description",
    content: "Create minimal responsive layouts with .grid to enable auto-layout columns.",
  },
];

export default function Grid() {
  const syntaxRef = useRef();
  const aboutRef = useRef();

  const [columns, setColumns] = useState(4);
  const minColumns = 1;
  const maxColumns = 10;

  function handleAddColumn() {
    setColumns(Math.min(columns + 1, maxColumns));
  }

  function handleRemoveColumn() {
    setColumns(Math.max(columns - 1, minColumns));
  }

  return (
    <>
      {/* Header */}
      <Header
        title="Grid"
        description={
          <>
            Create minimal responsive&nbsp;layouts with <code>.grid</code> to enable
            auto-layout&nbsp;columns.
          </>
        }
      />

      {/* Table of contents */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Syntax",
            ref: syntaxRef,
          },
          {
            anchor: "about-css-grids",
            title: "About CSS Grids",
            ref: aboutRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <p className="btn-group">
            <button className="secondary" onClick={handleAddColumn}>
              <Plus />
              Add column
            </button>
            <button className="secondary" onClick={handleRemoveColumn}>
              <Minus />
              Remove column
            </button>
          </p>
          <article className="component" aria-label="Grid example">
            <div className="grid">
              {Array.from({ length: columns }, (_, i) => {
                const index = i + 1;
                return <div key={index}>{index}</div>;
              })}
            </div>
            <Code as="footer">{`<div class="grid">
  ${Array.from({ length: columns }, (_, i) => {
    const index = i + 1;
    return `${i > 0 ? "  " : ""}<div>${index}</div>`;
  }).join("\n")}
</div>`}</Code>
          </article>
          <p>
            Columns intentionally collapse on small devices (<code>{`<768px`}</code>).
          </p>
          <p>
            <code>.grid</code> is not available in the{" "}
            <Link to="/docs/classless">class&#8209;less&nbsp;version</Link>.
          </p>
        </section>

        <section ref={aboutRef}>
          <Heading level={2} anchor="about-css-grids">
            About CSS Grids
          </Heading>
          <p>As Pico focuses on native HTML elements, we kept this grid system minimalist.</p>
          <p>
            A complete grid system in flexbox, with all the ordering, offsetting, and breakpoints
            utilities, can be heavier than the total size of the Pico library. Not really in the
            Pico spirit.
          </p>
          <p>
            If you need a quick way to prototype or build a complex layout, you can look at{" "}
            <strong>Flexbox grid layouts</strong>—for example,{" "}
            <a href="https://getbootstrap.com/docs/4.2/getting-started/contents/">
              Bootstrap Grid System
            </a>{" "}
            or <a href="http://flexboxgrid.com/">Flexbox Grid</a>.
          </p>
          <p>
            If you need a light and custom grid, you can look at{" "}
            <strong>CSS Grid Generators</strong>—for example,{" "}
            <a href="https://cssgrid-generator.netlify.app/">CSS Grid Generator</a>,{" "}
            <a href="http://grid.layoutit.com/">Layoutit!</a>, or{" "}
            <a href="https://griddy.io/">Griddy</a>.
          </p>
          <p>
            Alternatively, you can <a href="https://learncssgrid.com/">learn about CSS Grid</a>.
          </p>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.grid.jsx" />
      </Content>
    </>
  );
}
