import { Outlet } from "@remix-run/react";
import metaData from "~/data/meta";
import colorPickerStyles from "~/styles/css/docs/color-picker.css";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Minimal theme generator ${titleSuffix}`,
  description:
    "Pick a color to generate the CSS code to customize Pico's primary color with CSS variables.",
});

export const themeTitle = (colorName) => `Minimal ${colorName} theme ${titleSuffix}`;
export const themeDescription = (colorName) =>
  `CSS code to customize Pico's primary color to ${colorName} with CSS variables.`;

export function links() {
  return [{ rel: "stylesheet", href: colorPickerStyles }];
}

export default function ThemeGenerator() {
  return (
    <>
      <hgroup>
        <h1>Minimal theme generator</h1>
        <h2>
          Pick a color to generate the CSS code to customize Pico's primary color with CSS
          variables.
        </h2>
      </hgroup>
      <Outlet />
    </>
  );
}
