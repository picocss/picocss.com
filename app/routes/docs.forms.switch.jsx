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
                <input name="terms" type="checkbox" role="switch" />I agree to the Terms
              </label>
              <label>
                <input name="opt-in" type="checkbox" role="switch" defaultChecked={true} />I want to
                receive updates
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input name="terms" type="checkbox" role="switch" />
    I agree to the Terms
  </label>
  <label>
    <input name="opt-in" type="checkbox" role="switch" checked />
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
                <input name="publish" type="checkbox" role="switch" disabled />
                Publish on my profile
              </label>
              <label aria-disabled="true">
                <input
                  name="change-password"
                  type="checkbox"
                  role="switch"
                  defaultChecked={true}
                  disabled
                />
                Change my password at next login
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input name="publish" type="checkbox" role="switch" disabled />
    Publish on my profile
  </label>
  <label>
    <input name="change-password" type="checkbox" role="switch" checked disabled />
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
                <input name="2fa" type="checkbox" role="switch" aria-invalid="false" />
                Enable two-factor authentication
              </label>
              <label>
                <input name="subscription" type="checkbox" role="switch" aria-invalid="true" />
                Automatic subscription renewal
              </label>
            </fieldset>
            <Code as="footer">{`<fieldset>
  <label>
    <input name="2fa" type="checkbox" role="switch" aria-invalid="false" />
    Enable two-factor authentication
  </label>
  <label>
    <input name="subscription" type="checkbox" role="switch" aria-invalid="true" />
    Automatic subscription renewal
  </label>
</fieldset>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.forms.switch.jsx" />
      </Content>
    </>
  );
}
