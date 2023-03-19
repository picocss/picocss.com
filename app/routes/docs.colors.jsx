import { useEffect, useRef, useState } from "react";
import { useModal } from "~/contexts/ModalContext";

import metaData from "~/data/meta";
import picoColorsScssSettings from "~/data/code-snippets/_color-utilities-settings.txt";
import paletteImporterImage from "~/images/customization-colors-palette-importer.png";

import {
  getColorFamilies,
  getColorPalette,
  getColorShades,
  getMainColorShade,
  removeLines,
  sentenceCase,
} from "~/utils";

import colorUtilities from "~/styles/css/docs/color-utilities.css";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/Heading";
import ColorModal from "~/components/docs/ColorModal";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { cdnBaseUrl, titleSuffix } = metaData();

export function links() {
  return [{ rel: "stylesheet", href: colorUtilities }];
}

export const meta = () => ({
  title: `Colors ${titleSuffix}`,
  description: "Pico comes with 380 colors to personalize your project.",
});

const DownloadColorPalette = () => {
  const [hrefColorPalette, setHrefColorPalette] = useState(null);

  useEffect(() => {
    const jsonColorPalette = JSON.stringify(getColorPalette(), null, 2);
    const blobColorPalette = new Blob([jsonColorPalette], { type: "application/json" });
    const hrefColorPalette = URL.createObjectURL(blobColorPalette);
    setHrefColorPalette(hrefColorPalette);

    // Clean up the object URL when component unmounts
    return () => URL.revokeObjectURL(hrefColorPalette);
  }, []);

  return (
    <a href={hrefColorPalette} download="pico-color-palette.json" role="button">
      Download
    </a>
  );
};

export default function Colors() {
  const colorsRef = useRef();
  const usageWithCssRef = useRef();
  const usageWithSassRef = useRef();
  const importInFigmaRef = useRef();

  const { modalIsOpen, onOpenModal, onCloseModal } = useModal();
  const [selectedColor, setSelectedColor] = useState({});

  const colorFamilies = getColorFamilies();

  return (
    <>
      {/* Header */}
      <Header
        title="Colors"
        description="Pico comes with 380 colors to personalize your project."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Colors",
            ref: colorsRef,
          },
          {
            anchor: "usage-with-css",
            title: "Usage with CSS",
            ref: usageWithCssRef,
          },
          {
            anchor: "usage-with-sass",
            title: "Usage with SASS",
            ref: usageWithSassRef,
          },
          {
            anchor: "import-in-figma",
            title: "Import in Figma",
            ref: importInFigmaRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section className="color-families" ref={colorsRef}>
          {colorFamilies.map((family) => {
            const shades = getColorShades({ family });
            const mainShade = getMainColorShade({ family });
            return (
              <article key={family} className="family">
                <header
                  className={`pico-background-${family}`}
                  role="button"
                  onClick={() => {
                    onOpenModal();
                    setSelectedColor({
                      family,
                      shade: mainShade,
                    });
                  }}
                >
                  {sentenceCase(family)}
                </header>
                <main>
                  {shades.map((shade) => (
                    <button
                      key={shade}
                      className={`secondary pico-background-${family}-${shade}`}
                      onClick={() => {
                        onOpenModal();
                        setSelectedColor({
                          family,
                          shade,
                        });
                      }}
                    >
                      {shade}
                    </button>
                  ))}
                </main>
              </article>
            );
          })}
        </section>

        <section ref={usageWithCssRef}>
          <Heading level={2} anchor="usage-with-css">
            Usage with CSS
          </Heading>
          <p>No color utilities are in the main Pico stylesheet.</p>
          <p>
            There is a separate stylesheet with all the color utilities that you can link in the{" "}
            <Code display="inline">{`<head>`}</Code> of your website.
          </p>
          <Code className="small">{`<link rel="stylesheet" href="css/pico.colors.min.css" />`}</Code>
          <p>
            Also available on <Link to={cdnBaseUrl}>unpkg CDN</Link>:
          </p>
          <Code>{`<link
  rel="stylesheet"
  href="${cdnBaseUrl}css/pico.colors.min.css"
/>`}</Code>
          <p>This stylesheet is almost the same size as the entire Pico library.</p>
          <p>
            We do not recommend including all colors on a production site. You should include only
            the color families and shades that you use.
          </p>
          <p>
            After linking the color utilities, you can style any element with the utility classes.
            Click on any color above to see details.
          </p>
          <article aria-label="Color example" className="component">
            <h2 className="pico-color-pink-500">Pink title</h2>
            <Code
              as="footer"
              className="small"
            >{`<h2 className="pico-color-pink-500">Pink title</h2>`}</Code>
          </article>
          <article aria-label="Background color example" className="pico-background-pink-600">
            Pink card
          </article>
          <Code>{`<article class="pico-background-pink-600">
  Pink card
</article>`}</Code>
        </section>

        <section ref={usageWithSassRef}>
          <Heading level={2} anchor="usage-with-sass">
            Usage with SASS
          </Heading>
          <p>
            You can import all colors as SASS variables in any <Code display="inline">.scss</Code>{" "}
            file with:
          </p>
          <Code language="scss">@use "colors" as *;</Code>
          <p>The colors can then be used like this:</p>
          <Code language="scss">{`h2 {
  color: $pink-500;
}`}</Code>
          <p>
            You can also generate the utility classes with{" "}
            <Link to="https://sass-lang.com/documentation/at-rules/use">@use</Link>:
          </p>
          <Code language="scss">@use "colors/utilities";</Code>
          <p>There are many settings available.</p>
          <p>
            Here is, for example, how to generate only the color utilities (and not the background
            utilities) and only for red, pink, fuchsia, and purple color families.
          </p>
          <Code language="scss">{`@use "colors/utilities" with (
  $palette: (
    "color-families": (
      red,
      pink,
      fuchsia,
      purple,
    ),
  ),
  $utilities: (
    "background-colors": false,
  )
);`}</Code>
          <details>
            <summary role="button" className="secondary">
              All default settings
            </summary>
            <Code language="scss">
              {removeLines({
                code: picoColorsScssSettings,
                linesToRemoveFromStart: 3,
              })}
            </Code>
          </details>
        </section>

        <section ref={importInFigmaRef}>
          <Heading level={2} anchor="import-in-figma">
            Import in Figma
          </Heading>
          <p>
            You can use the Figma plugin{" "}
            <Link to="https://www.figma.com/community/plugin/1067561134666722782/Palette-Importer">
              Palette Importer
            </Link>{" "}
            to import all 380 Pico colors.
          </p>
          <p>
            <img
              className="rounded-bordered"
              src={paletteImporterImage}
              alt="Figma plugin Palette Importer"
            />
          </p>
          <p>
            Download the <Code display="inline">.json</Code> file with all the colors:
          </p>
          <p>
            <DownloadColorPalette />
          </p>
        </section>

        {modalIsOpen && (
          <ColorModal
            isOpen={modalIsOpen}
            onClose={onCloseModal}
            color={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        )}
      </Content>
    </>
  );
}
