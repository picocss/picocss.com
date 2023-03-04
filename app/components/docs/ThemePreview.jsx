import { useCurrentPath } from "~/utils";

import Logo from "~/components/Logo";
import Code from "~/components/Code";
import Link from "~/components/Link";

import { colorFamilies } from "~/data/colors";

// Remove the last X lines of the code snippet.
const removeLastLines = ({ code, linesToRemove = 1 }) => {
  const lines = code.split("\n");
  lines.splice(lines.length - linesToRemove, linesToRemove);
  return lines.join("\n");
};

// Add a missing empty line before a comment.
const addMissingEmptyLineBeforeComment = ({ code }) => {
  return code.replaceAll("\n}\n/*", "\n}\n\n/*");
};

export default function ThemePreview({ title, code, ...props }) {
  const preventDefault = (e) => e.preventDefault();

  let modifiedCode = addMissingEmptyLineBeforeComment({
    code: removeLastLines({ code, linesToRemove: 2 }),
  });

  const colorWithPrefix = (color) => {
    let prefix = "a";
    const lowercaseColor = color.charAt(0).toLowerCase() + color.slice(1);
    if (["a", "e", "i", "o", "u"].includes(lowercaseColor.charAt(0))) {
      prefix = "an";
    }
    return `${prefix} ${lowercaseColor}`;
  };

  const currentPath = useCurrentPath();

  return (
    <article className="color-picker component" aria-label="Custom theme example" {...props}>
      <header>
        {colorFamilies.map((color) => {
          const linkTo =
            color === "red" ? "/docs/theme-generator" : `/docs/theme-generator/${color}`;
          const isCurrent = currentPath === linkTo;
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <Link
              key={color}
              to={linkTo}
              className={`pico-background-${color}`}
              aria-label={title}
              preventScrollReset={true}
            >
              {isCurrent && <Logo displayWordmark={false} animate={true} />}
            </Link>
          );
        })}
      </header>
      <hgroup>
        <h3>{title}</h3>
        <h4>Form example with {colorWithPrefix(title)} theme.</h4>
      </hgroup>
      <form>
        <fieldset className="grid">
          <input
            type="text"
            name="login"
            placeholder="Login"
            aria-label="Login"
            autoComplete="nickname"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autoComplete="current-password"
          />
          <button type="submit" aria-label="Example button" onClick={preventDefault}>
            Login
          </button>
        </fieldset>
        <fieldset>
          <label>
            <input type="checkbox" role="switch" name="switch" defaultChecked={true} /> I agree to
            the{" "}
            <Link to="#policy" onClick={preventDefault}>
              Privacy Policy
            </Link>
          </label>
        </fieldset>
      </form>
      <footer>
        <Code language="css">{modifiedCode}</Code>
      </footer>
    </article>
  );
}
