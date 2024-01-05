import { Outlet } from "@remix-run/react";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";
import colorPickerStyles from "~/styles/css/docs/color-picker.css";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Minimal theme generator ${titleSuffix}` },
  {
    name: "description",
    content:
      "Pick a color to generate the CSS code to customize Pico’s primary color using CSS variables.",
  },
];

export function links() {
  return [{ rel: "stylesheet", href: colorPickerStyles }];
}

export default function ThemeGenerator() {
  return (
    <>
      {/* Header */}
      <Header
        title="Minimal theme generator"
        description="Pick a color to generate the CSS&nbsp;code to customize&nbsp;Pico’s primary&nbsp;color using CSS&nbsp;variables."
      />

      {/* Content */}
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
