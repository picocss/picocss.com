import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData();

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
            Stack forms elements and buttons horizontally with{" "}
            <Code display="inline">role="group"</Code> and{" "}
            <Code display="inline">role="search"</Code>.
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
            <Code display="inline">{`role="group"`}</Code> is used to stack children horizontally.
          </p>
          <p>
            When used with the <Code display="inline">{`<form>`}</Code> tag, the group is{" "}
            <Code display="inline">width: 100%;</Code>.
          </p>
          <p>
            Unlike <Code display="inline">.grid</Code> (see <Link to="/docs/grid">Grid</Link>),
            columns are not collapsed on mobile devices.
          </p>
          <article className="component" aria-label="Form group example">
            <form role="group" onSubmit={preventDefault}>
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
            <Code as="footer">{`<form role="group">
  <input type="email" placeholder="Enter your email" />
  <input type="submit" value="Subscribe" />
</form>`}</Code>
          </article>

          <p>
            This component is mainly designed for form elements and buttons. It brings a{" "}
            <Code display="inline">:focus</Code> style to the group depending on whether the focused
            child is an <Code display="inline">{`<input>`}</Code> or a{" "}
            <Code display="inline">{`<button>`}</Code>.
          </p>

          <p>
            The group <Code display="inline">:focus</Code> style relies on the{" "}
            <Code display="inline">:has()</Code> CSS selector and is therefore not (yet) supported
            by Firefox (see on <Link to="https://caniuse.com/css-has">caniuse</Link>). When{" "}
            <Code display="inline">:has()</Code> is not supported the children have their regular{" "}
            <Code display="inline">:focus</Code> style.
          </p>

          <article className="component" aria-label="Form group example">
            <form role="group" onSubmit={preventDefault}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Log in" />
            </form>
            <Code as="footer">{`<form role="group">
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Log in" />
</form>`}</Code>
          </article>
        </section>

        <section ref={searchRef}>
          <Heading level={2} anchor="search">
            Search
          </Heading>

          <p>
            <Code display="inline">role="search"</Code> also stacks children horizontally and brings
            a special style, consistent with{" "}
            <Code display="inline">{`<input type="search" />`}</Code> (see{" "}
            <Link to="/docs/forms/input#search">Search input</Link>).
          </p>

          <article className="component" aria-label="Searcgh group example">
            <form role="search" onSubmit={preventDefault}>
              <input type="search" placeholder="Search" />
              <input type="submit" value="Search" />
            </form>
            <Code as="footer">{`<form role="search">
  <input type="search" placeholder="Search" />
  <input type="submit" value="Search" />
</form>`}</Code>
          </article>
        </section>

        <section ref={buttonsRef}>
          <Heading level={2} anchor="buttons">
            Buttons
          </Heading>

          <p>
            <Code display="inline">{`role="group"`}</Code> is also useful for grouping a series of
            buttons.
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
      </Content>
    </>
  );
}
