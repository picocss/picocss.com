import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";

import Link from "~/components/Link";
import Code from "~/components/Code";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Select ${titleSuffix}`,
  description: "Selects are styled like inputs.",
});

export default function Select() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      {/* Header */}
      <Header title="Select" description="Selects are styled like inputs." />

      {/* Content */}
      <Content>
        <article aria-label="Select example" className="component">
          <label htmlFor="fruit">Fruit</label>
          <select id="fruit" defaultValue="" required>
            <option disabled value="">
              Select a fruit…
            </option>
            <option>Banana</option>
            <option>Watermelon</option>
            <option>Apple</option>
            <option>Orange</option>
            <option>Mango</option>
          </select>
          <footer>
            <Code>{`<label for="fruit">Fruit</label>
<select id="fruit" required>
  <option selected disabled value="">Select a fruit…</option>
  <option>Banana</option>
  <option>Watermelon</option>
  <option>Apple</option>
  <option>Orange</option>
  <option>Mango</option>
</select>`}</Code>
          </footer>
        </article>

        <p>Multiples</p>
        <article aria-label="Disabled and read-only example" className="component">
          <select defaultValue={["Banana", "Watermelon"]} multiple size="5">
            <option disabled>Select a fruit…</option>
            <option>Banana</option>
            <option>Watermelon</option>
            <option>Apple</option>
            <option>Orange</option>
            <option>Mango</option>
          </select>
          <footer>
            <Code>{`<select multiple size="5">
  <option disabled>Select a fruit…</option>
  <option selected>Banana</option>
  <option selected>Watermelon</option>
  <option>Apple</option>
  <option>Orange</option>
  <option>Mango</option>
</select>`}</Code>
          </footer>
        </article>

        <p>Selects can be disabled or read-only.</p>
        <article aria-label="Disabled and read-only example" className="component">
          <select defaultValue="Select a fruit…" disabled>
            <option disabled>Select a fruit…</option>
            <option>Banana</option>
            <option>Watermelon</option>
            <option>Apple</option>
            <option>Orange</option>
            <option>Mango</option>
          </select>
          <footer>
            <Code>{`<input type="text" placeholder="Disabled" aria-label="Disabled input" disabled>
<input type="text" value="Read-only" aria-label="Read-only input" readonly>`}</Code>
          </footer>
        </article>

        <p>
          Validation states are provided with <Code display="inline">aria-invalid</Code>.
        </p>
        <article aria-label="Select example" className="component">
          <select defaultValue="Banana" aria-invalid="false">
            <option disabled>Select a fruit…</option>
            <option>Banana</option>
            <option>Watermelon</option>
            <option>Apple</option>
            <option>Orange</option>
            <option>Mango</option>
          </select>
          <small>Looks good!</small>
          <select defaultValue="Select a fruit…" aria-invalid="true">
            <option disabled>Select a fruit…</option>
            <option>Banana</option>
            <option>Watermelon</option>
            <option>Apple</option>
            <option>Orange</option>
            <option>Mango</option>
          </select>
          <small>Please select a fruit!</small>
          <footer>
            <Code>{`<select aria-invalid="false">
  …
</select>
<small>Looks good!</small>

<select aria-invalid="true">
  …
</select>
<small>Please select a fruit!</small>`}</Code>
          </footer>
        </article>

        <p>
          The dropdown component allows you to build a custom select with the same style as the
          native select. See <Link to="/docs/dropdown">Dropdown</Link>.
        </p>
        <article aria-label="Dropdowns as selects" className="component">
          <div className="grid">
            <details role="list">
              <summary aria-haspopup="listbox">Dropdown</summary>
              <ul role="listbox">
                <li>
                  <a href="#action" onClick={preventDefault}>
                    Action
                  </a>
                </li>
                <li>
                  <a href="#action" onClick={preventDefault}>
                    Another action
                  </a>
                </li>
                <li>
                  <a href="#action" onClick={preventDefault}>
                    Something else
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <footer>
            <Code>{`<details role="list">
  <summary aria-haspopup="listbox">Dropdown</summary>
  <ul role="listbox">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else</a></li>
  </ul>
</details>`}</Code>
          </footer>
        </article>
      </Content>
    </>
  );
}
