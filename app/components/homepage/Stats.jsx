import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import parse from "html-react-parser";

import metrics from "~/data/metrics";
import { fetchData, formatStatNumber } from "~/utils";

import Npm from "~/components/logos/Npm";
import Github from "~/components/logos/Github";
import Jsdelivr from "~/components/logos/Jsdelivr";

const Logo = ({ type, ...props }) => {
  console.log(type);
  switch (type) {
    case "npmDownloads":
      return <Npm {...props} />;
    case "githubStars":
      return <Github {...props} />;
    case "jsdelivrHits":
      return <Jsdelivr {...props} />;
    default:
      return null;
  }
};

export default function Stats(props) {
  const [statsData, setStatsData] = useLocalStorageState("picoStats", {
    defaultValue: {},
  });

  useEffect(() => {
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1_000; // milliseconds in a day

    const updateData = async () => {
      metrics.map(async (metric) => {
        if (!statsData[metric.key] || currentTime - statsData[metric.key].timestamp > oneDay) {
          const data = await fetchData(metric.url);
          if (data) {
            const value = metric.dataPath.split(".").reduce((o, k) => (o || {})[k], data);
            setStatsData((prev) => ({
              ...prev,
              [metric.key]: { count: value, timestamp: currentTime },
            }));
          }
        }
      });
    };

    updateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="stats" {...props}>
      <ul>
        {metrics.map((metric) => (
          <li key={metric.key}>
            {parse(
              `<strong>${
                statsData[metric.key]
                  ? formatStatNumber(statsData[metric.key].count)
                  : metric.placeholder
              }</strong>`,
            )}
            <span>
              <Logo type={metric.key} />
              {metric.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
