export default function Content({ children, ...props }) {
  return (
    <div id="content" role="document" {...props}>
      {children}
    </div>
  );
}
