import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Textarea ${titleSuffix}` },
  {
    name: "description",
    content: "The native <textarea> is styled like the input for consistency.",
  },
];

export default function Textarea() {
  const syntaxRef = useRef();
  const disabledRef = useRef();
  const readonlyRef = useRef();
  const validationStatesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Textarea"
        description={
          <>
            The native <Code display="inline">{`<textarea>`}</Code> is styled like the input for
            consistency.
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
            anchor: "disabled",
            title: "Disabled",
            ref: disabledRef,
          },
          {
            anchor: "readonly",
            title: "Readonly",
            ref: readonlyRef,
          },
          {
            anchor: "validation-states",
            title: "Validation states",
            ref: validationStatesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Textarea example" className="component">
            <textarea
              name="bio"
              placeholder="Write a professional short bio..."
              aria-label="Professional short bio"
            />
            <Code as="footer">{`<textarea
  name="bio"
  placeholder="Write a professional short bio..."
  aria-label="Professional short bio"
>
</textarea>`}</Code>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled textarea
          </Heading>
          <article aria-label="Disabled example" className="component">
            <textarea
              name="disabled"
              defaultValue="Disabled"
              aria-label="Disabled textarea"
              disabled
            />
            <Code as="footer">{`<textarea name="disabled" disabled>
  Disabled
</textarea>`}</Code>
          </article>
        </section>

        <section ref={readonlyRef}>
          <Heading level={2} anchor="readonly">
            Read-only textarea
          </Heading>
          <article aria-label="Disabled example" className="component">
            <textarea
              name="read-only"
              defaultValue="Read-only"
              aria-label="Read-only textarea"
              readOnly
            />
            <Code as="footer">{`<textarea name="read-only" readonly>
  Read-only
</textarea>`}</Code>
          </article>
        </section>

        <section ref={validationStatesRef}>
          <Heading level={2} anchor="validation-states">
            Validation states
          </Heading>
          <p>
            Validation states are provided with <code>aria-invalid</code>.
          </p>
          <article aria-label="Validation states example" className="component">
            <textarea name="valid" defaultValue="Valid" placeholder="Valid" aria-invalid="false" />
            <textarea
              name="invalid"
              defaultValue="Invalid"
              placeholder="Invalid"
              aria-invalid="true"
            />
            <Code as="footer">{`<textarea name="valid" aria-invalid="false">
  Valid
</textarea>

<textarea name="invalid" aria-invalid="true">
  Invalid
</textarea> `}</Code>
          </article>

          <p>
            Helper texts, defined with <Code display="inline">{`<small>`}</Code> below the textarea,
            inherit the validation state color.
          </p>
          <article aria-label="Validation states example" className="component">
            <textarea
              name="valid"
              defaultValue="Valid"
              placeholder="Valid"
              aria-invalid="false"
              aria-describedby="valid-helper"
            />
            <small id="valid-helper">Looks good!</small>
            <textarea
              name="invalid"
              defaultValue="Invalid"
              placeholder="Invalid"
              aria-invalid="true"
              aria-describedby="invalid-helper"
            />
            <small id="invalid-helper">Please provide a valid value!</small>
            <Code as="footer">{`<textarea
  name="valid"
  aria-invalid="false"
  aria-describedby="valid-helper"
>
  Valid
</textarea>
<small id="valid-helper">Looks good!</small>

<textarea
  name="invalid"
  aria-invalid="true"
  aria-describedby="invalid-helper"
>
  Invalid
</textarea>
<small id="invalid-helper">
  Please provide a valid value!
</small>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.forms.textarea.jsx" />
      </Content>
    </>
  );
}
