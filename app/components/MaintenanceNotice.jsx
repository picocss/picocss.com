import Link from "~/components/Link";
import { usePage } from "~/contexts/PageContext";

export default function MaintenanceNotice() {
  const { pageTheme } = usePage();
  const inverseTheme = pageTheme === "dark" ? "light" : "dark";

  return (
    <div className="maintenance-notice" data-theme={inverseTheme}>
      <Link to="/docs/maintenance" className="secondary">
        Pico CSS is no longer maintained. Read more
      </Link>
    </div>
  );
}
