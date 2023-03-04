import metaData from "~/data/meta";

import Code from "~/components/Code";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Card ${titleSuffix}`,
  description: "A flexible container with graceful spacings across devices and viewports.",
});

export default function Card() {
  return (
    <>
      {/* Header */}
      <Header
        title="Card"
        description="A flexible container with graceful spacings across devices and viewports."
      />

      {/* Content */}
      <Content>
        <article aria-label="Card example">I'm a card!</article>
        <Code className="small">{`<article>I'm a card!</article>`}</Code>

        <p>
          You can use <Code display="inline">{`<header>`}</Code> and{" "}
          <Code display="inline">{`<footer>`}</Code> inside{" "}
          <Code display="inline">{`<article>`}</Code>.
        </p>
        <article aria-label="Card sectioning example">
          <header>Header</header>Body<footer>Footer</footer>
        </article>
        <Code>{`<article>
  <header>Header</header>
  Body
  <footer>Footer</footer>
</article>`}</Code>

        <p>
          Optionally, you can use <Code display="inline">{`<main>`}</Code> to wrap the body content.
        </p>
        <Code>{`<article>
  <header>Header</header>
  <main>Body</main>
  <footer>Footer</footer>
</article>`}</Code>
      </Content>
    </>
  );
}
