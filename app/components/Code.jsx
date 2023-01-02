import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", jsx);
SyntaxHighlighter.registerLanguage("scss", scss);

export function BlockWrapper({ children }) {
  return <pre>{children}</pre>;
}

export function InlineWrapper({ children }) {
  return <>{children}</>;
}

export function CodeTag({ children }) {
  return <code>{children}</code>;
}

export default function Code({
  children,
  language = "html",
  display = "block",
  className,
  ...props
}) {
  const [copied, setCopied] = useState(false);
  const displayInline = display === "inline";

  const HighlightedCode = () => (
    <SyntaxHighlighter
      useInlineStyles={false}
      PreTag={displayInline ? InlineWrapper : BlockWrapper}
      CodeTag={CodeTag}
      language={language}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  if (displayInline) {
    return <HighlightedCode />;
  }

  return (
    <div className={className ? `code ${className}` : "code"}>
      <CopyToClipboard text={children.toString()}>
        <button {...(!copied && { className: "contrast" })} onClick={onCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </CopyToClipboard>
      <HighlightedCode />
    </div>
  );
}
