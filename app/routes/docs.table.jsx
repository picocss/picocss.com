import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Table ${titleSuffix}`,
  description: "Default styles for tables without .classes",
});

const Table = (props) => (
  <table {...props}>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">#</th>
        <td>Total</td>
        <td>Total</td>
        <td>Total</td>
        <td>Total</td>
        <td>Total</td>
      </tr>
    </tfoot>
  </table>
);

export default function TablePage() {
  return (
    <>
      {/* Header */}
      <Header
        title="Table"
        description={
          <>
            Default styles for tables without <Code display="inline">.classes</Code>
          </>
        }
      />

      {/* Content */}
      <Content>
        <section>
          <figure>
            <Table />
          </figure>
          <Code>{`<table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">#</th>
      <td>Total</td>
      <td>Total</td>
      <td>Total</td>
      <td>Total</td>
      <td>Total</td>
    </tr>
  </tfoot>
</table>`}</Code>
        </section>
        <p>
          <Code display="inline">role="grid"</Code> enable striped rows.
        </p>
        <figure>
          <Table role="grid" />
        </figure>
        <Code>{`<table role="grid">
  …
</table>`}</Code>
      </Content>
    </>
  );
}
