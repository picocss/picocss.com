import { useEffect, useState } from "react";
import { useModal } from "~/contexts/ModalContext";
import Controls from "./Controls";
import { DemoProvider } from "./DemoContext";
import Form from "./Form";
import LargeWidthCode from "./LargeWidthCode";
import SmallWidthCode from "./SmallWidthCode";

const Demo = ({ isMaximizable = false, ...props }) => {
  const { modalIsOpen, onCloseModal } = useModal();

  // Define isLargeLayout on load and on resize
  const largeLayoutBreakpoint = 1280;
  const [isLargeLayout, setIsLargeLayout] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeLayout(window.innerWidth >= largeLayoutBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <article className="component" aria-label="Demo">
        <Form />
        <footer className="code">
          <pre>{isLargeLayout ? <LargeWidthCode /> : <SmallWidthCode />}</pre>
        </footer>
        {isMaximizable && <Controls />}
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
