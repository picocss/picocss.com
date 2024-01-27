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
  { title: `Input ${titleSuffix}` },
  {
    name: "description",
    content: "All input types are consistently styled and come with validation states.",
  },
];

export default function Input() {
  const syntaxRef = useRef();
  const datetimeRef = useRef();
  const searchRef = useRef();
  const colorRef = useRef();
  const fileRef = useRef();
  const disabledRef = useRef();
  const readonlyRef = useRef();
  const validationStatesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Input"
        description="All input types are consistently styled and come with validation states."
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
            anchor: "datetime",
            title: "Datetime",
            ref: datetimeRef,
          },
          {
            anchor: "search",
            title: "Search",
            ref: searchRef,
          },
          {
            anchor: "color",
            title: "Color",
            ref: colorRef,
          },
          {
            anchor: "file",
            title: "File",
            ref: fileRef,
          },
          {
            anchor: "disabled",
            title: "Disabled",
            ref: disabledRef,
          },
          {
            anchor: "readonly",
            title: "Readonly",
            ref: readonlyRef,
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
          <article aria-label="Input examples" className="component">
            <input type="text" name="text" placeholder="Text" aria-label="Text" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="email"
            />
            <input type="number" name="number" placeholder="Number" aria-label="Number" />
            <input type="password" name="password" placeholder="Password" aria-label="Password" />
            <input type="tel" name="tel" placeholder="Tel" aria-label="Tel" autoComplete="tel" />
            <input type="url" name="url" placeholder="Url" aria-label="Url" />
            <Code as="footer">{`<input type="text" name="text" placeholder="Text" aria-label="Text" />
<input type="email" name="email" placeholder="Email" aria-label="Email" autocomplete="email" />
<input type="number" name="number" placeholder="Number" aria-label="Number" />
<input type="password" name="password" placeholder="Password" aria-label="Password" />
<input type="tel" name="tel" placeholder="Tel" aria-label="Tel" autocomplete="tel" />
<input type="url" name="url" placeholder="Url" aria-label="Url" />`}</Code>
          </article>
        </section>

        <section ref={datetimeRef}>
          <Heading level={2} anchor="datetime">
            Datetime input
          </Heading>
          <p>Datetime inputs come with an icon.</p>
          <article aria-label="Datetime input examples" className="component">
            <input type="date" name="date" aria-label="Date" />
            <input type="datetime-local" name="datetime-local" aria-label="Datetime local" />
            <input type="month" name="month" aria-label="Month" />
            <input type="time" name="time" aria-label="Time" />
            <Code as="footer">{`<input type="date" name="date" aria-label="Date" />
<input type="datetime-local" name="datetime-local" aria-label="Datetime local" />
<input type="month" name="month" aria-label="Month" />
<input type="time" name="time" aria-label="Time" />`}</Code>
          </article>
        </section>

        <section ref={searchRef}>
          <Heading level={2} anchor="search">
            Search input
          </Heading>
          <p>
            <Code display="inline">type="search"</Code> comes with a distinctive style.
          </p>
          <article aria-label="Search input example" className="component">
            <input type="search" name="search" placeholder="Search" aria-label="Search" />
            <Code as="footer">{`<input
  type="search"
  name="search"
  placeholder="Search"
  aria-label="Search"
/>`}</Code>
          </article>
        </section>

        <section ref={colorRef}>
          <Heading level={2} anchor="color">
            Color input
          </Heading>
          <p>
            <Code display="inline">type="color"</Code> is also consistent with the other input
            types.
          </p>
          <article aria-label="Color input example" className="component">
            <input type="color" defaultValue="#ff9500" aria-label="Color picker" />
            <Code as="footer">{`<input
  type="color"
  value="#ff9500"
  aria-label="Color picker"
/>`}</Code>
          </article>
        </section>

        <section ref={fileRef}>
          <Heading level={2} anchor="file">
            File input
          </Heading>
          <p>
            Input type file button has a{" "}
            <Link to="/docs/button#variants">
              <i>secondary</i> button style
            </Link>
            .
          </p>
          <article aria-label="File input example" className="component">
            <input type="file" />
            <Code as="footer" className="small">{`<input type="file" />`}</Code>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled input
          </Heading>
          <article aria-label="Disabled example" className="component">
            <input
              type="text"
              name="text"
              placeholder="Disabled"
              aria-label="Disabled input"
              disabled
            />
            <Code as="footer">{`<input
  type="text"
  name="text"
  placeholder="Disabled"
  aria-label="Disabled input"
  disabled
/>`}</Code>
          </article>
        </section>

        <section ref={readonlyRef}>
          <Heading level={2} anchor="readonly">
            Read-only input
          </Heading>
          <article aria-label="Disabled example" className="component">
            <input
              type="text"
              name="text"
              defaultValue="Read-only"
              aria-label="Read-only input"
              readOnly
            />
            <Code as="footer">{`<input
  type="text"
  name="text"
  value="Read-only"
  aria-label="Read-only input"
  readonly
/>`}</Code>
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
            <input
              type="text"
              name="valid"
              defaultValue="Valid"
              placeholder="Valid"
              aria-invalid="false"
            />
            <input
              type="text"
              name="invalid"
              defaultValue="Invalid"
              placeholder="Invalid"
              aria-invalid="true"
            />
            <Code as="footer">{`<input
  type="text"
  name="valid"
  value="Valid"
  aria-invalid="false"
/>

<input
  type="text"
  name="invalid"
  value="Invalid"
  aria-invalid="true"
/>`}</Code>
          </article>

          <p>
            Helper texts, defined with <Code display="inline">{`<small>`}</Code> below the form
            element, inherit the validation state color.
          </p>
          <article aria-label="Validation states example" className="component">
            <input
              type="text"
              name="valid"
              defaultValue="Valid"
              placeholder="Valid"
              aria-invalid="false"
              aria-describedby="valid-helper"
            />
            <small id="valid-helper">Looks good!</small>
            <input
              type="text"
              name="invalid"
              defaultValue="Invalid"
              placeholder="Invalid"
              aria-invalid="true"
              aria-describedby="invalid-helper"
            />
            <small id="invalid-helper">Please provide a valid value!</small>
            <Code as="footer">{`<input
  type="text"
  name="valid"
  value="Valid"
  aria-invalid="false"
  aria-describedby="valid-helper"
/>
<small id="valid-helper">Looks good!</small>

<input
  type="text"
  name="invalid"
  value="Invalid"
  aria-invalid="true"
  aria-describedby="invalid-helper"
/>
<small id="invalid-helper">
  Please provide a valid value!
</small>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.forms.input.jsx" />
      </Content>
    </>
  );
}
