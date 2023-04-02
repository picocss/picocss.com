import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";
import Link from "~/components/Link";
import Heading from "~/components/Heading";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Dropdown ${titleSuffix}`,
  description:
    "Create dropdown menus and custom selects with minimal and semantic HTML, without JavaScript.",
});

const phasesOfMatter = ["Solid", "Liquid", "Gas", "Plasma"];
const accountItems = ["Profile", "Settings", "Security", "Logout"];

export function Item({ children, className, ...props }) {
  const preventDefault = (e) => e.preventDefault();

  return (
    <Link to="#" onClick={preventDefault} {...(className && { className: className })} {...props}>
      {children}
    </Link>
  );
}

export function DropdownItems({ items = phasesOfMatter, dir, id }) {
  return (
    <ul role="listbox" dir={dir} id={id}>
      {items.map((item) => (
        <li key={item}>
          <Item>{item}</Item>
        </li>
      ))}
    </ul>
  );
}

export function SelectItems({ items = phasesOfMatter }) {
  return (
    <>
      {items.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </>
  );
}

export default function Dropdown() {
  const syntaxRef = useRef();
  const checkboxesAndRadiosRef = useRef();
  const buttonVariantsRef = useRef();
  const validationStatesRef = useRef();
  const usageWithNavRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Dropdown"
        description="Create dropdown menus and custom selects with minimal and semantic HTML, without JavaScript."
      />

      {/* Table of contents */}
      <TableOfContents
        data={[
          { anchor: "", title: "Syntax", ref: syntaxRef },
          {
            anchor: "dropdowns-with-checkboxes-and-radios",
            title: "Checkboxes and radios",
            ref: checkboxesAndRadiosRef,
          },
          {
            anchor: "button-variants",
            title: "Button variants",
            ref: buttonVariantsRef,
          },
          {
            anchor: "validation-states",
            title: "Validation states",
            ref: validationStatesRef,
          },
          {
            anchor: "usage-with-nav",
            title: "Usage with nav",
            ref: usageWithNavRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <p>
            Dropdowns are built with <Code display="inline">{`<details role="list">`}</Code> as a
            wrapper and <Code display="inline">{`<summary>`}</Code> and{" "}
            <Code display="inline">{`<ul>`}</Code> as direct childrens. Unless they are in a{" "}
            <Link to="/docs/nav">Nav</Link>, dropdowns are{" "}
            <Code display="inline">{`width: 100%;`}</Code> by default.
          </p>

          <p>
            For style consistency with the form elements, dropdowns are styled like a select by
            default.
          </p>
          <article aria-label="Dropdowns as selects" className="component">
            <div className="grid">
              <details role="list">
                <summary aria-haspopup="listbox">Dropdown</summary>
                <DropdownItems />
              </details>
              <select defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                <SelectItems />
              </select>
            </div>
            <Code as="footer">{`<!-- Dropdown -->
<details role="list">
  <summary aria-haspopup="listbox">Dropdown</summary>
  <ul role="listbox">
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "    " : "  "}<li><a href="#">${phase}</a></li>${
          phase !== phasesOfMatter[phasesOfMatter.length - 1] ? "\n" : ""
        }`
    )
    .join("")}
  </ul>
</details>

<!-- Select -->
<select required>
  <option selected disabled value="">Select</option>
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "  " : ""}<option>${phase}</option>${
          index !== phasesOfMatter.length - 1 && "\n"
        }`
    )
    .join("")}
</select>`}</Code>
          </article>
        </section>

        <section ref={checkboxesAndRadiosRef}>
          <Heading level={2} anchor="dropdowns-with-checkboxes-and-radios">
            Dropdowns with checkboxes and radios
          </Heading>
          <p>
            Dropdowns can be used as custom selects with{" "}
            <Code display="inline">{`<input type="radio">`}</Code> or{" "}
            <Code display="inline">{`<input type="checkbox">`}</Code>.
          </p>
          <article aria-label="Dropdowns with radio buttons or checkboxes" className="component">
            <details role="list">
              <summary aria-haspopup="listbox">Select a phase of matter...</summary>
              <ul role="listbox">
                {phasesOfMatter.map((phase) => (
                  <li key={phase}>
                    <label>
                      <input type="radio" name="phase" value={phase} />
                      {phase}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
            <details role="list">
              <summary aria-haspopup="listbox">Select phases of matter...</summary>
              <ul role="listbox">
                {phasesOfMatter.map((phase) => (
                  <li key={phase}>
                    <label>
                      <input type="checkbox" name={phase.toLowerCase()} value={phase} />
                      {phase}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
            <Code as="footer" language="html">{`<!-- Radios -->
