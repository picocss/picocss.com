import { useEffect, useRef, useState } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData();

export const meta = () => [
  { title: `Progress ${titleSuffix}` },
  {
    name: "description",
    content: "The progress bar element in pure HTML, without JavaScript.",
  },
];

// Generate a random number between 5 and 95
const randomProgressValue = () => Math.floor(Math.random() * 90) + 5;

export default function Progress() {
  const syntaxRef = useRef();
  const indeterminateRef = useRef();

  // Update progress value every x seconds
  const [progressValue, setProgressValue] = useState(randomProgressValue());
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(randomProgressValue());
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {/* Header */}
      <Header
        title="Progress"
        description="The progress bar element in pure HTML, without JavaScript."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Syntax",
            ref: syntaxRef,
          },
          {
            anchor: "indeterminate",
            title: "Indeterminate",
            ref: indeterminateRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Progress example" className="component">
            <progress value={progressValue} max="100" />
            <Code
              as="footer"
              display="small"
            >{`<progress value="${progressValue}" max="100" />`}</Code>
          </article>
        </section>

        <section ref={indeterminateRef}>
          <Heading level={2} anchor="indeterminate">
            Indeterminate
          </Heading>
          <article aria-label="Indeterminate progress example" className="component">
            <progress />
            <Code as="footer" display="small">{`<progress />`}</Code>
          </article>
        </section>
      </Content>
    </>
  );
}
