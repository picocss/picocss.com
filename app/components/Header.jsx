import { useHeader } from "~/contexts/HeaderContext";

import Link from "~/components/Link";
import Logo from "~/components/Logo";
import Nav from "~/components/Nav";

export default function Header({ headerIsFixed = false, ...props }) {
  const { headerRef } = useHeader();

  return (
    <header {...(headerIsFixed && { className: "is-fixed-above-lg" })} ref={headerRef} {...props}>
      <div className="container">
        <Link to="/" aria-label="Pico CSS homepage">
          <Logo shouldAnimateOnRouteChange />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
