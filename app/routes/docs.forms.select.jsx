import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Select ${titleSuffix}` },
  {
    name: "description",
    content: "The native <select> is styled like the input for consistency.",
  },
];

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
            <select
              name="favorite-cuisine"
              aria-label=" Select your favorite cuisine..."
              defaultValue=""
              required
            >
              <option disabled value="">
                Select your favorite cuisine...
              </option>
              <option>Italian</option>
              <option>Japanese</option>
              <option>Indian</option>
              <option>Thai</option>
              <option>French</option>
            </select>
            <Code as="footer">{`<select name="favorite-cuisine" aria-label="Select your favorite cuisine..." required>
  <option selected disabled value="">
    Select your favorite cuisine...
  </option>
  <option>Italian</option>
  <option>Japanese</option>
  <option>Indian</option>
  <option>Thai</option>
  <option>French</option>
</select>`}</Code>
          </article>
        </section>

        <section ref={multipleRef}>
          <Heading level={2} anchor="multiple">
            Select multiple
          </Heading>
          <article aria-label="Disabled and read-only example" className="component">
            <select
              aria-label="Select your favorite snacks..."
              defaultValue={["Fruits", "Nuts"]}
              multiple
              size="6"
            >
              <option disabled>Select your favorite snacks...</option>
              <option>Cheese</option>
              <option>Fruits</option>
              <option>Nuts</option>
              <option>Chocolate</option>
              <option>Crackers</option>
            </select>
            <Code as="footer">{`<select aria-label="Select your favorite snacks..." multiple size="6">
  <option disabled>
    Select your favorite snacks...
  </option>
  <option>Cheese</option>
  <option selected>Fruits</option>
  <option selected>Nuts</option>
  <option>Chocolate</option>
  <option>Crackers</option>
</select>`}</Code>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled select
          </Heading>
          <article aria-label="Disabled example" className="component">
            <select name="meal-type" aria-label="Select a meal type..." disabled>
              <option>Select a meal type...</option>
            </select>
            <Code as="footer">{`<select name="meal-type" aria-label="Select a meal type..." disabled>
  <option>Select a meal type...</option>
  <option>...</option>
</select>`}</Code>
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
            <select
              name="pizza-topping"
              aria-label="Select your favorite pizza topping..."
              defaultValue="Pepperoni"
              aria-invalid="false"
            >
              <option disabled>Select your favorite pizza topping...</option>
              <option>Pepperoni</option>
              <option>Mushrooms</option>
              <option>Onions</option>
              <option>Green Peppers</option>
              <option>Olives</option>
            </select>
            <small>Great choice!</small>
            <select
              name="pizza-topping"
              aria-label="Select your favorite pizza topping..."
              defaultValue=""
              required
              aria-invalid="true"
            >
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
            <Code as="footer">{`<select aria-invalid="false">
  ...
</select>
<small>Great choice!</small>

<select required aria-invalid="true">
  ...
</select>
<small>
  Please select your favorite pizza topping!
</small>`}</Code>
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
              <details className="dropdown">
                <summary>Select your favorite French dessert...</summary>
                <ul>
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

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.forms.select.jsx" />
      </Content>
    </>
  );
}
