import { useEffect } from "react";
import { usePage } from "~/contexts/PageContext";

import Link from "~/components/Link";
import Logo from "~/components/Logo";
import Nav from "~/components/header/Nav";

export default function Header({ headerIsFixed = false, ...props }) {
  const { headerRef, setHeaderIsFixed } = usePage();
  useEffect(() => {
    setHeaderIsFixed(headerIsFixed);
  }, [headerIsFixed, setHeaderIsFixed]);
  return (
    <header {...(headerIsFixed && { className: "is-fixed-above-lg" })} ref={headerRef} {...props}>
      <div className="container">
        <Link to="/" aria-label="Pico CSS homepage">
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
