import { useRef } from "react";
import metaData from "~/data/meta";

import stylesCssVars from "~/data/code-snippets/default-theme-styles.txt";
import colorsCssVars from "~/data/code-snippets/default-theme-color-schemes.txt";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Code from "~/components/Code";
import Link from "~/components/Link";
import Heading from "~/components/docs/Heading";
import TableOfContents from "~/components/docs/TableOfContents";

import { removeLines } from "~/utils";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `CSS variables ${titleSuffix}`,
  description: "Customize Pico with over 130 CSS variables.",
});

export function links() {
  return [
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap" },
  ];
}

export default function CssVariables() {
  const overviewRef = useRef();
  const exampleRef = useRef();
  const cssVariablesForColorSchemesRef = useRef();
  const allCssVariablesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header title="CSS variables" description="Customize Pico with over 130 CSS variables." />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Overview",
            ref: overviewRef,
          },
          {
            anchor: "example",
            title: "Example",
            ref: exampleRef,
          },
          {
            anchor: "css-variables-for-color-schemes",
            title: "Color schemes",
            ref: cssVariablesForColorSchemesRef,
          },
          {
            anchor: "all-css-variables",
            title: "All CSS variables",
            ref: allCssVariablesRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={overviewRef}>
          <p>
            Pico includes many custom properties (variables) that allow easy access to frequently
            used values such as <Code display="inline">{`font-family`}</Code>,{" "}
            <Code display="inline">{`font-size`}</Code>,
            <Code display="inline">{`border-radius`}</Code>,{" "}
            <Code display="inline">{`margin`}</Code>, <Code display="inline">{`padding`}</Code>, and
            more.
          </p>
          <p>
            All CSS variables are prefixed with <Code display="inline">{`pico-`}</Code> to avoid
            collisions with other CSS frameworks or your own vars. You can remove or customize this
            prefix by recompiling the CSS files with <Link to="/docs/sass">SASS</Link>.
          </p>
          <p>
            You can define the CSS variables within the <Code display="inline">{`:root`}</Code>{" "}
            selector to apply the changes globally or overwrite the CSS variables on specific
            selectors to apply the changes locally.
          </p>
        </section>

        <section ref={exampleRef}>
          <Heading level={2} anchor="example">
            Example
          </Heading>
          <article aria-label="Button colors example" className="component" id="css-var-example">
            <style>{`
              #css-var-example h1,
              #css-var-example p,
              #css-var-example button {
                --pico-border-radius: 2rem;
                --pico-typography-spacing-vertical: 1.5rem;
                --pico-form-element-spacing-vertical: 1rem;
                --pico-form-element-spacing-horizontal: 1.5rem;
              }
              #css-var-example h1 {
                --pico-font-family: Pacifico, cursive;
                --pico-font-weight: 400;
                --pico-typography-spacing-vertical: 0.5rem;
              }
              #css-var-example button {
                --pico-font-weight: 700;
                margin-bottom: 0;
              }
            `}</style>
            <h1>Music fest mania</h1>
            <p>
              Get ready to dance and sing your heart out at our Music Fest Mania. Join the crowd and
              jam to your favorite band, and discover new artists.
            </p>
            <button>Let's rock out!</button>
            <footer>
              <Code>{`
<style>
  :root {
    --pico-border-radius: 2rem;
    --pico-typography-spacing-vertical: 1.5rem;
    --pico-form-element-spacing-vertical: 1rem;
    --pico-form-element-spacing-horizontal: 1.25rem;
  }
  h1 {
    --pico-font-family: Pacifico, cursive;
    --pico-font-weight: 400;
    --pico-typography-spacing-vertical: 0.5rem;
  }
  button {
    --pico-font-weight: 700;
  }
</style>

<h1>Music fest mania</h1>
<p>
  Get ready to dance and sing your heart out at our Music Fest Mania. Join the crowd and
  jam to your favorite bands and discover new artists.
</p>
<button>Let's rock out!</button>
`}</Code>
            </footer>
          </article>
        </section>

        <section ref={cssVariablesForColorSchemesRef}>
          <Heading level={2} anchor="css-variables-for-color-schemes">
            CSS variables for color schemes
          </Heading>
          <p>
            To add or edit CSS variables for light mode only (the default mode), define them inside:
          </p>
          <Code language="css">{`/* Light color scheme (Default) */
/* Can be forced with data-theme="light" */
[data-theme="light"],
:root:not([data-theme="dark"]) {
 …
}`}</Code>
          <p>To add or edit CSS variables for dark mode, you need to define them twice.</p>
          <p>
            The first inclusion is in the <Code display="inline">{`@media`}</Code>query that checks
            if the user has dark mode enabled through their device settings with{" "}
            <Code display="inline">{`prefers-color-scheme:
            dark`}</Code>
            . In this case, the dark mode styling is applied to the{" "}
            <Code display="inline">{`:root`}</Code> element if there is no explicit{" "}
            <Code display="inline">{`data-theme`}</Code> attribute set.
          </p>

          <p>
            The second inclusion is for the case where you forced the dark mode with{" "}
            <Code display="inline">{`data-theme="dark"`}</Code>. This allows you to manually toggle
            between the light and dark themes regardless of the user's device settings.
          </p>
          <Code language="css">{`/* Dark color scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
 @media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    …
  }
}

/* Dark color scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme="dark"] {
  …
}`}</Code>
          <p>
            Try our <Link to="/docs/theme-generator">Minimal theme generator</Link> for a detailed
            example.
          </p>
        </section>

        <section ref={allCssVariablesRef}>
          <Heading level={2} anchor="all-css-variables">
            All CSS variables
          </Heading>
          <p>There are two categories of CSS variables:</p>
          <ol>
            <li>
              <strong>Style variables</strong>, which do not depend on the color scheme,
            </li>
            <li>
              <strong>Color variables</strong>, which depend on the color scheme.
            </li>
          </ol>
          <p style={{ marginBottom: "2rem" }}>
            Here is the list of all CSS variables used in Pico:
          </p>
          <details>
            <summary role="button" className="secondary">
              Default styles CSS variables
            </summary>
            <Code language="css">
              {removeLines({
                code: stylesCssVars,
                linesToRemoveFromStart: 3,
                linesToRemoveFromEnd: 2,
              })}
            </Code>
          </details>
          <details>
            <summary role="button" className="secondary">
              Default colors CSS variables
            </summary>
            <Code language="css">
              {removeLines({
                code: colorsCssVars,
                linesToRemoveFromStart: 3,
                linesToRemoveFromEnd: 2,
              })}
            </Code>
          </details>
        </section>
      </Content>
    </>
  );
}
