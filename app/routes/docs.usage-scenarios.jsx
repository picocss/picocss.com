import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Usage scenarios ${titleSuffix}` },
  {
    name: "description",
    content: "How does Pico fit into your project?",
  },
];

export default function UsageScenarios() {
  return (
    <>
      {/* Header */}
      <Header title="Usage scenarios" description="How does Pico fit into your project?" />

      {/* Content */}
      <Content>
        <section>
          <p>Optimal use cases for Pico based on your CSS expertise and project type.</p>
          <figure>
            <table className="striped">
              <thead>
                <tr>
                  <th>Project type</th>
                  <th>CSS expertise</th>
                  <th>Pico’s fit</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pure HTML pages</td>
                  <td className="scale-color-1">Low</td>
                  <td className="scale-color-1">High</td>
                  <td className="muted">Documentation, code snippets, minimalist bios</td>
                </tr>
                <tr>
                  <td>Simple landing pages</td>
                  <td className="scale-color-1">Low</td>
                  <td className="scale-color-1">High</td>
                  <td className="muted">
                    Single-page web apps (SPAs), event pages, product pages, resumes
                  </td>
                </tr>
                <tr>
                  <td>Minimal websites</td>
                  <td className="scale-color-1">Low</td>
                  <td className="scale-color-1">High</td>
                  <td className="muted">Personal blogs, simple static sites</td>
                </tr>
                <tr>
                  <td>Form funnels</td>
                  <td className="scale-color-1">Low</td>
                  <td className="scale-color-3">Medium</td>
                  <td className="muted">Contact forms, surveys, sign-up pages</td>
                </tr>
                <tr>
                  <td>Small web projects</td>
                  <td className="scale-color-2">Low/Medium</td>
                  <td className="scale-color-3">Medium</td>
                  <td className="muted">
                    Small business websites, portfolios, and personal websites
                  </td>
                </tr>
                <tr>
                  <td>Marketing and products landing pages</td>
                  <td className="scale-color-3">Medium</td>
                  <td className="scale-color-3">Medium</td>
                  <td className="muted">
                    Marketing pages with complex animations or interactive elements, product demos
                  </td>
                </tr>
                <tr>
                  <td>Medium web projects</td>
                  <td className="scale-color-4">Medium/High</td>
                  <td className="scale-color-3">Medium</td>
                  <td className="muted">E-commerce websites and large corporate websites</td>
                </tr>
                <tr>
                  <td>Large-scale projects with many components</td>
                  <td className="scale-color-5">High</td>
                  <td className="scale-color-5">Low</td>
                  <td className="muted">
                    SASS products, web applications with complex data models, enterprise software
                  </td>
                </tr>
              </tbody>
            </table>
          </figure>
        </section>
      </Content>
    </>
  );
}
