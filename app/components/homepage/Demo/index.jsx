import { DemoProvider, useDemo } from "./DemoContext";

import Form from "./Form";
import Code from "./Code";

const Demo = (props) => {
  const { demoHeight, footerRef } = useDemo();
  return (
    <div className="demo" {...props}>
      <article
        className="component"
        aria-label="Demo"
        style={demoHeight && { "--demo-height": `${demoHeight}px` }}
      >
        <main>
          <Form />
        </main>
        <footer className="code">
          <pre ref={footerRef}>
            <Code />
          </pre>
        </footer>
      </article>
    </div>
  );
};

export default function DemoWrapper(props) {
  return (
    <DemoProvider>
      <Demo {...props} />
    </DemoProvider>
  );
}
