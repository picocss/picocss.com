import Link from "~/components/Link";
import GitHubIcon from "~/components/icons/GitHub";
import MoonIcon from "~/components/icons/Moon";
import SunIcon from "~/components/icons/Sun";
import TwitterIcon from "~/components/icons/Twitter";

import { usePage } from "~/contexts/PageContext";

export default function Nav(props) {
  const { pageTheme, switchTheme } = usePage();
  const handleSwitchTheme = (event) => {
    event.preventDefault();
    switchTheme();
  };
  return (
    <nav {...props}>
      <ul>
        <li>
          <Link to="/docs" className="secondary">
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/picocss/pico"
            target="_blank"
            rel="noreferrer"
            className="secondary"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </Link>
        </li>
        <li>
          <Link
            to="https://twitter.com/picocss"
            target="_blank"
            rel="noreferrer"
            className="secondary"
            aria-label="Twitter"
          >
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
