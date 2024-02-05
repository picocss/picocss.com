import parse from "html-react-parser";
import ClouDownload from "~/components/icons/CloudDownload";
import Download from "~/components/icons/Download";
import Star from "~/components/icons/Star";
import Terminal from "~/components/icons/Terminal";
import stats from "~/data/stats";
import { formatStatNumber } from "~/utils";

const Icon = ({ type, ...props }) => {
  switch (type) {
    case "npmDownloads":
      return <Terminal {...props} />;
    case "githubStars":
      return <Star {...props} />;
    case "jsdelivrHits":
      return <ClouDownload {...props} />;
    default:
      return <Download {...props} />;
  }
};

export default function Stats(props) {
  return (
    <section className="stats" {...props}>
      <ul>
        {stats.map((metric) => {
          const labelContainsMonthly = metric.label.includes("Monthly");
          return (
            <li key={metric.key}>
              <p className="count">
                <strong>{formatStatNumber(metric.count)}</strong>
              </p>
              <p className="label">
                <a
                  href={metric.url}
                  className="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type={metric.key} />
                  {parse(
                    metric.label.replace("Monthly ", `<span class="period-prefix">Monthly </span>`),
                  )}
                </a>
              </p>
              {labelContainsMonthly && (
                <p className="period-suffix">(Last month)</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
