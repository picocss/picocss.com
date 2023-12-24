export default function meta() {
  return {
    // Seo values
    siteName: "Pico CSS",
    defaultTitle: "Pico CSS • Minimal CSS Framework for semantic HTML",
    defaultDescription:
      "Minimalist and lightweight starter kit that prioritizes semantic syntax, making every HTML element responsive and elegant by default.",
    domain: "https://v2.picocss.com",
    titleSuffix: "• Pico CSS",

    // Versions
    versions: {
      current: "2.0.0-alpha1",
      all: [
        {
          version: "2.0.0-alpha1",
          url: "https://v2.picocss.com/docs",
        },
        {
          version: "1.5.10",
          url: "https://picocss.com/docs/",
        },
      ],
    },

    // CDN values
    cdnBaseUrl: "https://cdn.jsdelivr.net/npm/@picocss/pico@next/",

    // Github values
    githubRepo: "https://github.com/picocss/pico",
    githubFilesBaseUrl: "https://github.com/picocss/pico/blob/v2/",
    githubTreeBaseUrl: "https://github.com/picocss/pico/tree/v2/",

    // Social URLs
    twitterUrl: "https://twitter.com/picocss",
    twitterHandle: "@picocss",
  };
}
