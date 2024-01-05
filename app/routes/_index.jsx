import Header from "~/components/Header";
import Comparison from "~/components/homepage/Comparison";
import Features from "~/components/homepage/Features";
import Hero from "~/components/homepage/Hero";
import Stats from "~/components/homepage/Stats";
import { HeaderProvider } from "~/contexts/HeaderContext";
import metaData from "~/data/meta";
import homepageStyles from "~/styles/css/homepage.css";

const { defaultTitle, defaultDescription } = metaData();

export const meta = () => [
  { title: defaultTitle },
  {
    name: "description",
    content: defaultDescription,
  },
];

export function links() {
  return [{ rel: "stylesheet", href: homepageStyles }];
}

export default function Docs() {
  return (
    <HeaderProvider>
      <Header />
      <main className="container">
        <Hero />
        <Stats />
        <Features />
        <Comparison />
      </main>
    </HeaderProvider>
  );
}
