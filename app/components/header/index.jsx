import Link from "~/components/Link";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header(props) {
  return (
    <header {...props}>
      <div className="container">
        <Link to="./">
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
