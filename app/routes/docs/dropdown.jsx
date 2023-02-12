import metaData from "~/data/meta";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Dropdown ${titleSuffix}`,
  description: "Dropdown menus and custom selects without JavaScript.",
});

export function Item({ children, className, ...props }) {
  const preventDefault = (e) => e.preventDefault();
  return (
    <a
      href="#link"
      onClick={preventDefault}
      {...(className && { className: className })}
      {...props}
    >
      {children}
    </a>
  );
}

export function DropdownItems({ className, dir, id }) {
  return (
    <ul role="listbox" dir={dir} id={id}>
      <li>
        <Item className={className}>Action</Item>
      </li>
      <li>
        <Item className={className}>Another action</Item>
      </li>
      <li>
        <Item className={className}>Something else</Item>
      </li>
    </ul>
  );
}

export default function Dropdown() {
  return (
    <>
      <hgroup>
        <h1>Dropdown</h1>
        <h2>Dropdown menus and custom selects without JavaScript.</h2>
      </hgroup>

      <p>
        Dropdowns are built with <Code display="inline">{`<details role="list">`}</Code> as a
        wrapper and <Code display="inline">{`<summary>`}</Code> and{" "}
        <Code display="inline">{`<ul>`}</Code> as direct childrens.
      </p>

      <p>
        Unless they are in a <Link to="/docs/nav">Nav</Link>, dropdowns are{" "}
        <Code display="inline">{`width: 100%;`}</Code> by default.
      </p>

      <h2>Dropdowns as selects</h2>
      <p>
        For style consistency with the form elements, dropdowns are styled like a select by default.
      </p>
      <article aria-label="Dropdowns as selects" className="component">
        <div className="grid">
          <details role="list">
            <summary aria-haspopup="listbox">Dropdown</summary>
            <DropdownItems />
          </details>
          <select required="" defaultValue={"disabled"}>
            <option value="disabled" disabled="disabled">
              Select
            </option>
            <option>Option</option>
            <option>Another option</option>
            <option>Something else</option>
          </select>
        </div>
        <footer>
          <Code>{`<!-- Dropdown -->
<details role="list">
  <summary aria-haspopup="listbox">Dropdown</summary>
  <ul role="listbox">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else</a></li>
  </ul>
</details>

<!-- Select -->
<select>
  <option value="" disabled selected>Select</option>
  <option>Option</option>
  <option>Another option</option>
  <option>Something else</option>
</select>`}</Code>
        </footer>
      </article>

      <p>
        Dropdowns can be used as custom selects with{" "}
        <Code display="inline">{`<input type="radio">`}</Code> or{" "}
        <Code display="inline">{`<input type="checkbox">`}</Code>.
      </p>
      <article aria-label="Dropdowns with radio buttons or checkboxes" className="component">
        <details role="list">
          <summary aria-haspopup="listbox">Select a single element</summary>
          <ul role="listbox">
            <li>
              <label>
                <input type="radio" name="size" value="Small" />
                Small
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="size" value="Medium" />
                Medium
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="size" value="Large" />
                Large
              </label>
            </li>
          </ul>
        </details>
        <details role="list">
          <summary aria-haspopup="listbox">Select multiple elements</summary>
          <ul role="listbox">
            <li>
              <label>
                <input type="checkbox" />
                Banana
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                Watermelon
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                Apple
              </label>
            </li>
          </ul>
        </details>
        <footer>
          <Code language="html">{`<!-- Radios -->
<details role="list">
<summary aria-haspopup="listbox">Select a single element</summary>
  <ul role="listbox">
    <li>
      <label>
        <input type="radio" name="size" value="Small">
        Small
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="size" value="Medium">
        Medium
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="size" value="Large">
        Large
      </label>
    </li>
  </ul>
</details>

<!-- Checkboxes -->
<details role="list">
<summary aria-haspopup="listbox">Select multiple elements</summary>
  <ul role="listbox">
    <li>
      <label>
        <input type="checkbox" value="Banana">
        Banana
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" value="Watermelon">
        Watermelon
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" value="Apple">
        Apple
      </label>
    </li>
  </ul>
</details>`}</Code>
        </footer>
      </article>

      <p>
        Pico does not include JavaScript code. You will probably need some JavaScript to interact
        with these custom dropdowns.
      </p>
      <p>
        Just like any form elements, validation states are provided with{" "}
        <Code display="inline">aria-invalid</Code>.
      </p>
      <article aria-label="Dropdowns with validation states" className="component">
        <details role="list">
          <summary aria-haspopup="listbox" aria-invalid="false">
            Valid
          </summary>
          <DropdownItems />
        </details>
        <details role="list">
          <summary aria-haspopup="listbox" aria-invalid="true">
            Invalid
          </summary>
          <DropdownItems />
        </details>
        <footer>
          <Code>{`<details role="list">
  <summary aria-haspopup="listbox" aria-invalid="false">Valid</summary>
  <ul>
    …
  </ul>
</details>

<details role="list">
  <summary aria-haspopup="listbox" aria-invalid="true">Invalid</summary>
  <ul>
    …
  </ul>
</details>`}</Code>
        </footer>
      </article>

      <h2>Dropdowns as buttons</h2>
      <p>
        <Code display="inline">{`<summary role="button">`}</Code> transforms the dropdown into a
        button.
      </p>
      <article aria-label="Dropdowns as buttons" className="component">
        <details role="list">
          <summary aria-haspopup="listbox" role="button">
            Dropdown as a button
          </summary>
          <DropdownItems />
        </details>
        <footer>
          <Code>{`<details role="list">
  <summary aria-haspopup="listbox" role="button">
    Dropdown as a button
  </summary>
  <ul role="listbox">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else</a></li>
    </li>
  </ul>
