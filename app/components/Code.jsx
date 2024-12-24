import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import Link from "~/components/Link";
import Check from "~/components/icons/Check";
import Copy from "~/components/icons/Copy";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", jsx);
SyntaxHighlighter.registerLanguage("scss", scss);

const BlockWrapper = ({ children, ...props }) => {
  return <pre {...props}>{children}</pre>;
};

const InlineWrapper = ({ children }) => {
  return <>{children}</>;
};

// eslint-disable-next-line no-unused-vars
const CodeTag = ({ children, style: _, ...props }) => {
  return <code {...props}>{children}</code>;
};

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
};

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
};

export default function Code({
  as = "div",
  children,
  dataTheme,
  language = "html",
  display = "block",
  allowCopy = true,
  className,
  ...props
}) {
  const Tag = as;
  const displayInline = display === "inline";

  const { pageTheme } = usePage();

  if (displayInline) {
    return <HighlightedCode {...{ children, displayInline, language, ...props }} />;
  }

  return (
    <Tag className={className ? `code ${className}` : "code"} data-theme={dataTheme || pageTheme}>
      {allowCopy && <ButtonCopyToClipboard text={children.toString()} />}
      <HighlightedCode {...{ children, displayInline, language, ...props }} />
    </Tag>
  );
}
