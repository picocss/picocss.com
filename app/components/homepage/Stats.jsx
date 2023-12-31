import stats from "~/data/stats";
import { formatStatNumber } from "~/utils";
import parse from "html-react-parser";

import Npm from "~/components/logos/Npm";
import Github from "~/components/logos/Github";
import Jsdelivr from "~/components/logos/Jsdelivr";

const Logo = ({ type, ...props }) => {
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
  return (
    <section className="stats" {...props}>
      <ul>
        {stats.map((metric) => (
          <li key={metric.key}>
            {parse(`<strong>${formatStatNumber(metric.count)}</strong>`)}
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
