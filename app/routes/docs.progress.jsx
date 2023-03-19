import { useEffect, useRef, useState } from "react";
import metaData from "~/data/meta";

import Header from "~/components/docs/Header";
import Content from "~/components/docs/Content";
import Heading from "~/components/Heading";
import Code from "~/components/Code";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Progress ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

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
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content>
        <section ref={syntaxRef}>
          <article aria-label="Progress example" className="component">
            <progress value={progressValue} max="100" />
            <footer>
              <Code display="small">{`<progress value="${progressValue}" max="100" />`}</Code>
            </footer>
          </article>
        </section>

        <section ref={indeterminateRef}>
          <Heading level={2} anchor="indeterminate">
            Indeterminate
          </Heading>
          <article aria-label="Indeterminate progress example" className="component">
            <progress />
            <footer>
              <Code display="small">{`<progress />`}</Code>
            </footer>
          </article>
        </section>
      </Content>
    </>
  );
}
