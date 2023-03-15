import { useRef } from "react";
import metaData from "~/data/meta";

import picoScssSettings from "~/data/code-snippets/_settings.txt";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Link from "~/components/Link";
import Code from "~/components/Code";
import Heading from "~/components/docs/Heading";

import { removeLines } from "~/utils";

const { titleSuffix, githubTreeBaseUrl } = metaData();

export const meta = () => ({
  title: `Sass ${titleSuffix}`,
  description:
    "Build your own minimal CSS framework by compiling a custom version of Pico with SASS.",
});

export default function Sass() {
  const introductionRef = useRef();
  const settingsRef = useRef();
  const customThemeRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Sass"
        description={
          <>
            Build your own minimal CSS framework by compiling a custom version of Pico with{" "}
            <Link to="https://sass-lang.com/">SASS</Link>.
          </>
        }
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
            anchor: "settings",
            title: "Settings",
            ref: settingsRef,
          },
          {
            anchor: "custom-theme",
            title: "Custom theme",
            ref: customThemeRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={introductionRef}>
          <p>
            To get the most out of Pico, we recommend compiling your own version with SASS. This
            way, you can include only the required modules and personalize the settings without
            overriding CSS styles.
          </p>

          <p>
            Avoid modifying Pico’s core files whenever possible. This approach allows you to keep
            Pico up to date without conflicts since the Pico code and your custom code are
            separated.{" "}
          </p>
          <p>
            You can import Pico into your SCSS file with{" "}
            <Link to="https://sass-lang.com/documentation/at-rules/use">@use</Link>:
          </p>
          <Code language="scss">@use "pico";</Code>
          <p>
            If you are using{" "}
            <Link to="https://sass-lang.com/documentation/cli/dart-sass">
              Sass Command-Line Interface
            </Link>{" "}
            to compile your <Code display="inline">.scss</Code> files, you can define{" "}
            <Code display="inline">sass --load-path=node_modules/@picocss/pico/scss/</Code> to avoid
            using absolute URLs like:
          </p>
          <Code language="scss">@use "../../../node_modules/@picocss/pico/scss/pico";</Code>
        </section>

        <section ref={settingsRef}>
          <Heading level={2} anchor="settings">
            Settings
          </Heading>
          <p>
            You can load custom settings with{" "}
            <Code display="inline" language="scss">
              @use "pico" with ( … );
            </Code>
            . These custom values will override the default variables.
          </p>
          <p>Example to generate the classless version:</p>
          <Code language="scss">{`// Pico classless version
@use "pico" with (
  $enable-semantic-container: true,
  $enable-classes: false
);
`}</Code>
          <p>
            Example to generate a lightweight version without <Code display="inline">.classes</Code>
            , uncommon form elements, and components.
          </p>
          <p>This version reduces the weight of Pico by 50%.</p>
          <Code language="scss">{`// Pico lightweight version
@use "pico" with (
  $enable-semantic-container: true,
  $enable-classes: false,
  $modules: (
    "content/code": false,
    "forms/input-color": false,
    "forms/input-date": false,
    "forms/input-file": false,
    "forms/input-range": false,
    "forms/input-search": false,
    "components/accordion": false,
    "components/card": false,
    "components/dropdown": false,
    "components/loading": false,
    "components/modal": false,
    "components/nav": false,
    "components/progress": false,
    "components/tooltip": false,
    "utilities/accessibility": false,
    "utilities/reduce-motion": false
  )
);
`}</Code>
          <details>
            <summary role="button" className="secondary">
              All default settings
            </summary>
            <Code language="scss">
              {removeLines({
                code: picoScssSettings,
                linesToRemoveFromStart: 5,
              })}
            </Code>
          </details>
        </section>

        <section ref={customThemeRef}>
          <Heading level={2} anchor="custom-theme">
            Custom theme
          </Heading>
          <p>
            To create a custom version of Pico with a full-custom theme that reflects your brand
            identity, you can:
          </p>
          <ol>
            <li>Exclude the default theme from compilation,</li>
            <li>
              Import your custom theme (you can duplicate{" "}
              <Link to={`${githubTreeBaseUrl}scss/themes/`}>Pico's default theme</Link> as a starter
              point and customize it to match your brand's style).
            </li>
          </ol>
          <Code language="scss">{`// Your custom theme
@use "path/custom-theme";          
          
// Pico without default theme
@use "pico" with (
  $modules: (
    "themes/default": false
  )
);
`}</Code>
        </section>
      </Content>
    </>
  );
}
