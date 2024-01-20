import Header from "~/components/Header";
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

export default function Docs() {
  const { isLoading } = useNavigation();

  return (
    <>
      <Header />
      <main className={`examples container ${isLoading && " is-loading"}`}>
        <Hero />
        <Examples />
      </main>
    </>
  );
}
