import metaData from "~/data/meta";
import { Outlet } from "@remix-run/react";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

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
      {/* Header */}
      <Header
        title="Minimal theme generator"
        description="Pick a color to generate the CSS code to customize Pico's primary color with CSS variables."
      />

      {/* Content */}
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
