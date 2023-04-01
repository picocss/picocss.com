import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

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

  const checkBreadcrumbPosition = () => {
    const { top } = breadcrumbRef.current.getBoundingClientRect();
    setIsBreadcrumbSticky(top <= -1);
  };

  const [debouncedCheckBreadcrumbPosition] = useDebounce(checkBreadcrumbPosition, 250);

  // Listen scroll and resize events and check if the breadcrumb is sticky
  useEffect(() => {
    const handleScroll = () => debouncedCheckBreadcrumbPosition();
    const handleResize = () => debouncedCheckBreadcrumbPosition();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    debouncedCheckBreadcrumbPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [debouncedCheckBreadcrumbPosition]);

  return (
    <nav
      aria-label="breadcrumb"
      ref={breadcrumbRef}
      {...(isBreadcrumbSticky && { className: "is-sticky" })}
      {...props}
    >
      <ul>
        <li>
          <Link to="/docs" onClick={handleOpenMenu} className="secondary" aria-current={false}>
            <Menu />
            Documentation
          </Link>
        </li>
        <li>{chapter}</li>
      </ul>
    </nav>
  );
}
