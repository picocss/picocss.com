import { Outlet } from "@remix-run/react";
import metaData from "~/data/meta";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Customization ${titleSuffix}`,
  description: "You can customize themes with SCSS or, you can edit the CSS variables.",
});

export default function Customization() {
  return (
    <>
      <hgroup>
        <h1>Customization</h1>
        <h2>You can customize themes with SCSS or, you can edit the CSS variables.</h2>
      </hgroup>
      <Outlet />
    </>
  );
}
