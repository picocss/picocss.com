import metaData from "~/data/meta";

import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Mission ${titleSuffix}`,
  description:
    "Pico CSS is a minimalist and lightweight starter kit that prioritizes semantic HTML, making every HTML tag responsive and elegant by default.",
});

export default function Mission() {
  return (
    <>
      {/* Header */}
      <Header
        title="Mission"
        description="Pico CSS is a minimalist and lightweight starter kit that prioritizes semantic HTML,
            making every HTML tag responsive and elegant by default."
      />

      {/* Content */}
      <Content>
        <section>
          <p>
            With a focus on simplicity, Pico provides a clean starting point for building websites
            without the need for excessive CSS classes and wrappers.
          </p>
          <p>Here's our maxi-minimalist story.</p>
          <p>Pico started as a solution to two minor frustrations:</p>
          <blockquote>
            “I don’t want to load a huge CSS framework only to build a landing page with a title, a
            description, and a small signup form.”
            <footer>
              <cite>— Frustrated frontend developer</cite>
            </footer>
          </blockquote>
          <blockquote>
            “I don’t want to use meaningless wrappers and huge classes stacking to add a simple{" "}
            <Code display="inline">{`<input />`}</Code>.”
            <footer>
              <cite>— Same frustrated frontend developer</cite>
            </footer>
          </blockquote>
          <p>This was the starting idea. Let’s call it “The epic quest for minimalism”:</p>
          <Code>{`<main>
  <h1>Join the pursuit of HTML simplicity</h1>
  <p>Let’s avoid meaningless div and classes and make it beautiful!</p>
  <form>
    <input type="email" placeholder="Your email" />
    <input type="submit">Let’s start!</input>
  </form>
</main>

<footer>
  This page should be fast enough to please Google's algorithm.
</footer>`}</Code>
          <p>
            That's all! We believe that CSS classes are essential when building complex websites
            with varying styles, but why use classes for the default style? And above all, why block
            page rendering with JavaScript for such a simple structure?
          </p>
          <p>
            From there, we added all form elements, HTML landmarks, typographic elements, and every
            relevant tag we could find. We made every single element responsive and elegant by
            default, for both light and dark mode.
          </p>
          <p>
            As we continued to build, our community grew 🧡, and with it, the responsibility to
            provide a reliable CSS reset that would prevent maxi-minimalist sadness when looking at
            our HTML DOM.
          </p>
        </section>
      </Content>
    </>
  );
}
