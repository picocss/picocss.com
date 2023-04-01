import { use100vh } from "react-div-100vh";

export default function Body(props) {
  const viewportHeight = use100vh();
  const minHeight = viewportHeight ? `${viewportHeight}px` : "100vh";

  return <body style={{ minHeight: minHeight }} {...props} />;
}