</details>`}</Code>
        </footer>
      </article>

      <p>
        Like regular buttons, they come with <Code display="inline">.secondary</Code>,{" "}
        <Code display="inline">.contrast</Code>, and <Code display="inline">.outline</Code>.
      </p>
      <article aria-label="Dropdowns as buttons" className="component">
        <details role="list">
          <summary aria-haspopup="listbox" role="button">
            Primary
          </summary>
          <DropdownItems />
        </details>
        <details role="list">
          <summary aria-haspopup="listbox" role="button" className="secondary">
            Secondary
          </summary>
          <DropdownItems />
        </details>
        <details role="list">
          <summary aria-haspopup="listbox" role="button" className="contrast">
            Contrast
          </summary>
          <DropdownItems />
        </details>
        <details role="list">
          <summary aria-haspopup="listbox" role="button" className="outline">
            Primary outline
          </summary>
          <DropdownItems />
        </details>
        <details role="list">
          <summary aria-haspopup="listbox" role="button" className="outline secondary">
            Secondary outline
          </summary>
          <DropdownItems />
        </details>
        <details role="list">
          <summary aria-haspopup="listbox" role="button" className="outline contrast">
            Contrast outline
          </summary>
          <DropdownItems />
        </details>
        <footer>
          <Code>{`<!-- Primary -->
<details role="list">
  <summary aria-haspopup="listbox" role="button">
    Primary
  </summary>
  <ul role="listbox">
    …
  </ul>
</details>

<!-- Secondary -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="secondary">
    Secondary
  </summary>
  <ul role="listbox">
    …
  </ul>
</details>

<!-- Contrast -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="contrast">
    Contrast
  </summary>
  <ul role="listbox">
    …
  </ul>
</details>

<!-- Primary outline -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="outline">
    Primary outline
  </summary>
  <ul role="listbox">
    …
  </ul>
</details>

<!-- Secondary outline -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="outline secondary">
    Secondary outline
  </summary>
  <ul role="listbox">
    …
  </ul>
</details>

<!-- Contrast outline -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="outline contrast">
    Contrast outline
  </summary>
  <ul role="listbox">
    …
  </ul>
</details>
`}</Code>
        </footer>
      </article>

      <h2>Dropdowns inside nav</h2>
      <p>
        You can use dropdowns inside <Link to="docs/nav">Navs</Link>.{" "}
        <Code language="html" display="inline">{`<details role="list">`}</Code> works the same way.
      </p>
      <p>
        To change the alignment of the submenu, just use{" "}
        <Code display="inline">{`<ul dir="rtl">`}</Code>.
      </p>
      <article aria-label="Dropdowns inside nav" className="component">
        <nav>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <li>
              <Item className="secondary">Link</Item>
            </li>
            <li>
              <Item className="secondary">Link</Item>
            </li>
            <li>
              <details role="list">
                <summary aria-haspopup="listbox">Dropdown</summary>
                <DropdownItems dir="rtl" />
              </details>
            </li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  
  <ul>
    <li><a href="#link" class="secondary">Link</a></li>
    <li><a href="#link" class="secondary">Link</a></li>
    <li>
      <details role="list">
        <summary aria-haspopup="listbox">Dropdown</summary>
        <ul role="listbox" dir="rtl">
          <li><a href="#link">Action</a></li>
          <li><a href="#link">Another action</a></li>
          <li><a href="#link">Something else</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>

      <p>Inside a nav, you can also use nested lists.</p>
      <p>Either with a button:</p>
      <article aria-label="Dropdowns inside nav" className="component">
        <nav>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <li>
              <Item>Link</Item>
            </li>
            <li>
              <Item>Link</Item>
            </li>
            <li>
              <button aria-controls="dropdown-button">Dropdown</button>
              <DropdownItems dir="rtl" id="dropdown-button" />
            </li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  
  <ul>
    <li><a href="#link">Link</a></li>
    <li><a href="#link">Link</a></li>
    <li>
      <button aria-controls="dropdown-button">Dropdown</button>
      <ul dir="rtl" id="dropdown-button">
        <li><a href="#link">Action</a></li>
        <li><a href="#link">Another action</a></li>
        <li><a href="#link">Something else</a></li>
      </ul>
    </li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>

      <p>Or with a link:</p>
      <article aria-label="Dropdowns inside nav" className="component">
        <nav>
          <ul>
            <li>
              <strong>Brand</strong>
            </li>
          </ul>
          <ul>
            <li>
              <Item>Link</Item>
            </li>
            <li>
              <Item>Link</Item>
            </li>
            <li>
              <Item aria-controls="dropdown-link">Dropdown</Item>
              <DropdownItems dir="rtl" id="dropdown-link" />
            </li>
          </ul>
        </nav>
        <footer>
          <Code>{`<nav>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  
  <ul>
    <li><a href="#link">Link</a></li>
    <li><a href="#link">Link</a></li>
    <li>
      <a onclick="event.preventDefault()" aria-controls="dropdown-link">
        Dropdown
      </a>
      <ul dir="rtl" id="dropdown-link">
        <li><a href="#link">Action</a></li>
        <li><a href="#link">Another action</a></li>
        <li><a href="#link">Something else</a></li>
      </ul>
    </li>
  </ul>
</nav>`}</Code>
        </footer>
      </article>
    </>
  );
}
