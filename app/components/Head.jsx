import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";

export default function Head({ children, ...props }) {
  const { domain, twitterHandle } = metaData;
  const { routePath } = useNavigation();
  const canonicalUrl = `${domain}${routePath.replace(/\/\s*$/, "")}`;
  return (
    <head {...props}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#2a3140" />
      <meta name="color-scheme" content="light dark" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:image" content={`${domain}/opengraph.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Pico CSS" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://v2.picocss.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      {children}
    </head>
  );
}
