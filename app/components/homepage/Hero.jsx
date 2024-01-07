import Link from "~/components/Link";
import ArrowRight from "../icons/ArrowRight";
import Demo from "./Demo";

export default function Hero(props) {
  return (
    <section className="hero" {...props}>
      <div className="hook">
        <h1>
          <mark>Minimal CSS&nbsp;Framework</mark> <br />
          for Semantic&nbsp;HTML
        </h1>
        <p className="secondary">
          A minimalist and lightweight starter&nbsp;kit that prioritizes semantic&nbsp;syntax,
          making every HTML&nbsp;element responsive and elegant&nbsp;by&nbsp;default.
        </p>
        <p>Write&nbsp;HTML, Add&nbsp;Pico&nbsp;CSS, and&nbsp;Voilà!</p>
        <div className="grid ctas">
          <Link to="/docs" role="button">
            Get Started
            <ArrowRight />
          </Link>
          <a href="https://github.com/picocss/examples" role="button" className="contrast">
            Examples
            <ArrowRight />
          </a>
        </div>
      </div>
      <Demo />
    </section>
  );
}
