import Content from "~/components/docs/Content";
import Link from "~/components/Link";

export default function LoadingDocPage() {
  return (
    <>
      {/* Header */}
      <hgroup className="skeleton">
        <p className="chapter">&nbsp;</p>
        <h1>&nbsp;</h1>
        <p>&nbsp;</p>
      </hgroup>

      {/* Table of content */}
      <aside id="table-of-contents" className="skeleton">
        <nav>
          <details open>
            <summary>&nbsp;</summary>
            <ul>
              <li>
                <Link className="secondary" to="#">
                  &nbsp;
                </Link>
              </li>
              <li>
                <Link className="secondary" to="#">
                  &nbsp;
                </Link>
              </li>
              <li>
                <Link className="secondary" to="#">
                  &nbsp;
                </Link>
              </li>
            </ul>
          </details>
        </nav>
      </aside>

      {/* Content */}
      <Content className="skeleton">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <article></article>
      </Content>
    </>
  );
}
