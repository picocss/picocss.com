import metaData from "~/data/meta";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Accordions ${titleSuffix}`,
  description: "Toggle sections of content in pure HTML, without JavaScript.",
});

export default function Accordion() {
  return (
    <>
      <hgroup>
        <h1>Accordions</h1>
        <p>Toggle sections of content in pure HTML, without JavaScript.</p>
      </hgroup>

      <article aria-label="Accordions example" className="component">
        <details open="">
          <summary>Accordion 1</summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam,
            tincidunt nec porta sed, auctor id velit. Etiam venenatis nisl ut orci consequat, vitae
            tempus quam commodo. Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
            lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
            mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit
            amet, congue turpis.
          </p>
        </details>
        <details>
          <summary>Accordion 2</summary>
          <ul>
            <li>Vestibulum id elit quis massa interdum sodales.</li>
            <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
            <li>Quisque sed eros non eros ornare elementum.</li>
            <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
          </ul>
        </details>
        <footer>
          <Code>{`<details>
  <summary>Accordion 1</summary>
  <p>…</p>
</details>

<details open>
  <summary>Accordion 2</summary>
  <ul>
    <li>…</li>
    <li>…</li>
  </ul>
</details>`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">role="button"</Code> can be used to turn{" "}
        <Code display="inline">{`<summary>`}</Code> into a button.
      </p>
      <article aria-label="Accordions buttons example" className="component">
        <details>
          <summary role="button">Primary</summary>
          <p>
            Aenean vestibulum nunc at libero congue, eu pretium nulla viverra. Fusce sed ex at est
            egestas vehicula. Integer sit amet lectus mi. Duis ut viverra mauris, at laoreet enim.
          </p>
        </details>
        <details>
          <summary role="button" className="secondary">
            Secondary
          </summary>
          <p>
            Quisque porta dictum ipsum nec vestibulum. Suspendisse non mi ac tellus scelerisque
            egestas. Sed vel nisi laoreet, rhoncus urna quis, luctus risus. Donec vitae molestie
            felis.
          </p>
        </details>
        <details>
          <summary role="button" className="contrast">
            Contrast
          </summary>
          <p>
            Praesent quam ipsum, condimentum non augue at, porttitor interdum tellus. Curabitur
            ultrices consectetur leo, a placerat mauris malesuada et. In quis varius risus.
          </p>
        </details>
        <details>
          <summary role="button" className="outline">
            Primary outline
          </summary>
          <p>
            Aenean vestibulum nunc at libero congue, eu pretium nulla viverra. Fusce sed ex at est
            egestas vehicula. Integer sit amet lectus mi. Duis ut viverra mauris, at laoreet enim.
          </p>
        </details>
        <details>
          <summary role="button" className="outline secondary">
            Secondary outline
          </summary>
          <p>
            Quisque porta dictum ipsum nec vestibulum. Suspendisse non mi ac tellus scelerisque
            egestas. Sed vel nisi laoreet, rhoncus urna quis, luctus risus. Donec vitae molestie
            felis.
          </p>
        </details>
        <details>
          <summary role="button" className="outline contrast">
            Contrast outline
          </summary>
          <p>
            Praesent quam ipsum, condimentum non augue at, porttitor interdum tellus. Curabitur
            ultrices consectetur leo, a placerat mauris malesuada et. In quis varius risus.
          </p>
        </details>
        <footer>
          <Code>{`<!-- Primary -->
<details>
  <summary role="button">Primary</summary>
  <p>…</p>
</details>

<!-- Secondary -->
<details>
  <summary role="button" class="secondary">Secondary</summary>
  <p>…</p>
</details>

<!-- Contrast -->
<details>
  <summary role="button" class="contrast">Contrast</summary>
  <p>…</p>
</details>

<!-- Primary outline -->
<details>
  <summary role="button" class="outline">Primary outline</summary>
  <p>…</p>
</details>

<!-- Secondary outline -->
<details>
  <summary role="button" class="outline secondary">Secondary outline</summary>
  <p>…</p>
</details>

<!-- Contrast outline -->
<details>
  <summary role="button" class="outline contrast">Contrast outline</summary>
  <p>…</p>
</details>`}</Code>
        </footer>
      </article>
    </>
  );
}
