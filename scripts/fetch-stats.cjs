const fs = require("fs");
const fetch = require("node-fetch");
const dataFolder = "./app/data/";
const endpointsFile = dataFolder + "statsEndpoints.json";
const outputFile = dataFolder + "stats.json";

async function fetchStats() {
  const endpointsData = fs.readFileSync(endpointsFile, "utf8");
  const endpoints = JSON.parse(endpointsData);

  let statsData = [];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint.url);
      const data = await response.json();
      const value = endpoint.dataPath.split(".").reduce((o, k) => (o || {})[k], data);

      statsData.push({
        key: endpoint.key,
        label: endpoint.label,
        count: value,
      });
    } catch (error) {
      console.error(`Error fetching data for ${endpoint.key}:`, error);
      return;
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(statsData, null, 2));
}

fetchStats();
