export default function meta() {
  return {
    // Seo values
    siteName: "Pico CSS",
    defaultTitle: "Pico CSS • Minimal CSS Framework for semantic HTML",
    defaultDescription:
      "Elegant styles for all natives HTML elements without .classes and dark mode automatically enabled. Less than 10 kB minified and gzipped!",
    domain: "https://v2.picocss.com",
    titleSuffix: "• Pico CSS",

    // Versions
    versions: {
      current: "2.0.0-alpha",
      all: [
        {
          version: "2.0.0-alpha",
          url: "https://picocss.com/docs",
        },
        {
          version: "1.5.7",
          url: "https://v1.picocss.com/docs/",
        },
      ],
    },

    // CDN values
    cdnBaseUrl: "https://unpkg.com/@picocss/pico@2/",

    // Github values
    githubRepo: "https://github.com/picocss/pico",
    githubFilesBaseUrl: "https://github.com/picocss/pico/blob/v2/",
    githubTreeBaseUrl: "https://github.com/picocss/pico/tree/v2/",

    // Social URLs
    twitterUrl: "https://twitter.com/picocss",
    twitterHandle: "@picocss",
  };
}
