import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";
import TableOfContents from "~/components/docs/TableOfContents";
import Heading from "~/components/Heading";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Button ${titleSuffix}`,
  description: "Buttons are using the native <button> tag, without .classes for the default style.",
});

export default function Button() {
  const syntaxRef = useRef();
  const variantsRef = useRef();
  const formButtonsRef = useRef();
  const disabledRef = useRef();
  const roleButtonRef = useRef();
  const usageWithGroupRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Button"
        description={
          <>
            Buttons are using the native <Code display="inline">{`<button>`}</Code> tag, without{" "}
            <Code display="inline">.classes</Code>. for the default&nbsp;style.
          </>
        }
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Syntax",
            ref: syntaxRef,
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
          {
            anchor: "role-button",
            title: "Role button",
            ref: roleButtonRef,
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
        <section aria-label="Overview" ref={syntaxRef}>
          <article aria-label="Button example" className="component">
            <button>Button</button>
            <Code as="footer" className="small">{`<button>Button</button>`}</Code>
          </article>
        </section>

        <section ref={variantsRef}>
          <Heading level={2} anchor="variants">
            Variants
          </Heading>
          <p>
            Buttons come with <Code display="inline">.secondary</Code> and{" "}
            <Code display="inline">.contrast</Code> styles (not available in the{" "}
            <Link to="/docs/classless">class-less version</Link>).
          </p>
          <article aria-label="Button colors example" className="component">
            <div className="grid">
              <button className="secondary">Secondary</button>
              <button className="contrast">Contrast</button>
            </div>
            <Code as="footer">{`<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
`}</Code>
          </article>

          <p>
            They also come with a classic outline style (not available in the{" "}
            <Link to="/docs/classless">class-less version</Link>).
          </p>
          <article aria-label="Buttons outline example" className="component">
            <div className="grid">
              <button className="outline">Primary</button>
              <button className="outline secondary">Secondary</button>
              <button className="outline contrast">Contrast</button>
            </div>
            <Code as="footer">{`<button class="outline">Primary</button>
<button class="outline secondary">Secondary</button>
<button class="outline contrast">Contrast</button>`}</Code>
          </article>
        </section>

        <section ref={formButtonsRef}>
          <Heading level={2} anchor="form-buttons">
            Form buttons
          </Heading>
          <p>
            <Code display="inline">type="submit"</Code> and{" "}
            <Code display="inline">type="button"</Code> inputs are also displayed as buttons. All
            form buttons are <Code display="inline">width: 100%;</Code> by default, to match with
            the other form elements.
          </p>
          <article aria-label="Input buttons example" className="component">
            <input type="submit" />
            <input type="button" value="Input" />
            <Code as="footer">{`<input type="submit" />
<input type="button" value="Input" />`}</Code>
          </article>

          <p>Reset inputs have the secondary style by default.</p>
          <article aria-label="Reset input example" className="component">
            <input type="reset" />
            <Code as="footer" className="small">{`<input type="reset" />`}</Code>
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
            <Code as="footer">{`<button disabled>Disabled</button>
<button class="secondary" disabled>Disabled</button>
<button class="contrast" disabled>Disabled</button>`}</Code>
          </article>
        </section>

        <section ref={roleButtonRef}>
          <Heading level={2} anchor="role-button">
            Role button
          </Heading>
          <p>
            Clickable elements with <Code display="inline">role="button"</Code> are rendered as
            buttons.
          </p>
          <article aria-label="Role button example" className="component">
            <div role="button" tabIndex="0">
              Div as button
            </div>
            <Code
              as="footer"
              className="small"
            >{`<div role="button" tabindex="0">Div as a button</div>`}</Code>
          </article>
        </section>

        <section ref={usageWithGroupRef}>
          <Heading level={2} anchor="usage-with-group">
            Usage with group
          </Heading>

          <p>
            You can use <Code display="inline">role="group"</Code> with buttons. See{" "}
            <Link to="/docs/group">Group</Link>.
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
        </section>
      </Content>
    </>
  );
}
