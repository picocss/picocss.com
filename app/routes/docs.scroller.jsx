import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Horizontal scroller ${titleSuffix}`,
  description:
    "<figure> acts as a container to make any content scrollable horizontally with minimal and semantic HTML.",
});

export default function Scroller() {
  return (
    <>
      {/* Header */}
      <Header
        title="Horizontal scroller"
        description={
          <>
            <Code display="inline">{`<figure>`}</Code> acts as a container to make any content
            scrollable horizontally with minimal and semantic&nbsp;HTML.
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <p>
            Useful to have responsive <Code display="inline">{`<table>`}</Code>.
          </p>
          <figure>
            <table>
              <thead>
                <tr>
                  {Array.from({ length: 10 }, (_, i) => (
                    <th key={i}>Heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 3 }, (_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 10 }, (_, j) => (
                      <td key={j}>Cell</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
          <Code>
            {`<figure>
  <table>
  ...
  </table>
</figure>`}
          </Code>
        </section>
      </Content>
    </>
  );
}
