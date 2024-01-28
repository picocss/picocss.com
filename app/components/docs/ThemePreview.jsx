import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Check from "~/components/icons/Check";
import { useNavigation } from "~/contexts/NavigationContext";
import { useVersionPicker } from "~/contexts/VersionPickerContext";
import { getColorFamilies } from "~/utils";

// Add a or an before a color name.
const colorWithPrefix = (color) => {
  let prefix = "a";
  const lowercaseColor = color.charAt(0).toLowerCase() + color.slice(1);
  if (["a", "e", "i", "o", "u"].includes(lowercaseColor.charAt(0))) {
    prefix = "an";
  }
  return `${prefix} ${lowercaseColor}`;
};

export default function ThemePreview({ title, ...props }) {
  const preventDefault = (e) => e.preventDefault();
  const colorFamilies = getColorFamilies();
  const { locationPath, nextPageCurrentlyLoading, isLoading } = useNavigation();
  const { simplifiedCssLink, setThemeColor, themeRef } = useVersionPicker();
  setThemeColor(title.toLowerCase());

  return (
    <section ref={themeRef}>
      <Heading level={2}>Theme color</Heading>
      <article className={`color-picker component`} aria-label="Custom theme example" {...props}>
        <header>
          {colorFamilies.map((color) => {
            const linkTo =
              color === "azure" ? "/docs/version-picker" : `/docs/version-picker/${color}`;
            const isCurrent = locationPath === linkTo;
            return (
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <Link
                key={color}
                to={linkTo}
                className={`pico-background-${color}`}
                aria-label={title}
                preventScrollReset={true}
                aria-busy={isLoading && nextPageCurrentlyLoading === linkTo}
              >
                {isCurrent && !isLoading ? <Check isAnimated={true} /> : null}
              </Link>
            );
          })}
        </header>
        <hgroup>
          <Heading level={2}>{title}</Heading>
          <p>Form example with {colorWithPrefix(title)} theme.</p>
        </hgroup>
        <form>
          <fieldset className="grid">
            <input
              type="text"
              name="login"
              placeholder="Login"
              aria-label="Login"
              autoComplete="username"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              autoComplete="current-password"
            />
            <button type="submit" onClick={preventDefault}>
              Log in
            </button>
          </fieldset>
          <fieldset>
            <label>
              <input type="checkbox" role="switch" name="switch" defaultChecked={true} /> I agree to
              the{" "}
              <Link to="#" onClick={preventDefault}>
                Privacy Policy
              </Link>
            </label>
          </fieldset>
        </form>
        <Code as="footer">{simplifiedCssLink}</Code>
      </article>
    </section>
  );
}
