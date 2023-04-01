import { forwardRef } from "react";
import metaData from "~/data/meta";

import Link from "~/components/Link";
import Logo from "~/components/Logo";

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
            <Link to="#" className="secondary">
              MIT
            </Link>
            , docs{" "}
            <Link to="#" className="secondary">
              CC BY 3.0
            </Link>
            .
          </p>
          <p>Currently v{current}.</p>
        </div>
      </div>
    </footer>
  );
});
