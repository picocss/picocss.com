import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Maintenance ${titleSuffix}` },
  {
    name: "description",
    content: "Pico CSS is no longer maintained. v2.1.1 is the final release.",
  },
];

export default function Maintenance() {
  return (
    <>
      {/* Header */}
      <Header title="Pico CSS is no longer maintained" description="v2.1.1 is the final release." />

      {/* Content */}
      <Content>
        <section>
          <Heading level={2} anchor="why">
            Why
          </Heading>
          <p>
            Today, AI can generate lightweight, standalone, accessible HTML with just the CSS it
            needs, so a Minimal CSS Framework for Semantic HTML matters less than it used to.
          </p>
          <p>
            To stay relevant, Pico CSS would need a full rewrite: plain modern CSS instead of Sass,
            built on features it doesn’t use today (OKLCH colors, cascade layers, Popover, anchor
            positioning) with fallbacks for older browsers, and a native compiler that strips unused
            CSS and makes customization easy.
          </p>
          <p>That would be a different project. Pico CSS stays as it is.</p>
        </section>

        <section>
          <Heading level={2} anchor="what-this-means">
            What this means
          </Heading>
          <ul>
            <li>
              Nothing breaks. <Link to="https://www.npmjs.com/package/@picocss/pico">npm</Link>, the{" "}
              <Link to="https://www.jsdelivr.com/package/npm/@picocss/pico">jsDelivr CDN</Link> and
              this website stay online for the long term.
            </li>
            <li>The repositories are archived. No new issues, PRs or releases.</li>
            <li>
              Pico CSS is{" "}
              <Link to="https://github.com/picocss/pico/blob/main/LICENSE.md">MIT licensed</Link>.
              You’re free to fork it and take it further. See{" "}
              <Link to="https://github.com/picocss/pico/forks">community forks</Link>.
            </li>
            <li>
              The Pico CSS name and logo are not covered by the MIT license. Please give your fork
              its own name, so users don’t confuse it with the original.
            </li>
          </ul>
        </section>

        <section>
          <Heading level={2} anchor="thank-you">
            Thank you
          </Heading>
          <p>
            What started as a small side project ended up powering thousands of websites. Thank you
            to everyone who used it, opened issues, sent pull requests and wrote kind messages over
            the years.
          </p>
        </section>
      </Content>
    </>
  );
}
