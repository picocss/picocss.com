import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Group ${titleSuffix}` },
  {
    name: "description",
    content: "Stack forms elements and buttons horizontally with role='group' and role='search'.",
  },
];

export default function Group() {
  const preventDefault = (e) => e.preventDefault();

  const formsRef = useRef();
  const searchRef = useRef();
  const buttonsRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Group"
        description={
          <>
            Stack forms elements and buttons horizontally with <code>role="group"</code> and{" "}
            <code>role="search"</code>.
          </>
        }
      />

      {/* Table of contents */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Forms",
            ref: formsRef,
          },
          {
            anchor: "search",
            title: "Search",
            ref: searchRef,
          },
          {
            anchor: "buttons",
            title: "Buttons",
            ref: buttonsRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={formsRef}>
          <p>
            <code>{`role="group"`}</code> is used to stack children horizontally.
          </p>
          <p>
            When used with the <Code display="inline">{`<form>`}</Code> tag, the group is{" "}
            <code>width: 100%;</code>.
          </p>
          <p>
            Unlike <code>.grid</code> (see <Link to="/docs/grid">Grid</Link>), columns are not
            collapsed on mobile devices.
          </p>
          <article className="component" aria-label="Form group example">
            <form onSubmit={preventDefault}>
              <fieldset role="group">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
                <input type="submit" value="Subscribe" />
              </fieldset>
            </form>
            <Code as="footer">{`<form>
  <fieldset role="group">
    <input name="email" type="email" placeholder="Enter your email" autocomplete="email" />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>`}</Code>
          </article>

          <p>
            This component is mainly designed for form elements and buttons. It brings a{" "}
            <code>:focus</code> style to the group depending on whether the focused child is an{" "}
            <Code display="inline">{`<input>`}</Code> or a{" "}
            <Code display="inline">{`<button>`}</Code>.
          </p>

          <p>
            The group <code>:focus</code> style relies on the <code>:has()</code> CSS selector and
            is therefore not (yet) supported by Firefox (see on{" "}
            <Link to="https://caniuse.com/css-has">caniuse</Link>). When <code>:has()</code> is not
            supported the children have their regular <code>:focus</code> style.
          </p>

          <article className="component" aria-label="Form group example">
            <form onSubmit={preventDefault}>
              <fieldset role="group">
                <input name="email" type="email" placeholder="Email" autoComplete="email" />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <input type="submit" value="Log in" />
              </fieldset>
            </form>
            <Code as="footer">{`<form>
  <fieldset role="group">
    <input name="email" type="email" placeholder="Email" autocomplete="email" />
    <input name="password" type="password" placeholder="Password" />
    <input type="submit" value="Log in" />
  </fieldset>
</form>`}</Code>
          </article>
        </section>

        <section ref={searchRef}>
          <Heading level={2} anchor="search">
            Search
          </Heading>

          <p>
            <code>role="search"</code> also stacks children horizontally and brings a special style,
            consistent with <Code display="inline">{`<input type="search">`}</Code> (see{" "}
            <Link to="/docs/forms/input#search">Search input</Link>).
          </p>

          <article className="component" aria-label="Searcgh group example">
            <form role="search" onSubmit={preventDefault}>
              <input name="search" type="search" placeholder="Search" />
              <input type="submit" value="Search" />
            </form>
            <Code as="footer">{`<form role="search">
  <input name="search" type="search" placeholder="Search" />
  <input type="submit" value="Search" />
</form>`}</Code>
          </article>
        </section>

        <section ref={buttonsRef}>
          <Heading level={2} anchor="buttons">
            Buttons
          </Heading>

          <p>
            <code>{`role="group"`}</code> is also useful for grouping a series of buttons.
          </p>

          <article className="component" aria-label="Group example">
            <div role="group">
              <button>Button</button>
              <button>Button</button>
              <button>Button</button>
            </div>
            <Code as="footer">{`<div role="group">
  <button>Button</button>
  <button>Button</button>
  <button>Button</button>
</div>`}</Code>
          </article>

          <article className="component" aria-label="Group example">
            <div role="group">
              <button aria-current={true}>Active</button>
              <button>Button</button>
              <button>Button</button>
            </div>
            <Code as="footer">{`<div role="group">
  <button aria-current="true">Active</button>
  <button>Button</button>
  <button>Button</button>
</div>`}</Code>
          </article>

          <article className="component" aria-label="Group example">
            <div role="group">
              <button>Button</button>
              <button className="secondary">Button</button>
              <button className="contrast">Button</button>
            </div>
            <Code as="footer">{`<div role="group">
  <button>Button</button>
  <button class="secondary">Button</button>
  <button class="contrast">Button</button>
</div>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.group.jsx" />
      </Content>
    </>
  );
}
