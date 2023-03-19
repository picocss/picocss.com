import { usePage } from "~/contexts/PageContext";

import Link from "~/components/Link";
import GitHubIcon from "~/components/icons/GitHub";
import MoonIcon from "~/components/icons/Moon";
import SunIcon from "~/components/icons/Sun";
import TwitterIcon from "~/components/icons/Twitter";

export default function Nav(props) {
  const { pageTheme, switchTheme } = usePage();
  const handleSwitchTheme = (event) => {
    event.preventDefault();
    switchTheme();
  };
  return (
    <nav {...props}>
      <ul>
        {/* <li>
          <Link to="#" className="secondary" aria-controls="version-menu">
            v2.0.1
          </Link>
          <ul dir="rtl" id="version-menu">
            <li>
              <Link to="#" className="secondary">
                v2.0.1
              </Link>
            </li>
            <li>
              <Link to="#" className="secondary">
                v1.5.8
              </Link>
            </li>
          </ul>
        </li> */}
        <li className="hide-before-sm">
          <Link to="/docs" className="secondary">
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/picocss/pico"
            className="secondary"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/picocss" className="secondary" aria-label="Twitter">
            <TwitterIcon />
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="secondary"
            onClick={handleSwitchTheme}
            aria-label={pageTheme === "dark" ? "Turn off dark mode" : "Turn on dark mode"}
          >
            {pageTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
