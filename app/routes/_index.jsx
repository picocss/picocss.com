import Header from "~/components/Header";
import Comparison from "~/components/homepage/Comparison";
import Features from "~/components/homepage/Features";
import Hero from "~/components/homepage/Hero";
import Stats from "~/components/homepage/Stats";
import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";
import landingPageStyles from "~/styles/css/landings.css";

const { defaultTitle, defaultDescription } = metaData;

export const meta = () => [
  { title: defaultTitle },
  {
    name: "description",
    content: defaultDescription,
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
      <main className={`homepage container${isLoading ? " is-loading" : ""}`}>
        <Hero />
        <Stats />
        <Features />
        <Comparison />
      </main>
    </>
  );
}
