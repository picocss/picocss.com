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
  { title: `Dropdown ${titleSuffix}` },
  {
    name: "description",
    content:
      "Create dropdown menus and custom selects with minimal and semantic HTML, without JavaScript.",
  },
];

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
    <ul dir={dir} id={id}>
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
            Dropdowns are built with <Code display="inline">{`<details class="dropdown">`}</Code> as
            a wrapper and <Code display="inline">{`<summary>`}</Code> and{" "}
            <Code display="inline">{`<ul>`}</Code> as direct childrens. Unless they are in a{" "}
            <Link to="/docs/nav">Nav</Link>, dropdowns are{" "}
            <Code display="inline">{`width: 100%;`}</Code> by default.
          </p>

          <p>
            Dropdowns are not available in the{" "}
            <Link to="/docs/classless">class&#8209;less&nbsp;version</Link>.
          </p>

          <p>
            For style consistency with the form elements, dropdowns are styled like a select by
            default.
          </p>
          <article aria-label="Dropdowns as selects" className="component">
            <div className="grid">
              <details className="dropdown">
                <summary>Dropdown</summary>
                <DropdownItems />
              </details>
              <select aria-label="Select" defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                <SelectItems />
              </select>
            </div>
            <Code as="footer">{`<!-- Dropdown -->
<details class="dropdown">
  <summary>Dropdown</summary>
  <ul>
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "    " : "  "}<li><a href="#">${phase}</a></li>${
          phase !== phasesOfMatter[phasesOfMatter.length - 1] ? "\n" : ""
        }`,
    )
    .join("")}
  </ul>
</details>

<!-- Select -->
<select aria-label="Select" required>
  <option selected disabled value="">Select</option>
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "  " : ""}<option>${phase}</option>${
          index !== phasesOfMatter.length - 1 && "\n"
        }`,
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
            <details className="dropdown">
              <summary>Select a phase of matter...</summary>
              <ul>
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
            <details className="dropdown">
              <summary>Select phases of matter...</summary>
              <ul>
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
<details class="dropdown">
  <summary>
    Select a phase of matter...
  </summary>
  <ul>
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "    " : "  "}<li>
      <label>
        <input type="radio" name="phase" value="${phase.toLowerCase()}" />
        ${phase}
      </label>
    </li>${phase !== phasesOfMatter[phasesOfMatter.length - 1] ? "\n" : ""}`,
    )
    .join("")}
  </ul>
</details>

<!-- Checkboxes -->
<details class="dropdown">
  <summary>
    Select phases of matter...
  </summary>
  <ul>
  ${phasesOfMatter
    .map(
      (phase, index) =>
        `${index !== 0 ? "    " : "  "}<li>
      <label>
        <input type="checkbox" name="${phase.toLowerCase()}" />
        ${phase}
      </label>
    </li>${phase !== phasesOfMatter[phasesOfMatter.length - 1] ? "\n" : ""}`,
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
            <details className="dropdown">
              <summary role="button">Dropdown as a button</summary>
              <DropdownItems />
            </details>
            <Code as="footer">{`<details class="dropdown">
  <summary role="button">
    Dropdown as a button
  </summary>
  <ul>
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
            <details className="dropdown">
              <summary role="button">Primary</summary>
              <DropdownItems />
            </details>
            <details className="dropdown">
              <summary role="button" className="secondary">
                Secondary
              </summary>
              <DropdownItems />
            </details>
            <details className="dropdown">
              <summary role="button" className="contrast">
                Contrast
              </summary>
              <DropdownItems />
            </details>
            <details className="dropdown">
              <summary role="button" className="outline">
                Primary outline
              </summary>
              <DropdownItems />
            </details>
            <details className="dropdown">
              <summary role="button" className="outline secondary">
                Secondary outline
              </summary>
              <DropdownItems />
            </details>
            <details className="dropdown">
              <summary role="button" className="outline contrast">
                Contrast outline
              </summary>
              <DropdownItems />
            </details>
            <Code as="footer">{`<!-- Primary -->
<details class="dropdown">
  <summary role="button">
    Primary
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Secondary -->
<details class="dropdown">
  <summary role="button" class="secondary">
    Secondary
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Contrast -->
<details class="dropdown">
  <summary role="button" class="contrast">
    Contrast
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Primary outline -->
<details class="dropdown">
  <summary role="button" class="outline">
    Primary outline
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Secondary outline -->
<details class="dropdown">
  <summary role="button" class="outline secondary">
    Secondary outline
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Contrast outline -->
<details class="dropdown">
  <summary role="button" class="outline contrast">
    Contrast outline
  </summary>
  <ul>
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
            <details className="dropdown">
              <summary aria-invalid="false">Valid phase of matter: Solid</summary>
              <DropdownItems />
            </details>
            <details className="dropdown">
              <summary aria-invalid="true">Debated classification: Plasma</summary>
              <DropdownItems />
            </details>
            <Code as="footer">{`<details class="dropdown">
  <summary aria-invalid="false">
    Valid phase of matter: Solid
  </summary>
  <ul>
    ...
  </ul>
</details>

<details class="dropdown">
  <summary aria-invalid="true">
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
                  <details className="dropdown">
                    <summary>Account</summary>
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
      <details class="dropdown">
        <summary>
          Account
        </summary>
        <ul dir="rtl">
${accountItems
  .map(
    (item, index) =>
      `          <li><a href="#">${item}</a></li>${index !== accountItems.length - 1 ? "\n" : ""}`,
  )
  .join("")}
        </ul>
      </details>
    </li>
  </ul>
</nav>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.dropdown.jsx" />
      </Content>
    </>
  );
}
