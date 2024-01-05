import { forwardRef } from "react";
import Link from "~/components/Link";
import Logo from "~/components/Logo";
import metaData from "~/data/meta";

export default forwardRef(function Footer(props, ref) {
  const { versions } = metaData();
  const { current } = versions;
  return (
    <footer {...props} ref={ref}>
      <div className="container">
        <Logo displayWordmark={false} />

        <div>
          <p>
            Created and maintained by{" "}
            <Link to="https://lucaslarroche.com/" className="contrast">
              Lucas Larroche
            </Link>{" "}
            with the help of an amazing community of{" "}
            <Link to="https://github.com/picocss/pico/graphs/contributors" className="contrast">
              contributors
            </Link>
            .
          </p>
          <p>
            Code licensed{" "}
            <Link to="https://github.com/picocss/pico/blob/master/LICENSE.md" className="secondary">
              MIT
            </Link>
            , docs{" "}
            <Link to="https://creativecommons.org/licenses/by-sa/4.0/" className="secondary">
              CC BY-SA 4.0
            </Link>
            .
          </p>
          <p>Currently v{current}.</p>
        </div>
      </div>
    </footer>
  );
});
