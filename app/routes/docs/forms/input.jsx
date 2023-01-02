import metaData from "~/data/meta";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Input ${titleSuffix}`,
  description: "All input types are consistently styled and come with validation states.",
});

export default function Accordions() {
  return (
    <>
      <hgroup>
        <h1>Input</h1>
        <h2>All input types are consistently styled and come with validation states.</h2>
      </hgroup>

      <article aria-label="Inputs example" className="component">
        <input type="text" placeholder="Text" aria-label="Text" />
        <input type="email" placeholder="Email" aria-label="Email" />
        <input type="number" placeholder="Number" aria-label="Number" />
        <input type="password" placeholder="Password" aria-label="Password" />
        <input type="tel" placeholder="Tel" aria-label="Tel" />
        <input type="url" placeholder="Url" aria-label="Url" />
        <footer>
          <Code>{`<input type="text" placeholder="Text" aria-label="Text">
<input type="email" placeholder="Email" aria-label="Email">
<input type="number" placeholder="Number" aria-label="Number">
<input type="password" placeholder="Password" aria-label="Password">
<input type="tel" placeholder="Tel" aria-label="Tel">
<input type="url" placeholder="Url" aria-label="Url">`}</Code>
        </footer>
      </article>

      <p>Datetime inputs come with an icon.</p>
      <article aria-label="Datetime inputs example" className="component">
        <input type="date" aria-label="Date" />
        <input type="datetime-local" aria-label="Datetime local" />
        <input type="month" aria-label="Month" />
        <input type="week" aria-label="Week" />
        <input type="time" aria-label="Time" />
        <footer>
          <Code>{`<input type="date" aria-label="Date">
<input type="datetime-local" aria-label="Datetime local">
<input type="month" aria-label="Month">
<input type="week" aria-label="Week">
<input type="time" aria-label="Time">`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">type="search"</Code> comes with a distinctive style.
      </p>
      <article aria-label="Search input example" className="component">
        <input type="search" placeholder="Search" aria-label="Search" />
        <footer>
          <Code>{`<input type="search" placeholder="Search" aria-label="Search">`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">type="color"</Code> is also consistent with the other input types.
      </p>
      <article aria-label="Color input example" className="component">
        <input type="color" defaultValue="#ff9500" aria-label="Color picker" />
        <footer>
          <Code>{`<input type="color" value="#ff9500" aria-label="Color picker">`}</Code>
        </footer>
      </article>

      <p>Inputs can be disabled or read-only.</p>
      <article aria-label="Disabled and read-only example" className="component">
        <input type="text" placeholder="Disabled" aria-label="Disabled input" disabled />
        <input type="text" defaultValue="Read-only" aria-label="Read-only input" readOnly />
        <footer>
          <Code>{`<input type="text" placeholder="Disabled" aria-label="Disabled input" disabled>
<input type="text" value="Read-only" aria-label="Read-only input" readonly>`}</Code>
        </footer>
      </article>

      <p>
        Validation states are provided with <Code display="inline">aria-invalid</Code>.
      </p>
      <article aria-label="Validation states example" className="component">
        <input
          type="text"
          defaultValue="Valid"
          placeholder="Valid"
          aria-label="Valid input"
          aria-invalid="false"
        />
        <input
          type="text"
          defaultValue="Invalid"
          placeholder="Invalid"
          aria-label="Invalid input"
          aria-invalid="true"
        />
        <footer>
          <Code>{`<input type="text" value="Valid" aria-label="Valid input" aria-invalid="false">
<input type="text" value="Invalid" aria-label="Invalid input" aria-invalid="true">`}</Code>
        </footer>
      </article>

      <p>
        Helper texts, defined with <Code display="inline">{`<small>`}</Code> below the form element,
        inherit the validation state color.
      </p>
      <article aria-label="Validation states example" className="component">
        <input
          type="text"
          defaultValue="Valid"
          placeholder="Valid"
          aria-label="Valid input"
          aria-invalid="false"
          aria-describedby="valid-helper"
        />
        <small id="valid-helper">Looks good!</small>
        <input
          type="text"
          defaultValue="Invalid"
          placeholder="Invalid"
          aria-label="Invalid input"
          aria-invalid="true"
          aria-describedby="invalid-helper"
        />
        <small id="invalid-helper">Please provide a valid value!</small>
        <footer>
          <Code>{`<input
  type="text"
  value="Valid"
  aria-label="Valid input"
  aria-invalid="false"
  aria-describedby="valid-helper"
>
<small id="valid-helper">Looks good!</small>

<input
  type="text"
  value="Invalid"
  aria-label="Invalid input"
  aria-invalid="true"
  aria-describedby="invalid-helper"
>
<small id="invalid-helper">Please provide a valid value!</small>`}</Code>
        </footer>
      </article>
    </>
  );
}
