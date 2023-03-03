import metaData from "~/data/meta";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Check, radio & switch ${titleSuffix}`,
  description: "Selects are styled like inputs.",
});

export default function Accordions() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <hgroup>
        <h1>Check, radio & switch</h1>
        <p>Selects are styled like inputs.</p>
      </hgroup>

      <article aria-label="Checkboxes example" className="component">
        <footer>
          <Code>{``}</Code>
        </footer>
      </article>
    </>
  );
}
