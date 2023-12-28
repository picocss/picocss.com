import Demo from "./Demo";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hook">
        <hgroup>
          <p className="chapter">
            <a href="/docs/v2">What’s new in v2?</a>
          </p>
          <h1>Minimal CSS&nbsp;Framework for&nbsp;Semantic&nbsp;HTML</h1>
          <p>
            Pico&nbsp;CSS is a minimalist and lightweight starter&nbsp;kit that prioritizes
            semantic&nbsp;syntax, making every HTML&nbsp;element responsive and
            elegant&nbsp;by&nbsp;default.
          </p>
        </hgroup>
        <div className="grid ctas">
          <button>Get Started</button>
          <button className="secondary outline">Download Now</button>
        </div>
        <p>
          <small>Less than 10 kB minified and gzipped</small>
        </p>
      </div>
      <Demo />
    </section>
  );
}
