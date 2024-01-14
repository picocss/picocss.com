import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";

export default function Head({ children, ...props }) {
  const { domain } = metaData();
  const { routePath } = useNavigation();
  const canonicalUrl = `${domain}${routePath.replace(/\/\s*$/, "")}`;
  return (
    <head {...props}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#2a3140" />
      <meta name="color-scheme" content="light dark" />
      <link rel="canonical" href={canonicalUrl} />
      {children}
    </head>
  );
}
