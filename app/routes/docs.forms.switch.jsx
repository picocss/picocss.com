import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Switch ${titleSuffix}` },
  {
    name: "description",
    content: "A switch component in pure CSS, using the checkbox syntax.",
  },
];

export default function Switch() {
  const syntaxRef = useRef();
  const disabledRef = useRef();
  const validationStatesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Switch"
        description="A switch component in pure CSS, using the checkbox syntax."
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
            anchor: "validation-states",
            title: "Validation states",
            ref: validationStatesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Switch example" className="component">
            <fieldset>
              <label>
                <input type="checkbox" role="switch" />I agree to the Terms
              </label>
              <label>
                <input type="checkbox" role="switch" defaultChecked={true} />I want to receive
                updates
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input type="checkbox" role="switch" />
    I agree to the Terms
  </label>
  <label>
    <input type="checkbox" role="switch" checked />
    Receive news and offers
  </label>
</fieldset>`}</Code>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled
          </Heading>
          <article aria-label="Disabled switch example" className="component">
            <fieldset>
              <label aria-disabled="true">
                <input type="checkbox" role="switch" disabled />
                Publish on my profile
              </label>
              <label aria-disabled="true">
                <input type="checkbox" role="switch" defaultChecked={true} disabled />
                Change my password at next login
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input type="checkbox" role="switch" disabled />
    Publish on my profile
  </label>
  <label>
    <input type="checkbox" role="switch" checked disabled />
    Change my password at next login
  </label>
</fieldset>`}</Code>
          </article>
        </section>

        <section ref={validationStatesRef}>
          <Heading level={2} anchor="validation-states">
            Validation states
          </Heading>
          <article aria-label="Validation states example" className="component">
            <fieldset>
              <label>
                <input type="checkbox" role="switch" aria-invalid="false" />
                Enable two-factor authentication
              </label>
              <label>
                <input type="checkbox" role="switch" aria-invalid="true" />
                Automatic subscription renewal
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input type="checkbox" role="switch" aria-invalid="false" />
    Enable two-factor authentication
  </label>
  <label>
    <input type="checkbox" role="switch" aria-invalid="true" />
    Automatic subscription renewal
  </label>
</fieldset>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
