import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import MenuIcon from "~/components/icons/Menu";
import TwitterIcon from "~/components/icons/XTwitter";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Nav ${titleSuffix}` },
  {
    name: "description",
    content: "The essential navbar component in pure semantic HTML.",
  },
];

const brandLabel = "Acme Corp";
const menuItems = ["About", "Services", "Products"];

const phasesOfMatter = ["Solid", "Liquid", "Gas", "Plasma"];
const accountItems = ["Profile", "Settings", "Security", "Logout"];

export function Item({ children, className, ...props }) {
  const preventDefault = (e) => e.preventDefault();

  return (
    <Link to="#" onClick={preventDefault} {...(className && { className: className })} {...props}>
      {children}
    </Link>
  );
}

export function DropdownItems({ items = phasesOfMatter, dir, id }) {
  return (
    <ul dir={dir} id={id}>
      {items.map((item) => (
        <li key={item}>
          <Item>{item}</Item>
        </li>
      ))}
    </ul>
  );
}

export default function Nav() {
  const preventDefault = (e) => e.preventDefault();

  const syntaxRef = useRef();
  const linkVariantsRef = useRef();
  const buttonsRef = useRef();
  const dropdownsRef = useRef();
  const verticalStackingRef = useRef();
  const breadcrumbRef = useRef();
  const overflowRef = useRef();

  return (
    <>
      <nav aria-label="overflow-with-focus">
        <ul>
          {menuItems.slice(0, 2).map((item) => {
            const isFirst = item === menuItems[0];
            return (
              <li key={item}>
                <Link to="#" onClick={preventDefault} {...(isFirst && { className: "focused" })}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul>
          {menuItems[2] && (
            <li key={menuItems[2]}>
              <Link to="#" onClick={preventDefault} className="focused">
                {menuItems[2]}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Header */}
      <Header title="Nav" description="The essential navbar component in pure semantic HTML." />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Syntax",
            ref: syntaxRef,
          },
          {
            anchor: "link-variants",
            title: "Link variants",
            ref: linkVariantsRef,
          },
          {
            anchor: "buttons",
            title: "Buttons",
            ref: buttonsRef,
          },
          {
            anchor: "dropdowns",
            title: "Dropdowns",
            ref: dropdownsRef,
          },
          {
            anchor: "vertical-stacking",
            title: "Vertical stacking",
            ref: verticalStackingRef,
          },
          {
            anchor: "breadcrumb",
            title: "Breadcrumb",
            ref: breadcrumbRef,
          },
          {
            anchor: "overflow",
            title: "Overflow",
            ref: overflowRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Nav example" className="component">
            <nav>
              <ul>
                <li>
                  <strong>{brandLabel}</strong>
                </li>
              </ul>
              <ul>
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link to="#" onClick={preventDefault}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Code as="footer">{`<nav>
  <ul>
    <li><strong>${brandLabel}</strong></li>
  </ul>
  <ul>
    ${menuItems
      .map(
        (item, index) =>
          `${index !== 0 ? "    " : ""}<li><a href="#">${item}</a></li>${
            index !== menuItems.length - 1 ? "\n" : ""
          }`,
      )
      .join("")}
  </ul>
</nav>`}</Code>
          </article>
          <p>
            <Code display="inline">{`<ul>`}</Code> are automatically distributed horizontally.
          </p>
          <p>
            <Code display="inline">{`<li>`}</Code> are unstyled and inlined.
          </p>
          <p>
            <Code display="inline">{`<a>`}</Code> are underlined only on <code>{`:hover`}</code>.
          </p>
        </section>

        <section ref={linkVariantsRef}>
          <Heading level={2} anchor="link-variants">
            Link variants
          </Heading>
          <p>
            You can use <code>.secondary</code>, <code>.contrast</code>, and <code>.outline</code>{" "}
            classes (not available in the <Link to="/docs/classless">class-less version</Link>).
          </p>
          <article aria-label="Nav example" className="component">
            <nav>
              <ul>
                <li>
                  <strong>{brandLabel}</strong>
                </li>
              </ul>
              <ul>
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link to="#" className="contrast" onClick={preventDefault}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Code as="footer">{`<nav>
  <ul>
    <li><strong>${brandLabel}</strong></li>
  </ul>
  <ul>
    ${menuItems
      .map(
        (item, index) =>
          `${index !== 0 ? "    " : ""}<li><a href="#" class="contrast">${item}</a></li>${
            index !== menuItems.length - 1 ? "\n" : ""
          }`,
      )
      .join("")}
  </ul>
</nav>`}</Code>
          </article>
          <article aria-label="Nav example" className="component">
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
                  <strong>{brandLabel}</strong>
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
            <Code as="footer">{`<nav>
  <ul>
    <li><a href="#" class="secondary">...</a></li>
  </ul>
  <ul>
    <li><strong>${brandLabel}</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">...</a></li>
  </ul>
</nav>`}</Code>
          </article>
        </section>

        <section ref={buttonsRef}>
          <Heading level={2} anchor="buttons">
            Buttons
          </Heading>
          <p>
            You can use <Code display="inline">{`<button>`}</Code> inside{" "}
            <Code display="inline">{`<li>`}</Code>.
          </p>
          <p>Button sizes automatically match link size and margin.</p>
          <article aria-label="Nav example" className="component">
            <nav>
              <ul>
                <li>
                  <strong>{brandLabel}</strong>
                </li>
              </ul>
              <ul>
                {menuItems.map((item, index) => {
                  if (menuItems.length - 1 === index) {
                    return (
                      <li key={item}>
                        <button className="secondary">{item}</button>
                      </li>
                    );
                  }
                  return (
                    <li key={item}>
                      <Link to="#" onClick={preventDefault}>
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Code as="footer">{`<nav>
  <ul>
    <li><strong>${brandLabel}</strong></li>
  </ul>
  <ul>
    ${menuItems
      .map(
        (item, index) =>
          `${index !== 0 ? "    " : ""}<li>${
            menuItems.length - 1 === index ? '<button class="secondary">' : '<a href="#">'
          }${item}${menuItems.length - 1 === index ? "</button>" : "</a>"}</li>${
            index !== menuItems.length - 1 ? "\n" : ""
          }`,
      )
      .join("")}
  </ul>
