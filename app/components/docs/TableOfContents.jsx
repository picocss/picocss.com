import { Scrollspy } from "@makotot/ghostui";
import { usePage } from "~/contexts/PageContext";

import Link from "~/components/Link";

export default function TableOfContents({ data, ...props }) {
  const { headerHeight } = usePage();
  const sectionRefs = data.map((section) => section.ref);
  return (
    <aside id="table-of-contents" {...props}>
      <Scrollspy sectionRefs={sectionRefs} offset={-headerHeight * 2}>
        {({ currentElementIndexInViewport }) => (
          <nav>
            <details open>
              <summary>On this page</summary>
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
