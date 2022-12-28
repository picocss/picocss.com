import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";

SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", jsx);
SyntaxHighlighter.registerLanguage("scss", scss);

export default function Code({ type, children, ...props }) {
  return (
    <SyntaxHighlighter
      className={type === "inline" ? "pico-code-inline" : "pico-code"}
      PreTag={type === "inline" ? "span" : "pre"}
      useInlineStyles={false}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );
}
