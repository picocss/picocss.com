import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Radios ${titleSuffix}` },
  {
    name: "description",
    content: "The native <input type='radio'> with a custom and responsive style.",
  },
];

export default function Radios() {
  const syntaxRef = useRef();
  const horizontalStackingRef = useRef();
  const validationStatesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Radios"
        description={
          <>
            The native <Code display="inline">{`<input type="radio">`}</Code> with a custom and
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
            anchor: "validation-states",
            title: "Validation states",
            ref: validationStatesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Radios example" className="component">
            <fieldset>
              <legend>Language preference:</legend>
              <label>
                <input type="radio" name="language" defaultChecked={true} />
                English
              </label>
              <label>
                <input type="radio" name="language" />
                French
              </label>
              <label>
                <input type="radio" name="language" />
                Mandarin
              </label>
              <label>
                <input type="radio" name="language" />
                Thai
              </label>
              <label aria-disabled="true">
                <input type="radio" name="language" disabled />
                Dothraki
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <legend>Language preference:</legend>
  <label>
    <input type="radio" name="language" checked />
    English
  </label>
  <label>
    <input type="radio" name="language" />
    French
  </label>
  <label>
    <input type="radio" name="language" />
    Mandarin
  </label>
  <label>
    <input type="radio" name="language" />
    Thai
  </label>
  <label aria-disabled="true">
    <input type="radio" name="language" disabled />
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
              <legend>Second language:</legend>
              <input type="radio" id="hindi" name="second-language" defaultChecked={true} />
              <label htmlFor="hindi">Hindi</label>
              <input type="radio" id="swahili" name="second-language" />
              <label htmlFor="swahili">Swahili</label>
              <input type="radio" id="navi " name="second-language" disabled />
              <label htmlFor="navi" aria-disabled="true">
                Na'vi
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <legend>Second language:</legend>
  <input type="radio" id="hindi" name="second-language" checked />
  <label htmlFor="hindi">Hindi</label>
  <input type="radio" id="swahili" name="second-language" />
  <label htmlFor="swahili">Swahili</label>
  <input type="radio" id="navi " name="second-language" disabled />
  <label htmlFor="navi" aria-disabled="true">Na'vi</label>
</fieldset>`}</Code>
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
            <fieldset>
              <label>
                {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                <input type="radio" name="validation-states" aria-invalid={false} />
                Valid
              </label>
              <label>
                {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                <input type="radio" name="validation-states" aria-invalid={true} />
                Invalid
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input type="radio" name="validation-states" aria-invalid="false" />
    Valid
  </label>

  <label>
    <input type="radio" name="validation-states" aria-invalid="true" />
    Invalid
  </label>
</fieldset>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
