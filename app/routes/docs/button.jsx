import { useRef } from "react";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";

import Heading from "~/components/docs/Heading";
import Link from "~/components/Link";
import Code from "~/components/Code";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Button ${titleSuffix}`,
  description: "The essential button in pure HTML, without .classes for the default style.",
});

export default function Button() {
  const overviewRef = useRef();
  const roleButtonRef = useRef();
  const variantsRef = useRef();
  const formButtonsRef = useRef();
  const disabledRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Button"
        description="The essential button in pure HTML, without .classes for the default style."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "overview",
            title: "Overview",
            ref: overviewRef,
          },
          {
            anchor: "role-button",
            title: "Role button",
            ref: roleButtonRef,
          },
          {
            anchor: "variants",
            title: "Variants",
            ref: variantsRef,
          },
          {
            anchor: "form-buttons",
            title: "Form buttons",
            ref: formButtonsRef,
          },
          {
            anchor: "disabled",
            title: "Disabled",
            ref: disabledRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section aria-label="Overview" ref={overviewRef}>
          <article aria-label="Button example" className="component">
            <button>Button</button>
            <footer>
              <Code className="small">{`<button>Button</button>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={roleButtonRef}>
          <Heading level={2} anchor="role-button">
            Role button
          </Heading>
          <p>
            Clickable elements with <Code display="inline">role="button"</Code> are rendered as
            buttons and indicate to screen readers that the elements are a button.
          </p>
          <article aria-label="Role button example" className="component">
            <div role="button" tabIndex="0">
              Div as button
            </div>
            <footer>
              <Code className="small">{`<div role="button" tabindex="0">Div as a button</div>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={variantsRef}>
          <Heading level={2} anchor="variants">
            Variants
          </Heading>
          <p>
            Buttons come with <Code display="inline">.secondary</Code> and{" "}
            <Code display="inline">.contrast</Code> styles (Not available in the{" "}
            <Link to="/docs/classless">class-less version</Link>).
          </p>
          <article aria-label="Button colors example" className="component">
            <div className="grid">
              <button className="secondary">Secondary</button>
              <button className="contrast">Contrast</button>
            </div>
            <footer>
              <Code>{`<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
`}</Code>
            </footer>
          </article>

          <p>
            They also come with a classic outline style (Not available in the{" "}
            <Link to="/docs/classless">class-less version</Link>).
          </p>
          <article aria-label="Buttons outline example" className="component">
            <div className="grid">
              <button className="outline">Primary</button>
              <button className="outline secondary">Secondary</button>
              <button className="outline contrast">Contrast</button>
            </div>
            <footer>
              <Code>{`<button class="outline">Primary</button>
<button class="outline secondary">Secondary</button>
<button class="outline contrast">Contrast</button>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={formButtonsRef}>
          <Heading level={2} anchor="form-buttons">
            Form buttons
          </Heading>
          <p>
            <Code display="inline">{`type="submit"`}</Code> and{" "}
            <Code display="inline">{`type="button"`}</Code> inputs are also displayed as buttons.
            All forms buttons are <Code display="inline">{`width: 100%;`}</Code> by default.
          </p>
          <article aria-label="Input buttons example" className="component">
            <input type="submit" />
            <input type="button" value="Input" />
            <footer>
              <Code>{`<input type="submit" />
<input type="button" value="Input" />`}</Code>
            </footer>
          </article>

          <p>Reset inputs have the secondary style by default.</p>
          <article aria-label="Reset input example" className="component">
            <input type="reset" />
            <footer>
              <Code className="small">{`<input type="reset" />`}</Code>
            </footer>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled
          </Heading>
          <p>Buttons come with a disabled style.</p>
          <article aria-label="Disabled buttons example" className="component">
            <div className="grid">
              <button disabled>Disabled</button>
              <button className="secondary" disabled>
                Disabled
              </button>
              <button className="contrast" disabled>
                Disabled
              </button>
            </div>
            <footer>
              <Code>{`<button disabled>Disabled</button>
<button class="secondary" disabled>Disabled</button>
<button class="contrast" disabled>Disabled</button>`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
