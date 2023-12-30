export default [
  {
    key: "githubStars",
    url: "https://api.github.com/repos/picocss/pico",
    dataPath: "stargazers_count",
    label: "Stars",
    placeholder: "10.9K",
  },
  {
    key: "npmDownloads",
    url: "https://api.npmjs.org/downloads/point/last-month/@picocss/pico",
    dataPath: "downloads",
    label: "Monthly Downloads",
    placeholder: "60.1K",
  },
  {
    key: "jsdelivrHits",
    url: "https://data.jsdelivr.com/v1/stats/packages/npm/%40picocss%2Fpico?period=month",
    dataPath: "hits.total",
    label: "Monthly Requests",
    placeholder: "1.7M",
  },
];
