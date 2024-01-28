import Code from "~/components/Code";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Link ${titleSuffix}` },
  {
    name: "description",
    content: "Link come with .secondary and .contrast styles.",
  },
];

export default function LinkPage() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      {/* Header */}
      <Header
        title="Link"
        description={
          <>
            Links come with <code>.secondary</code> and <code>.contrast</code> styles.
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <article aria-label="Links example" className="component">
            <Link to="#" onClick={preventDefault}>
              Primary
            </Link>
            <br />
            <Link to="#" onClick={preventDefault} className="secondary">
              Secondary
            </Link>
            <br />
            <Link to="#" onClick={preventDefault} className="contrast">
              Contrast
            </Link>
            <br />
            <Code as="footer">{`<a href="#">Primary</a>
<a href="#" class="secondary">Secondary</a>
<a href="#" class="contrast">Contrast</a>`}</Code>
          </article>

          <p>
            <code>.secondary</code> and <code>.contrast</code> classes are not available in the{" "}
            <Link to="/docs/classless">class&#8209;less&nbsp;version</Link>.
          </p>
          <p>
            <code>aria-current</code> send the active state to assistive technologies and is
            displayed as the hover links.
          </p>
          <article aria-label="Active link example" className="component">
            <Link to="#" onClick={preventDefault}>
              Regular link
            </Link>
            <br />
            <Link to="#" onClick={preventDefault} aria-current="page">
              Active link
            </Link>
            <br />
            <Link to="#" onClick={preventDefault}>
              Regular link
            </Link>
            <br />
            <Code as="footer">{`<a href="#">Regular link</a>
<a href="#" aria-current="page">Active link</a>
<a href="#">Regular link</a>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.link.jsx" />
      </Content>
    </>
  );
}
