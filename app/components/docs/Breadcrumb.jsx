import { useEffect, useRef, useState } from "react";

import { useNavigation } from "~/contexts/NavigationContext";
import { useDocumentation } from "~/contexts/DocumentationContext";

import { getChapter } from "~/utils";

import Link from "~/components/Link";
import Menu from "~/components/icons/Menu";

export default function Breadcrumb(props) {
  const { routePath } = useNavigation();
  const { setMenuIsOpenOnMobile } = useDocumentation();
  const [isBreadcrumbSticky, setIsBreadcrumbSticky] = useState(false);
  const breadcrumbRef = useRef();
  const chapter = getChapter(routePath);

  const handleOpenMenu = (event) => {
    event.preventDefault();
    setMenuIsOpenOnMobile(true);
  };

  // Listen scroll and resize events and check if the breadcrumb is sticky
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
    window.addEventListener("resize", checkBreadcrumbPosition);
    checkBreadcrumbPosition();
    return () => {
      window.removeEventListener("scroll", checkBreadcrumbPosition);
      window.removeEventListener("resize", checkBreadcrumbPosition);
    };
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
