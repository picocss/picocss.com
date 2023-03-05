import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Heading from "~/components/docs/Heading";

import { usePage } from "~/contexts/PageContext";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Themes ${titleSuffix}`,
  description:
    "Pico has two consistent color themes, automatically enabled according to the user's preference.",
});

export default function Themes() {
  const { pageTheme, switchTheme } = usePage();
  const changeThemeLabel = pageTheme === "dark" ? "Turn off dark mode" : "Turn on dark mode";

  return (
    <>
      {/* Header */}
      <Header
        title="Themes"
        description="Pico has two consistent color themes, automatically enabled according to the user's preference."
      />

      {/* Content */}
      <Content>
        <p>
          The default theme is Light. The Dark theme is automatically enabled if the user has dark
          mode enabled <Code display="inline" language="css">{`prefers-color-scheme: dark;`}</Code>.
        </p>
        <article aria-label="Theme switcher" id="theme-switcher">
          <button className="contrast" aria-label={changeThemeLabel} onClick={switchTheme}>
            {changeThemeLabel}
          </button>
        </article>

        <p>
          Themes can be forced on document level{" "}
          <Code display="inline">{`<html data-theme="light">`}</Code> or on any HTML element{" "}
          <Code display="inline">{`<article data-theme="dark">`}</Code>
        </p>
        <article data-theme="light" aria-label="Forced light theme example">
          <Heading level={2}>Light card</Heading>
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
                <input type="checkbox" role="switch" name="switch" defaultChecked={true} /> Remember
                me
              </label>
            </fieldset>
          </form>
          <footer>
            <Code>{`<article data-theme="light">
  …
</article>`}</Code>
          </footer>
        </article>

        <article data-theme="dark" aria-label="Forced dark theme example">
          <Heading level={2}>Dark card</Heading>
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
              <button type="submit" onClick={(event) => event.preventDefault()}>
                Login
              </button>
            </fieldset>
            <fieldset>
              <label>
                <input type="checkbox" role="switch" name="switch" defaultChecked={true} /> Remember
                me
              </label>
            </fieldset>
          </form>
          <footer>
            <Code>{`<article data-theme="dark">
  …
</article>`}</Code>
          </footer>
        </article>
      </Content>
    </>
  );
}
