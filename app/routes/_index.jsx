import metaData from "~/data/meta";
import { HeaderProvider } from "~/contexts/HeaderContext";

import Header from "~/components/Header";
import Hero from "~/components/homepage/Hero";
import Stats from "~/components/homepage/Stats";

const { defaultTitle, defaultDescription } = metaData();

import homepageStyles from "~/styles/css/homepage.css";

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
      </main>
    </HeaderProvider>
  );
}
