import Header from "~/components/Header";
import SkipToContent from "~/components/SkipToContent";
import Examples from "~/components/examples/Examples";
import Hero from "~/components/examples/Hero";
import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";
import landingPageStyles from "~/styles/css/landings.css";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Examples ${titleSuffix}` },
  {
    name: "description",
    content: "Minimalist templates to discover Pico in action.",
  },
];

export function links() {
  return [{ rel: "stylesheet", href: landingPageStyles }];
}

export default function ExamplesPage() {
  const { isLoading } = useNavigation();

  return (
    <>
      <SkipToContent />
      <Header />
      <main id="content" className={`examples container${isLoading ? " is-loading" : ""}`}>
        <Hero />
        <Examples />
      </main>
    </>
  );
}
