import Link from "~/components/Link";

import docLinks from "~/data/docLinks";
import useCurrentPath from "~/utils/useCurrentPath";

export default function Aside(props) {
  const currentPath = useCurrentPath();

  return (
    <aside {...props}>
      <nav>
        {docLinks.map((category, index) => {
          const isCurrentCategory = category.links.some((link) => link.route === currentPath);
          return (
            <details key={index} open={isCurrentCategory}>
              <summary>{category.category}</summary>
              <ul>
                {category.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.route} className="secondary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </nav>
    </aside>
  );
}
