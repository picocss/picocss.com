import { Helmet } from "react-helmet-async";
import { usePage } from "~/contexts/PageContext";

export default function FaviconsAndOpenGraph() {
  const { systemPrefersColorScheme } = usePage();
  const isDarkColorSchemePreferred = systemPrefersColorScheme === "dark";
  return (
    <Helmet>
      <link
        rel="icon"
        href={isDarkColorSchemePreferred ? "/favicon-dark-scheme.ico" : "/favicon.ico"}
        sizes="any"
      />
      <link
        rel="icon"
        type="image/png"
        href={isDarkColorSchemePreferred ? "/favicon-32x32-dark-scheme.png" : "/favicon-32x32.png"}
        sizes="32x32"
      />
    </Helmet>
  );
}
