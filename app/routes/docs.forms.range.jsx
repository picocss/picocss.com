import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Range ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Switch() {
  return (
    <>
      {/* Header */}
      <Header
        title="Range"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
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
            <footer>
              <Code>{`<label>
  Brightness
  <input type="range" />
</label>

<label>
  Contrast
  <input type="range" value="40" />
</label>`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
