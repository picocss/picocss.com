import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Progress ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function Progress() {
  return (
    <>
      {/* Header */}
      <Header
        title="Progress"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content>
        <section>
          <article className="component">
            <progress />
          </article>
        </section>
      </Content>
    </>
  );
}
