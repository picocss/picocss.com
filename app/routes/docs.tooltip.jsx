import { useRef } from "react";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/Heading";
import Code from "~/components/Code";
import Link from "~/components/Link";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Tooltip ${titleSuffix}`,
  description: "Enable tooltips everywhere, without JavaScript.",
});

export default function Tooltip() {
  const syntaxRef = useRef();
  const placementRef = useRef();

  return (
    <>
      {/* Header */}
      <Header title="Tooltip" description="Enable tooltips everywhere, without JavaScript." />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Syntax",
            ref: syntaxRef,
          },
          {
            anchor: "placement",
            title: "Placement",
            ref: placementRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Tooltip example">
            <p>
              Tooltip on a{" "}
              <Link to="#" data-tooltip="Tooltip">
                link
              </Link>
            </p>
            <p>
              Tooltip on <em data-tooltip="Tooltip">inline element</em>
            </p>
            <p>
              <button data-tooltip="Tooltip">Tooltip on a button</button>
            </p>
            <Code as="footer">{`<p>Tooltip on a <a href="#" data-tooltip="Tooltip">link</a></p>
<p>Tooltip on <em data-tooltip="Tooltip">inline element</em></p>
<p><button data-tooltip="Tooltip">Tooltip on a button</button></p>`}</Code>
          </article>
        </section>

        <section ref={placementRef}>
          <Heading level={2} anchor="placement">
            Placement
          </Heading>
          <p>
            The tooltip is displayed on top by default but you can change it with the{" "}
            <Code display="inline">data-placement</Code> attribute.
          </p>
          <article aria-label="Tooltip placement example">
            <main className="grid">
              <button data-tooltip="Top">Top</button>
              <button data-tooltip="Right" data-placement="right">
                Right
              </button>
              <button data-tooltip="Bottom" data-placement="bottom">
                Bottom
              </button>
              <button data-tooltip="Left" data-placement="left">
                Left
              </button>
            </main>
            <Code as="footer">{`<button data-tooltip="Top">Top</button>
<button data-tooltip="Right" data-placement="right">Right</button>
<button data-tooltip="Bottom" data-placement="bottom">Bottom</button>
<button data-tooltip="Left" data-placement="left">Left</button>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
