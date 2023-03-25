import { useRef } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import Content from "~/components/docs/Content";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";

import { usePage } from "~/contexts/PageContext";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Table ${titleSuffix}`,
  description:
    "Clean and minimal styles for <table>, providing consistent spacings and a minimal unbordered look.",
});

const Table = ({ theadProps, tbodyProps, tfootProps, ...props }) => (
  <table {...props}>
    <thead {...theadProps}>
      <tr>
        <th scope="col">Planet</th>
        <th scope="col">Diam. (km)</th>
        <th scope="col">Dist. to Sun (AU)</th>
        <th scope="col">Grav. (m/s²)</th>
      </tr>
    </thead>
    <tbody {...tbodyProps}>
      <tr>
        <th scope="row">Mercury</th>
        <td>4,880</td>
        <td>0.39</td>
        <td>3.7</td>
      </tr>
      <tr>
        <th scope="row">Venus</th>
        <td>12,104</td>
        <td>0.72</td>
        <td>8.9</td>
      </tr>
      <tr>
        <th scope="row">Earth</th>
        <td>12,742</td>
        <td>1.00</td>
        <td>9.8</td>
      </tr>
      <tr>
        <th scope="row">Mars</th>
        <td>6,779</td>
        <td>1.52</td>
        <td>3.7</td>
      </tr>
    </tbody>
    <tfoot {...tfootProps}>
      <tr>
        <th scope="row">Average</th>
        <td>9,126</td>
        <td>0.91</td>
        <td>6.5</td>
      </tr>
    </tfoot>
  </table>
);

export default function TablePage() {
  const syntaxRef = useRef();
  const colorSchemesRef = useRef();
  const stripedRef = useRef();

  const { pageTheme } = usePage();
  const inversedTheme = pageTheme === "dark" ? "light" : "dark";

  return (
    <>
      {/* Header */}
      <Header
        title="Table"
        description={
          <>
            Clean and minimal styles for <Code display="inline">{`<table>`}</Code>, providing
            consistent&nbsp;spacings and a minimal unbordered&nbsp;look.
          </>
        }
      />

      {/* Table of contents */}
      <TableOfContents
        data={[
          { anchor: "", title: "Syntax", ref: syntaxRef },
          { anchor: "color-schemes", title: "Color schemes", ref: colorSchemesRef },
          { anchor: "striped", title: "Striped", ref: stripedRef },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <figure>
            <Table />
          </figure>
          <Code>{`<table>
  <thead>
    <tr>
      <th scope="col">Planet</th>
      <th scope="col">Diameter (km)</th>
      <th scope="col">Distance to Sun (AU)</th>
      <th scope="col">Orbit (days)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mercury</th>
      <td>4,880</td>
      <td>0.39</td>
      <td>88</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>12,104</td>
      <td>0.72</td>
      <td>225</td>
    </tr>
    <tr>
      <th scope="row">Earth</th>
      <td>12,742</td>
      <td>1.00</td>
      <td>365</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>6,779</td>
      <td>1.52</td>
      <td>687</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Average</th>
      <td>9,126</td>
      <td>0.91</td>
      <td>341</td>
    </tr>
  </tfoot>
</table>`}</Code>
        </section>

        <section ref={colorSchemesRef}>
          <Heading level={2} anchor="color-schemes">
            Color schemes
          </Heading>
          <p>
            <Code display="inline">{`data-theme="light"`}</Code> or{" "}
            <Code display="inline">{`data-theme="dark"`}</Code> can be used at any level:{" "}
            <Code display="inline">{`<table>`}</Code>, <Code display="inline">{`<thead>`}</Code>,{" "}
            <Code display="inline">{`<tbody>`}</Code>, <Code display="inline">{`<tfoot>`}</Code>,{" "}
            <Code display="inline">{`<tr>`}</Code>, <Code display="inline">{`<th>`}</Code>,{" "}
            <Code display="inline">{`<td>`}</Code>.
          </p>
          <p>&nbsp;</p>
          <figure>
            <Table theadProps={{ "data-theme": inversedTheme }} />
          </figure>
          <Code>{`<table>
  <thead data-theme="${inversedTheme}">
    ...
  </thead>
  <tbody>...</tbody>
  <tfoot>...</tfoot>
</table>`}</Code>
        </section>

        <section ref={stripedRef}>
          <Heading level={2} anchor="striped">
            Striped table
          </Heading>
          <p>
            <Code display="inline">.striped</Code> enable striped rows (not available in the{" "}
            <Link to="/docs/classless">class&#8209;less&nbsp;version</Link>).
          </p>
          <figure>
            <Table className="striped" />
          </figure>
          <Code>{`<table class="striped">
  ...
</table>`}</Code>
        </section>
      </Content>
    </>
  );
}
