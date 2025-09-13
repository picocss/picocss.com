import Code from "~/components/Code";
import Heading from "~/components/Heading";
import { useVersionPicker } from "~/contexts/VersionPickerContext";
import metaData from "~/data/meta";

const { cdnBaseUrl } = metaData;

const getThemeColorProps = (themeColor) => {
  return themeColor === "azure" ? {} : { "$theme-color": `"${themeColor}"` };
};

const getBaseConfigurationProps = (baseConfiguration, baseIndex) => {
  return baseConfiguration[baseIndex].sassProperties;
};

const getConditionalConfigurationProps = (conditionalConfiguration, conditionalIndex) => {
  return conditionalConfiguration[conditionalIndex].sassProperties;
};

function getSassCode(allSassProperties) {
  const sassPropsAreEmpty = Object.keys(allSassProperties).length === 0;
  if (sassPropsAreEmpty) {
    return `@use "pico";`;
  }
  return `@use "pico" with (
${Object.entries(allSassProperties)
  .map(([key, value]) => `  ${key}: ${value}`)
  .join(",\n")}
);`;
}

const getIsClassless = (baseConfigurationProps) => {
  return baseConfigurationProps["$enable-classes"] === false;
}

export default function Usage() {
  const {
    usageFromCdnRef,
    usageWithSaasRef,
    starterHtmlTemplateRef,
    baseIndex,
    baseConfiguration,
    conditionalIndex,
    conditionalConfiguration,
    picoFileName,
    simplifiedCssLink,
    themeColor,
  } = useVersionPicker();

  const themeColorProps = getThemeColorProps(themeColor);
  const baseConfigurationProps = getBaseConfigurationProps(baseConfiguration, baseIndex);
  const conditionalConfigurationProps = getConditionalConfigurationProps(
    conditionalConfiguration,
    conditionalIndex,
  );
  const allSassProperties = {
    ...themeColorProps,
    ...baseConfigurationProps,
    ...conditionalConfigurationProps,
  };
  const sassCode = getSassCode(allSassProperties);

  const isClassless = getIsClassless(baseConfigurationProps);

  return (
    <>
      {/*  Usage from CDN */}
      <section ref={usageFromCdnRef}>
        <Heading level={2} anchor="usage-from-cdn">
          Usage from CDN
        </Heading>
        <Code>{`<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/${picoFileName}"
>`}</Code>
      </section>

      {/* Usage with Sass */}
      <section ref={usageWithSaasRef}>
        <Heading level={2} anchor="usage-with-sass">
          Usage with Sass
        </Heading>
        <Code language="scss">{sassCode}</Code>
      </section>

      {/* Starter HTML template */}
      <section ref={starterHtmlTemplateRef}>
        <Heading level={2} anchor="starter-html-template">
          Starter HTML template
        </Heading>
        <Code>{`<!doctype html>
<html lang="en"${conditionalIndex === 1 ? ` class="pico"` : ""}>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    ${simplifiedCssLink}
    <title>Hello world!</title>
  </head>
  <body>
    <main${isClassless ? "" : ` class="container"`}>
      <h1>Hello world!</h1>
    </main>
  </body>
</html>`}</Code>
      </section>
    </>
  );
}
