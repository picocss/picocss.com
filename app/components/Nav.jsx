import { usePage } from "~/contexts/PageContext";

import Link from "~/components/Link";
import GitHubIcon from "~/components/icons/GitHub";
import TwitterIcon from "~/components/icons/Twitter";
import Check from "~/components/icons/Check";
import ThemeToggle from "~/components/icons/ThemeToggle";

import metaData from "~/data/meta";

const { versions } = metaData();

export default function Nav({ shouldDisplayVersion = false, ...props }) {
  const { pageTheme, switchTheme } = usePage();
  const handleSwitchTheme = (event) => {
    event.preventDefault();
    switchTheme();
  };

  const isThemeDark = pageTheme === "dark";

  return (
    <nav {...props}>
      <ul>
        {shouldDisplayVersion && (
          <li>
            <details className="dropdown">
              <summary>{`v${versions.current}`}</summary>
              <ul dir="rtl">
                {versions.all.map((version) => {
                  const { version: label, url } = version;
                  const isCurrent = versions.current === label;
                  const linkLabel = isCurrent ? (
                    <>
                      <span>{`v${label}`}</span>
                      <Check strokeWidth={2} />
                    </>
                  ) : (
                    `v${label}`
                  );

                  return (
                    <li key={label}>
                      <Link
                        to={isCurrent ? "#" : url}
                        {...(isCurrent && { "aria-current": true, dir: "ltr" })}
                      >
                        {linkLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        )}
        <li {...(shouldDisplayVersion && { className: "hide-before-sm" })}>
          <Link to="/docs" className="contrast">
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/picocss/pico"
            className="contrast"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/picocss" className="contrast" aria-label="Twitter">
            <TwitterIcon />
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="contrast"
            onClick={handleSwitchTheme}
            aria-label={isThemeDark ? "Turn off dark mode" : "Turn on dark mode"}
          >
            <ThemeToggle className={`theme-toggle${isThemeDark ? " moon" : ""}`} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
