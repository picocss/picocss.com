import { useState } from "react";

import metaData from "~/data/meta";
import { colorFamilies, colorShades } from "~/data/colors";

import ColorModal from "~/components/docs/ColorModal";

import { usePage } from "~/contexts/PageContext";
import sentenceCase from "~/utils/sentenceCase";
import colorUtilities from "~/styles/css/docs/color-utilities.css";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Colors ${titleSuffix}`,
  description: "Pico comes with 360 colors to personalize your project.",
});

export function links() {
  return [{ rel: "stylesheet", href: colorUtilities }];
}

export default function Colors() {
  const { modalIsOpen, onOpenModal, onCloseModal } = usePage();
  const [selectedColor, setSelectedColor] = useState({});
  return (
    <>
      <section className="color-families">
        {colorFamilies.map((family) => (
          <article key={family} className="family">
            <header className={`pico-background-${family}`}>{sentenceCase(family)}</header>
            <main>
              {colorShades.map((shade) => (
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
        ))}
      </section>
      <ColorModal
        isOpen={modalIsOpen}
        onClose={onCloseModal}
        color={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </>
  );
}
