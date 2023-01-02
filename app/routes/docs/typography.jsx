import metaData from "~/data/meta";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Typography ${titleSuffix}`,
  description: "Links come with .secondaryand .contrast styles.",
});

export default function Typography() {
  return (
    <>
      <hgroup>
        <h1>Typography</h1>
        <h2>
          All typographic elements are responsive, allowing text to scale gracefully across devices
          and viewports.
        </h2>
      </hgroup>

      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th>Device</th>
              <th>Extra&nbsp;small</th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
              <th>Extra&nbsp;large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Base&nbsp;font</th>
              <td>
                16<small>px</small>
              </td>
              <td>
                17<small>px</small>
              </td>
              <td>
                18<small>px</small>
              </td>
              <td>
                19<small>px</small>
              </td>
              <td>
                20<small>px</small>
              </td>
            </tr>
            <tr>
              <th>h1</th>
              <td>
                32<small>px</small>
              </td>
              <td>
                34<small>px</small>
              </td>
              <td>
                36<small>px</small>
              </td>
              <td>
                38<small>px</small>
              </td>
              <td>
                40<small>px</small>
              </td>
            </tr>
            <tr>
              <th>h2</th>
              <td>
                28<small>px</small>
              </td>
              <td>
                29<small>px</small>
              </td>
              <td>
                31<small>.5px</small>
              </td>
              <td>
                33<small>.25px</small>
              </td>
              <td>
                35<small>px</small>
              </td>
            </tr>
            <tr>
              <th>h3</th>
              <td>
                24<small>px</small>
              </td>
              <td>
                25<small>.5px</small>
              </td>
              <td>
                27<small>px</small>
              </td>
              <td>
                28<small>.5px</small>
              </td>
              <td>
                30<small>px</small>
              </td>
            </tr>
            <tr>
              <th>h4</th>
              <td>
                20<small>px</small>
              </td>
              <td>
                21<small>.25px</small>
              </td>
              <td>
                22<small>.5px</small>
              </td>
              <td>
                23<small>.75px</small>
              </td>
              <td>
                25<small>px</small>
              </td>
            </tr>
            <tr>
              <th>h5</th>
              <td>
                18<small>px</small>
              </td>
              <td>
                19<small>.125px</small>
              </td>
              <td>
                20<small>.25px</small>
              </td>
              <td>
                21<small>.375px</small>
              </td>
              <td>
                22<small>.5px</small>
              </td>
            </tr>
            <tr>
              <th>h6</th>
              <td>
                16<small>px</small>
              </td>
              <td>
                17<small>px</small>
              </td>
              <td>
                18<small>px</small>
              </td>
              <td>
                19<small>px</small>
              </td>
              <td>
                20<small>px</small>
              </td>
            </tr>
            <tr>
              <th>small</th>
              <td>
                14<small>px</small>
              </td>
              <td>
                14<small>.875px</small>
              </td>
              <td>
                15<small>.75px</small>
              </td>
              <td>
                16<small>.625px</small>
              </td>
              <td>
                27<small>.5px</small>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h2>Headings</h2>
      <article aria-label="Headings example" className="component">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <footer>
          <Code>{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</Code>
        </footer>
      </article>

      <p>
        Inside a <Code display="inline">{`<hgroup>`}</Code> or a{" "}
        <Code display="inline">class="headings</Code> all{" "}
        <Code display="inline">margin-bottom</Code> are collapsed and the{" "}
        <Code display="inline">:last-child</Code> is muted.
      </p>
      <article aria-label="Headings group example" className="component">
        <div className="headings">
          <h2>Heading 2</h2>
          <h3>Subtitle for heading 2</h3>
        </div>
        <footer>
          <Code>{`<!-- Hgroup -->
<hgroup>
  <h2>Heading 2</h2>
  <h3>Subtitle for heading 2</h3>
</hgroup>

<!-- Class -->
<div class="headings">
  <h2>Heading 2</h2>
  <h3>Subtitle for heading 2</h3>
</div>`}</Code>
        </footer>
      </article>

      <h2>Inline text elements</h2>
      <div className="grid">
        <div>
          <p>
            <abbr title="Abbreviation">Abbr.</abbr> <Code display="inline">{`<abbr>`}</Code>
          </p>
          <p>
            <strong>Bold</strong> <Code display="inline">{`<strong>`}</Code>{" "}
            <Code display="inline">{`<b>`}</Code>
          </p>
          <p>
            <em>Italic</em> <Code display="inline">{`<i>`}</Code>{" "}
            <Code display="inline">{`<em>`}</Code> <Code display="inline">{`<cite>`}</Code>
          </p>
          <p>
            <del>Deleted</del> <Code display="inline">{`<del>`}</Code>
          </p>
          <p>
            <ins>Inserted</ins> <Code display="inline">{`<ins>`}</Code>
          </p>
          <p>
            <kbd>Ctrl + S</kbd> <Code display="inline">{`<kbd>`}</Code>
          </p>
        </div>
        <div>
          <p>
            <mark>Highlighted</mark> <Code display="inline">{`<mark>`}</Code>
          </p>
          <p>
            <s>Strikethrough</s> <Code display="inline">{`<s>`}</Code>
          </p>
          <p>
            <small>Small </small>
            <Code display="inline">{`<small>`}</Code>
          </p>
          <p>
            Text <sub>Sub</sub> <Code display="inline">{`<sub>`}</Code>
          </p>
          <p>
            Text <sup>Sup</sup> <Code display="inline">{`<sup>`}</Code>
          </p>
          <p>
            <u>Underline</u> <Code display="inline">{`<u>`}</Code>
          </p>
        </div>
      </div>

      <h2>Blockquote</h2>
      <blockquote>
        "Maecenas vehicula metus tellus, vitae congue turpis hendrerit non. Nam at dui sit amet
        ipsum cursus ornare."
        <footer>
          <cite>— Phasellus eget lacinia</cite>
        </footer>
      </blockquote>
      <Code>{`<blockquote>
  "Maecenas vehicula metus tellus, vitae congue turpis hendrerit non. 
  Nam at dui sit amet ipsum cursus ornare."
  <footer>
    <cite>— Phasellus eget lacinia</cite>
  </footer>
</blockquote>`}</Code>
    </>
  );
}
