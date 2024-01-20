import Logo from "~/components/Logo";
import Edit from "~/components/icons/Edit";
import GitHub from "~/components/icons/GitHub";
import examples from "~/data/examples";

const ExternalLink = ({ url, children, ...props }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const PreviewLink = ({ url, ...props }) => (
  <ExternalLink role="button" className="preview secondary" url={url} {...props}>
    <Logo displayWordmark={false} />
    Preview
  </ExternalLink>
);

const EditorLink = ({ url, ...props }) => (
  <ExternalLink className="edit secondary" url={url} {...props}>
    <Edit />
    Edit in CodeSandbox
  </ExternalLink>
);

const SourceLink = ({ url, ...props }) => (
  <ExternalLink className="source secondary" url={url} {...props}>
    <GitHub />
    View source
  </ExternalLink>
);

export default function Hero(props) {
  return (
    <section className="examples-list" {...props}>
      {examples.map((example, index) => {
        const { title, description, stack, links } = example;
        const shouldDisplay =
          links.source !== null || links.editor !== null || links.preview !== null;
        if (!shouldDisplay) return null;
        return (
          <article key={index}>
            <div className="badges">
              {stack.map((badge, index) => (
                <span key={index} className={`badge ${badge.toLowerCase().replace(".", "")}`}>
                  {badge}
                </span>
              ))}
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="links">
              <PreviewLink url={links.preview} />
              <EditorLink url={links.editor} />
              <SourceLink url={links.source} />
            </p>
          </article>
        );
      })}
    </section>
  );
}
