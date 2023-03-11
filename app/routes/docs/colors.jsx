import { useEffect, useRef, useState } from "react";
import { usePage } from "~/contexts/PageContext";

import metaData from "~/data/meta";

import {
  getColorFamilies,
  getColorPalette,
  getColorShades,
  getMainColorShade,
  sentenceCase,
} from "~/utils";

import colorUtilities from "~/styles/css/docs/color-utilities.css";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Heading from "~/components/docs/Heading";
import ColorModal from "~/components/docs/ColorModal";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export function links() {
  return [{ rel: "stylesheet", href: colorUtilities }];
}

export const meta = () => ({
  title: `Colors ${titleSuffix}`,
  description: "Pico comes with 360 colors to personalize your project.",
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

  const { modalIsOpen, onOpenModal, onCloseModal } = usePage();
  const [selectedColor, setSelectedColor] = useState({});

  const colorFamilies = getColorFamilies();

  return (
    <>
      {/* Header */}
      <Header
        title="Colors"
        description="Pico comes with 360 colors to personalize your project."
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
          <p>
            Proin a quam condimentum, tempus mi in, suscipit nulla. Aenean consequat rhoncus leo ac
            faucibus. Ut tincidunt nunc at nunc ornare, ac varius lacus volutpat. Quisque aliquet
            lacus vel erat imperdiet pretium. Cras nisl mauris, porta tempor diam quis, malesuada
            ullamcorper augue. Aenean porta magna ligula, eu euismod lectus elementum sit amet.
            Nulla posuere commodo libero sit amet egestas. Nulla sagittis risus diam, commodo
            faucibus lorem pretium in.
          </p>
        </section>

        <section ref={usageWithSassRef}>
          <Heading level={2} anchor="usage-with-sass">
            Usage with SASS
          </Heading>
          <p>
            Sed convallis sapien non turpis vehicula lobortis. In hac habitasse platea dictumst.
            Fusce quis nisl dapibus, rutrum leo quis, dapibus erat. Curabitur facilisis tincidunt
            urna, non suscipit lectus auctor vel. Quisque eleifend posuere turpis at venenatis.
            Aliquam erat volutpat. Nulla porttitor, mauris vel scelerisque cursus, nisl lectus
            porttitor augue, in venenatis lacus sem a metus. Nunc risus nunc, ornare sed finibus id,
            blandit et erat. Ut euismod neque nunc, a tristique purus volutpat at. Duis a auctor
            dui.
          </p>
        </section>

        <section ref={importInFigmaRef}>
          <Heading level={2} anchor="import-in-figma">
            Import in Figma
          </Heading>
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
