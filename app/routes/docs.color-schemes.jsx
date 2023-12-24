import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Heading from "~/components/Heading";
import ThemeToggle from "~/components/icons/ThemeToggle";

import { usePage } from "~/contexts/PageContext";

import metaData from "~/data/meta";
const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Color schemes ${titleSuffix}` },
  {
    name: "description",
    content:
      "Choose from two consistent color schemes that can be automatically enabled based on users' preferences.",
  },
];

export default function ColorSchemes() {
  const { pageTheme, switchTheme } = usePage();
  const isThemeDark = pageTheme === "dark";
  const changeThemeLabel = isThemeDark ? "Turn off dark mode" : "Turn on dark mode";

  return (
    <>
      {/* Header */}
      <Header
        title="Color schemes"
        description="Choose from two consistent color&nbsp;schemes that can be automatically enabled based on users'&nbsp;preferences."
      />

      {/* Content */}
      <Content>
        <p>
          The default color scheme is Light. The Dark scheme is automatically enabled if the user
          has dark mode enabled{" "}
          <Code display="inline" language="css">{`prefers-color-scheme: dark;`}</Code>.
        </p>
        <article aria-label="Theme switcher" id="theme-switcher">
          <button className="contrast" aria-label={changeThemeLabel} onClick={switchTheme}>
            <ThemeToggle className={`theme-toggle${isThemeDark ? " moon" : ""}`} />
            {changeThemeLabel}
          </button>
        </article>

        <p>
          Color schemes can be forced on document level{" "}
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
          <Code as="footer" dataTheme="light">{`<article data-theme="light">
  ...
</article>`}</Code>
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
          <Code as="footer">{`<article data-theme="dark">
  ...
</article>`}</Code>
        </article>
      </Content>
    </>
  );
}