<details role="list">
  <summary aria-haspopup="listbox">
    Select a phase of matter...
  </summary>
  <ul role="listbox">
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "    " : "  "}<li>
      <label>
        <input type="radio" name="phase" value="${phase.toLowerCase()}" />
        ${phase}
      </label>
    </li>${phase !== phasesOfMatter[phasesOfMatter.length - 1] ? "\n" : ""}`
    )
    .join("")}
  </ul>
</details>

<!-- Checkboxes -->
<details role="list">
  <summary aria-haspopup="listbox">
    Select phases of matter...
  </summary>
  <ul role="listbox">
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "    " : "  "}<li>
      <label>
        <input type="checkbox" name="${phase.toLowerCase()}" />
        ${phase}
      </label>
    </li>${phase !== phasesOfMatter[phasesOfMatter.length - 1] ? "\n" : ""}`
    )
    .join("")}
  </ul>
</details>`}</Code>
          </article>
          <p>
            Pico does not include JavaScript code. You will probably need some JavaScript to
            interact with these custom dropdowns.
          </p>
        </section>

        <section ref={buttonVariantsRef}>
          <Heading level={2} anchor="button-variants">
            Button variants
          </Heading>
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
            <Code as="footer">{`<details role="list">
  <summary aria-haspopup="listbox" role="button">
    Dropdown as a button
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>`}</Code>
          </article>

          <p>
            Like regular buttons, they come with <Code display="inline">.secondary</Code>,{" "}
            <Code display="inline">.contrast</Code>, and <Code display="inline">.outline</Code> (not
            available in the <Link to="/docs/classless">class-less version</Link>).
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
            <Code as="footer">{`<!-- Primary -->
<details role="list">
  <summary aria-haspopup="listbox" role="button">
    Primary
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>

<!-- Secondary -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="secondary">
    Secondary
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>

<!-- Contrast -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="contrast">
    Contrast
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>

<!-- Primary outline -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="outline">
    Primary outline
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>

<!-- Secondary outline -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="outline secondary">
    Secondary outline
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>

<!-- Contrast outline -->
<details role="list">
  <summary aria-haspopup="listbox" role="button" class="outline contrast">
    Contrast outline
  </summary>
  <ul role="listbox">
    ...
  </ul>
</details>
`}</Code>
          </article>
        </section>

        <section ref={validationStatesRef}>
          <Heading level={2} anchor="validation-states">
            Validation states
          </Heading>
          <p>
            Just like any form elements, validation states are provided with{" "}
            <Code display="inline">aria-invalid</Code>.
          </p>
          <article aria-label="Dropdowns with validation states" className="component">
            <details role="list">
              <summary aria-haspopup="listbox" aria-invalid="false">
                Valid phase of matter: Solid
              </summary>
              <DropdownItems />
            </details>
            <details role="list">
              <summary aria-haspopup="listbox" aria-invalid="true">
                Debated classification: Plasma
              </summary>
              <DropdownItems />
            </details>
            <Code as="footer">{`<details role="list">
  <summary aria-haspopup="listbox" aria-invalid="false">
    Valid phase of matter: Solid
  </summary>
  <ul>
    ...
  </ul>
</details>

<details role="list">
  <summary aria-haspopup="listbox" aria-invalid="true">
    Debated classification: Plasma
  </summary>
  <ul>
    ...
  </ul>
</details>`}</Code>
          </article>
        </section>

        <section ref={usageWithNavRef}>
          <Heading level={2} anchor="usage-with-nav">
            Usage with <Code display="inline">{`<nav>`}</Code>
          </Heading>
          <p>
            You can use dropdowns inside <Link to="/docs/nav">Nav</Link>.
          </p>
          <p>
            To change the alignment of the submenu, simply use{" "}
            <Code display="inline">{`<ul dir="rtl">`}</Code>.
          </p>
          <article aria-label="Dropdowns inside nav" className="component">
            <nav>
              <ul>
                <li>
                  <strong>Acme Corp</strong>
                </li>
              </ul>
              <ul>
                <li>
                  <Item className="secondary">Services</Item>
                </li>
                <li>
                  <details role="list">
                    <summary aria-haspopup="listbox">Account</summary>
                    <DropdownItems items={accountItems} dir="rtl" />
                  </details>
                </li>
              </ul>
            </nav>
            <Code as="footer">{`<nav>
  <ul>
    <li><strong>Acme Corp<</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">Services</a></li>
    <li>
      <details role="list">
        <summary aria-haspopup="listbox">
          Account
        </summary>
        <ul role="listbox" dir="rtl">
${accountItems
  .map(
    (item, index) =>
      `          <li><a href="#">${item}</a></li>${index !== accountItems.length - 1 ? "\n" : ""}`
  )
  .join("")}
        </ul>
      </details>
    </li>
  </ul>
</nav>`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
