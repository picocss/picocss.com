import Code from "~/components/Code";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Loading ${titleSuffix}` },
  {
    name: "description",
    content: "Add a loading indicator with aria-busy='true'.",
  },
];

export default function Loading() {
  return (
    <>
      {/* Header */}
      <Header
        title="Loading"
        description={
          <>
            Add a loading indicator with <Code display="inline">aria-busy="true"</Code>.
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <p>It can be applied to any block:</p>
          <article aria-label="Loading example" aria-busy="true" />
          <Code>{`<article aria-busy="true"></article>`}</Code>
          <p>Any inline element:</p>
          <article aria-label="Loading example">
            <Link to="#" aria-busy="true">
              Your link is being generated...
            </Link>
            <Code as="footer">{`<a href="#" aria-busy="true">Your link is being generated...</a>`}</Code>
          </article>
          <p>Any button:</p>
          <article aria-label="Loading button examples">
            <div className="grid" id="buttons">
              <button aria-busy="true" aria-label="Please wait…" />
              <button aria-busy="true" aria-label="Please wait…" className="secondary" />
              <button aria-busy="true" aria-label="Please wait…" className="contrast" />
            </div>
            <div className="grid" id="outline-buttons">
              <button aria-busy="true" className="outline">
                Please wait…
              </button>
              <button aria-busy="true" className="outline secondary">
                Please wait…
              </button>
              <button aria-busy="true" className="outline contrast">
                Please wait…
              </button>
            </div>
            <Code as="footer">{`<button aria-busy="true" aria-label="Please wait…" />
<button aria-busy="true" aria-label="Please wait…" class="secondary" />
<button aria-busy="true" aria-label="Please wait…" class="contrast" />
<button aria-busy="true" class="outline">Please wait…</button>
<button aria-busy="true" class="outline secondary">Please wait…</button>
<button aria-busy="true" class="outline contrast">Please wait…</button>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.loading.jsx" />
      </Content>
    </>
  );
}
