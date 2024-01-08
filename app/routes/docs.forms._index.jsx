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
  { title: `Forms overview ${titleSuffix}` },
  {
    name: "description",
    content:
      "All form elements are fully responsive with pure semantic HTML, enabling forms to scale gracefully across devices and viewports.",
  },
];

export default function Forms() {
  const preventDefault = (e) => e.preventDefault();

  const introductionRef = useRef();
  const usageWithGridRef = useRef();
  const usageWithGroupRef = useRef();
  const helperTextRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Forms overview"
        description="All form elements are fully responsive with pure semantic HTML, enabling forms to scale gracefully across devices and viewports."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Introduction",
            ref: introductionRef,
          },
          {
            anchor: "helper-text",
            title: "Helper text",
            ref: helperTextRef,
          },
          {
            anchor: "usage-with-grid",
            title: "Usage with grid",
            ref: usageWithGridRef,
          },
          {
            anchor: "usage-with-group",
            title: "Usage with group",
            ref: usageWithGroupRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section aria-label="Introduction" ref={introductionRef}>
          <p>
            Inputs are <Code display="inline" language="css">{`width: 100%;`}</Code> by default and
            are the same size as the buttons to build consistent forms.
          </p>
          <article aria-label="Form example" className="component">
            <form onSubmit={preventDefault}>
              <fieldset>
                <label>
                  First name
                  <input name="first_name" placeholder="First name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="Email" autoComplete="email" />
                </label>
              </fieldset>
              <input type="submit" value="Subscribe" />
            </form>
            <Code as="footer">{`<form>
  <fieldset>
    <label>
      First name
      <input
        name="first_name"
        placeholder="First name"
      />
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
      />
    </label>
  </fieldset>

  <input
    type="submit"
    value="Subscribe"
  />
</form>`}</Code>
          </article>

          <p>
            <Code display="inline">{`<input>`}</Code> can be inside or outside{" "}
            <Code display="inline">{`<label>`}</Code>.
          </p>
          <article aria-label="Label and input syntax" className="component">
            <form>
              <label>
                First name
                <input name="first_name" placeholder="First name" />
              </label>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" autoComplete="email" />
            </form>
            <Code as="footer">{`<form>
  
  <!-- Input inside label -->
  <label>
    First name
    <input
      name="first_name"
      placeholder="First name"
    />
  </label>

  <!-- Input outside label -->
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    placeholder="Email"
    autocomplete="email"
  />

</form>`}</Code>
          </article>
        </section>

        <section ref={helperTextRef}>
          <Heading level={2} anchor="helper-text">
            Helper text
          </Heading>
          <p>
            <Code display="inline">{`<small>`}</Code> below form elements are muted and act as
            helper texts.
          </p>
          <article aria-label="Form helpers example" className="component">
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              aria-label="Email"
              aria-describedby="email-helper"
            />
            <small id="email-helper">We’ll never share your email with anyone else.</small>
            <Code as="footer">{`<input
  type="email"
  name="email"
  placeholder="Email"
  autoComplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
/>
<small id="email-helper">
  We'll never share your email with anyone else.
</small>`}</Code>
          </article>
        </section>

        <section ref={usageWithGridRef}>
          <Heading level={2} anchor="usage-with-grid">
            Usage with grid
          </Heading>
          <p>
            You can use <Code display="inline">.grid</Code> inside a form. See{" "}
            <Link to="/docs/grid">Grid</Link>.
          </p>
          <article aria-label="Form and grid example" className="component">
            <form onSubmit={preventDefault}>
              <fieldset className="grid">
                <input
                  name="login"
                  placeholder="Login"
                  aria-label="Login"
                  autoComplete="nickname"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  autoComplete="current-password"
                />
                <input type="submit" value="Log in" />
              </fieldset>
            </form>
            <Code as="footer">{`<form>
  <fieldset class="grid">
    <input 
      name="login"
      placeholder="Login"
      aria-label="Login"
      autocomplete="nickname"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      aria-label="Password"
      autocomplete="current-password"
    />
    <input
      type="submit"
      value="Log in"
    />
  </fieldset>
</form>`}</Code>
          </article>
        </section>

        <section ref={usageWithGroupRef}>
          <Heading level={2} anchor="usage-with-group">
            Usage with group
          </Heading>
          <p>
            You can use <Code display="inline">role="group"</Code> with form elements. See{" "}
            <Link to="/docs/group">Group</Link>.
          </p>
          <article className="component" aria-label="Form group example">
            <form onSubmit={preventDefault}>
              <fieldset role="group">
                <input type="email" placeholder="Enter your email" />
                <input type="submit" value="Subscribe" />
              </fieldset>
            </form>
            <Code as="footer">{`<form>
  <fieldset role="group"
    <input type="email" placeholder="Enter your email" />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
