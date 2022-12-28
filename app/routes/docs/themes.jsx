import metaData from "~/data/meta";
import Code from "~/components/Code";

import { usePage } from "~/contexts/PageContext";

export const meta = () => ({
  title: `Themes ${metaData.titleSuffix}`,
  description:
    "Pico is shipped with two beautiful and consistent color themes, automatically enabled according to the user's preference.",
});

export default function Themes() {
  const { pageTheme, switchTheme } = usePage();
  const changeThemeLabel = pageTheme === "dark" ? "Turn off dark mode" : "Turn on dark mode";

  return (
    <>
      <hgroup>
        <h1>Themes</h1>
        <h2>Pico is shipped with 2 consistent themes: Light & Dark.</h2>
      </hgroup>
      <p>
        The default theme is Light. The Dark theme is automatically enabled if the user has dark
        mode enabled <code>prefers-color-scheme: dark</code>.
      </p>
      <article aria-label="Theme switcher">
        <button className="contrast" aria-label={changeThemeLabel} onClick={switchTheme}>
          {changeThemeLabel}
        </button>
      </article>
      <p>
        Themes can be forced on document level <code>{`<html data-theme="light">`}</code> or on any
        HTML element <code>{`<article data-theme="dark">`}</code>
      </p>
      <article data-theme="light" aria-label="Forced light theme example">
        <h3>Light card</h3>
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
            <button
              type="submit"
              aria-label="Example button"
              onClick={(event) => event.preventDefault()}
            >
              Login
            </button>
          </fieldset>
          <fieldset>
            <label>
              <input
                type="checkbox"
                role="switch"
                id="switch"
                name="switch"
                defaultChecked={true}
              />{" "}
              Remember me
            </label>
          </fieldset>
        </form>
        <footer>
          <Code language="html">{`<article data-theme="light">
  …
</article>`}</Code>
        </footer>
      </article>
      <article data-theme="dark" aria-label="Forced dark theme example">
        <h3>Dark card</h3>
        <form>
          <fieldset className="grid">
            <input
              type="text"
              name="login"
              placeholder="Login"
              aria-label="Login"
              autoComplete="nickname"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              autoComplete="current-password"
              required
            />
            <button
              type="submit"
              aria-label="Example button"
              onClick={(event) => event.preventDefault()}
            >
              Login
            </button>
          </fieldset>
          <fieldset>
            <label>
              <input
                type="checkbox"
                role="switch"
                id="switch"
                name="switch"
                defaultChecked={true}
              />{" "}
              Remember me
            </label>
          </fieldset>
        </form>
        <footer>
          <Code language="html">{`<article data-theme="dark">
  …
</article>`}</Code>
        </footer>
      </article>
    </>
  );
}
