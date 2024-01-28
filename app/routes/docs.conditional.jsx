import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  {
    title: `
  Conditional styling ${titleSuffix}`,
  },
  {
    name: "description",
    content:
      "Apply Pico CSS styles selectively by wrapping elements in a .pico container, ideal for mixed-style environments.",
  },
];

export default function Rtl() {
  return (
    <>
      {/* Header */}
      <Header
        title="Conditional styling"
        description={
          <>
            Apply Pico CSS styles selectively by wrapping elements in a <code>.pico</code>{" "}
            container, ideal for mixed-style environments.
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <p>
            Pico offers a <code>.conditional</code> version that restricts styling to elements
            within <code>.pico</code> class containers.
          </p>
          <p>
            The remaining minimal <code>:root</code> reset ensures typography consistency across
            your entire site.
          </p>
          <article>Documentation in progress...</article>
          <p>
            See the <Link to="/docs/version-picker">version picker</Link> to easily select the ideal
            Pico CSS version variant to match your project's needs.
          </p>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.conditional.jsx" />
      </Content>
    </>
  );
}
