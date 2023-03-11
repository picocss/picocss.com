import { Helmet } from "react-helmet-async";
import metaData from "~/data/meta";

const { defaultDescription, domain, githubRepo, siteName, twitterUrl, version } = metaData();

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          url: domain,
          name: siteName,
          abstract: defaultDescription,
          isFamilyFriendly: true,
          codeRepository: githubRepo,
          version,
          programmingLanguage: ["css", "scss"],
          keywords: [
            "css",
            "scss",
            "semantic",
            "minimal",
            "dark-theme",
            "css-framework",
            "minimalist",
            "scss-framework",
            "dark-mode",
            "minimalistic",
            "native-html",
          ],
          licence: `${githubRepo}/blob/master/LICENSE.md`,
          sameAs: [githubRepo, twitterUrl],
          image: `${domain}/opengraph.jpg`,
          maintainer: {
            "@type": "Organization",
            name: "Pico",
            logo: `${domain}/logo.png`,
          },
          author: {
            "@type": "Person",
            name: "Lucas Larroche",
            givenName: "Lucas",
            familyName: "Larroche",
            url: "https://lucaslarroche.com",
          },
        })}
      </script>
    </Helmet>
  );
}
