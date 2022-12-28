import Link from "~/components/Link";
import GitHubIcon from "~/components/icons/GitHub";
import MoonIcon from "~/components/icons/Moon";
import SunIcon from "~/components/icons/Sun";
import TwitterIcon from "~/components/icons/Twitter";

import { usePage } from "~/contexts/PageContext";

export default function Nav(props) {
  const { pageTheme, switchTheme } = usePage();
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
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="#test" className="secondary" onClick={switchTheme}>
            {pageTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </a>
        </li>
      </ul>
    </nav>
  );
}
