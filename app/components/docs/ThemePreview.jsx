import colorsData from "~/data/colors";

import Code from "~/components/Code";
import Link from "~/components/Link";

const colors = colorsData();

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

  return (
    <article className="color-picker component" aria-label="Custom theme example" {...props}>
      <header>
        {colors.map((color) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <Link
            to={color === "red" ? "/docs/customization" : `/docs/customization/${color}`}
            key={color}
            className={`background-${color}`}
            aria-label={title}
            preventScrollReset={true}
          />
        ))}
      </header>
      <hgroup>
        <h3>{title}</h3>
        <h4>Here is an example of a form with {colorWithPrefix(title)} custom theme.</h4>
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
