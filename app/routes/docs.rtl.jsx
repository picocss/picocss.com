import Code from "~/components/Code";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `RTL (Right-To-Left) ${titleSuffix}` },
  {
    name: "description",
    content: "Support for Right-To-Left text.",
  },
];

export default function Rtl() {
  return (
    <>
      {/* Header */}
      <Header title="RTL" description="Support for Right-To-Left text." />

      {/* Content */}
      <Content>
        <section>
          <p>
            To enable RTL (Right-To-Left) with Pico, you need to set <code>dir="rtl"</code> on the{" "}
            <Code display="inline">{`<html>`}</Code> element (
            <Link to="https://codesandbox.io/s/github/picocss/examples/tree/master/v1-preview-rtl">
              example
            </Link>
            ).
          </p>
          <Code>{`<!doctype html>
<html dir="rtl" lang="ar">
  ...
</html>`}</Code>

          <p>RTL can also be enabled on a per-element basis:</p>
          <article aria-label="RTL example" className="component">
            <blockquote dir="rtl" lang="ar">
              “كُنْ كالطير، الذي إذا اعتاد القفز على الأغصان لا يحس بالخطر وليس في ذلك أي تردد،
              ولكنه لو فقد الثقة بجناحيه فإنه يسقط أرضًا. كذلك، إذا اعتاد الإنسان على العمل الصالح
              فإنه يستطيع فعله بلا جهد وليس في ذلك أي عناء، ولكنه إذا فقد الثقة بنفسه فإنه يفشل.”
              <footer>
                <cite>— خليل جبران</cite>
              </footer>
            </blockquote>
            <Code as="footer">{`<blockquote dir="rtl" lang="ar">
  “كُنْ كالطير، الذي إذا اعتاد القفز على الأغصان لا يحس بالخطر وليس في ذلك أي تردد،
  ولكنه لو فقد الثقة بجناحيه فإنه يسقط أرضًا. كذلك، إذا اعتاد الإنسان على العمل الصالح
  فإنه يستطيع فعله بلا جهد وليس في ذلك أي عناء، ولكنه إذا فقد الثقة بنفسه فإنه يفشل.”
  <footer>
    <cite>— خليل جبران</cite>
  </footer>
</blockquote>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.rtl.jsx" />
      </Content>
    </>
  );
}
