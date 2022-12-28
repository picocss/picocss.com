import metaData from "~/data/meta";
import Code from "~/components/Code";

export const meta = () => ({
  title: `Documentation ${metaData.titleSuffix}`,
  description:
    "There are 4 ways to get started with pico.css: manually, from a CDN, with NPM, and with Composer.",
});

export default function Docs() {
  return (
    <>
      <hgroup>
        <h1>Usage</h1>
        <h2>Works without package manager or dependencies 🙂!</h2>
      </hgroup>
      <p>There are 4 ways to get started with pico.css:</p>
      <h3>Install manually</h3>
      <p>
        <a href="https://github.com/picocss/pico/archive/refs/heads/master.zip">Download Pico</a>{" "}
        and link <code>{`/css/pico.min.css`}</code> in the <code>{`<head>`}</code> of your website.
      </p>
      <Code language="html">{`<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />`}</Code>
      <h3>Install with NPM</h3>
      <Code>npm install @picocss/pico</Code>
      <h3>Install with Composer</h3>
      <Code>composer require picocss/pico</Code>
      <p>Starter HTML template:</p>
      <Code language="html">{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/pico.min.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <main className="container">
      <h1>Hello, world!</h1>
    </main>
  </body>
</html>`}</Code>
    </>
  );
}
