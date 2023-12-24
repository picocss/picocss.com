/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v2_meta: true,
  },
  ignoredRouteFiles: ["**/.*"],
  server: "./server.js",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["worker"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
};
