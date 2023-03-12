import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/docs/Heading";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Input ${titleSuffix}`,
  description: "All input types are consistently styled and come with validation states.",
});

export default function Input() {
  const examplesRef = useRef();
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
            title: "Examples",
            ref: examplesRef,
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
        <section ref={examplesRef}>
          <article aria-label="Input examples" className="component">
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
        </section>

        <section ref={datetimeRef}>
          <Heading level={2} anchor="datetime">
            Datetime input
          </Heading>
          <p>Datetime inputs come with an icon.</p>
          <article aria-label="Datetime input examples" className="component">
            <input type="date" aria-label="Date" />
            <input type="datetime-local" aria-label="Datetime local" />
            <input type="month" aria-label="Month" />

            <input type="time" aria-label="Time" />
            <footer>
              <Code>{`<input type="date" aria-label="Date">
<input type="datetime-local" aria-label="Datetime local">
<input type="month" aria-label="Month">
<input type="time" aria-label="Time">`}</Code>
            </footer>
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
            <input type="search" placeholder="Search" aria-label="Search" />
            <footer>
              <Code>{`<input
  type="search"
  placeholder="Search"
  aria-label="Search"
>`}</Code>
            </footer>
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
            <footer>
              <Code>{`<input
  type="color"
  value="#ff9500"
  aria-label="Color picker"
>`}</Code>
            </footer>
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
            <footer>
              <Code className="small">{`<input type="file">`}</Code>
            </footer>
          </article>
        </section>

        <section ref={disabledRef}>
          <Heading level={2} anchor="disabled">
            Disabled input
          </Heading>
          <article aria-label="Disabled example" className="component">
            <input type="text" placeholder="Disabled" aria-label="Disabled input" disabled />
            <footer>
              <Code>{`<input
  type="text"
  placeholder="Disabled"
  aria-label="Disabled input"
  disabled
>`}</Code>
            </footer>
          </article>
        </section>

        <section ref={readonlyRef}>
          <Heading level={2} anchor="readonly">
            Read-only input
          </Heading>
          <article aria-label="Disabled example" className="component">
            <input type="text" defaultValue="Read-only" aria-label="Read-only input" readOnly />
            <footer>
              <Code>{`<input
  type="text"
  value="Read-only"
  aria-label="Read-only input"
  readonly
>`}</Code>
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
            <input type="text" defaultValue="Valid" placeholder="Valid" aria-invalid="false" />
            <input type="text" defaultValue="Invalid" placeholder="Invalid" aria-invalid="true" />
            <footer>
              <Code>{`<input
  type="text"
  value="Valid"
  aria-invalid="false"
>

<input
  type="text"
  value="Invalid"
  aria-invalid="true"
>`}</Code>
            </footer>
          </article>

          <p>
            Helper texts, defined with <Code display="inline">{`<small>`}</Code> below the form
            element, inherit the validation state color.
          </p>
          <article aria-label="Validation states example" className="component">
            <input
              type="text"
              defaultValue="Valid"
              placeholder="Valid"
              aria-invalid="false"
              aria-describedby="valid-helper"
            />
            <small id="valid-helper">Looks good!</small>
            <input
              type="text"
              defaultValue="Invalid"
              placeholder="Invalid"
              aria-invalid="true"
              aria-describedby="invalid-helper"
            />
            <small id="invalid-helper">Please provide a valid value!</small>
            <footer>
              <Code>{`<input
  type="text"
  value="Valid"
  aria-invalid="false"
  aria-describedby="valid-helper"
>
<small id="valid-helper">Looks good!</small>

<input
  type="text"
  value="Invalid"
  aria-invalid="true"
  aria-describedby="invalid-helper"
>
<small id="invalid-helper">
  Please provide a valid value!
</small>`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
