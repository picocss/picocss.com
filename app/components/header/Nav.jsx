import Link from "~/components/Link";
import GitHubIcon from "~/components/icons/GitHub";
import MoonIcon from "~/components/icons/Moon";
import SunIcon from "~/components/icons/Sun";
import TwitterIcon from "~/components/icons/Twitter";

import { usePage } from "~/contexts/PageContext";

export default function Nav(props) {
  const { pageTheme, switchTheme } = usePage();
  const handleSwitchTheme = (e) => {
    e.preventDefault();
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
          <a
            href="https://github.com/picocss/pico"
            target="_blank"
            rel="noreferrer"
            className="secondary"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/picocss"
            target="_blank"
            rel="noreferrer"
            className="secondary"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <Link
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
