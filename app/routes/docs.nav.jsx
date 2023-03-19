import metaData from "~/data/meta";

import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Link from "~/components/Link";
import MenuIcon from "~/components/icons/Menu";
import TwitterIcon from "~/components/icons/Twitter";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Nav ${titleSuffix}`,
  description: "The essential navbar component in pure semantic HTML.",
});

export default function Nav() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      {/* Header */}
      <Header title="Nav" description="The essential navbar component in pure semantic HTML." />

      {/* Content */}
      <Content>
        <article aria-label="Nav example">
          <nav>
            <ul>
              <li>
                <strong>Brand</strong>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#" onClick={preventDefault}>
                  Link
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventDefault}>
                  Link
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventDefault}>
                  Link
                </Link>
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
                <Link to="#" onClick={preventDefault} className="secondary" aria-label="Menu">
                  <MenuIcon height="1rem" width="100%" />
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Brand</strong>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#" onClick={preventDefault} className="secondary" aria-label="Twitter">
                  <TwitterIcon height="1rem" width="100%" />
                </Link>
              </li>
            </ul>
          </nav>
          <footer>
            <Code>{`<nav>
  <ul>
    <li><a href="#" class="secondary">...</a></li>
  </ul>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">...</a>
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
                <Link to="#" onClick={preventDefault} className="secondary">
                  Link
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventDefault} className="secondary">
                  Link
                </Link>
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
                  <Link to="#" onClick={preventDefault}>
                    Link
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={preventDefault}>
                    Link
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={preventDefault}>
                    Link
                  </Link>
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
                <Link to="#" onClick={preventDefault}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventDefault}>
                  Category
                </Link>
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
      </Content>
    </>
  );
}
