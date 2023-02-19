import metaData from "~/data/meta";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Documentation ${titleSuffix}`,
  description:
    "There are 4 ways to get started with pico.css: manually, from a CDN, with NPM, and with Composer.",
});

export default function Docs() {
  return (
    <>
      <hgroup>
        <h1>Usage</h1>
        <p>Works without package manager or dependencies 🙂!</p>
      </hgroup>

      <p>There are 4 ways to get started with pico.css:</p>

      <h3>Install manually</h3>
      <p>
        <a href="https://github.com/picocss/pico/archive/refs/heads/master.zip">Download Pico</a>{" "}
        and link <Code display="inline">{`/css/pico.min.css`}</Code> in the{" "}
        <Code display="inline">{`<head>`}</Code> of your website.
      </p>
      <Code className="small">{`<link rel="stylesheet" href="css/pico.min.css" />`}</Code>

      <h3>Install from CDN</h3>
      <p>
        Alternatively, you can use <a href="https://unpkg.com/@picocss/pico@latest/">unpkg CDN</a>{" "}
        to link pico.css
      </p>
      <Code className="small">{`<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />`}</Code>

      <h3>Install with NPM</h3>
      <Code language="bash" className="small">
        npm install @picocss/pico
      </Code>
      <Code language="bash" className="small">
        yarn add @picocss/pico
      </Code>

      <h3>Install with Composer</h3>
      <Code language="bash" className="small">
        composer require picocss/pico
      </Code>

      <p>Starter HTML template:</p>
      <Code>{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/pico.min.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello, world!</h1>
    </main>
  </body>
</html>`}</Code>
    </>
  );
}
