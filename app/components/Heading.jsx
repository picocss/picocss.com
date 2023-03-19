import { forwardRef } from "react";

export const Heading = ({ anchor, children, level, ...props }, ref) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag ref={ref} {...props}>
      {children}
      {anchor && (
        <a href={`#${anchor}`} id={anchor} className="secondary" tabIndex={-1}>
          #
        </a>
      )}
    </HeadingTag>
  );
};

// export default with forwardRef
export default forwardRef(Heading);
