import ArrowLink from "~/components/ArrowLink";
import Logo from "~/components/Logo";
import Adjustments from "~/components/icons/Adjustments";
import Brightness from "~/components/icons/Brightness";
import CodeIcon from "~/components/icons/Code";
import Expand from "~/components/icons/Expand";
import Speedtest from "~/components/icons/Speedtest";

export default function Features(props) {
  return (
    <section className="features" {...props}>
      <hgroup>
        <h2>
          A&nbsp;Superpowered <mark>HTML&nbsp;Reset</mark>
        </h2>
        <p>
          With just the right&nbsp;amount of&nbsp;everything, Pico is a great starting&nbsp;point for
          a&nbsp;clean and&nbsp;lightweight design&nbsp;system.
        </p>
      </hgroup>
      <div className="grid">
        <article>
          <CodeIcon />
          <h3>Class-light and Semantic</h3>
          <p>
            Thriving on simplicity, Pico directly styles your HTML tags, using fewer than 10{" "}
            <code>.classes</code> overall. It also comes with a class-less version for wild
            HTML&nbsp;purists.
          </p>
          <ArrowLink to="/docs/classless">Discover the class-less version</ArrowLink>
        </article>
        <article>
          <Logo displayWordmark={false} />
          <h3>Great Styles with Just CSS</h3>
          <p>
            No extra baggage needed. Pico works seamlessly without dependencies,
            package&nbsp;managers, external files, or JavaScript, achieving elegant and
            straightforward styles with pure HTML&nbsp;markup.
          </p>
          <ArrowLink to="/docs">Get started</ArrowLink>
        </article>
        <article>
          <Expand />
          <h3>Responsive Everything</h3>
          <p>
            Effortless elegance on every&nbsp;device. Pico natively scales font sizes and spacings
            with screen widths, resulting in a consistent and elegant look across devices. No extra
            classes or configuration needed.
          </p>
          <ArrowLink to="/docs/typography">Discover the responsive font sizes</ArrowLink>
        </article>
        <article>
          <Brightness />
          <h3>Light or Dark Mode</h3>
          <p>
            Pico comes with two accessible, neutral color schemes out of the box: light and dark.
            The best part? It automatically adapts to users' <code>prefers-color-scheme</code>, all
            without the use of JavaScript.
          </p>
          <ArrowLink to="/docs/color-schemes">Learn about the color schemes</ArrowLink>
        </article>
        <article>
          <Adjustments />
          <h3>Easy Customization</h3>
          <p>
            Customize Pico with over 130 CSS&nbsp;variables, or dive deeper by using SASS. Switch
            between 20 handcrafted color&nbsp;themes and compose with 30+ modular&nbsp;components to
            tailor the UI to your brand's look&nbsp;and&nbsp;feel.
          </p>
          <ArrowLink to="/docs/css-variables">Learn about the CSS variables</ArrowLink>
        </article>
        <article>
          <Speedtest />
          <h3>Optimized Performance</h3>
          <p>
            Speed meets elegance. Unlike bulky and overcomplicated frameworks that demand
            extensive&nbsp;class overrides and JavaScript, Pico keeps your HTML lean, decreases
            memory usage by avoiding excessive CSS specificity, and reduces loaded files.
          </p>
          <ArrowLink to="/docs">Quick start</ArrowLink>
        </article>
      </div>
    </section>
  );
}
