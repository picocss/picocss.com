import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Range ${titleSuffix}` },
  {
    name: "description",
    content: "Create a slider control with <input type='range'>.",
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
            Create a slider control with <Code display="inline">{`<input type="range">`}</Code>.
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

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.forms.range.jsx" />
      </Content>
    </>
  );
}
