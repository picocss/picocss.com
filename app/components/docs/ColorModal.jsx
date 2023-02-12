import { useEffect } from "react";

import Link from "~/components/Link";
import Close from "~/components/icons/Close";
import Code from "~/components/Code";

import sentenceCase from "~/utils/sentenceCase";

import { getNextColor, getPreviousColor, getHexValue } from "~/utils/usePicoPalette";

export default function ColorModal({ color, isOpen, onClose, setSelectedColor, ...props }) {
  const backgroundColorClassName = `pico-background-${color.family}-${color.shade}`;
  const hexValue = getHexValue(color);

  // Handle click on overlay
  const handleClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const nextColor = getNextColor(color);
    const previousColor = getPreviousColor(color);
    const handleKeyRight = (event) => {
      if (event.key === "ArrowRight") {
        setSelectedColor({
          family: nextColor.family,
          shade: nextColor.shade,
        });
      }
    };
    const handleKeyLeft = (event) => {
      if (event.key === "ArrowLeft") {
        setSelectedColor({
          family: previousColor.family,
          shade: previousColor.shade,
        });
      }
    };
    const handleKeyEscape = (event) => {
      if (event.key === "Escape") {
        onClose(event);
      }
    };
    document.addEventListener("keydown", handleKeyRight);
    document.addEventListener("keydown", handleKeyLeft);
    document.addEventListener("keydown", handleKeyEscape);
    return () => {
      document.removeEventListener("keydown", handleKeyRight);
      document.removeEventListener("keydown", handleKeyLeft);
      document.removeEventListener("keydown", handleKeyEscape);
    };
  }, [setSelectedColor, onClose, color]);

  if (!isOpen && !color.hex) return null;

  return (
    <dialog open={isOpen} className={`color`} onClick={handleClickOverlay} {...props}>
      <article>
        <header className={backgroundColorClassName}>
          <Link to="#" aria-label="Close" className="close" onClick={onClose}>
            <Close />
          </Link>
          {sentenceCase(color.family)}&nbsp;{color.shade}
        </header>
        <div className="grid">
          <p>Hexedecimal color</p>
          <Code className="small">{hexValue.toUpperCase()}</Code>
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
