import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Built With ${titleSuffix}` },
  {
    name: "description",
    content: "Relevant packages, tools, and resources we depend on.",
  },
];

export default function BuiltWith() {
  return (
    <>
      {/* Header */}
      <Header
        title="Built With"
        description="Relevant packages, tools, and resources we depend on."
      />

      {/* Content */}
      <Content>
        <section>
          <Heading level={2}>Pico CSS Library</Heading>
          <p>Core technologies and resources powering Pico CSS.</p>
          <ul>
            <li>
              <Link to="https://sass-lang.com/">Sass</Link>: CSS pre-processor
            </li>
            <li>
              <Link to="https://postcss.org/">PostCSS</Link>: CSS post-processor
            </li>
            <li>
              <Link to="https://www.npmjs.com/package/autoprefixer">Autoprefixer</Link>: add vendor
              CSS prefixes using values from <Link to="https://caniuse.com/">Can I Use</Link>
            </li>
            <li>
              <Link to="https://www.npmjs.com/package/clean-css-cli">Clean CSS</Link>: CSS optimizer
              and minifier
            </li>
            <li>
              <Link to="https://csstools.github.io/sanitize.css/">Sanitize.css</Link>: Cross-browser
              default styling
            </li>
            <li>
              <Link to="https://necolas.github.io/normalize.css/">Normalize.css:</Link> CSS reset
            </li>
            <li>
              <Link to="https://tabler.io/icons">Tabler Icons</Link>: Embedded icons
            </li>
            <li>
              <Link to="https://www.jsdelivr.com/package/npm/@picocss/pico">jsDelivr</Link>: CDN
            </li>
          </ul>
          <Heading level={2}>Website and docs</Heading>
          <p>The stack behind our website and documentation.</p>
          <ul>
            <li>
              <Link to="https://remix.run/">Remix</Link>: React framework
            </li>
            <li>
              <Link to="https://www.cloudflare.com/">Cloudflare</Link>: Hosting and website CDN
            </li>
            <li>
              <Link to="https://www.typeitjs.com/">TypeIt</Link>: JavaScript typewriter effect
            </li>
            <li>
              <Link to="https://github.com/react-syntax-highlighter/react-syntax-highlighter">
                React Syntax Highlighter
              </Link>
            </li>
            <li>
              <Link to="https://toggles.dev/">Theme toggles</Link>: Animated theme toggle icon
            </li>
            <li>
              <Link to="https://codesandbox.io/">CodeSandbox</Link>: Examples cloud development
              platform
            </li>
            <li>
              <Link to="https://www.erikdkennedy.com/projects/figtree.html">Figtree</Link>: Friendly
              sans serif font for the headings
            </li>
            <li>
              <Link to="https://github.com/tonsky/FiraCode">Fira Code</Link>: Monospaced font with
              ligatures for code snippets
            </li>
          </ul>
        </section>
      </Content>
    </>
  );
}
