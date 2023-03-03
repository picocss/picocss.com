export default function Content({ children, ...props }) {
  return (
    <div role="document" {...props}>
      {children}
    </div>
  );
}
