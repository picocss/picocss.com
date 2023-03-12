import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/docs/Heading";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Textarea ${titleSuffix}`,
  description: "The native <textarea> is styled like the input for consistency.",
});

export default function Input() {
  const exampleRef = useRef();
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
            title: "Examples",
            ref: exampleRef,
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
        <section ref={exampleRef}>
          <article aria-label="Textarea example" className="component">
            <textarea
              placeholder="Write a professional short bio..."
              aria-label="Professional short bio"
            />
            <footer>
              <Code>{`<textarea
  placeholder="Write a professional short bio..."
  aria-label="Professional short bio"
>
</textarea>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled textarea
          </Heading>
          <article aria-label="Disabled example" className="component">
            <textarea defaultValue="Disabled" disabled />
            <footer>
              <Code>{`<textarea disabled>
  Disabled
</textarea>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={readonlyRef}>
          <Heading level={2} anchor="readonly">
            Read-only textarea
          </Heading>
          <article aria-label="Disabled example" className="component">
            <textarea defaultValue="Read-only" aria-label="Read-only textarea" readOnly />
            <footer>
              <Code>{`<textarea readonly>
  Read-only
</textarea>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={validationStatesRef}>
          <Heading level={2} anchor="validation-states">
            Validation states
          </Heading>
          <p>
            Validation states are provided with <Code display="inline">aria-invalid</Code>.
          </p>
          <article aria-label="Validation states example" className="component">
            <textarea defaultValue="Valid" placeholder="Valid" aria-invalid="false" />
            <textarea defaultValue="Invalid" placeholder="Invalid" aria-invalid="true" />
            <footer>
              <Code>{`<textarea aria-invalid="false">
  Valid
</textarea>

<textarea aria-invalid="true">
  Invalid
</textarea> `}</Code>
            </footer>
          </article>

          <p>
            Helper texts, defined with <Code display="inline">{`<small>`}</Code> below the textarea,
            inherit the validation state color.
          </p>
          <article aria-label="Validation states example" className="component">
            <textarea
              defaultValue="Valid"
              placeholder="Valid"
              aria-invalid="false"
              aria-describedby="valid-helper"
            />
            <small id="valid-helper">Looks good!</small>
            <textarea
              defaultValue="Invalid"
              placeholder="Invalid"
              aria-invalid="true"
              aria-describedby="invalid-helper"
            />
            <small id="invalid-helper">Please provide a valid value!</small>
            <footer>
              <Code>{`<textarea
  aria-invalid="false"
  aria-describedby="valid-helper"
>
  Valid
</textarea>
<small id="valid-helper">Looks good!</small>

<textarea
  aria-invalid="true"
  aria-describedby="invalid-helper"
>
  Invalid
</textarea>
<small id="invalid-helper">
  Please provide a valid value!
</small>`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
