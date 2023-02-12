import metaData from "~/data/meta";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Link ${titleSuffix}`,
  description: "Link come with .secondary and .contrast styles.",
});

export default function LinkPage() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <hgroup>
        <h1>Link</h1>
        <h2>
          Links come with <Code display="inline">.secondary</Code> and{" "}
          <Code display="inline">.contrast</Code> styles.
        </h2>
      </hgroup>

      <article aria-label="Links example" className="component">
        <a href="#primary" onClick={preventDefault}>
          Primary
        </a>
        <br />
        <a href="#secondary" onClick={preventDefault} className="secondary">
          Secondary
        </a>
        <br />
        <a href="#contrast" onClick={preventDefault} className="contrast">
          Contrast
        </a>
        <br />
        <footer>
          <Code>{`<a href="#">Primary</a>
<a href="#" class="secondary">Secondary</a>
<a href="#" class="contrast">Contrast</a>`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">.secondary</Code> and <Code display="inline">.contrast</Code> classes
        are not available in the <Link to="/docs/classless">class-less version</Link>.
      </p>
      <p>
        <Code display="inline">aria-current</Code> send the active state to assistive technologies
        and is displayed as the hover links.
      </p>
      <article aria-label="Active link example" className="component">
        <a href="#regular" onClick={preventDefault}>
          Regular link
        </a>
        <br />
        <a href="#active" onClick={preventDefault} aria-current="page">
          Active link
        </a>
        <br />
        <a href="#regular" onClick={preventDefault}>
          Regular link
        </a>
        <br />
        <footer className="code">
          <Code>{`<a href="#">Regular link</a>
<a href="#" aria-current="page">Active link</a>
<a href="#">Regular link</a>`}</Code>
        </footer>
      </article>
    </>
  );
}
