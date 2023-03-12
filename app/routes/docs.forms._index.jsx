import { useRef } from "react";
import metaData from "~/data/meta";

import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Heading from "~/components/docs/Heading";
import Link from "~/components/Link";
import TableOfContents from "~/components/docs/TableOfContents";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Forms overview ${titleSuffix}`,
  description:
    "All form elements are fully responsive in pure semantic HTML, allowing forms to scale gracefully across devices and viewports.",
});

export default function Forms() {
  const preventDefault = (e) => e.preventDefault();

  const introductionRef = useRef();
  const usageWithGridRef = useRef();
  const helperTextRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Forms overview"
        description="All form elements are fully responsive in pure semantic HTML, allowing forms to scale gracefully across devices and viewports."
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
            anchor: "usage-with-grid",
            title: "Usage with grid",
            ref: usageWithGridRef,
          },
          {
            anchor: "helper-text",
            title: "Helper text",
            ref: helperTextRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section aria-label="Introduction" ref={introductionRef}>
          <p>
            Inputs are <Code display="inline" language="css">{`width: 100%;`}</Code> by default and
            are the same size as the buttons to build consitent forms.
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
            <footer>
              <Code>{`<form>

  <fieldset>
    <label>
      First name
      <input
        name="first_name"
        placeholder="First name"
      >
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
      >
    </label>
  </fieldset>

  <input
    type="submit"
    value="Subscribe"
  >
</form>`}</Code>
            </footer>
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
            <footer>
              <Code>{`<form>
  
  <!-- Input inside label -->
  <label>
    First name
    <input
      name="first_name"
      placeholder="First name"
    >
  </label>

  <!-- Input outside label -->
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    placeholder="Email"
    autocomplete="email"
  >

</form>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={usageWithGridRef}>
          <Heading level={2} anchor="usage-with-grid">
            Usage with grid
          </Heading>
          <p>
            You can use <Code display="inline">.grid</Code> (see <Link to="/docs/grid">Grid</Link>)
            inside a form.
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
                <input type="submit" value="Login" />
              </fieldset>
            </form>
            <footer>
              <Code>{`<form>
  <fieldset class="grid">
    <input 
      name="login"
      placeholder="Login"
      aria-label="Login"
      autocomplete="nickname"
    >
    <input
      type="password"
      name="password"
      placeholder="Password"
      aria-label="Password"
      autocomplete="current-password"
    >
    <input
      type="submit"
      value="Login"
    >
  </fieldset>
</form>`}</Code>
            </footer>
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
            <small id="email-helper">We'll never share your email with anyone else.</small>
            <footer>
              <Code>{`<input
  type="email"
  name="email"
  placeholder="Email"
  autoComplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
>
<small id="email-helper">
  We'll never share your email with anyone else.
</small>`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
