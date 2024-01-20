import Link from "~/components/Link";
import Edit from "~/components/icons/Edit";
import metaData from "~/data/meta";

export default function EditOnGithub({ file, ...props }) {
  const { documentationGithubFilesBaseUrl: path } = metaData;
  return (
    <section className="edit-on-github" {...props}>
      <p>
        <Link to={`${path}app/routes/${file}`} className="secondary">
          <small>
            <Edit />
            Edit this page on GitHub
          </small>
        </Link>
      </p>
    </section>
  );
}
