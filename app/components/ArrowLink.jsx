import Link from "~/components/Link";
import ArrowRight from "~/components/icons/ArrowRight";

export default function ArrowLink({ children, to, linkProps, iconProps, ...props }) {
  return (
    <p {...props}>
      <Link to={to} {...linkProps}>
        <>
          {children}
          <ArrowRight {...iconProps} />
        </>
      </Link>
    </p>
  );
}
