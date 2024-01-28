import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Overflow auto ${titleSuffix}` },
  {
    name: "description",
    content:
      ".overflow-auto enables automatic scrollbars to an element if its content extends beyond its limits.",
  },
];

export default function OverflowAuto() {
  return (
    <>
      {/* Header */}
      <Header
        title="Overflow auto"
        description={
          <>
            <code>{`.overflow-auto`}</code> enables automatic scrollbars to an element if its
            content extends beyond its limits.
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <p>
            Useful to have responsive <Code display="inline">{`<table>`}</Code>.
          </p>
          <div className="overflow-auto">
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
          </div>
          <Code>
            {`<div class="overflow-auto">
  <table>
  ...
  </table>
</div>`}
          </Code>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.overflow-auto.jsx" />
      </Content>
    </>
  );
}
