import Code from "~/components/Code";
import Link from "~/components/Link";

import CodeIcon from "~/components/icons/Code";
import Expand from "~/components/icons/Expand";
import Brightness from "../icons/Brightness";
import Speedtest from "../icons/Speedtest";
import Adjustments from "../icons/Adjustments";
import Logo from "~/components/Logo";
import ArrowRight from "../icons/ArrowRight";

const BlockLink = ({ children, to, ...props }) => (
  <p {...props}>
    <Link to={to}>
      <>
        {children}
        <ArrowRight />
      </>
    </Link>
  </p>
);

export default function Features(props) {
  return (
    <section className="features" {...props}>
      <hgroup>
        <h2>
          A&nbsp;Superpowered <mark>HTML&nbsp;Reset</mark>
        </h2>
        <p>
          With just the right&nbsp;amount of&nbsp;everything, Pico is great starting&nbsp;point for
          a&nbsp;clean and&nbsp;lightweight design&nbsp;system.
        </p>
      </hgroup>
      <div className="grid">
        <article>
          <CodeIcon />
          <h3>Class-light and Semantic</h3>
          <p>
            Pico&nbsp;CSS thrives on simplicity. It rely native HTML&nbsp;tags, using less than
            10&nbsp;
            <Code display="inline">.classes</Code> overall. Also comes with a class-less version for
            wild HTML&nbsp;purists.
          </p>
          <BlockLink to="/docs/classless">Discover the class-less version</BlockLink>
        </article>
        <article>
          <Logo displayWordmark={false} />
          <h3>Great Styles with Just CSS</h3>
          <p>
            No extra baggage. Pico&nbsp;CSS doesn’t require dependencies, package&nbsp;managers,
            external&nbsp;files, or JavaScript. Achieve stunning styles with pure HTML&nbsp;markup.
          </p>
          <BlockLink to="/docs">Get Started</BlockLink>
        </article>
        <article>
          <Expand />
          <h3>Responsive Everything</h3>
          <p>
            Seamless elegance on every device. Pico CSS ensures a harmonious balance of spacings and
            typography across devices. Your design remains elegant and consistent, no matter the
            screen size.
          </p>
          <BlockLink to="/docs/typography">Discover the responsive font sizes</BlockLink>
        </article>
        <article>
          <Brightness />
          <h3>Light or Dark Mode</h3>
          <p>
            Pico CSS comes with two neutral and contrasted color schemes. And the best part? It
            adjusts automatically to user preferences, without the need for JavaScript.
          </p>
          <BlockLink to="/docs/color-schemes">Learn about the color schemes</BlockLink>
        </article>
        <article>
          <Adjustments />
          <h3>Easy Customization</h3>
          <p>
            Tailoring made effortless. Pico CSS empowers you to shape your design with over 130 CSS
            variables. Customize your website with ease, adding your personal touch to every
            element. Build your own minimal design system by recompiling Pico's CSS framework with
            SCSS.
          </p>
          <BlockLink to="/docs/css-variables">Learn about the CSS variables</BlockLink>
        </article>
        <article>
          <Speedtest />
          <h3>Optimized Performance</h3>
          <p>
            Speed meets elegance. Pico CSS is designed with performance in mind. Unlike large and
            complex CSS files that increase memory usage and cause longer style calculations, Pico
            CSS ensures swift loading times, contributing to an exceptional user experience.
          </p>
          <BlockLink to="/docs/css-variables">Learn about the CSS variables</BlockLink>
        </article>
      </div>
    </section>
  );
}
