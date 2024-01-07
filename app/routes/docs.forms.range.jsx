import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Range ${titleSuffix}` },
  {
    name: "description",
    content: "Create a slider control with the input type <input type='range'>.",
  },
];

export default function Range() {
  return (
    <>
      {/* Header */}
      <Header
        title="Range"
        description={
          <>
            Create a slider control with the input type{" "}
            <Code display="inline">{`<input type="range">`}</Code>.
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <article aria-label="Range examples" className="component">
            <label>
              Brightness
              <input type="range" />
            </label>
            <label>
              Contrast
              <input type="range" defaultValue={40} />
            </label>
            <Code as="footer">{`<label>
  Brightness
  <input type="range" />
</label>

<label>
  Contrast
  <input type="range" value="40" />
</label>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
