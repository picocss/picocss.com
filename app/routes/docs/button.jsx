import metaData from "~/data/meta";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Button ${titleSuffix}`,
  description: "The essential button in pure HTML, without .classes for the default style.",
});

export default function Buttons() {
  return (
    <>
      <hgroup>
        <h1>Button</h1>
        <h2>
          The essential button in pure HTML, without <Code display="inline">.classes</Code> for the
          default style.
        </h2>
      </hgroup>

      <article aria-label="Button example" className="component">
        <button>Button</button>
        <footer>
          <Code>{`<button>Button</button>`}</Code>
        </footer>
      </article>

      <p>
        Clickable elements with <Code display="inline">role="button"</Code> are rendered as buttons
        and indicate to screen readers that the elements are a button.
      </p>
      <article aria-label="Role button example" className="component">
        <div role="button" tabIndex="0">
          Div as a button
        </div>
        <footer>
          <Code>{`<div role="button" tabindex="0">Div as a button</div>`}</Code>
        </footer>
      </article>

      <p>
        Buttons come with <Code display="inline">.secondary</Code> and{" "}
        <Code display="inline">.contrast</Code> styles (Not available in the{" "}
        <Link to="/docs/classless">class-less version</Link>).
      </p>
      <article aria-label="Button colors example" className="component">
        <div className="grid">
          <button className="secondary">Secondary</button>
          <button className="contrast">Contrast</button>
        </div>
        <footer>
          <Code>{`<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
`}</Code>
        </footer>
      </article>

      <p>
        They also come with a classic outline style (Not available in the{" "}
        <Link to="/docs/classless">class-less version</Link>).
      </p>
      <article aria-label="Buttons outline example" className="component">
        <div className="grid">
          <button className="outline">Primary</button>
          <button className="outline secondary">Secondary</button>
          <button className="outline contrast">Contrast</button>
        </div>
        <footer>
          <Code>{`<button class="outline">Primary</button>
<button class="outline secondary">Secondary</button>
<button class="outline contrast">Contrast</button>`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">{`type="submit"`}</Code> and{" "}
        <Code display="inline">{`type="button"`}</Code> inputs are also displayed as buttons. All
        forms buttons are <Code display="inline">{`width: 100%;`}</Code> by default.
      </p>
      <article aria-label="Input buttons example" className="component">
        <input type="submit" />
        <input type="button" value="Input" />
        <footer>
          <Code>{`<input type="submit" />
<input type="button" value="Input" />`}</Code>
        </footer>
      </article>

      <p>Reset inputs have the secondary style by default.</p>
      <article aria-label="Reset input example" className="component">
        <input type="reset" />
        <footer>
          <Code>{`<input type="reset" />`}</Code>
        </footer>
      </article>

      <p>Buttons come with a disabled style.</p>
      <article aria-label="Disabled buttons example" className="component">
        <div className="grid">
          <button disabled>Disabled</button>
          <button className="secondary" disabled>
            Disabled
          </button>
          <button className="contrast" disabled>
            Disabled
          </button>
        </div>
        <footer>
          <Code>{`<button disabled>Disabled</button>
<button class="secondary" disabled>Disabled</button>
<button class="contrast" disabled>Disabled</button>`}</Code>
        </footer>
      </article>
    </>
  );
}
