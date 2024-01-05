import { Scrollspy } from "@makotot/ghostui";
import Link from "~/components/Link";
import { useHeader } from "~/contexts/HeaderContext";

export default function TableOfContents({ data, ...props }) {
  const { headerHeight } = useHeader();
  const sectionRefs = data.map((section) => section.ref);

  return (
    <aside id="table-of-contents" {...props}>
      <Scrollspy sectionRefs={sectionRefs} offset={-(headerHeight * 2)}>
        {({ currentElementIndexInViewport }) => (
          <nav>
            <details open>
              <summary>Content</summary>
              <ul>
                {data.map((section, index) => (
                  <li key={section.anchor}>
                    <Link
                      to={`#${section.anchor}`}
                      className="secondary"
                      {...(currentElementIndexInViewport === index && {
                        "aria-current": true,
                      })}
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        )}
      </Scrollspy>
    </aside>
  );
}
