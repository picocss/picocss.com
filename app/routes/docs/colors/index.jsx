import { useState } from "react";
import metaData from "~/data/meta";

import Code from "~/components/Code";

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

const colorFamilies = [
  "red",
  "pink",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "azure",
  "cyan",
  "jade",
  "green",
  "lime",
  "yellow",
  "amber",
  "pumpkin",
  "orange",
  "sand",
  "grey",
  "zinc",
  "slate",
];

const colorShades = [
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950,
];

export function ColorModal({ color, isOpen, onClose, ...props }) {
  const backgroundColorClassName = `pico-background-${color.family}-${color.shade}`;
  const handleClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  if (!isOpen && !color.hex) return null;

  return (
    <dialog open={isOpen} className={`color`} onClick={handleClickOverlay} {...props}>
      <article>
        <header className={backgroundColorClassName}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a href="#close" aria-label="Close" className="close" onClick={onClose}></a>
          {sentenceCase(color.family)}&nbsp;{color.shade}
        </header>
        <div className="grid">
          <p>Hexedecimal color</p>
          <Code className="small">{color.hex.toUpperCase()}</Code>
          <p>Sass variable</p>
          <Code className="small">{`$${color.family}-${color.shade}`}</Code>
          <p>Color utility classe</p>
          <Code className="small">{`pico-color-${color.family}-${color.shade}`}</Code>
          <p>Background utility classe</p>
          <Code className="small">{`pico-background-color-${color.family}-${color.shade}`}</Code>
          <p>CSS variable</p>
          <Code className="small">{`var(--pico-color-${color.family}-${color.shade})`}</Code>
        </div>
      </article>
    </dialog>
  );
}

export default function Colors() {
  const { isSSR } = usePage();
  const computedStyle = !isSSR ? window.getComputedStyle(document.documentElement) : null;
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
                      hex: computedStyle
                        ? computedStyle.getPropertyValue(`--pico-color-${family}-${shade}`).trim()
                        : "",
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
      <ColorModal isOpen={modalIsOpen} onClose={onCloseModal} color={selectedColor} />
    </>
  );
}
