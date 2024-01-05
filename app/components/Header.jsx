import { useEffect, useState } from "react";
import Link from "~/components/Link";
import Logo from "~/components/Logo";
import Nav from "~/components/Nav";
import { useHeader } from "~/contexts/HeaderContext";

export default function Header({
  shouldDisplayDocsVersion = false,
  headerIsFixed = false,
  ...props
}) {
  const { headerRef } = useHeader();
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const pageOffset = 20;

  useEffect(() => {
    const handleScroll = () => setUserHasScrolled(window.scrollY > pageOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      {...(headerIsFixed && {
        className: `is-fixed-above-lg${userHasScrolled ? " is-fixed" : ""}`,
      })}
      ref={headerRef}
      {...props}
    >
      <div className="container">
        <Link to="/" aria-label="Pico CSS homepage">
          <Logo />
        </Link>
        <Nav shouldDisplayDocsVersion={shouldDisplayDocsVersion} />
      </div>
    </header>
  );
}
