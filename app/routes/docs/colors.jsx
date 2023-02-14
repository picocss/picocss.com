import { Outlet } from "@remix-run/react";
import metaData from "~/data/meta";

import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Colors ${titleSuffix}`,
  description: "Pico comes with 360 colors to personalize your project.",
});

export default function Colors() {
  return (
    <>
      <hgroup>
        <h1>Colors</h1>
        <h2>Pico comes with 360 colors to personalize your project.</h2>
      </hgroup>

      <nav role="tablist">
        <ul>
          <li>
            <Link to="/docs/colors" role="button" className="outline secondary">
              Palette
            </Link>
          </li>
          <li>
            <Link to="/docs/colors/usage" role="button" className="outline secondary">
              Usage
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
