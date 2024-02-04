const fs = require("fs");
const dataFolder = "./app/data/";
const endpointsFile = `${dataFolder}statsEndpoints.json`;
const outputFile = `${dataFolder}stats.json`;

async function fetchStats() {
  const fetch = (await import("node-fetch")).default;
  const endpointsData = fs.readFileSync(endpointsFile, "utf8");
  const endpoints = JSON.parse(endpointsData);

  let statsData = [];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint.endpoint);
      const data = await response.json();
      const value = endpoint.dataPath.split(".").reduce((o, k) => (o || {})[k], data) || endpoint.default;

      statsData.push({
        key: endpoint.key,
        label: endpoint.label,
        count: value,
        url: endpoint.url,
      });
    } catch (error) {
      console.error(`Error fetching data for ${endpoint.key}:`, error);
      statsData.push({
        key: endpoint.key,
        label: endpoint.label,
        count: endpoint.default,
        url: endpoint.url,
      });
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(statsData, null, 2));
}

fetchStats();
