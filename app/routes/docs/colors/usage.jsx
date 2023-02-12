import metaData from "~/data/meta";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Colors ${titleSuffix}`,
  description: "Pico comes with 360 colors to personalize your project.",
});

export default function Colors() {
  return <>Hello</>;
}
