import Header from "~/components/Header";
import metaData from "~/data/meta";

const { defaultTitle, defaultDescription } = metaData();

export const meta = () => {
  return {
    title: defaultTitle,
    description: defaultDescription,
  };
};

export default function Index() {
  return (
    <>
      <Header />
      <main className="container" />
    </>
  );
}
