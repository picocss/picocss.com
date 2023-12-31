import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Link from "./Link";
import Check from "./icons/Check";
import Copy from "./icons/Copy";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", jsx);
SyntaxHighlighter.registerLanguage("scss", scss);

const BlockWrapper = ({ children, ...props }) => {
  return <pre {...props}>{children}</pre>;
}

const InlineWrapper = ({ children }) => {
  return <>{children}</>;
}

const CodeTag = ({ children, ...props }) => {
  return <code {...props}>{children}</code>;
}

const HighlightedCode = ({ children, displayInline, language, ...props }) => {
  return (
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
}

const ButtonCopyToClipboard = ({ text, ...props }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = (event) => {
    event.preventDefault();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={text} {...props}>
      <Link
        to="#"
        className="copy-to-clipboard"
        onClick={onCopy}
        tabIndex={-1}
        aria-label="Copy code"
        data-tooltip={copied ? "Copied" : "Copy to clipboard"}
        data-placement="left"
      >
        {copied ? (
          <Check className="check" isAnimated={true} strokeWidth={3} />
        ) : (
          <Copy className="clipboard" />
        )}
      </Link>
    </CopyToClipboard>
  );
}

export default function Code({
  as = "div",
  children,
  dataTheme = "dark",
  language = "html",
  display = "block",
  className,
  ...props
}) {
  const Tag = as;
  const displayInline = display === "inline";

  if (displayInline) {
    return <HighlightedCode {...{ children, displayInline, language, ...props }} />;
  }

  return (
    <Tag className={className ? `code ${className}` : "code"} data-theme={dataTheme}>
      <ButtonCopyToClipboard text={children.toString()} />
      <HighlightedCode {...{ children, displayInline, language, ...props }} />
    </Tag>
  );
}
