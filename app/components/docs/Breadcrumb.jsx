import { useEffect, useRef, useState } from "react";
import { useMatches } from "@remix-run/react";
import { getChapter } from "~/utils";
import { useDocumentation } from "~/contexts/DocumentationContext";

import Link from "~/components/Link";
import Menu from "~/components/icons/Menu";

export default function Breadcrumb(props) {
  const { setMenuIsOpenOnMobile } = useDocumentation();
  const [isBreadcrumbSticky, setIsBreadcrumbSticky] = useState(false);
  const breadcrumbRef = useRef(null);
  const routes = useMatches();
  const currentPathname = routes[routes.length - 1].pathname;
  const chapter = getChapter(currentPathname);

  const handleOpenMenu = (event) => {
    event.preventDefault();
    setMenuIsOpenOnMobile(true);
  };

  // Listen scroll event and check if the breadcrumb is sticky
  useEffect(() => {
    const checkBreadcrumbPosition = () => {
      const { top } = breadcrumbRef.current.getBoundingClientRect();
      if (top <= -1) {
        setIsBreadcrumbSticky(true);
      } else {
        setIsBreadcrumbSticky(false);
      }
    };

    window.addEventListener("scroll", checkBreadcrumbPosition);
    checkBreadcrumbPosition();
    return () => window.removeEventListener("scroll", checkBreadcrumbPosition);
  }, [isBreadcrumbSticky, setIsBreadcrumbSticky]);

  return (
    <nav
      aria-label="breadcrumb"
      ref={breadcrumbRef}
      {...(isBreadcrumbSticky && { className: "is-sticky" })}
      {...props}
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
