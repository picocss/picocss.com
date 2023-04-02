import { Helmet } from "react-helmet-async";

import metaData from "~/data/meta";
import { useNavigation } from "~/contexts/NavigationContext";

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