</nav>`}</Code>
          </article>
        </section>

        <section ref={dropdownsRef}>
          <Heading level={2} anchor="dropdowns">
            Dropdowns
          </Heading>
          <p>
            You can use <Link to="/docs/dropdown">dropdowns</Link> inside Nav.
          </p>
          <article aria-label="Dropdowns inside nav" className="component">
            <nav>
              <ul>
                <li>
                  <strong>Acme Corp</strong>
                </li>
              </ul>
              <ul>
                <li>
                  <Item className="secondary">Services</Item>
                </li>
                <li>
                  <details className="dropdown">
                    <summary>Account</summary>
                    <DropdownItems items={accountItems} dir="rtl" />
                  </details>
                </li>
              </ul>
            </nav>
            <Code as="footer">{`<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">Services</a></li>
    <li>
      <details class="dropdown">
        <summary>
          Account
        </summary>
        <ul dir="rtl">
${accountItems
  .map(
    (item, index) =>
      `          <li><a href="#">${item}</a></li>${index !== accountItems.length - 1 ? "\n" : ""}`,
  )
  .join("")}
        </ul>
      </details>
    </li>
  </ul>
</nav>`}</Code>
          </article>
        </section>

        <section ref={verticalStackingRef}>
          <Heading level={2} anchor="vertical-stacking">
            Vertical stacking
          </Heading>

          <p>
            Inside <Code display="inline">{`<aside>`}</Code>, navs items are stacked vertically.
          </p>
          <article aria-label="Vertical nav example" className="component">
            <aside>
              <nav>
                <ul>
                  {menuItems.map((item) => (
                    <li key={item}>
                      <Link to="#" onClick={preventDefault}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <Code as="footer">{`<aside>
  <nav>
    <ul>
      ${menuItems
        .map(
          (item, index) =>
            `${index !== 0 ? "      " : ""}<li><a href="#">${item}</a></li>${
              index !== menuItems.length - 1 ? "\n" : ""
            }`,
        )
        .join("")}
    </ul>
  </nav>
</aside>`}</Code>
          </article>
        </section>

        <section ref={breadcrumbRef}>
          <Heading level={2} anchor="breadcrumb">
            Breadcrumb
          </Heading>

          <p>
            With <Code display="inline">{`<nav aria-label="breadcrumb">`}</Code>, you can turn a nav
            into a breadcrumb.
          </p>
          <article aria-label="Breadcrumb example" className="component">
            <nav aria-label="breadcrumb">
              <ul>
                <li>
                  <Link to="#" onClick={preventDefault}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={preventDefault}>
                    Services
                  </Link>
                </li>
                <li>Design</li>
              </ul>
            </nav>
            <Code as="footer">{`<nav aria-label="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Design</li>
  </ul>
</nav>`}</Code>
          </article>
          <p>
            You can change the divider with a local CSS custom property{" "}
            <code>--pico-nav-breadcrumb-divider</code>.
          </p>
          <article aria-label="Breadcrumb example" className="component">
            <nav aria-label="breadcrumb" style={{ "--pico-nav-breadcrumb-divider": "'✨'" }}>
              <ul>
                <li>
                  <Link to="#" onClick={preventDefault}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={preventDefault}>
                    Services
                  </Link>
                </li>
                <li>Design</li>
              </ul>
            </nav>
            <Code as="footer">{`<nav
  aria-label="breadcrumb"
  style="--pico-nav-breadcrumb-divider: '✨';"
>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Design</li>
  </ul>
</nav>`}</Code>
          </article>
        </section>

        <section id="overflow" ref={overflowRef}>
          <Heading level={2} anchor="overflow">
            Overflow
          </Heading>
          <p>
            The <Code display="inline">{`<nav>`}</Code> component uses{" "}
            <Code display="inline" language="css">
              overflow: visible;
            </Code>{" "}
            on the container and negative margins on childrens to provide a nice{" "}
            <code>::focus-visible</code> style for links on keyboard navigation while keeping the
            content aligned horizontally.
          </p>
          <article aria-label="Overflow example" className="component">
            <nav aria-label="overflow">
              <ul>
                {menuItems.slice(0, 2).map((item) => (
                  <li key={item}>
                    <Link to="#" onClick={preventDefault}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {menuItems[2] && (
                  <li key={menuItems[2]}>
                    <Link to="#" onClick={preventDefault}>
                      {menuItems[2]}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            <nav aria-label="overflow-with-focus">
              <ul>
                {menuItems.slice(0, 2).map((item) => {
                  const isFirst = item === menuItems[0];
                  return (
                    <li key={item}>
                      <Link
                        to="#"
                        onClick={preventDefault}
                        {...(isFirst && { className: "focused" })}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {menuItems[2] && (
                  <li key={menuItems[2]}>
                    <Link to="#" onClick={preventDefault} className="focused">
                      {menuItems[2]}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.nav.jsx" />
      </Content>
    </>
  );
}
