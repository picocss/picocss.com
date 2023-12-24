import { useRef, useEffect } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/Heading";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Checkboxes ${titleSuffix}` },
  {
    name: "description",
    content: "The native <input type='checkbox'> with a custom and responsive style.",
  },
];

export default function Checkboxes() {
  const syntaxRef = useRef();
  const horizontalStackingRef = useRef();
  const indeterminateSectionRef = useRef();
  const indeterminateCheckboxRef = useRef();
  const validationStatesRef = useRef();

  useEffect(() => {
    if (!indeterminateCheckboxRef.current) return;
    const checkbox = indeterminateCheckboxRef.current;
    checkbox.indeterminate = true;
  }, []);

  return (
    <>
      {/* Header */}
      <Header
        title="Checkboxes"
        description={
          <>
            The native <Code display="inline">{`<input type="checkbox">`}</Code> with a custom and
            responsive style.
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
            anchor: "horizontal-stacking",
            title: "Horizontal stacking",
            ref: horizontalStackingRef,
          },
          {
            anchor: "indeterminate",
            title: "Indeterminate",
            ref: indeterminateSectionRef,
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
          <article aria-label="Checkboxes example" className="component">
            <fieldset>
              <legend>Language preferences:</legend>
              <label>
                <input type="checkbox" name="english" defaultChecked={true} />
                English
              </label>
              <label>
                <input type="checkbox" name="french" defaultChecked={true} />
                French
              </label>
              <label>
                <input type="checkbox" name="mandarin" />
                Mandarin
              </label>
              <label>
                <input type="checkbox" name="thai" />
                Thai
              </label>
              <label aria-disabled="true">
                <input type="checkbox" name="dothraki" disabled />
                Dothraki
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <legend>Language preferences:</legend>
  <label>
    <input type="checkbox" name="english" checked />
    English
  </label>
  <label>
    <input type="checkbox" name="french" checked />
    French
  </label>
  <label>
    <input type="checkbox" name="mandarin" />
    Mandarin
  </label>
  <label>
    <input type="checkbox" name="thai" />
    Thai
  </label>
  <label aria-disabled="true">
    <input type="checkbox" name="dothraki" disabled />
    Dothraki
  </label>
</fieldset>`}</Code>
          </article>
        </section>

        <section ref={horizontalStackingRef}>
          <Heading level={2} anchor="horizontal-stacking">
            Horizontal stacking
          </Heading>
          <article aria-label="Horizontal stacking example" className="component">
            <fieldset>
              <legend>Language preferences:</legend>
              <input type="checkbox" id="hindi" name="hindi" defaultChecked={true} />
              <label htmlFor="hindi">Hindi</label>
              <input type="checkbox" id="swahili" name="swahili" />
              <label htmlFor="swahili">Swahili</label>
              <input type="checkbox" id="navi " name="navi" disabled />
              <label htmlFor="navi" aria-disabled="true">
                Na'vi
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <legend>Language preferences:</legend>
  <input type="checkbox" id="hindi" name="hindi" checked />
  <label htmlFor="hindi">Hindi</label>
  <input type="checkbox" id="swahili" name="swahili" />
  <label htmlFor="swahili">Swahili</label>
  <input type="checkbox" id="navi " name="navi" disabled />
  <label htmlFor="navi" aria-disabled="true">Na'vi</label>
</fieldset>`}</Code>
          </article>
        </section>

        <section ref={indeterminateSectionRef}>
          <Heading level={2} anchor="indeterminate">
            Indeterminate
          </Heading>
          <p>
            You can change a checkbox to an indeterminate state by setting the{" "}
            <Code display="inline">indeterminate</Code> property to{" "}
            <Code display="inline">true</Code>.
          </p>
          <article aria-label="Indeterminate checkbox example" className="component">
            <label>
              <input type="checkbox" name="indeterminate" ref={indeterminateCheckboxRef} />
              Indeterminate
            </label>
            <Code as="footer">{`<label>
  <input type="checkbox" id="indeterminate" name="indeterminate" />
  Indeterminate
</label>

<script>
  const checkbox = document.querySelector('#indeterminate');
  checkbox.indeterminate = true;
</script>

`}</Code>
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
            <label>
              <input type="checkbox" name="valid" aria-invalid={false} />
              Valid
            </label>
            <label>
              <input type="checkbox" name="invalid" aria-invalid={true} />
              Invalid
            </label>
            <Code as="footer">{`<label>
  <input type="checkbox" name="valid" aria-invalid="false" />
  Valid
</label>

<label>
  <input type="checkbox" name="invalid" aria-invalid="true" />
  Invalid
</label>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
