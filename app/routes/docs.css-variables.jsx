import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import colorsCssVars from "~/data/code-snippets/default-theme-color-schemes.txt";
import stylesCssVars from "~/data/code-snippets/default-theme-styles.txt";
import orangeCssCode from "~/data/code-snippets/orange.txt";
import metaData from "~/data/meta";
import { removeLines } from "~/utils";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `CSS variables ${titleSuffix}` },
  {
    name: "description",
    content:
      "Customize Pico's design system with over 130 CSS variables to create a unique look and feel.",
  },
];

export function links() {
  return [
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap" },
  ];
}

export default function CssVariables() {
  const introductionRef = useRef();
  const exampleRef = useRef();
  const cssVariablesForColorSchemesRef = useRef();
  const allCssVariablesRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="CSS variables"
        description="Customize Pico's design system with over 130 CSS variables to create a unique look&nbsp;and&nbsp;feel."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Introduction",
            ref: introductionRef,
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
        <section ref={introductionRef}>
          <p>
            Pico includes many custom properties (variables) that allow easy access to frequently
            used values such as <code>font-family</code>, <code>font-size</code>,
            <code>border-radius</code>, <code>margin</code>, <code>padding</code>, and more.
          </p>
          <p>
            All CSS variables are prefixed with <code>pico-</code> to avoid collisions with other
            CSS frameworks or your own vars. You can remove or customize this prefix by recompiling
            the CSS files with <Link to="/docs/sass">SASS</Link>.
          </p>
          <p>
            You can define the CSS variables within the <code>:root</code> selector to apply the
            changes globally or overwrite the CSS variables on specific selectors to apply the
            changes locally.
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
              Get ready to dance and sing your heart out at our Music Fest Mania. Join the crowd,
              jam to your favorite band, and discover new artists.
            </p>
            <button>Let’s rock out!</button>

            <Code as="footer">{`<style>
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
  Get ready to dance and sing your heart out at 
  our Music Fest Mania. Join the crowd, jam to
  your favorite band, and discover new artists.
</p>
<button>Let's rock out!</button>
`}</Code>
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
 ...
}`}</Code>
          <p>To add or edit CSS variables for dark mode, you need to define them twice.</p>
          <p>
            The first inclusion is in the <code>{`@media`}</code>query that checks if the user has
            dark mode enabled through their device settings with{" "}
            <code>{`prefers-color-scheme:
            dark`}</code>
            . In this case, the dark mode styling is applied to the <code>{`:root`}</code> element
            if there is no explicit <code>{`data-theme`}</code> attribute set.
          </p>

          <p>
            The second inclusion is when you force the dark mode with{" "}
            <code>{`data-theme="dark"`}</code>. This allows you to manually toggle between the light
            and dark themes regardless of the user’s device settings.
          </p>
          <Code language="css">{`/* Dark color scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
 @media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    ...
  }
}

/* Dark color scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme="dark"] {
  ...
}`}</Code>
          <details>
            <summary role="button" className="secondary">
              Detailed example to override the primary color
            </summary>
            <Code language="css">
              {removeLines({
                code: orangeCssCode,
                linesMatching: [
                  "  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);",
                  "    --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);",
                ],
                linesToRemoveFromEnd: 2,
              })}
            </Code>
          </details>
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

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.css-variables.jsx" />
      </Content>
    </>
  );
}
