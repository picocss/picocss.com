import Link from "~/components/Link";
import Check from "~/components/icons/Check";
import GitHubIcon from "~/components/icons/GitHub";
import ThemeToggle from "~/components/icons/ThemeToggle";
import TwitterIcon from "~/components/icons/XTwitter";
import { usePage } from "~/contexts/PageContext";
import metaData from "~/data/meta";

const { versions } = metaData();

export default function Nav({ shouldDisplayDocsVersion = false, ...props }) {
  const { pageTheme, switchTheme } = usePage();
  const handleSwitchTheme = (event) => {
    event.preventDefault();
    switchTheme();
  };

  const isThemeDark = pageTheme === "dark";

  return (
    <nav {...props}>
      <ul>
        {shouldDisplayDocsVersion && (
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
                      {isCurrent ? (
                        <Link to={url} aria-current={true} dir="ltr">
                          {linkLabel}
                        </Link>
                      ) : (
                        <a href={url}>{linkLabel}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        )}
        <li {...(shouldDisplayDocsVersion && { className: "hide-before-sm" })}>
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
