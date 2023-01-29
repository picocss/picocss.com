import metaData from "~/data/meta";
import Code from "~/components/Code";
import Link from "~/components/Link";

import MenuIcon from "~/components/icons/Menu";
import TwitterIcon from "~/components/icons/Twitter";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Nav ${titleSuffix}`,
  description: "The essential navbar component in pure semantic HTML.",
});

export default function Navs() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <h1>Nav</h1>
      <article aria-label="Nav example">
        <nav>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#link" onClick={preventDefault}>
                Link
              </a>
            </li>
            <li>
              <a href="#link" onClick={preventDefault}>
                Link
              </a>
            </li>
            <li>
              <a href="#link" onClick={preventDefault}>
                Link
              </a>
            </li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">{`<ul>`}</Code> are automatically distributed horizontally.
      </p>
      <p>
        <Code display="inline">{`<li>`}</Code> are unstyled and inlined.
      </p>
      <p>
        <Code display="inline">{`<a>`}</Code> are underlined only on <code>{`:hover`}</code> and{" "}
        <Code display="inline">{`:focus-visible`}</Code>.
      </p>
      <article aria-label="Nav example">
        <nav>
          <ul>
            <li>
              <a href="#menu" onClick={preventDefault} className="secondary" aria-label="Menu">
                <MenuIcon height="1rem" width="auto" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#twitter"
                onClick={preventDefault}
                className="secondary"
                aria-label="Twitter"
              >
                <TwitterIcon height="1rem" width="auto" />
              </a>
            </li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav>
  <ul>
    <li><a href="#" class="secondary">…</a></li>
  </ul>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">…</a>
    </li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>

      <p>
        You can use and any link <Code display="inline">{`.classes`}</Code> and{" "}
        <Code display="inline">{`<button>`}</Code> .
      </p>
      <p>Button sizes automatically match link sizes and margins.</p>
      <article aria-label="Nav example">
        <nav>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#link" onClick={preventDefault} className="secondary">
                Link
              </a>
            </li>
            <li>
              <a href="#link" onClick={preventDefault} className="secondary">
                Link
              </a>
            </li>
            <li>
              <button>Button</button>
            </li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">Link</a></li>
    <li><a href="#" class="secondary">Link</a></li>
    <li><button>Button</button></li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>

      <p>
        Inside <Code display="inline">{`<aside>`}</Code>, navs items are stacked vertically.
      </p>
      <article aria-label="Vertical nav example">
        <aside>
          <nav>
            <ul>
              <li>
                <a href="#link" onClick={preventDefault}>
                  Link
                </a>
              </li>
              <li>
                <a href="#link" onClick={preventDefault}>
                  Link
                </a>
              </li>
              <li>
                <a href="#link" onClick={preventDefault}>
                  Link
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <footer>
          <Code>{`<aside>
  <nav>
    <ul>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
</aside>`}</Code>
        </footer>
      </article>

      <p>
        You can also use <Link to="/docs/dropdown">Dropdowns</Link> inside navs.
      </p>

      <h2>Breadcrumb</h2>
      <p>
        With <Code display="inline">{`<nav aria-label="breadcrumb">`}</Code>, you can turn a nav
        into a breadcrumb.
      </p>
      <article aria-label="Breadcrumb example">
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a href="#link" onClick={preventDefault}>
                Home
              </a>
            </li>
            <li>
              <a href="#link" onClick={preventDefault}>
                Category
              </a>
            </li>
            <li>Page</li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav aria-label="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li>Page</li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>
    </>
  );
}
