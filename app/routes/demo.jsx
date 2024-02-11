import Link from "~/components/Link";
import Logo from "~/components/Logo";
import Demo from "~/components/homepage/Demo";
import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";
import landingPageStyles from "~/styles/css/landings.css";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Demo ${titleSuffix}` },
  { name: "robots", content: "noindex" },
];

export function links() {
  return [{ rel: "stylesheet", href: landingPageStyles }];
}

// This page is not indexed and optimized to be displayed at 1920x1080
export default function DemoPage() {
  const { isLoading } = useNavigation();

  return (
    <>
      <header style={{ padding: "2rem" }}>
        <div className="container">
          <Link to="/" aria-label="Pico CSS homepage">
            <Logo />
          </Link>
        </div>
      </header>
      <main id="content" className={`homepage container${isLoading ? " is-loading" : ""}`}>
        <section className="hero" style={{ marginTop: "1rem", rowGap: "2rem" }}>
          <div className="hook">
            <h1>
              <mark>Minimal CSS&nbsp;Framework</mark> <br />
              for Semantic&nbsp;HTML
            </h1>
          </div>
          <Demo style={{ transform: "scale(1.25)", transformOrigin: "top" }} />
        </section>
      </main>
    </>
  );
}
