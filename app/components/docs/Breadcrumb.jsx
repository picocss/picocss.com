import { useEffect, useRef, useState } from "react";
import { useDocumentation } from "~/contexts/DocumentationContext";

import Link from "~/components/Link";
import Menu from "~/components/icons/Menu";

export default function Breadcrumb(props) {
  const { chapter, setMenuIsOpenOnMobile } = useDocumentation();
  const [breadcrumbTopPosition, setBreadcrumbTopPosition] = useState(null);
  const breadcrumbRef = useRef(null);

  const handleOpenMenu = (event) => {
    event.preventDefault();
    setMenuIsOpenOnMobile(true);
  };

  // Listen scroll event and define the breadcrumb top position
  useEffect(() => {
    const readTopPosition = () => {
      const { top } = breadcrumbRef.current.getBoundingClientRect();
      setBreadcrumbTopPosition(top);
    };

    window.addEventListener("scroll", readTopPosition);
    readTopPosition();
    return () => window.removeEventListener("scroll", readTopPosition);
  }, []);

  return (
    <nav
      aria-label="breadcrumb"
      ref={breadcrumbRef}
      {...(breadcrumbTopPosition && breadcrumbTopPosition <= -1 ? { className: "is-sticky" } : {})}
    >
      <ul>
        <li>
          <Link to="/docs" onClick={handleOpenMenu} className="secondary">
            <Menu />
            Documentation
          </Link>
        </li>
        <li>{chapter}</li>
      </ul>
    </nav>
  );
}
