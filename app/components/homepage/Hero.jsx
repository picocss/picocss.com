import Demo from "./Demo";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hook">
        <h1>
          <mark>Minimal CSS&nbsp;Framework</mark> <br />
          for Semantic&nbsp;HTML
        </h1>
        <p>
          Seamless, Clean, and Accessible&nbsp;Design — Write&nbsp;HTML, Add&nbsp;Pico&nbsp;CSS,
          and&nbsp;Voilà!
        </p>
        <p className="secondary">
          A minimalist and lightweight starter&nbsp;kit that prioritizes semantic&nbsp;syntax,
          making every HTML&nbsp;element responsive and elegant&nbsp;by&nbsp;default.
        </p>
        <div className="grid ctas">
          <a href="/docs" role="button">
            Get Started
          </a>
          <a href="/docs" role="button" className="contrast">
            Examples
          </a>
        </div>
        <p className="info">
          <small>Less than 15 kB minified and gzipped</small>
        </p>
      </div>
      <Demo />
    </section>
  );
}
