import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/Heading";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Select ${titleSuffix}`,
  description: "The native <select> is styled like the input for consistency.",
});

export default function Select() {
  const syntaxRef = useRef();
  const multipleRef = useRef();
  const disabledRef = useRef();
  const validationStatesRef = useRef();
  const dropdownRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Select"
        description={
          <>
            The native <Code display="inline">{`<select>`}</Code> is styled like the input for
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
            anchor: "multiple",
            title: "Multiple",
            ref: multipleRef,
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
          {
            anchor: "dropdown",
            title: "Dropdown",
            ref: dropdownRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Select example" className="component">
            <select id="favorite-cuisine" defaultValue="" required>
              <option disabled value="">
                Select your favorite cuisine...
              </option>
              <option>Italian</option>
              <option>Japanese</option>
              <option>Indian</option>
              <option>Thai</option>
              <option>French</option>
            </select>

            <footer>
              <Code>{`<select required>
  <option selected disabled value="">
    Select your favorite cuisine...
  </option>
  <option>Italian</option>
  <option>Japanese</option>
  <option>Indian</option>
  <option>Thai</option>
  <option>French</option>
</select>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={multipleRef}>
          <Heading level={2} anchor="multiple">
            Select multiple
          </Heading>
          <article aria-label="Disabled and read-only example" className="component">
            <select defaultValue={["Fruits", "Nuts"]} multiple size="6">
              <option disabled>Select your favorite snacks...</option>
              <option>Cheese</option>
              <option>Fruits</option>
              <option>Nuts</option>
              <option>Chocolate</option>
              <option>Crackers</option>
            </select>
            <footer>
              <Code>{`<select multiple size="6">
  <option disabled>
    Select your favorite snacks...
  </option>
  <option>Cheese</option>
  <option selected>Fruits</option>
  <option selected>Nuts</option>
  <option>Chocolate</option>
  <option>Crackers</option>
</select>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled select
          </Heading>
          <article aria-label="Disabled example" className="component">
            <select disabled>
              <option>Select a meal type...</option>
            </select>
            <footer>
              <Code>{`<select disabled>
  <option>Select a meal type...</option>
  <option>...</option>
</select>`}</Code>
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
            <select defaultValue="Pepperoni" aria-invalid="false">
              <option disabled>Select your favorite pizza topping...</option>
              <option>Pepperoni</option>
              <option>Mushrooms</option>
              <option>Onions</option>
              <option>Green Peppers</option>
              <option>Olives</option>
            </select>
            <small>Great choice!</small>
            <select defaultValue="" required aria-invalid="true">
              <option disabled value="">
                Select your favorite pizza topping...
              </option>
              <option>Pepperoni</option>
              <option>Mushrooms</option>
              <option>Onions</option>
              <option>Green Peppers</option>
              <option>Olives</option>
            </select>
            <small>Please select your favorite pizza topping!</small>
            <footer>
              <Code>{`<select aria-invalid="false">
  ...
</select>
<small>Great choice!</small>

<select required aria-invalid="true">
  ...
</select>
<small>
  Please select your favorite pizza topping!
</small>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={dropdownRef}>
          <Heading level={2} anchor="dropdown">
            Dropdown
          </Heading>

          <p>
            The dropdown component allows you to build a custom select with the same style as the
            native select. See <Link to="/docs/dropdown">Dropdown</Link>.
          </p>
          <article aria-label="Dropdowns as selects" className="component">
            <div className="grid">
              <details role="list">
                <summary aria-haspopup="listbox">Select your favorite French dessert...</summary>
                <ul role="listbox">
                  <li>
                    <label>
                      <input type="radio" name="french-dessert" value="Crème brûlée" />
                      Crème brûlée
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="french-dessert" value="Macarons" />
                      Macarons
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="french-dessert" value="Tarte tatin" />
                      Tarte tatin
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="french-dessert" value="Éclair" />
                      Éclair
                    </label>
                  </li>
                </ul>
              </details>
            </div>
          </article>
        </section>
      </Content>
    </>
  );
}
