import { Helmet } from "react-helmet-async";
import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";

export default function DynamicMeta() {
  const { domain } = metaData();
  const { routePath } = useNavigation();
  const canonicalUrl = `${domain}${routePath.replace(/\/\s*$/, "")}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
