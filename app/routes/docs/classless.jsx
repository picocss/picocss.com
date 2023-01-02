import metaData from "~/data/meta";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Class-less version ${titleSuffix}`,
  description: "For wild HTML purists, Pico provides a .classless version.",
});

export default function Classless() {
  return (
    <>
      <hgroup>
        <h1>Class-less version</h1>
        <h2>For wild HTML purists!</h2>
      </hgroup>

      <p>
        Pico provides a <Code display="inline">.classless</Code> version (
        <a href="https://picocss.com/examples/classless/">example</a>).
      </p>
      <p>
        In this version, <Code display="inline">{`<header>`}</Code>,{" "}
        <Code display="inline">{`<main>`}</Code>, and <Code display="inline">{`<footer>`}</Code> act
        as <a href="./containers.html">containers</a> to define a centered or a fluid viewport.
      </p>
      <Code language="css">{`/* Containers */
body > header,
body > main,
body > footer {
  …
}`}</Code>

      <h2>Usage</h2>
      <p>
        Use the default <Code display="inline">.classless</Code> version if you need centered
        viewports:
      </p>
      <Code className="small">{`<link rel="stylesheet" href="css/pico.classless.min.css" />`}</Code>

      <p>
        Or use the <Code display="inline">.fluid.classless</Code> version if you need a fluid
        container:
      </p>
      <Code className="small">{`<link rel="stylesheet" href="css/pico.fluid.classless.min.css" />`}</Code>

      <p>
        These <Code display="inline">.classless</Code> versions are also available on{" "}
        <a href="https://unpkg.com/@picocss/pico@latest/">unpkg CDN</a>:
      </p>
      <Code>{`<!-- Centered viewport --> 
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css">`}</Code>
      <Code>{`<!-- Fluid viewport --> 
<link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.fluid.classless.min.css">`}</Code>
      <p>
        If you need to customize the default parent (<Code display="inline">{`<body>`}</Code>) for{" "}
        <Code display="inline">{`<header>`}</Code>, <Code display="inline">{`<main>`}</Code>, and{" "}
        <Code display="inline">{`<footer>`}</Code>, you can recompile Pico by defining another CSS
        selector.
      </p>

      <p>
        Useful for <a href="https://reactjs.org/">React</a>,{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a> or <a href="https://nextjs.org/">Next.js</a>.
      </p>
      <Code language="scss">{`/* Custom Class-less version for React */
@use "pico" with (
  
  // Define the root element used to target <header>, <main>, <footer>
  // with $enable-semantic-container and $enable-responsive-spacings
  $semantic-root-element: "#root";
  
  // Enable <header>, <main>, <footer> inside $semantic-root-element as containers
  $enable-semantic-container: true;

  // Enable .classes
  $enable-classes: false;
)`}</Code>

      <p>The code above will compile Pico with the containers defined like this:</p>
      <Code language="css">{`/* Containers */
#root > header,
#root > main,
#root > footer {
  …
}`}</Code>
    </>
  );
}
