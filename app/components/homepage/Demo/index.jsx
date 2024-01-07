import { useEffect } from "react";
import { useModal } from "~/contexts/ModalContext";
import Code from "./Code";
import Controls from "./Controls";
import { DemoProvider, useDemo } from "./DemoContext";
import Form from "./Form";

const Demo = (props) => {
  const { demoHeight, footerRef } = useDemo();
  const { modalIsOpen, onCloseModal } = useModal();

  // Handle escape
  useEffect(() => {
    // Key escape: close modal
    const handleKeyEscape = (event) => {
      if (event.key === "Escape") {
        onCloseModal({ isAnimated: false });
      }
    };

    document.addEventListener("keydown", handleKeyEscape);

    return () => {
      document.removeEventListener("keydown", handleKeyEscape);
    };
  }, [onCloseModal]);

  return (
    <div className={`demo${modalIsOpen ? " is-maximized" : ""}`} {...props}>
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
        <Controls />
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
